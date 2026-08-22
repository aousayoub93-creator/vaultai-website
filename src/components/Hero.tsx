import Header from "./Header";
import { ArrowRight, ArrowDown } from "../icons";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden border-b border-border bg-background">
      <div
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,color-mix(in_oklch,var(--primary)_12%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--primary)_12%,transparent)_1px,transparent_1px)] [background-size:72px_72px]"
      />
      <div className="absolute right-[-12%] top-[12%] h-[560px] w-[560px] rounded-full bg-primary/8 blur-3xl" />

      <Header />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-24 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:pb-32 lg:pt-28">
        <div>
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Private infrastructure / 01
          </div>
          <h1 className="max-w-4xl font-serif text-[clamp(3.6rem,8vw,7.6rem)] leading-[.91] tracking-[-0.055em] text-foreground">
            Your Vault.
            <br />
            <span className="text-primary">Your Data.</span>
            <br />
            Your AI.
          </h1>
          <p className="mt-9 max-w-xl text-lg leading-8 text-muted-foreground">
            A private AI assistant for businesses that cannot afford to treat sensitive information like a public resource.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              className="group inline-flex items-center gap-3 bg-primary px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[.98]"
              href="#assessment"
            >
              Book a private assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
              href="#compare"
            >
              See the difference
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative flex items-end lg:justify-end">
          <div className="relative w-full max-w-[430px] border border-border bg-card/70 p-5 shadow-2xl backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4 font-mono text-[9px] uppercase tracking-[.16em] text-muted-foreground">
              <span>Vault AI / local node</span>
              <span className="flex items-center gap-2 text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
                Online
              </span>
            </div>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="ml-8 border-l border-primary/50 pl-4 text-muted-foreground">
                <span className="text-primary">QUERY</span>
                <br />
                What is our data retention policy?
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-5 w-5 shrink-0 border border-primary/60 text-center text-[9px] leading-5 text-primary">
                  V
                </div>
                <div className="leading-6 text-foreground">
                  Your policy retains operational records for seven years.
                  <span className="text-primary"> [01]</span>
                  <br />
                  <span className="text-muted-foreground">Source: Information Security Policy · §4.2</span>
                </div>
              </div>
              <div className="mt-8 border-t border-dashed border-border pt-4 text-[9px] uppercase tracking-[.12em] text-muted-foreground">
                <span className="text-primary">Local inference</span> / source-cited / no external request
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 border border-primary/50 bg-background px-4 py-3 font-mono text-[9px] uppercase tracking-[.14em] text-primary">
              Data stays here <span className="ml-2 text-muted-foreground">///</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.18em] text-muted-foreground lg:left-10 lg:right-10">
        <span>Built by Vault Systems</span>
        <span className="hidden sm:block">
          Scroll to inspect the system
          <ArrowDown className="ml-2 inline h-3 w-3" />
        </span>
        <span>v.01 / Private by design</span>
      </div>
    </section>
  );
}
