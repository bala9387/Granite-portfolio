import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations";
import { sendQuoteNotification } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = quoteFormSchema.safeParse(body);

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

    const emailResult = await sendQuoteNotification(result.data);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "An issue occurred while processing your quotation request. Please reach us directly by phone or email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. Your requirement has been received. Our team will get back to you shortly.",
      referenceId: emailResult.messageId,
    });
  } catch (error) {
    console.error("Quote API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
