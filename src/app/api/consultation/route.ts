import { NextResponse } from "next/server";
import { z } from "zod";

const ConsultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  projectType: z.enum(["Residential", "Villa", "Commercial", "Hospitality", "Renovation"]),
  preferredDate: z.string().min(5, "Preferred date is required"),
  projectLocation: z.string().min(2, "Location is required"),
  requirements: z.string().min(10, "Please outline your requirements in a short sentence"),
  requestSamples: z.boolean().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side Zod validation
    const parsedData = ConsultationSchema.parse(body);

    // Backup Log of Lead (simulating writing to database / triggering a backup email via Resend)
    console.log("=== NEW PRIVATE CONSULTATION LEAD RECEIVED ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Lead Details:", JSON.stringify(parsedData, null, 2));
    console.log("=============================================");

    // In production, we would use a service like Resend, Nodemailer or a database here
    // e.g., await resend.emails.send({ ... })

    return NextResponse.json({ 
      success: true, 
      message: "Lead backup recorded successfully" 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
