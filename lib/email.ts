import { ContactFormData, QuoteFormData } from "./validations";

interface EmailSendResult {
  success: boolean;
  messageId?: string;
  isMock?: boolean;
  error?: string;
}

/**
 * Clean abstraction for sending notification emails.
 * Supports Resend via process.env.RESEND_API_KEY.
 * Gracefully logs and provides development feedback when no key is configured.
 */
export async function sendQuoteNotification(data: QuoteFormData): Promise<EmailSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL || "sales@sriakshayagranites.com";

  if (!apiKey) {
    // Development fallback: Log cleanly to server console without pretending a live transmission succeeded
    console.log(
      `[Quote Notification] RESEND_API_KEY not configured. Mocking email submission to ${recipient}:`,
      JSON.stringify(data, null, 2)
    );
    return {
      success: true,
      isMock: true,
      messageId: `dev-mock-${Date.now()}`,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sri Akshaya Granites Quotes <onboarding@resend.dev>",
        to: [recipient],
        subject: `New Granite RFQ: ${data.graniteRequired} — ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || "N/A"}
Project Type: ${data.projectType}
Granite Variety: ${data.graniteRequired}
Quantity: ${data.quantity}
Preferred Size: ${data.preferredSize}
Preferred Finish: ${data.preferredFinish}
Delivery Location: ${data.deliveryLocation}
Additional Notes: ${data.additionalRequirements || "None"}
        `.trim(),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return { success: false, error: errText };
    }

    const json = await res.json();
    return { success: true, messageId: json.id };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error sending notification";
    return { success: false, error: errorMsg };
  }
}

export async function sendContactNotification(data: ContactFormData): Promise<EmailSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL || "info@sriakshayagranites.com";

  if (!apiKey) {
    console.log(
      `[Contact Notification] RESEND_API_KEY not configured. Mocking contact submission to ${recipient}:`,
      JSON.stringify(data, null, 2)
    );
    return {
      success: true,
      isMock: true,
      messageId: `dev-mock-${Date.now()}`,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sri Akshaya Granites Inquiries <onboarding@resend.dev>",
        to: [recipient],
        subject: `New Website Inquiry from ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || "N/A"}
Product: ${data.productOfInterest || "General Inquiry"}
Quantity: ${data.quantity || "N/A"}
Message:
${data.message}
        `.trim(),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return { success: false, error: errText };
    }

    const json = await res.json();
    return { success: true, messageId: json.id };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error sending inquiry";
    return { success: false, error: errorMsg };
  }
}
