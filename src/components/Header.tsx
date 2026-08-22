import { useState } from "react";
import Logo from "./Logo";
import { Menu } from "../icons";
import { navLinks } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
      <Logo />
      <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:flex">
        {navLinks.map((link) => (
          <a key={link.href} className="transition-colors hover:text-primary" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a
        className="hidden border border-primary/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:block"
        href="#assessment"
      >
        Request assessment
      </a>
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        className="text-primary sm:hidden"
        onClick={() => setOpen((v) => !v)}
      >
        <Menu className="h-5 w-5" />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full z-20 border-b border-border bg-background px-6 py-6 sm:hidden">
          <nav className="flex flex-col gap-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="transition-colors hover:text-primary"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="border border-primary/60 px-4 py-3 text-center text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              href="#assessment"
              onClick={() => setOpen(false)}
            >
              Request assessment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
