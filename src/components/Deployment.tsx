import Reveal from "./Reveal";
import { Server, Network, ArrowRight } from "../icons";
import { deploymentOptions } from "../data/content";

const iconMap = { server: Server, network: Network };

export default function Deployment() {
  return (
    <section className="bg-background px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Deployment / 07</p>
            <h2 className="mt-5 font-serif text-5xl tracking-[-.04em] lg:text-6xl">
              Choose where your intelligence lives.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {deploymentOptions.map((option, i) => {
            const Icon = iconMap[option.icon];
            return (
              <Reveal key={option.title} delay={i * 60}>
                <div
                  className={
                    option.highlighted
                      ? "border border-primary bg-primary/8 p-8 lg:p-12"
                      : "border border-border bg-card p-8 lg:p-12"
                  }
                >
                  <div className="flex items-center justify-between">
                    <Icon className={option.highlighted ? "h-7 w-7 text-primary" : "h-7 w-7 text-muted-foreground"} />
                    <span
                      className={
                        option.highlighted
                          ? "font-mono text-[10px] uppercase tracking-[.15em] text-primary"
                          : "font-mono text-[10px] uppercase tracking-[.15em] text-muted-foreground"
                      }
                    >
                      {option.badge}
                    </span>
                  </div>
                  <h3 className="mt-20 font-serif text-4xl">{option.title}</h3>
                  <p className="mt-4 max-w-md leading-7 text-muted-foreground">{option.body}</p>
                  {option.cta && (
                    <a
                      className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.13em] text-primary hover:underline"
                      href={option.cta.href}
                    >
                      {option.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
