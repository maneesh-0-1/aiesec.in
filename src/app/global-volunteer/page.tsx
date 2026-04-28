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
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
} from "lucide-react";

// ─── Country Carousel Data (from source HTML) ──────────────────────────────
const COUNTRIES = [
  {
    name: "Egypt",
    description:
      "Pyramids, Sahara Desert, and Nile River. Egypt is known for its ruins, historical places, and sites of world wonders. It is also famous for its mesmerising beaches, coral reefs, and sea cruises.",
    image:
      "https://cdn.prod.website-files.com/62f0bdedd19c8be086a9f335/64181f75e361236d774a34a7_egypt%20srilanka%20and%20netherlands.gif",
    flight: "INR 40,000",
    living: "$35/week",
    additional: "$250",
    visa: "INR 5,000 – 7,000",
  },
  {
    name: "Turkey",
    description:
      "Partly in Europe and partly in Asia; That's what describes the country of Turkey! Turkey is famous for a diverse set of both oriental and European elements.",
    image:
      "https://cdn.prod.website-files.com/62f0bdedd19c8be086a9f335/64182c487dad69f60e17123b_turkey.gif",
    flight: "INR 45,000",
    living: "$35/week",
    additional: "$300",
    visa: "INR 6,000",
  },
  {
    name: "Sri Lanka",
    description:
      "Full of beautiful landscapes, stirring mountains, lush green tea gardens and golden beaches, Sri Lanka with its rich culture and amazing cuisine is nothing short of magnificent.",
    image:
      "https://cdn.prod.website-files.com/62f0bdedd19c8be086a9f335/641820a56288390204429f37_srilanka.gif",
    flight: "INR 25,000",
    living: "$20/week",
    additional: "$200",
    visa: "INR 14,000",
  },
  {
    name: "Romania",
    description:
      "Nestled in Eastern Europe, Romania is a land of captivating contrasts. Explore ancient castles perched amid misty mountains, wander through picturesque villages frozen in time, and savor the rich flavors of traditional Romanian cuisine.",
    image:
      "https://cdn.prod.website-files.com/62f0bdedd19c8be086a9f335/661d1a7eecdf0b6830d2c895_Untitled%20design.gif",
    flight: "INR 45,000",
    living: "$50/week",
    additional: "$200",
    visa: "INR 8,000 – 12,000",
  },
];

// ─── What We Provide Items ─────────────────────────────────────────────────
const PROVIDES = [
  { icon: Users, text: "A local volunteer to support you with application process" },
  { icon: Globe, text: "Access to Volunteering Opportunities in 25+ Countries" },
  { icon: Home, text: "Accommodation (Additional Fee upto $200 might be charged in some countries)" },
  { icon: Crosshair, text: "Personal Goal Setting Sessions before the Program" },
  { icon: ShieldCheck, text: "Support with VISA Documents and Insurance" },
  { icon: MessageCircle, text: "Experience Debriefing sessions after the Program" },
  { icon: HelpCircle, text: "Online Support and Program Guide" },
  { icon: Zap, text: "Access to Leadership Development Assessment tools" },
];

