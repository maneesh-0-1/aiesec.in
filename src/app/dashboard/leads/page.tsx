import { PrismaClient } from "@prisma/client";
import { 
  Download, 
  Filter, 
  Search, 
  MoreHorizontal, 
  Mail, 
  Phone,
  Calendar,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const prisma = new PrismaClient();

async function getLeads(searchParams: { [key: string]: string | string[] | undefined }) {
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const leads = await prisma.lead.findMany({
    skip,
    take: limit,
    orderBy: { createdAt: 'desc' }
  });

  const total = await prisma.lead.count();

  return { leads, total, page, totalPages: Math.ceil(total / limit) };
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  let data = { leads: [] as any[], total: 0, page: 1, totalPages: 1 };
  
  try {
    data = await getLeads(params);
  } catch {
    console.warn("Prisma error in LeadsPage");
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leads Management</h1>
          <p className="text-slate-500 mt-1">Manage and track all incoming leads from your landing pages.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
            <Filter size={18} />
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--blue)] text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-[var(--blue)]/20">
            <Download size={18} />
            Export Data
          </button>
        </div>
      </div>

      <div className="glass border border-slate-200 overflow-hidden">
        {/* Table Controls */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by name, email, or LC..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>Showing {data.leads.length} of {data.total} leads</span>
          </div>
        </div>

        {/* Leads Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <tr>
                <th className="px-6 py-4">Lead Information</th>
                <th className="px-6 py-4">Programme</th>
                <th className="px-6 py-4">Local Committee</th>
                <th className="px-6 py-4">Created At</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.leads.length > 0 ? (
                data.leads.map((lead: any) => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold uppercase">
                          {lead.firstName[0]}{lead.lastName[0]}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{lead.firstName} {lead.lastName}</p>
                          <div className="flex items-center gap-3 mt-1 text-slate-500">
                            <span className="flex items-center gap-1 text-xs"><Mail size={12} /> {lead.email}</span>
                            <span className="flex items-center gap-1 text-xs"><Phone size={12} /> {lead.phone}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${
                        lead.programmeId === 7 ? "bg-[var(--volunteer)]/10 text-[var(--volunteer)]" :
                        lead.programmeId === 8 ? "bg-[var(--talent)]/10 text-[var(--talent)]" :
                        "bg-[var(--teacher)]/10 text-[var(--teacher)]"
                      }`}>
                        {lead.programmeName}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-700">{lead.lcName}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">ID: {lead.lcId}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar size={14} className="text-slate-400" />
                        {new Date(lead.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                        <span className="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] font-black rounded-md uppercase">
                          {lead.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                        <MoreHorizontal size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center text-slate-400">
                    <p className="font-medium text-lg">No leads match your search criteria.</p>
                    <p className="text-sm">Try adjusting your filters or search terms.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">
            Page {data.page} of {data.totalPages || 1}
          </p>
          <div className="flex items-center gap-2">
            <button 
              disabled={data.page <= 1}
              className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all disabled:opacity-50"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              disabled={data.page >= data.totalPages}
              className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all disabled:opacity-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
