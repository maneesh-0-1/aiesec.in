"use client";

import Link from "next/link";
import { useState } from "react";
import EmbeddableAuthForm from "@/components/EmbeddableAuthForm";
import {
  ArrowRight,
  Globe,
  PlaneTakeoff,
  Home,
  Receipt,
  FileText,
  Users,
  ShieldCheck,
  Crosshair,
  Zap,
  ChevronDown,
  Search,
  Edit3,
  PenTool,
  HelpCircle,
  MessageCircle,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  TrendingUp,
  Network,
} from "lucide-react";

// ─── Country Carousel Data ──────────────────────────────────────────────────
const COUNTRIES = [
  {
    name: "Germany",
    description:
      "A global powerhouse in engineering and technology. Interning in Germany offers exposure to some of the world's most advanced manufacturing and business processes, while experiencing a rich cultural heritage and high quality of life.",
    image:
      "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1974&auto=format&fit=crop",
    flight: "INR 65,000",
    living: "$150/week",
    additional: "$400",
    visa: "INR 10,000",
  },
  {
    name: "Netherlands",
    description:
      "Known for its innovative approach to logistics, finance, and sustainability. The Dutch work culture is famously open and collaborative, providing a unique environment for professional growth in a highly international setting.",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=2070&auto=format&fit=crop",
    flight: "INR 60,000",
    living: "$180/week",
    additional: "$350",
    visa: "INR 15,000",
  },
  {
    name: "Brazil",
    description:
      "Experience the vibrant business landscape of Latin America's largest economy. From burgeoning tech startups in São Paulo to established multinational firms, Brazil offers a dynamic environment for ambitious professionals.",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
    flight: "INR 90,000",
    living: "$80/week",
    additional: "$250",
    visa: "INR 8,000",
  },
  {
    name: "Hungary",
    description:
      "A rising star in Central Europe's tech and business services sector. Hungary combines a low cost of living with high-quality professional opportunities, particularly in the thriving capital of Budapest.",
    image:
      "https://images.unsplash.com/photo-1551433027-2852e046114a?q=80&w=2070&auto=format&fit=crop",
    flight: "INR 55,000",
    living: "$60/week",
    additional: "$200",
    visa: "INR 7,000",
  },
];

// ─── What We Provide Items ─────────────────────────────────────────────────
const PROVIDES = [
  { icon: Users, text: "A dedicated manager to support you with your application" },
  { icon: Globe, text: "Access to professional internships in 50+ Countries" },
  { icon: Home, text: "Support in finding suitable accommodation" },
  { icon: Crosshair, text: "Professional goal setting and career coaching" },
  { icon: ShieldCheck, text: "Assistance with VISA documentation and insurance" },
  { icon: MessageCircle, text: "Cross-cultural preparation and debriefing sessions" },
  { icon: HelpCircle, text: "24/7 emergency support during your experience" },
  { icon: Zap, text: "Access to professional networking events" },
];

