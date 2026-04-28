import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto relative z-10 w-full glass rounded-t-3xl border-b-0 rounded-b-none mt-20 p-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <Link href="/" className="font-extrabold text-2xl tracking-wide text-foreground">
            AIESEC
          </Link>
          <p className="text-foreground/70 text-sm">
            We are passionately driven by one vision: peace and fulfillment of humankind&apos;s potential.
          </p>
          <a
            href="mailto:it@aiesec.in"
            className="flex items-center gap-2 text-[var(--teal)] font-medium hover:underline w-fit"
          >
            <Mail size={16} /> it@aiesec.in
          </a>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Programs</h4>
            <Link href="/global-volunteer" className="text-foreground/70 hover:text-foreground text-sm flex items-center gap-1">
              Global Volunteer <ArrowUpRight size={12} />
            </Link>
            <Link href="/global-talent" className="text-foreground/70 hover:text-foreground text-sm flex items-center gap-1">
              Global Talent <ArrowUpRight size={12} />
            </Link>
            <Link href="/global-teacher" className="text-foreground/70 hover:text-foreground text-sm flex items-center gap-1">
              Global Teacher <ArrowUpRight size={12} />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <Link href="/about" className="text-foreground/70 hover:text-foreground text-sm">
              Why We Exist
            </Link>
            <a href="https://aiesec.in/contact" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground text-sm">
              Contact Us
            </a>
            <a href="https://bit.ly/Operations_PrivacyPolicy" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[var(--glass-border)] text-center text-foreground/50 text-xs">
        <p>© {new Date().getFullYear()} AIESEC in India. All rights reserved.</p>
      </div>
    </footer>
  );
}
