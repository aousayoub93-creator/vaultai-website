import Reveal from "./Reveal";
import { CircleCheck, Database, Sparkles, FingerprintPattern, Network, ShieldCheck, Server } from "../icons";
import { capabilityCards, type CapabilityCard } from "../data/content";

const iconMap: Record<CapabilityCard["icon"], typeof Database> = {
  database: Database,
  sparkles: Sparkles,
  fingerprint: FingerprintPattern,
  network: Network,
  shield: ShieldCheck,
  server: Server,
};

export default function Capabilities() {
  return (
    <section className="bg-background px-6 py-24 lg:px-10 lg:py-32" id="capabilities">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Capability index / 05</p>
              <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[.95] tracking-[-.04em] lg:text-7xl">
                An assistant that
                <br />
                <span className="text-primary">knows its limits.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              No vague promises. The system is built around grounded answers, explicit access, and useful work.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {capabilityCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <Reveal key={card.title} delay={i * 60}>
                <div className="group h-full bg-background p-7 transition-colors hover:bg-card lg:p-8">
                  <Icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="mt-12 text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{card.body}</p>
                  <ul className="mt-7 space-y-3 border-t border-border pt-5">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3 text-xs leading-5 text-foreground">
                        <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
