import Reveal from "./Reveal";
import { LockKeyhole } from "../icons";
import { securityItems } from "../data/content";

export default function Security() {
  return (
    <section className="relative overflow-hidden bg-card px-6 py-24 lg:px-10 lg:py-32" id="security">
      <div className="absolute right-0 top-0 h-full w-1/3 border-l border-border opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Security posture / 06</p>
            <h2 className="mt-5 max-w-lg font-serif text-5xl leading-[.95] tracking-[-.04em] lg:text-7xl">
              Designed for
              <br />
              <span className="text-primary">where data matters.</span>
            </h2>
            <div className="mt-10 flex items-center gap-4 border-l-2 border-primary pl-5">
              <LockKeyhole className="h-7 w-7 text-primary" />
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                On-premise deployment means locality is not a policy statement. It is a physical property of the system.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="space-y-8">
          {securityItems.map((item) => (
            <div key={item.title} className="border-b border-border pb-8">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">{item.body}</p>
            </div>
          ))}
          <p className="font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground">
            Designed around regulations. No formal certification claimed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
