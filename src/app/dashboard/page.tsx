import { 
  Users, 
  Globe, 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  ArrowUpRight,
  Clock
} from "lucide-react";
import { PrismaClient } from "@prisma/client";
import MockLeadButton from "@/components/MockLeadButton";
import Link from "next/link";

const prisma = new PrismaClient();

async function getStats() {
  const totalLeads = await prisma.lead.count();
  const gvLeads = await prisma.lead.count({ where: { programmeId: 7 } });
  const gtLeads = await prisma.lead.count({ where: { programmeId: 8 } });
  const gteLeads = await prisma.lead.count({ where: { programmeId: 9 } });
  
  const recentLeads = await prisma.lead.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  });

  return { totalLeads, gvLeads, gtLeads, gteLeads, recentLeads };
}

export default async function DashboardPage() {
  let stats = { totalLeads: 0, gvLeads: 0, gtLeads: 0, gteLeads: 0, recentLeads: [] as any[] };
  try {
    stats = await getStats();
  } catch {
    console.warn("Prisma not ready yet, using empty stats.");
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back! Here's what's happening across AIESEC in India.</p>
        </div>
        <MockLeadButton />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Leads", value: stats.totalLeads, icon: Users, color: "text-[var(--blue)]", bg: "bg-[var(--blue)]/10" },
          { label: "Global Volunteer", value: stats.gvLeads, icon: Globe, color: "text-[var(--volunteer)]", bg: "bg-[var(--volunteer)]/10" },
          { label: "Global Talent", value: stats.gtLeads, icon: Briefcase, color: "text-[var(--talent)]", bg: "bg-[var(--talent)]/10" },
          { label: "Global Teacher", value: stats.gteLeads, icon: BookOpen, color: "text-[var(--teacher)]", bg: "bg-[var(--teacher)]/10" },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className="flex items-center gap-1 text-emerald-500 font-bold text-sm">
                <TrendingUp size={16} />
                +12%
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Leads Table */}
        <div className="lg:col-span-2 glass border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-lg">Recent Leads</h2>
            <Link href="/dashboard/leads" className="text-sm font-bold text-[var(--blue)] hover:underline flex items-center gap-1">
              View all <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                <tr>
                  <th className="px-6 py-4">Lead Name</th>
                  <th className="px-6 py-4">Programme</th>
                  <th className="px-6 py-4">LC</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {stats.recentLeads.length > 0 ? (
                  stats.recentLeads.map((lead: any) => (
                    <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-sm">{lead.firstName} {lead.lastName}</p>
                        <p className="text-xs text-slate-500">{lead.email}</p>
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
                      <td className="px-6 py-4 text-sm font-medium text-slate-600">{lead.lcName}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-md uppercase">
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                      <div className="flex flex-col items-center gap-2">
                        <Clock size={32} className="opacity-20" />
                        <p className="font-medium">No recent leads found.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Programme Split (Mini Chart) */}
        <div className="glass border border-slate-200 p-6 flex flex-col">
          <h2 className="font-bold text-lg mb-6">Programme Split</h2>
          <div className="space-y-6 flex-1">
            {[
              { label: "Global Volunteer", value: stats.gvLeads, total: stats.totalLeads, color: "bg-[var(--volunteer)]" },
              { label: "Global Talent", value: stats.gtLeads, total: stats.totalLeads, color: "bg-[var(--talent)]" },
              { label: "Global Teacher", value: stats.gteLeads, total: stats.totalLeads, color: "bg-[var(--teacher)]" },
            ].map((p, i) => {
              const percentage = stats.totalLeads > 0 ? (p.value / stats.totalLeads) * 100 : 0;
              return (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-600">{p.label}</span>
                    <span>{Math.round(percentage)}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${p.color} transition-all duration-1000`} 
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Top Performing LC</p>
            <p className="text-lg font-black text-[var(--blue)]">Delhi IIT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

