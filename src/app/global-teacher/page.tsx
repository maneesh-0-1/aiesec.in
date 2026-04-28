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
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  Languages,
  GraduationCap,
} from "lucide-react";

// ─── Country Carousel Data ──────────────────────────────────────────────────
const COUNTRIES = [
  {
    name: "Turkey",
    description:
      "A bridge between East and West, Turkey offers a unique educational landscape. From teaching in modern cities to historical centers, you'll gain experience in a diverse range of educational institutions while enjoying Turkey's legendary hospitality.",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop",
    flight: "INR 45,000",
    living: "$100/week",
    additional: "$300",
    visa: "INR 6,000",
  },
  {
    name: "Egypt",
    description:
      "Egypt has a rapidly evolving education sector with a high demand for international teachers. Immerse yourself in thousands of years of history while contributing to the development of Egypt's future generations.",
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2070&auto=format&fit=crop",
    flight: "INR 40,000",
    living: "$50/week",
    additional: "$200",
    visa: "INR 5,000",
  },
  {
    name: "Vietnam",
    description:
      "Vietnam is one of the world's most dynamic markets for English and IT education. Teaching in Vietnam allows you to experience breathtaking natural beauty and a culture that deeply respects educators.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
    flight: "INR 35,000",
    living: "$70/week",
    additional: "$250",
    visa: "INR 3,000",
  },
  {
    name: "Colombia",
    description:
      "Join Colombia's ambitious 'Colombia Bilingüe' initiative. Teaching here offers a chance to explore stunning landscapes—from the Andes to the Caribbean—while making a real impact on local communities.",
    image:
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop",
    flight: "INR 95,000",
    living: "$80/week",
    additional: "$200",
    visa: "INR 8,000",
  },
];

// ─── What We Provide Items ─────────────────────────────────────────────────
const PROVIDES = [
  { icon: Users, text: "A local AIESEC buddy to support your integration" },
  { icon: Globe, text: "Opportunities in schools and universities across 20+ countries" },
  { icon: Home, text: "Accommodation (provided or supported by the school)" },
  { icon: Crosshair, text: "Pedagogical preparation and cultural training" },
  { icon: ShieldCheck, text: "Support with VISA documents and school certification" },
  { icon: MessageCircle, text: "Regular feedback and experience debriefing" },
  { icon: HelpCircle, text: "Ongoing support from both host and home countries" },
  { icon: Zap, text: "Leadership development and teaching certification support" },
];