export default function GlobalTalent() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i - 1 + COUNTRIES.length) % COUNTRIES.length);
  const next = () => setActiveIdx((i) => (i + 1) % COUNTRIES.length);

  const country = COUNTRIES[activeIdx];

  return (
    <div className="flex flex-col gap-24 pb-32">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--talent)] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col items-start text-left">
            <img
              src="/global-talent.png"
              alt="Global Talent Logo"
              className="h-12 mb-8 w-auto object-contain"
            />

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
              Step into your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--talent)] to-cyan-400">
                Global Career
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-xl mb-10 leading-relaxed">
              Develop your leadership through an international internship in a corporate or start-up environment.
            </p>

            <a
              href="#sign-up"
              className="px-8 py-4 bg-[var(--talent)] text-white font-black text-lg uppercase tracking-wide rounded-full shadow-[0_10px_30px_var(--talent-glow)] hover:scale-105 transition-all flex items-center gap-3"
            >
              Apply Now <ArrowRight size={20} />
            </a>
          </div>

          <div className="relative">
            <div className="glass p-4 rounded-[2rem] border-[var(--talent)]/20 shadow-[0_20px_60px_var(--talent-glow)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Global Talent Professional"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border-[var(--talent)]/30 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--talent)] flex items-center justify-center text-white">
                  <Briefcase size={24} />
                </div>
                <div>
                  <div className="font-black text-xl">50+</div>
                  <div className="text-xs font-bold uppercase text-foreground/60 tracking-wider">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto w-full px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why choose <span className="text-[var(--talent)]">Global Talent?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              img: "https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/6311a25b425d06cb2640f512_benefit%203%20illustration.svg",
              title: "Professional Growth",
              desc: "Dive deep into real-world corporate environments. Gain invaluable hands-on experience and tackle complex challenges.",
            },
            {
              icon: Network,
              img: "https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/63119f614e9bb7351a75f486_benefit%201%20illustration.svg",
              title: "Global Network",
              desc: "Build an expansive international contact list. Connect with mentors, leaders, and peers across borders.",
            },
            {
              icon: Zap,
              img: "https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/6311a182cf1b3f77c5286353_Benefit%202%20illustration.svg",
              title: "Skill Development",
              desc: "Focus on acquiring highly relevant industry skills. Adapt to new workplace cultures and methodologies.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="glass p-10 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-[var(--glass-border)] group"
            >
              <img src={card.img} alt={card.title} className="h-32 object-contain mb-6 group-hover:scale-105 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-foreground/70 font-medium leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Countries Carousel ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto w-full px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--talent)] block mb-2">
              Opportunities worldwide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Where will you intern?</h2>
          </div>
          <div className="flex gap-2">
            {COUNTRIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === activeIdx ? "bg-[var(--talent)] scale-125" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[3rem] border border-[var(--talent)]/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-4 text-[var(--talent)]">{country.name}</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-10 font-medium">{country.description}</p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: PlaneTakeoff, label: "Est. Flight Costs", value: country.flight },
                  { icon: Home, label: "Monthly Living", value: country.living },
                  { icon: Receipt, label: "Other Expenses", value: country.additional },
                  { icon: FileText, label: "Visa Fees", value: country.visa },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="w-10 h-10 rounded-full bg-[var(--talent)]/10 text-[var(--talent)] flex items-center justify-center mb-2">
                      <item.icon size={18} />
                    </div>
                    <span className="text-xs font-bold text-foreground/50 uppercase tracking-wide">{item.label}</span>
                    <span className="text-lg font-black">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-10">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-foreground/10 glass flex items-center justify-center hover:bg-[var(--talent)] hover:text-white hover:border-transparent transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-foreground/10 glass flex items-center justify-center hover:bg-[var(--talent)] hover:text-white hover:border-transparent transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
              <img
                src={country.image}
                alt={country.name}
                key={country.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────────────── */}
      <section className="w-full px-4 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            Gain experience in leading industries across the globe.
          </h2>
          <Briefcase className="h-14 w-14 text-[var(--talent)]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Business Administration", icon: Briefcase, color: "bg-blue-600" },
            { name: "IT & Engineering", icon: Zap, color: "bg-teal-600" },
            { name: "Marketing & Sales", icon: TrendingUp, color: "bg-indigo-600" },
          ].map((p) => (
            <div
              key={p.name}
              className={`glass rounded-3xl p-8 hover:-translate-y-2 transition-transform h-64 flex flex-col justify-end relative overflow-hidden group border-t-[8px] ${p.color}`}
            >
              <p.icon
                className={`absolute -top-4 -right-2 w-32 h-32 opacity-10 ${p.color.replace(
                  "bg-",
                  "text-"
                )}`}
              />
              <h3 className="text-2xl font-bold relative z-10">{p.name}</h3>
              <span className="font-medium text-foreground/70 relative z-10">Professional Internship</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Investment</h2>
        </div>

        <div className="glass bg-[var(--talent)] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_var(--talent-glow)]">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center justify-center text-center px-8 py-12 gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                <DollarSign size={24} />
              </div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">Registration Fee</p>
              <p className="text-white text-5xl font-black leading-none">25,000</p>
              <p className="text-white/80 font-bold text-lg">INR</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center px-8 py-14 gap-3 bg-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                <Globe size={24} />
              </div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">Est. Total Expenses</p>
              <p className="text-white text-4xl md:text-5xl font-black leading-none">1.5L – 3.0L</p>
              <p className="text-white/80 font-bold text-lg">INR</p>
              <p className="text-white/70 text-sm font-medium mt-1 max-w-xs">
                Varies by country & duration. Many internships are paid!
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center px-8 py-12 gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                <Clock size={24} />
              </div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">Duration</p>
              <p className="text-white text-5xl font-black leading-none">6-78</p>
              <p className="text-white/80 font-bold text-lg">Weeks</p>
            </div>
          </div>
        </div>

        <div className="glass p-10 md:p-14 rounded-[3rem] mt-8 border">
          <div className="text-center mb-10 pb-8 border-b border-foreground/10">
            <h3 className="font-bold text-xl uppercase tracking-widest text-foreground/50">What we provide</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {PROVIDES.map((item, i) => (
              <div key={i} className="flex gap-5 items-start p-5 rounded-2xl hover:bg-[var(--talent)]/5 transition-colors">
                <div className="shrink-0 bg-[var(--talent)]/10 text-[var(--talent)] p-3 rounded-xl">
                  <item.icon size={24} />
                </div>
                <p className="font-semibold text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto w-full px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--talent)] mb-2 block">
            The path to your global career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Process</h2>
        </div>

        <div className="glass bg-[var(--talent)] rounded-[3rem] p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Edit3, title: "Sign up", desc: "Create your profile and upload your CV to start your application journey." },
              { icon: Search, title: "Find an internship", desc: "Search through thousands of professional opportunities across 50+ countries." },
              { icon: Users, title: "Interview", desc: "Connect with host companies and demonstrate your skills through their selection process." },
              { icon: PenTool, title: "Match & Prepare", desc: "Get matched with your host company, prepare your visa, and get ready to fly!" },
            ].map((step, i) => (
              <div
                key={i}
                className="glass bg-white dark:bg-background/95 rounded-3xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--talent)]/10 text-[var(--talent)] flex items-center justify-center mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-4">{step.title}</h3>
                <p className="font-medium text-foreground/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sign-Up Form ─────────────────────────────────────────────── */}
      <section id="sign-up" className="max-w-3xl mx-auto w-full px-4">
        <div className="glass p-8 md:p-12 rounded-[3rem] shadow border border-[var(--talent)]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--talent)]/10 rounded-full blur-[80px] -z-10" />

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sign up for Global Talent</h2>
            <p className="text-foreground/70 font-medium leading-relaxed">
              Ready to take your career to the next level? Sign up now to access professional internships worldwide!
            </p>
          </div>

          <EmbeddableAuthForm programmeCode={8} />
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto w-full px-4 scroll-mt-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">FAQs</h2>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { q: "Is the Global Talent internship paid?", a: "Many Global Talent internships provide a stipend or salary that covers basic living costs in the host country. This varies depending on the company, industry, and location." },
            { q: "What are the eligibility criteria?", a: "Generally, candidates should be between 18-30 years old, have a relevant academic background, and possess a good level of English. Specific roles may require prior work experience or specialized skills." },
            { q: "How long do the internships last?", a: "Global Talent internships can range from short-term (6-12 weeks) to long-term (up to 78 weeks), depending on the requirements of the host company." },
            { q: "Does AIESEC help with visas?", a: "Yes, AIESEC provides the necessary documentation and guidance to help you apply for the appropriate visa for your internship." },
            { q: "What kind of companies can I work for?", a: "AIESEC partners with a wide range of organizations, from innovative startups to well-known multinational corporations across various industries." },
          ].map((faq, idx) => (
            <details key={idx} className="glass p-6 rounded-2xl group cursor-pointer border border-foreground/5 [&_svg]:open:-rotate-180">
              <summary className="flex items-center justify-between font-bold text-lg list-none outline-none">
                {faq.q}
                <ChevronDown size={20} className="text-[var(--talent)] transition-transform duration-300 shrink-0 ml-4" />
              </summary>
              <p className="mt-4 text-foreground/70 font-medium leading-relaxed pr-8">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Other Experiences ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto w-full px-4 text-center scroll-mt-32">
        <h3 className="font-bold text-xl mb-10 text-foreground/70">Choose another experience</h3>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/global-volunteer" className="glass py-4 px-10 rounded-full hover:scale-105 transition-all font-bold flex items-center gap-3 justify-center">
            <img src="https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/6310b316137192f223bd798b_Logo-GV-horizontal-color.svg" alt="GV" className="h-8 w-auto object-contain" />
            Volunteer abroad
          </Link>
          <Link href="/global-teacher" className="glass py-4 px-10 rounded-full hover:scale-105 transition-all font-bold flex items-center gap-3 justify-center">
            <img src="/global-teacher.png" alt="GTE" className="h-8 w-auto object-contain" />
            Become a teacher
          </Link>
        </div>
      </section>
    </div>
  );
}
