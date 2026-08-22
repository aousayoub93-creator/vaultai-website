import Reveal from "./Reveal";
import { threatCards } from "../data/content";

export default function WhyVaultAI() {
  return (
    <section className="bg-primary px-6 py-24 text-primary-foreground lg:px-10 lg:py-32" id="why">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.2em] opacity-70">Threat model / 02</p>
              <h2 className="mt-5 max-w-sm font-serif text-5xl leading-[.95] tracking-[-.04em] lg:text-7xl">
                Your Privacy
                <br />
                <em>Under Siege.</em>
              </h2>
            </div>
            <p className="max-w-2xl self-end text-xl leading-9 opacity-85">
              Cloud AI makes sensitive information useful by sending it away. That trade-off is not acceptable for every business — especially when the data is the business.
            </p>
          </div>
        </Reveal>

        <div className="grid border-t border-primary-foreground/25 md:grid-cols-2 lg:grid-cols-5">
          {threatCards.map((card, i) => (
            <Reveal key={card.number} delay={i * 60}>
              <div className="h-full border-b border-primary-foreground/25 p-6 md:border-r lg:border-b-0">
                <span className="font-mono text-xs opacity-60">{card.number}</span>
                <h3 className="mt-14 min-h-16 text-lg font-semibold leading-6">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 opacity-70">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