export default function GlobalVolunteer() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i - 1 + COUNTRIES.length) % COUNTRIES.length);
  const next = () => setActiveIdx((i) => (i + 1) % COUNTRIES.length);

  const country = COUNTRIES[activeIdx];

  return (
    <div className="flex flex-col gap-24 pb-32">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--volunteer)] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col items-start text-left">
            {/* GV Logo instead of pill badge */}
            <img
              src="https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/6310b316137192f223bd798b_Logo-GV-horizontal-color.svg"
              alt="Global Volunteer Logo"
              className="h-12 mb-8 w-auto object-contain"
            />

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
              If we don&apos;t change <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--volunteer)] to-rose-400">
                the world, then who will?
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-xl mb-10 leading-relaxed">
              Develop your leadership through a volunteering project contributing to the Sustainable Development Goals.
            </p>

            <a
              href="#sign-up"
              className="px-8 py-4 bg-[var(--volunteer)] text-white font-black text-lg uppercase tracking-wide rounded-full shadow-[0_10px_30px_var(--volunteer-glow)] hover:scale-105 transition-all flex items-center gap-3"
            >
              Apply Now <ArrowRight size={20} />
            </a>
          </div>

          <div className="relative">
            <div className="glass p-4 rounded-[2rem] border-[var(--volunteer)]/20 shadow-[0_20px_60px_var(--volunteer-glow)]">
              <img
                src="https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/6367b8a48bef742fe5cc93a5_Hero%20image.avif"
                alt="Global Volunteers"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border-[var(--volunteer)]/30 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--volunteer)] flex items-center justify-center text-white">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="font-black text-xl">25+</div>
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
            Why choose to be a <span className="text-[var(--volunteer)]">Global Volunteer?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              img: "https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/6311a25b425d06cb2640f512_benefit%203%20illustration.svg",
              title: "Cross-Cultural Experience",
              desc: "Experience a new culture, meet like-minded people, and expand your network across the world while volunteering.",
            },
            {
              icon: Users,
              img: "https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/63119f614e9bb7351a75f486_benefit%201%20illustration.svg",
              title: "Develop Yourself",
              desc: "Step out of your comfort and live in a challenging environment which will develop your leadership competencies and personal skills.",
            },
            {
              icon: HeartHandshake,
              img: "https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/6311a182cf1b3f77c5286353_Benefit%202%20illustration.svg",
              title: "Contribute to the SDGs",
              desc: "Find the project around the world that contributes to a cause you care about. All Global Volunteer projects are designed around the UN SDGs.",
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
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--volunteer)] block mb-2">
              Countries to choose from
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Where will you go?</h2>
          </div>
          {/* Dot indicators */}
          <div className="flex gap-2">
            {COUNTRIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === activeIdx ? "bg-[var(--volunteer)] scale-125" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[3rem] border border-[var(--volunteer)]/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-4 text-[var(--volunteer)]">{country.name}</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-10 font-medium">{country.description}</p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: PlaneTakeoff, label: "Flight Costs", value: country.flight },
                  { icon: Home, label: "Basic Living Costs", value: country.living },
                  { icon: Receipt, label: "Additional Costs", value: country.additional },
                  { icon: FileText, label: "Visa Fees", value: country.visa },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="w-10 h-10 rounded-full bg-[var(--volunteer)]/10 text-[var(--volunteer)] flex items-center justify-center mb-2">
                      <item.icon size={18} />
                    </div>
                    <span className="text-xs font-bold text-foreground/50 uppercase tracking-wide">{item.label}</span>
                    <span className="text-lg font-black">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex gap-3 mt-10">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-foreground/10 glass flex items-center justify-center hover:bg-[var(--volunteer)] hover:text-white hover:border-transparent transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-foreground/10 glass flex items-center justify-center hover:bg-[var(--volunteer)] hover:text-white hover:border-transparent transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Image side */}
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

      {/* ── SDG Projects Preview ──────────────────────────────────────── */}
      <section className="w-full px-4 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            Each project is designed to contribute towards sustainable development goals.
          </h2>
          <img
            src="https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/63162889c73ad3426b8d1272_Global%20goals.svg"
            alt="SDG Logo"
            className="h-14 object-contain shrink-0"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Equify", sdg: "Reduced Inequalities", num: 10, color: "bg-pink-600" },
            { name: "Green Leaders", sdg: "Sustainable Cities & Communities", num: 11, color: "bg-green-600" },
            { name: "Aquatica", sdg: "Life on Land", num: 15, color: "bg-blue-500" },
          ].map((p) => (
            <div
              key={p.name}
              className={`glass rounded-3xl p-8 hover:-translate-y-2 transition-transform h-64 flex flex-col justify-end relative overflow-hidden group border-t-[8px] ${p.color}`}
            >
              <span
                className={`absolute -top-4 -right-2 text-7xl font-black opacity-10 ${p.color.replace(
                  "bg-",
                  "text-"
                )}`}
              >
                {p.num}
              </span>
              <h3 className="text-2xl font-bold relative z-10">{p.name}</h3>
              <span className="font-medium text-foreground/70 relative z-10">{p.sdg}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Pricing plans</h2>
        </div>

        {/* 3-column pricing bar */}
        <div className="glass bg-[var(--volunteer)] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_var(--volunteer-glow)]">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Col 1 */}
            <div className="flex flex-col items-center justify-center text-center px-8 py-12 gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                <DollarSign size={24} />
              </div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">Program Registration Fee</p>
              <p className="text-white text-5xl font-black leading-none">18,000</p>
              <p className="text-white/80 font-bold text-lg">INR</p>
            </div>

            {/* Col 2 — highlighted */}
            <div className="flex flex-col items-center justify-center text-center px-8 py-14 gap-3 bg-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                <Globe size={24} />
              </div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">Total Program Expenses</p>
              <p className="text-white text-4xl md:text-5xl font-black leading-none">70,000 – 1,50,000</p>
              <p className="text-white/80 font-bold text-lg">INR</p>
              <p className="text-white/70 text-sm font-medium mt-1 max-w-xs">
                Based on the country you choose & doesn&apos;t include registration
              </p>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col items-center justify-center text-center px-8 py-12 gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                <Clock size={24} />
              </div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">Duration</p>
              <p className="text-white text-5xl font-black leading-none">6-8</p>
              <p className="text-white/80 font-bold text-lg">Weeks</p>
            </div>
          </div>
        </div>

        {/* What We Provide — 2 per row */}
        <div className="glass p-10 md:p-14 rounded-[3rem] mt-8 border">
          <div className="text-center mb-10 pb-8 border-b border-foreground/10">
            <h3 className="font-bold text-xl uppercase tracking-widest text-foreground/50">What we provide</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {PROVIDES.map((item, i) => (
              <div key={i} className="flex gap-5 items-start p-5 rounded-2xl hover:bg-[var(--volunteer)]/5 transition-colors">
                <div className="shrink-0 bg-[var(--volunteer)]/10 text-[var(--volunteer)] p-3 rounded-xl">
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
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--volunteer)] mb-2 block">
            In a few easy steps
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Process</h2>
        </div>

        <div className="glass bg-[var(--volunteer)] rounded-[3rem] p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Edit3, title: "Sign up", desc: "Sign up with your contact details and one of our local representatives will get in touch with you for a consultation." },
              { icon: Search, title: "Find a project", desc: "Once you sign up, you can access all available opportunities. Our local representative will assist you with a suitable one." },
              { icon: Users, title: "Selection process", desc: "Once you have found the suitable opportunity, go through the selection process which includes an interview or a task." },
              { icon: PenTool, title: "Sign the contract & get ready", desc: "Pay the registration fee, sign the contract, and get ready for a life-changing leadership experience!" },
            ].map((step, i) => (
              <div
                key={i}
                className="glass bg-white dark:bg-background/95 rounded-3xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--volunteer)]/10 text-[var(--volunteer)] flex items-center justify-center mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-4">{step.title}</h3>
                <p className="font-medium text-foreground/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sign-Up Form (AIESEC EmbeddableAuth) ─────────────────────── */}
      <section id="sign-up" className="max-w-3xl mx-auto w-full px-4">
        <div className="glass p-8 md:p-12 rounded-[3rem] shadow border border-[var(--volunteer)]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--volunteer)]/10 rounded-full blur-[80px] -z-10" />

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sign up as Global Volunteer</h2>
            <p className="text-foreground/70 font-medium leading-relaxed">
              Ambitious enough to believe you can make a positive impact in our world? We believe you can. Sign up to receive more information!
            </p>
          </div>

          {/* AIESEC auth widget — handles registration & data saving to AIESEC production API */}
          <EmbeddableAuthForm programmeCode={7} />
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto w-full px-4 scroll-mt-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">FAQs</h2>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { q: "What does the AIESEC exchange program offer?", a: "A positive learning experience — International Team Experience, practical skills in a foreign environment, interaction with social issues in the host community, preparation for future management responsibilities, and awareness of different practices in the host country." },
            { q: "What are the requirements to avail this International Exchange Opportunity?", a: "The candidate should be between the age group 18–30 and equipped with a decent level of English. There is also a 15–20 minute interview with the project manager to check intent and basic English." },
            { q: "Will I receive any salary during my experience?", a: "You will not be paid any remuneration during this voluntary internship. However, depending on the project, you may receive free accommodation and food. You only pay an administration fee of INR 18,000 after being selected." },
            { q: "How will I get my Visa and Tickets?", a: "AIESEC doesn't provide VISA or Air tickets. However, we help you obtain the necessary documents to get a VISA and can assist you with travel insurance." },
            { q: "How is it relevant to a Student?", a: "AIESEC internship builds soft skills, presentation skills, solution-oriented mindset, international perspective, public-speaking, financial management, leadership skills, and self-awareness — making participants complete all-rounders." },
          ].map((faq, idx) => (
            <details key={idx} className="glass p-6 rounded-2xl group cursor-pointer border border-foreground/5 [&_svg]:open:-rotate-180">
              <summary className="flex items-center justify-between font-bold text-lg list-none outline-none">
                {faq.q}
                <ChevronDown size={20} className="text-[var(--volunteer)] transition-transform duration-300 shrink-0 ml-4" />
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
          <Link href="/global-talent" className="glass py-4 px-10 rounded-full hover:scale-105 transition-all font-bold flex items-center gap-3 justify-center">
            <img src="/global-talent.png" alt="GTA" className="h-8 w-auto object-contain" />
            Become an intern
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
