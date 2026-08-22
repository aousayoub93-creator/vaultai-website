import Logo from "./Logo";
import { footerNavLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-background px-6 pb-8 pt-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <Logo />
            <p className="mt-7 max-w-sm text-sm leading-6 text-muted-foreground">
              Private AI infrastructure for businesses that take data seriously.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.16em] text-primary">Navigate</p>
            <div className="mt-5 space-y-3 text-sm text-muted-foreground">
              {footerNavLinks.map((link) => (
                <a key={link.href} className="block hover:text-primary" href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.16em] text-primary">Vault Systems</p>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">Your Vault. Your Data. Your AI.</p>
            <p className="mt-4 font-mono text-[10px] text-muted-foreground">Morocco / On-premise first</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-7 font-mono text-[9px] uppercase tracking-[.14em] text-muted-foreground sm:flex-row">
          <span>© 2026 Vault Systems</span>
          <span>Private by design / Built for control</span>
        </div>
      </div>
    </footer>
  );
}
