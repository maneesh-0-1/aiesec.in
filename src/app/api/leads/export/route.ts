import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";
import * as XLSX from "xlsx";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const programmeId = searchParams.get("programmeId");
    const lcId = searchParams.get("lcId");

    const where: Prisma.LeadWhereInput = {};
    if (programmeId) where.programmeId = parseInt(programmeId);
    if (lcId) where.lcId = parseInt(lcId);

    const leads = await prisma.lead.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    // Format data for Excel
    const data = leads.map((lead) => ({
      "First Name": lead.firstName,
      "Last Name": lead.lastName,
      Email: lead.email,
      Phone: lead.phone,
      Programme: lead.programmeName,
      LC: lead.lcName,
      Status: lead.status,
      "Created At": lead.createdAt.toISOString(),
    }));

    // Create workbook and worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

    // Generate buffer
    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    return new Response(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="aiesec_leads_${new Date().toISOString().split('T')[0]}.xlsx"`,
      },
    });
  } catch (error) {
    console.error("Export error:", error);
    return NextResponse.json({ error: "Export failed" }, { status: 500 });
  }
}
