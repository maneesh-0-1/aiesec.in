import Link from "next/link";
import { ArrowRight, Globe, Users, BookOpen, Handshake, ShieldCheck, Zap, Briefcase, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Floating Leadership Qualities - AIESEC LDM */}
        <div className="hidden md:flex absolute top-[25%] left-[10%] lg:left-[15%] glass px-6 py-3 rounded-full items-center gap-3 animate-pulse shadow-lg cursor-default transition-transform hover:scale-105 z-20">
            <span className="w-2 h-2 rounded-full bg-[var(--blue)]"></span>
            <span className="font-bold text-sm tracking-wide text-foreground/80 uppercase">World Citizen</span>
        </div>
        <div className="hidden md:flex absolute top-[20%] right-[10%] lg:right-[15%] glass px-6 py-3 rounded-full items-center gap-3 animate-pulse shadow-lg cursor-default transition-transform hover:scale-105 z-20" style={{ animationDelay: '1s' }}>
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="font-bold text-sm tracking-wide text-foreground/80 uppercase">Self Aware</span>
        </div>
        <div className="hidden md:flex absolute bottom-[30%] left-[5%] lg:left-[10%] glass px-6 py-3 rounded-full items-center gap-3 animate-pulse shadow-lg cursor-default transition-transform hover:scale-105 z-20" style={{ animationDelay: '2s' }}>
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="font-bold text-sm tracking-wide text-foreground/80 uppercase">Empowering Others</span>
        </div>
        <div className="hidden md:flex absolute bottom-[25%] right-[5%] lg:right-[10%] glass px-6 py-3 rounded-full items-center gap-3 animate-pulse shadow-lg cursor-default transition-transform hover:scale-105 z-20" style={{ animationDelay: '1.5s' }}>
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            <span className="font-bold text-sm tracking-wide text-foreground/80 uppercase">Solution Oriented</span>
        </div>

        {/* Main Typography */}
        <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black max-w-6xl tracking-tighter leading-[0.9] mb-6 relative">
              <span className="block text-foreground/90">Activate Your</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue)] to-cyan-400 drop-shadow-xl relative inline-block">
                POTENTIAL.
                <svg className="absolute w-full h-8 -bottom-4 left-0 text-[var(--blue)] opacity-50 hidden md:block" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-3xl mb-12 mt-8 leading-relaxed">
              Step out of your comfort zone. Experience new cultures, tackle real-world challenges, and become the leader the world needs today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="#experiences"
                className="px-8 py-5 bg-[var(--blue)] text-white font-black text-lg uppercase tracking-wide rounded-full shadow-[0_10px_30px_rgba(3,126,243,0.4)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(3,126,243,0.6)] transition-all flex items-center gap-3"
              >
                Start Your Journey <ArrowRight size={20} />
              </a>
            </div>
        </div>
      </section>

      {/* Choose an Experience Bento Grid */}
      <section id="experiences" className="max-w-6xl mx-auto w-full px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-16 h-8 bg-[var(--blue)] rounded-t-full mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold">Choose an experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Global Volunteer */}
          <Link href="/global-volunteer" className="group">
            <div className="glass overflow-hidden h-full flex flex-col rounded-3xl group-hover:-translate-y-2 transition-all duration-300 shadow-[0_8px_32px_var(--volunteer-glow)] border-[var(--volunteer)]/20 hover:border-[var(--volunteer)]/50 border relative">
               <div className="absolute top-0 left-0 w-full h-2 bg-[var(--volunteer)]"></div>
              <div className="p-8 flex flex-col h-full bg-gradient-to-br from-[var(--volunteer)]/5 to-transparent">
                <div className="mb-6 text-[var(--volunteer)] flex items-center gap-3">
                  <img src="https://cdn.prod.website-files.com/62f0bdedd19c8b20eba9f328/6310b316137192f223bd798b_Logo-GV-horizontal-color.svg" alt="Global Volunteer" className="h-12 w-auto object-contain drop-shadow-md" />
                </div>
                <p className="text-foreground/80 font-medium leading-relaxed mb-8 flex-1">
                  Develop your leadership through a volunteering project contributing to the Global Goals.
                </p>
                <div>
                  <span className="text-sm font-bold opacity-60 block border-b border-foreground/10 pb-2 mb-2">6-8 weeks</span>
                  <span className="text-[var(--volunteer)] flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                    View more <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Global Talent */}
          <Link href="/global-talent" className="group">
            <div className="glass overflow-hidden h-full flex flex-col rounded-3xl group-hover:-translate-y-2 transition-all duration-300 shadow-[0_8px_32px_var(--talent-glow)] border-[var(--talent)]/20 hover:border-[var(--talent)]/50 border relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[var(--talent)]"></div>
              <div className="p-8 flex flex-col h-full bg-gradient-to-br from-[var(--talent)]/5 to-transparent">
                <div className="mb-6 text-[var(--talent)] flex items-center gap-3">
                  <img src="/global-talent.png" alt="Global Talent" className="h-12 w-auto object-contain drop-shadow-md" />
                </div>
                <p className="text-foreground/80 font-medium leading-relaxed mb-8 flex-1">
                  Develop your leadership through an internship opportunity, whilst boosting your career.
                </p>
                <div>
                  <span className="text-sm font-bold opacity-60 block border-b border-foreground/10 pb-2 mb-2">6-78 weeks</span>
                  <span className="text-[var(--talent)] flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                    View more <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Global Teacher */}
          <Link href="/global-teacher" className="group lg:col-span-1 md:col-span-2">
            <div className="glass overflow-hidden h-full flex flex-col rounded-3xl group-hover:-translate-y-2 transition-all duration-300 shadow-[0_8px_32px_var(--teacher-glow)] border-[var(--teacher)]/20 hover:border-[var(--teacher)]/50 border relative">
               <div className="absolute top-0 left-0 w-full h-2 bg-[var(--teacher)]"></div>
              <div className="p-8 flex flex-col h-full bg-gradient-to-br from-[var(--teacher)]/5 to-transparent">
                <div className="mb-6 text-[var(--teacher)] flex items-center gap-3">
                  <img src="/global-teacher.png" alt="Global Teacher" className="h-12 w-auto object-contain drop-shadow-md" />
                </div>
                <p className="text-foreground/80 font-medium leading-relaxed mb-8 flex-1">
                  Develop your leadership through a teaching internship, whilst boosting your teaching career.
                </p>
                <div>
                  <span className="text-sm font-bold opacity-60 block border-b border-foreground/10 pb-2 mb-2">9-78 weeks</span>
                  <span className="text-[var(--teacher)] flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                    View more <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Leadership Insights (Blog) */}
      <section className="max-w-6xl mx-auto w-full px-4 pt-16">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-2">Blog</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Leadership Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <article className="glass rounded-3xl overflow-hidden group hover:shadow-xl transition-all cursor-pointer bg-foreground/5">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Exchange insight" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-background border border-foreground/10">Culture</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-background border border-foreground/10">5 min read</span>
                </div>
                <h3 className="font-bold text-lg mb-6 group-hover:text-[var(--blue)] transition-colors">How to make the most out of your international exchange</h3>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground/70">
                  <span className="w-6 h-6 rounded-full bg-[var(--blue)] text-white flex items-center justify-center"><ChevronRight size={14}/></span>
                  Read more
                </div>
             </div>
           </article>

           <article className="glass rounded-3xl overflow-hidden group hover:shadow-xl transition-all cursor-pointer bg-foreground/5">
             <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" alt="Employer insight" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-background border border-foreground/10">Career</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-background border border-foreground/10">4 min read</span>
                </div>
                <h3 className="font-bold text-lg mb-6 group-hover:text-[var(--blue)] transition-colors">Why Indian employers value international experience in candidates</h3>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground/70">
                   <span className="w-6 h-6 rounded-full bg-[var(--blue)] text-white flex items-center justify-center"><ChevronRight size={14}/></span>
                  Read more
                </div>
             </div>
           </article>

           <article className="glass rounded-3xl overflow-hidden group hover:shadow-xl transition-all cursor-pointer bg-foreground/5">
             <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Workplace insight" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-background border border-foreground/10">Business</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-background border border-foreground/10">3 min read</span>
                </div>
                <h3 className="font-bold text-lg mb-6 group-hover:text-[var(--blue)] transition-colors">What it means to bring global diversity into your workplace</h3>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground/70">
                   <span className="w-6 h-6 rounded-full bg-[var(--blue)] text-white flex items-center justify-center"><ChevronRight size={14}/></span>
                  Read more
                </div>
             </div>
           </article>
        </div>
        
        <div className="flex justify-center mt-8">
           <button className="px-6 py-2 rounded-full border border-foreground/20 font-semibold hover:bg-foreground/5 transition-colors">
              View all
           </button>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="max-w-6xl mx-auto w-full px-4 pt-16 relative">
         {/* Blue starburst icon top-left */}
         <div className="hidden lg:flex absolute -left-8 top-10 w-24 h-24 bg-[var(--blue)] text-white items-center justify-center transform rotate-12 z-20" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
            <Handshake size={32} />
         </div>

        <div className="glass p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group rounded-[3rem] relative overflow-hidden">
          <div className="flex-1 w-full relative min-h-[350px] rounded-3xl overflow-hidden border border-[var(--glass-border)] order-2 md:order-1">
             <div className="absolute inset-0 border-l-4 border-b-4 border-[var(--blue)] z-10 m-2 rounded-2xl pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
              alt="Partner meeting" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="flex-1 order-1 md:order-2 pl-0 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground/50">Partner with us</h2>
            <p className="text-foreground/80 text-lg mb-8 font-medium">
              Bring diversity and talent into your workplace with us.
            </p>
            
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded shrink-0 bg-[var(--blue)] text-white flex items-center justify-center mt-1">
                  <Users size={16} />
                </div>
                <div>
                   <p className="font-semibold text-sm">Access over 1000s of internationally minded young people from all over the world.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded shrink-0 bg-[var(--blue)] text-white flex items-center justify-center mt-1">
                  <ShieldCheck size={16} />
                </div>
                <div>
                   <h4 className="font-bold text-sm">Visa Support & Arrival</h4>
                   <p className="font-medium text-sm text-foreground/70">We ensure that the visa process is as smooth as possible.</p>
                </div>
              </div>
            </div>

            <a
              href="https://aiesec.in/organization-global-talent"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--blue)]/80 hover:bg-[var(--blue)] text-white font-bold rounded-md hover:scale-105 transition-all shadow-lg"
            >
              Register now
            </a>
          </div>
        </div>
      </section>

      {/* Become an AIESEC Member */}
      <section className="max-w-6xl mx-auto w-full px-4 pt-16 relative">
         {/* Blue starburst icon top-right */}
         <div className="hidden lg:flex absolute flex-col -right-4 top-10 w-28 h-28 bg-[var(--blue)] text-white items-center justify-center transform -rotate-12 z-20" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
            <img src="/walking-icon.svg" alt="" className="w-8 h-8 invert" />
            <span className="font-bold"></span>
         </div>

        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 rounded-[3rem] relative">
          
          <div className="flex-1 order-2 md:order-1 pr-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground/40">Become a Member</h2>
            <h3 className="text-2xl font-bold mb-6">Join the youth movement</h3>
            <p className="text-foreground/80 font-medium mb-8">
              By becoming an AIESEC Member, you get to:
            </p>
            
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded shrink-0 bg-[var(--blue)]/20 text-[var(--blue)] flex items-center justify-center">
                  <ShieldCheck size={14} />
                </div>
                <span className="font-medium text-sm">Develop your leadership</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded shrink-0 bg-[var(--blue)]/20 text-[var(--blue)] flex items-center justify-center">
                  <Globe size={14} />
                </div>
                <span className="font-medium text-sm">Gain life-long connections</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded shrink-0 bg-[var(--blue)]/20 text-[var(--blue)] flex items-center justify-center">
                  <Briefcase size={14} />
                </div>
                <span className="font-medium text-sm">Personal & Professional Development</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded shrink-0 bg-[var(--blue)]/20 text-[var(--blue)] flex items-center justify-center">
                  <Zap size={14} />
                </div>
                <span className="font-medium text-sm">Practical Experiences</span>
              </div>
            </div>

            <a
              href="https://join.aiesec.in/"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--blue)]/20 hover:bg-[var(--blue)] hover:text-white text-[var(--blue)] font-bold rounded-md transition-colors"
            >
              Apply now
            </a>
          </div>

          <div className="flex-1 w-full relative min-h-[350px] rounded-3xl overflow-hidden order-1 md:order-2">
             <div className="absolute inset-0 border-r-4 border-b-4 border-[var(--blue)] z-10 m-2 rounded-2xl pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
              alt="Classroom" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Hexagon Values Section */}
      <section className="max-w-6xl mx-auto w-full px-4 pt-16 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-lg mx-auto mb-16">We believe in developing value-driven leaders</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {[ 
              { color: 'bg-teal-400', name: 'Living' },
              { color: 'bg-orange-400', name: 'Enjoying' },
              { color: 'bg-blue-400', name: 'Acting' },
              { color: 'bg-gray-400', name: 'Demonstrating' },
              { color: 'bg-yellow-400', name: 'Striving' },
              { color: 'bg-green-400', name: 'Activating' },
            ].map((val, i) => (
               <div key={i} className={`w-20 h-24 sm:w-24 sm:h-28 ${val.color} flex flex-col items-center justify-center relative hover:-translate-y-2 transition-transform cursor-pointer drop-shadow-xl`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  <div className="w-10 h-10 bg-white/30 rounded-full mb-1"></div>
                  <span className="text-white font-bold text-[10px] tracking-wider relative bottom-1 uppercase">{val.name}</span>
               </div>
            ))}
        </div>
      </section>

    </div>
  );
}
