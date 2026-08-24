import { useMemo, useRef, useState } from "react";
import Reveal from "./Reveal";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  ListIcon,
  ExternalLink,
  AlertTriangle,
  Globe,
  Users,
  ShieldCheck,
} from "../icons";
import { newsArticles, type NewsArticle } from "../data/content";

function monthKey(article: NewsArticle) {
  return article.sortDate.slice(0, 7); // YYYY-MM
}

function monthLabel(key: string) {
  const [year, month] = key.split("-").map(Number);
  const d = new Date(year, month - 1, 1);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" }).toUpperCase();
}

const ALL = "all" as const;

export default function PrivacyNews() {
  const months = useMemo(() => {
    const keys = Array.from(new Set(newsArticles.map(monthKey)));
    keys.sort((a, b) => (a < b ? 1 : -1)); // newest first
    return keys;
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(newsArticles.map((a) => a.category))).sort(),
    [],
  );

  const [selectedMonth, setSelectedMonth] = useState<string | typeof ALL>(months[0] ?? ALL);
  const [selectedCategory, setSelectedCategory] = useState<string | typeof ALL>(ALL);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const timelineRef = useRef<HTMLDivElement>(null);

  const filteredArticles = useMemo(
    () =>
      newsArticles.filter(
        (a) =>
          (selectedMonth === ALL || monthKey(a) === selectedMonth) &&
          (selectedCategory === ALL || a.category === selectedCategory),
      ),
    [selectedMonth, selectedCategory],
  );

  const majorIncidents = useMemo(() => {
    const now = new Date();
    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(now.getFullYear() - 1);
    return newsArticles.filter((a) => new Date(a.sortDate) >= oneYearAgo).length;
  }, []);

  function scrollTimeline(dir: -1 | 1) {
    timelineRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  }

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-background px-6 py-24 lg:px-10 lg:py-32"
      id="privacy-news"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,color-mix(in_oklch,var(--primary)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--primary)_10%,transparent)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute left-0 right-0 top-1/3 h-px animate-pulse bg-primary/20" />

      <div className="relative mx-auto max-w-7xl">
        {/* Hero: headline + stats + globe */}
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
                Real events. Real risks.
              </p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[.92] tracking-[-.045em] lg:text-7xl">
                Your Privacy
                <br />
                <span className="text-primary">Is Under Siege.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
                Every day, new breaches, leaks, and surveillance overreach put your data, your conversations, and
                your future at risk. Stay informed. Stay protected.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="border border-border bg-card/60 p-4">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-serif text-2xl leading-none">{majorIncidents}+</p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    Major incidents in the last 12 months
                  </p>
                </div>
                <div className="border border-border bg-card/60 p-4">
                  <Users className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-serif text-2xl leading-none">300M+</p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">Messages leaked in 2026 alone</p>
                </div>
                <div className="border border-border bg-card/60 p-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-serif text-2xl leading-none">Global</p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    Affecting users, enterprises &amp; governments
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-full border border-primary/25 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_70%)]" />
              <svg viewBox="0 0 200 200" className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] opacity-70">
                <circle cx="100" cy="100" r="94" fill="none" stroke="var(--border)" strokeWidth="1" />
                <circle cx="100" cy="100" r="94" fill="none" stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 6" />
                {Array.from({ length: 9 }, (_, i) => (
                  <line
                    key={`m-${i}`}
                    x1="100"
                    y1="6"
                    x2="100"
                    y2="194"
                    stroke="var(--border)"
                    strokeWidth="0.5"
                    transform={`rotate(${(i * 180) / 9} 100 100)`}
                  />
                ))}
                {[40, 65, 100, 135, 160].map((r) => (
                  <ellipse key={r} cx="100" cy="100" rx={94} ry={Math.abs(100 - r) < 1 ? 94 : (94 * Math.abs(100 - r)) / 100} fill="none" stroke="var(--border)" strokeWidth="0.5" />
                ))}
                <circle cx="100" cy="100" r="3" fill="var(--primary)">
                  <animate attributeName="r" values="3;6;3" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.3;1" dur="2.4s" repeatCount="indefinite" />
                </circle>
              </svg>

              <div className="absolute -left-4 top-2 max-w-[190px] border border-primary/40 bg-background/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:-left-8">
                <p className="font-mono text-[9px] uppercase tracking-[.1em] text-primary">300M+ Messages Leaked</p>
                <p className="mt-1 text-[10px] text-muted-foreground">Feb 2026 · Malwarebytes</p>
              </div>
              <div className="absolute -right-4 top-10 max-w-[190px] border border-border bg-background/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:-right-8">
                <p className="font-mono text-[9px] uppercase tracking-[.1em] text-primary">Court Orders Preserve Chats</p>
                <p className="mt-1 text-[10px] text-muted-foreground">May 2025 · Adweek</p>
              </div>
              <div className="absolute -left-6 bottom-16 max-w-[190px] border border-border bg-background/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:-left-10">
                <p className="font-mono text-[9px] uppercase tracking-[.1em] text-primary">AI Chats Leaked to Meta &amp; Google</p>
                <p className="mt-1 text-[10px] text-muted-foreground">May 2026 · Decrypt</p>
              </div>
              <div className="absolute -right-2 bottom-2 max-w-[190px] border border-border bg-background/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:-right-6">
                <p className="font-mono text-[9px] uppercase tracking-[.1em] text-primary">Google Hit With $1.4B Fine</p>
                <p className="mt-1 text-[10px] text-muted-foreground">May 2025 · Texas AG</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Date timeline + filters */}
        <Reveal delay={80} className="mt-16 border-t border-border pt-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.2em] text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                Explore the timeline
              </p>
              <h3 className="mt-3 font-serif text-2xl lg:text-3xl">Browse privacy incidents by date</h3>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <label className="flex flex-col gap-1">
                <span className="font-mono text-[9px] uppercase tracking-[.14em] text-muted-foreground">
                  Filter by category
                </span>
                <div className="relative">
                  <select
                    className="appearance-none border border-border bg-card px-3 py-2 pr-8 text-sm text-foreground outline-none focus:border-primary"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value={ALL}>All Categories</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                </div>
              </label>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] uppercase tracking-[.14em] text-muted-foreground">
                  Curated reports
                </span>
                <span className="text-sm text-foreground">{newsArticles.length} articles</span>
              </div>

              <div className="flex items-end gap-1 border border-border p-1">
                <button
                  type="button"
                  aria-label="Grid view"
                  aria-pressed={viewMode === "grid"}
                  className={`grid h-8 w-8 place-items-center transition-colors ${
                    viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="List view"
                  aria-pressed={viewMode === "list"}
                  className={`grid h-8 w-8 place-items-center transition-colors ${
                    viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <ListIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll dates earlier"
              className="grid h-9 w-9 shrink-0 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              onClick={() => scrollTimeline(-1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div ref={timelineRef} className="flex flex-1 gap-2 overflow-x-auto scroll-smooth py-1" style={{ scrollbarWidth: "none" }}>
              {months.map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-current={selectedMonth === key ? "true" : undefined}
                  className={`shrink-0 whitespace-nowrap border px-4 py-2 font-mono text-[10px] uppercase tracking-[.12em] transition-colors ${
                    selectedMonth === key
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                  onClick={() => setSelectedMonth(key)}
                >
                  {monthLabel(key)}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Scroll dates later"
              className="grid h-9 w-9 shrink-0 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              onClick={() => scrollTimeline(1)}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>

        {/* Articles */}
        <div
          key={`${selectedMonth}-${selectedCategory}-${viewMode}`}
          className={
            viewMode === "grid"
              ? "mt-10 grid animate-[fadeSlideIn_.35s_ease-out] gap-5 md:grid-cols-2 lg:grid-cols-3"
              : "mt-10 flex animate-[fadeSlideIn_.35s_ease-out] flex-col gap-4"
          }
        >
          {filteredArticles.length === 0 && (
            <p className="col-span-full py-12 text-center text-sm text-muted-foreground">
              No incidents recorded for this selection yet.
            </p>
          )}
          {filteredArticles.map((article, i) =>
            viewMode === "grid" ? (
              <Reveal key={article.id} delay={i * 50} className="h-full">
                <ArticleCard article={article} />
              </Reveal>
            ) : (
              <Reveal key={article.id} delay={i * 40}>
                <ArticleRow article={article} />
              </Reveal>
            ),
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-primary/60 px-6 py-3 font-mono text-[10px] uppercase tracking-[.13em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            onClick={() => {
              setSelectedMonth(ALL);
              setSelectedCategory(ALL);
            }}
          >
            View all incidents
            <ShieldCheck className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card/70 shadow-lg transition-all duration-400 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_50px_-24px_color-mix(in_oklch,var(--primary)_65%,transparent)]">
      <a
        className="relative block aspect-[16/10] overflow-hidden border-b border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        href={article.articleUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt={article.alt}
          className="h-full w-full object-cover grayscale-[.2] transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          src={article.image}
        />
        <div className="absolute inset-0 bg-background/10 transition-colors duration-400 group-hover:bg-background/35" />
        <span className="absolute left-4 top-4 border border-primary/50 bg-background/85 px-2 py-1 font-mono text-[9px] uppercase tracking-[.12em] text-primary backdrop-blur-sm">
          {article.category}
        </span>
      </a>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground">
          <time dateTime={article.sortDate}>{article.date}</time>
          <span className="text-primary/80">External report</span>
        </div>
        <h3 className="mt-5 text-xl font-semibold leading-[1.15] tracking-[-.02em]">
          <a
            className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            href={article.articleUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {article.title}
          </a>
        </h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{article.description}</p>
        <div className="mt-7 flex items-center justify-between border-t border-border pt-4">
          <a
            className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-primary transition-all duration-300 group-hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            href={article.articleUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            View article
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            className="inline-flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            href={article.sourceUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {article.sourceName}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}

function ArticleRow({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex flex-col gap-4 border border-border bg-card/70 p-4 transition-all duration-300 hover:border-primary/60 sm:flex-row sm:items-center">
      <a
        className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden border border-border sm:w-48"
        href={article.articleUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt={article.alt}
          className="h-full w-full object-cover grayscale-[.2] transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          src={article.image}
        />
      </a>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground">
          <span className="border border-primary/50 px-2 py-0.5 text-primary">{article.category}</span>
          <time dateTime={article.sortDate}>{article.date}</time>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-[1.2] tracking-[-.02em]">
          <a
            className="transition-colors hover:text-primary"
            href={article.articleUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {article.title}
          </a>
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{article.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <a
            className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-primary"
            href={article.articleUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            View article
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            className="inline-flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground underline decoration-border underline-offset-4 hover:text-primary"
            href={article.sourceUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {article.sourceName}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}