export default function GlobalTeacher() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i - 1 + COUNTRIES.length) % COUNTRIES.length);
  const next = () => setActiveIdx((i) => (i + 1) % COUNTRIES.length);

  const country = COUNTRIES[activeIdx];

  return (
    <div className="flex flex-col gap-24 pb-32">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--teacher)] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col items-start text-left">
            <img
              src="/global-teacher.png"
              alt="Global Teacher Logo"
              className="h-12 mb-8 w-auto object-contain"
            />

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
              Empower the world <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teacher)] to-amber-400">
                by teaching abroad
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-xl mb-10 leading-relaxed">
              Develop your leadership through a teaching internship contributing to the education sector abroad.
            </p>

            <a
              href="#sign-up"
              className="px-8 py-4 bg-[var(--teacher)] text-white font-black text-lg uppercase tracking-wide rounded-full shadow-[0_10px_30px_var(--teacher-glow)] hover:scale-105 transition-all flex items-center gap-3"
            >
              Start Teaching <ArrowRight size={20} />
            </a>
          </div>

          <div className="relative">
            <div className="glass p-4 rounded-[2rem] border-[var(--teacher)]/20 shadow-[0_20px_60px_var(--teacher-glow)]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop"
                alt="Global Teacher in Classroom"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border-[var(--teacher)]/30 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--teacher)] flex items-center justify-center text-white">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div className="font-black text-xl">20+</div>
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
            Why choose to be a <span className="text-[var(--teacher)]">Global Teacher?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              img: "https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/6311a25b425d06cb2640f512_benefit%203%20illustration.svg",
              title: "Professional Experience",
              desc: "Add international teaching credentials to your resume. Learn new pedagogical methods in diverse classroom environments.",
            },
            {
              icon: Globe,
              img: "https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/63119f614e9bb7351a75f486_benefit%201%20illustration.svg",
              title: "Cultural Immersion",
              desc: "Living and teaching abroad means understanding local youth, breaking stereotypes, and bringing global perspectives back.",
            },
            {
              icon: Languages,
              img: "https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/6311a182cf1b3f77c5286353_Benefit%202%20illustration.svg",
              title: "Language Exchange",
              desc: "Improve your communication skills and potentially learn a new language while bridging cultural and linguistic boundaries.",
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
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--teacher)] block mb-2">
              Teaching destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Where will you teach?</h2>
          </div>
          <div className="flex gap-2">
            {COUNTRIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === activeIdx ? "bg-[var(--teacher)] scale-125" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[3rem] border border-[var(--teacher)]/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-4 text-[var(--teacher)]">{country.name}</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-10 font-medium">{country.description}</p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: PlaneTakeoff, label: "Flight Costs", value: country.flight },
                  { icon: Home, label: "Weekly Living", value: country.living },
                  { icon: Receipt, label: "Additional Costs", value: country.additional },
                  { icon: FileText, label: "Visa Fees", value: country.visa },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="w-10 h-10 rounded-full bg-[var(--teacher)]/10 text-[var(--teacher)] flex items-center justify-center mb-2">
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
                  className="w-12 h-12 rounded-full border border-foreground/10 glass flex items-center justify-center hover:bg-[var(--teacher)] hover:text-white hover:border-transparent transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-foreground/10 glass flex items-center justify-center hover:bg-[var(--teacher)] hover:text-white hover:border-transparent transition-all"
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

      {/* ── Subjects ────────────────────────────────────────────────── */}
      <section className="w-full px-4 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            Teach subjects you are passionate about.
          </h2>
          <BookOpen className="h-14 w-14 text-[var(--teacher)]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "English & Languages", icon: Languages, color: "bg-orange-600" },
            { name: "IT & Computer Science", icon: Zap, color: "bg-amber-600" },
            { name: "Other Subjects", icon: GraduationCap, color: "bg-yellow-600" },
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
              <span className="font-medium text-foreground/70 relative z-10">Global Teaching Internship</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Investment</h2>
        </div>

        <div className="glass bg-[var(--teacher)] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_var(--teacher-glow)]">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center justify-center text-center px-8 py-12 gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                <DollarSign size={24} />
              </div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">Registration Fee</p>
              <p className="text-white text-5xl font-black leading-none">20,000</p>
              <p className="text-white/80 font-bold text-lg">INR</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center px-8 py-14 gap-3 bg-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                <Globe size={24} />
              </div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">Est. Total Expenses</p>
              <p className="text-white text-4xl md:text-5xl font-black leading-none">1.0L – 2.5L</p>
              <p className="text-white/80 font-bold text-lg">INR</p>
              <p className="text-white/70 text-sm font-medium mt-1 max-w-xs">
                Varies by country & duration. Stipends are common!
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center px-8 py-12 gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                <Clock size={24} />
              </div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">Duration</p>
              <p className="text-white text-5xl font-black leading-none">9-78</p>
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
              <div key={i} className="flex gap-5 items-start p-5 rounded-2xl hover:bg-[var(--teacher)]/5 transition-colors">
                <div className="shrink-0 bg-[var(--teacher)]/10 text-[var(--teacher)] p-3 rounded-xl">
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
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--teacher)] mb-2 block">
            Start your teaching journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Process</h2>
        </div>

        <div className="glass bg-[var(--teacher)] rounded-[3rem] p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Edit3, title: "Sign up", desc: "Create your profile and highlight your teaching skills and credentials." },
              { icon: Search, title: "Apply to schools", desc: "Find teaching opportunities in educational institutions looking for international teachers." },
              { icon: Users, title: "Selection", desc: "Go through the school's selection process, which usually includes an interview." },
              { icon: PenTool, title: "Prepare & Depart", desc: "Get matched, prepare your teaching materials, and start your journey abroad!" },
            ].map((step, i) => (
              <div
                key={i}
                className="glass bg-white dark:bg-background/95 rounded-3xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--teacher)]/10 text-[var(--teacher)] flex items-center justify-center mb-6">
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
        <div className="glass p-8 md:p-12 rounded-[3rem] shadow border border-[var(--teacher)]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--teacher)]/10 rounded-full blur-[80px] -z-10" />

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sign up as Global Teacher</h2>
            <p className="text-foreground/70 font-medium leading-relaxed">
              Want to make a difference in classrooms around the world? Sign up now to receive more information about teaching opportunities!
            </p>
          </div>

          <EmbeddableAuthForm programmeCode={9} />
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto w-full px-4 scroll-mt-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">FAQs</h2>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { q: "Do I need a teaching degree?", a: "While many opportunities require a background in education, some language teaching roles only require high proficiency in the language. Specific requirements vary by school and country." },
            { q: "Will I get paid?", a: "Most Global Teacher internships provide a salary or stipend. The amount varies depending on the school's location and the teacher's qualifications." },
            { q: "What is the typical duration?", a: "Teaching internships usually range from 9 to 78 weeks, often aligning with the host country's academic calendar." },
            { q: "Does AIESEC help with accommodation?", a: "Yes, accommodation is often provided by the host school or AIESEC host office, or support is given to find a suitable place to live." },
            { q: "What kind of schools will I teach in?", a: "Opportunities exist in a variety of settings, including primary and secondary schools, language centers, and occasionally universities." },
          ].map((faq, idx) => (
            <details key={idx} className="glass p-6 rounded-2xl group cursor-pointer border border-foreground/5 [&_svg]:open:-rotate-180">
              <summary className="flex items-center justify-between font-bold text-lg list-none outline-none">
                {faq.q}
                <ChevronDown size={20} className="text-[var(--teacher)] transition-transform duration-300 shrink-0 ml-4" />
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
          <Link href="/global-talent" className="glass py-4 px-10 rounded-full hover:scale-105 transition-all font-bold flex items-center gap-3 justify-center">
            <img src="/global-talent.png" alt="GTA" className="h-8 w-auto object-contain" />
            Become an intern
          </Link>
        </div>
      </section>
    </div>
  );
}
