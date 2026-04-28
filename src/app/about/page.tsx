import { HeartHandshake, Globe2, Lightbulb, Users2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold max-w-4xl tracking-tight leading-loose mb-6">
          Why We <span className="text-gradient">Exist.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl font-light mb-12 leading-relaxed">
          Peace and fulfillment of humankind&apos;s potential. Through cross-cultural exchanges, we empower young people to develop practical leadership skills and create a positive impact.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto w-full px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          <div className="glass p-8 flex flex-col justify-end group hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-auto w-12 h-12 rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] flex items-center justify-center border border-[var(--teal)]/20 shadow-[inset_0_0_15px_var(--teal-glow)]">
              <Globe2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Living Diversity</h3>
            <p className="text-foreground/70 text-sm font-light leading-relaxed">
              We seek to learn from the different ways of life and opinions represented in our multicultural environment.
            </p>
          </div>

          <div className="glass p-8 flex flex-col justify-end group hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-auto w-12 h-12 rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] flex items-center justify-center border border-[var(--teal)]/20 shadow-[inset_0_0_15px_var(--teal-glow)]">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Demonstrating Integrity</h3>
            <p className="text-foreground/70 text-sm font-light leading-relaxed">
              We are consistent and transparent in our decisions and actions. We fulfil our commitments.
            </p>
          </div>

          <div className="glass p-8 flex flex-col justify-end group hover:-translate-y-2 transition-transform duration-300">
             <div className="mb-auto w-12 h-12 rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] flex items-center justify-center border border-[var(--teal)]/20 shadow-[inset_0_0_15px_var(--teal-glow)]">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Striving for Excellence</h3>
            <p className="text-foreground/70 text-sm font-light leading-relaxed">
              We aim to deliver the highest quality performance in everything we do. Through creativity and innovation we seek to continuously improve.
            </p>
          </div>
          
           <div className="glass p-8 flex flex-col justify-end group hover:-translate-y-2 transition-transform duration-300">
             <div className="mb-auto w-12 h-12 rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] flex items-center justify-center border border-[var(--teal)]/20 shadow-[inset_0_0_15px_var(--teal-glow)]">
              <Users2 size={24} />
            </div>
             <h3 className="text-xl font-bold mb-3">Activating Leadership</h3>
            <p className="text-foreground/70 text-sm font-light leading-relaxed">
              We lead by example and inspire leadership through our activities. We take full responsibility for developing the potential of other people.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
