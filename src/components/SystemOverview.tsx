import Reveal from "./Reveal";
import { systemSteps } from "../data/content";

export default function SystemOverview() {
  return (
    <section className="border-y border-border bg-card px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">System overview / 04</p>
              <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-.04em] lg:text-6xl">
                Your knowledge.
                <br />
                <span className="text-primary">One private layer.</span>
              </h2>
              <p className="mt-7 max-w-md leading-7 text-muted-foreground">
                Vault AI gets more useful as your team connects the information it already owns — without turning that information into someone else’s training data.
              </p>
            </div>
            <div className="grid gap-0 border-l border-border">
              {systemSteps.map((step) => (
                <div
                  key={step.number}
                  className="group border-b border-border p-6 transition-colors hover:bg-background lg:grid lg:grid-cols-[80px_180px_1fr] lg:items-center"
                >
                  <span className="font-mono text-xs text-primary">{step.number}</span>
                  <h3 className="mt-5 text-2xl font-semibold lg:mt-0">{step.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground lg:mt-0">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
