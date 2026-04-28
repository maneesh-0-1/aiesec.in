import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Download, 
  Search,
  Bell
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 glass border-r border-slate-200 fixed h-full z-50 rounded-none hidden lg:flex flex-col">
        <div className="p-8">
          <img
            src="https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/62f0bdedd19c8b25e7a9f34f_Logo-AIESEC-color.svg"
            alt="AIESEC Logo"
            className="h-8 object-contain"
          />
          <p className="text-[10px] font-bold text-[var(--blue)] uppercase tracking-widest mt-2">Lead Management</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--blue)]/10 text-[var(--blue)] font-bold transition-all"
          >
            <LayoutDashboard size={20} />
            Overview
          </Link>
          <Link
            href="/dashboard/leads"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 font-medium transition-all"
          >
            <Users size={20} />
            Leads
          </Link>
          <Link
            href="/dashboard/exports"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 font-medium transition-all"
          >
            <Download size={20} />
            Exports
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 font-medium transition-all"
          >
            <Settings size={20} />
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-rose-500 font-bold hover:bg-rose-50 transition-all">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 min-h-screen">
        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search leads, LCs, or emails..."
                className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-[var(--blue)]/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell size={22} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Maneesh K.</p>
                <p className="text-[10px] font-bold text-[var(--blue)] uppercase">National Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--blue)] text-white flex items-center justify-center font-bold shadow-lg">
                MK
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
