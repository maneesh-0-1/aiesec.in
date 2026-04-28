import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PROGRAMME_MAP: Record<number, string> = {
  7: "Global Volunteer",
  8: "Global Talent",
  9: "Global Teacher",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Captured lead data:", body);

    // Extract relevant data from the AIESEC GIS payload
    // Note: The payload structure might vary slightly, but we'll try to map it
    const { 
      first_name, 
      last_name, 
      email, 
      phone, 
      lc_id, 
      programme_id 
    } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Since we might not have the LC name in the POST payload (it's usually just ID),
    // we might need to fetch it or just store the ID for now.
    // However, the widget usually fetches LC names first. 
    // For now, let's store what we have.

    const lead = await prisma.lead.create({
      data: {
        firstName: first_name || "Unknown",
        lastName: last_name || "Unknown",
        email: email,
        phone: phone || "N/A",
        lcId: parseInt(lc_id) || 0,
        lcName: "Pending...", // We can resolve this later
        programmeId: parseInt(programme_id) || 0,
        programmeName: PROGRAMME_MAP[programme_id] || "Unknown",
        status: "NEW",
      },
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Error capturing lead:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
