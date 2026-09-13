import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendContactNotification } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
          message: "Please fill out all required fields correctly.",
        },
        { status: 400 }
      );
    }

    const emailResult = await sendContactNotification(result.data);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "An issue occurred while sending your message. Please reach us directly by phone or email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting Sri Akshaya Granites. We will review your message and respond promptly.",
      referenceId: emailResult.messageId,
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
