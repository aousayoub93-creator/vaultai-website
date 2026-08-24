import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import {
  User,
  CloudUpload,
  Server,
  Share2,
  Globe,
  Brain,
  FileLock,
  ShieldCheck,
  LockKeyhole,
  MapPin,
  DollarSign,
  Users,
  AlertTriangle,
  X,
  ArrowRight,
} from "../icons";
import {
  cloudFlow,
  vaultFlow,
  cloudRisks,
  vaultGains,
  cloudResult,
  vaultResult,
  valueStripItems,
  type FlowStep,
  type ValueStripItem,
} from "../data/content";

const flowIconMap: Record<FlowStep["icon"], typeof User> = {
  user: User,
  cloudUpload: CloudUpload,
  server: Server,
  share2: Share2,
  globe: Globe,
  shield: ShieldCheck,
  brain: Brain,
  fileLock: FileLock,
  shieldCheck: ShieldCheck,
};

const valueIconMap: Record<ValueStripItem["icon"], typeof User> = {
  lockKeyhole: LockKeyhole,
  mapPin: MapPin,
  shieldCheck: ShieldCheck,
  dollarSign: DollarSign,
  users: Users,
  fileLock: FileLock,
};

function useStagger(count: number, active: boolean) {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (!active) return;
    setVisible(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisible(i);
      if (i >= count) clearInterval(id);
    }, 140);
    return () => clearInterval(id);
  }, [active, count]);
  return visible;
}

function FlowPanel({
  tone,
  title,
  subtitle,
  icon: PanelIcon,
  steps,
  bullets,
  bulletsLabel,
  bulletIcon: BulletIcon,
  result,
  resultIcon: ResultIcon,
  active,
}: {
  tone: "danger" | "primary";
  title: string;
  subtitle: string;
  icon: typeof User;
  steps: FlowStep[];
  bullets: string[];
  bulletsLabel: string;
  bulletIcon: typeof User;
  result: { label: string; body: string };
  resultIcon: typeof User;
  active: boolean;
}) {
  const visibleSteps = useStagger(steps.length, active);
  const accent = tone === "danger" ? "text-danger" : "text-primary";
  const borderAccent = tone === "danger" ? "border-danger/35" : "border-primary/35";
  const badgeBg = tone === "danger" ? "bg-danger/12" : "bg-primary/12";
  const resultBg = tone === "danger" ? "bg-danger/8" : "bg-primary/8";
  const ringAccent = tone === "danger" ? "shadow-[0_0_24px_-8px_var(--danger)]" : "shadow-[0_0_24px_-8px_var(--primary)]";

  return (
    <div className={`rounded-2xl border ${borderAccent} bg-card/40 p-6 lg:p-8`}>
      <div className="flex items-center gap-4">
        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${badgeBg} ${ringAccent}`}>
          <PanelIcon className={`h-6 w-6 ${accent}`} />
        </span>
        <div>
          <h3 className={`font-mono text-base font-bold uppercase tracking-[.08em] ${accent}`}>{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0">
        {steps.map((step, i) => {
          const StepIcon = flowIconMap[step.icon];
          const shown = i < visibleSteps;
          return (
            <div key={step.title} className="flex flex-1 items-center lg:items-stretch">
              <div
                className="flex-1 rounded-xl border border-border bg-background p-4 transition-all duration-500"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "none" : "translateY(10px)",
                }}
              >
                <span className={`grid h-9 w-9 place-items-center rounded-full ${badgeBg}`}>
                  <StepIcon className={`h-4 w-4 ${accent}`} />
                </span>
                <p className="mt-3 text-xs font-semibold leading-4">
                  <span className={`${accent} font-mono`}>{i + 1}.</span> {step.title}
                </p>
                <p className="mt-1 text-[11px] leading-4 text-muted-foreground">{step.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="flex shrink-0 items-center justify-center px-1 py-2 transition-opacity duration-500 lg:px-2"
                  style={{ opacity: i < visibleSteps - 1 ? 1 : 0.15 }}
                >
                  <ArrowRight className={`h-4 w-4 rotate-90 lg:rotate-0 ${accent}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={`mt-6 rounded-xl border ${borderAccent} p-5`}>
        <p className={`flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[.14em] ${accent}`}>
          <span className={`grid h-6 w-6 place-items-center rounded-full ${badgeBg}`}>
            <BulletIcon className="h-3.5 w-3.5" />
          </span>
          {bulletsLabel}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {bullets.map((b) => (
            <p key={b} className="text-xs leading-5 text-muted-foreground">
              {b}
            </p>
          ))}
        </div>
      </div>

      <div className={`mt-5 flex items-center justify-between gap-4 rounded-xl border ${borderAccent} bg-background p-5`}>
        <div>
          <p className={`font-mono text-[10px] font-semibold uppercase tracking-[.14em] ${accent}`}>
            {result.label}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-foreground">{result.body}</p>
        </div>
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${borderAccent} ${resultBg}`}>
          <ResultIcon className={`h-5 w-5 ${accent}`} />
        </span>
      </div>
    </div>
  );
}

export default function Comparison() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background px-6 py-24 lg:px-10 lg:py-32" id="compare">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-border pb-8 lg:flex-row lg:items-start">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Decision matrix / 03</p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[.95] tracking-[-.04em] lg:text-7xl">
                Control is not a feature.
                <br />
                <span className="text-primary">It is the architecture.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground lg:text-right">
              A direct comparison for leaders evaluating where business intelligence should live.
            </p>
          </div>
        </Reveal>

        <div ref={sectionRef} className="relative grid gap-10 lg:grid-cols-2 lg:gap-20">
          <FlowPanel
            tone="danger"
            title="Cloud AI services"
            subtitle="You give up control"
            icon={CloudUpload}
            steps={cloudFlow}
            bullets={cloudRisks}
            bulletsLabel="What you risk"
            bulletIcon={AlertTriangle}
            result={cloudResult}
            resultIcon={X}
            active={active}
          />

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-primary bg-background font-serif text-xl text-primary shadow-[0_0_36px_color-mix(in_oklch,var(--primary)_50%,transparent)]">
              VS
            </span>
          </div>

          <FlowPanel
            tone="primary"
            title="Vault AI"
            subtitle="You keep control"
            icon={ShieldCheck}
            steps={vaultFlow}
            bullets={vaultGains}
            bulletsLabel="What you gain"
            bulletIcon={ShieldCheck}
            result={vaultResult}
            resultIcon={ShieldCheck}
            active={active}
          />
        </div>

        <Reveal delay={100} className="mt-10 overflow-hidden rounded-2xl border border-border">
          <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-6">
            {valueStripItems.map((item) => {
              const Icon = valueIconMap[item.icon];
              return (
                <div key={item.title} className="bg-card/30 p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/12">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[.1em] text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.body}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-10 flex justify-center">
          <div className="flex max-w-2xl items-center gap-5 rounded-2xl border border-primary/40 bg-primary/8 px-8 py-7 text-left shadow-[0_0_40px_-16px_var(--primary)]">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/50 bg-primary/12">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </span>
            <div>
              <p className="text-lg leading-7 text-foreground sm:text-xl">
                Vault AI is not another tool. It is{" "}
                <span className="text-primary">your private AI infrastructure.</span>
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Built for leaders who refuse to trade control for convenience.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
