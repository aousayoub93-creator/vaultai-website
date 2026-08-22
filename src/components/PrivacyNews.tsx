import { useState } from "react";
import Reveal from "./Reveal";
import { ArrowRight } from "../icons";
import { newsArticlesPage1, type NewsArticle } from "../data/content";

const PAGE_SIZE = 6;
const allArticles: NewsArticle[] = newsArticlesPage1;
const totalPages = Math.max(1, Math.ceil(allArticles.length / PAGE_SIZE));

export default function PrivacyNews() {
  const [page, setPage] = useState(1);
  const pageArticles = allArticles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-background px-6 py-24 lg:px-10 lg:py-32"
      id="privacy-news"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,color-mix(in_oklch,var(--primary)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--primary)_10%,transparent)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute left-0 right-0 top-1/3 h-px animate-pulse bg-primary/20" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
                Intelligence desk / 02A
              </p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[.92] tracking-[-.045em] lg:text-7xl">
                Your Privacy Is
                <br />
                <span className="text-primary">Under Siege.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-muted-foreground lg:justify-self-end">
              Protecting your data has never been more critical. We are monitoring the incidents, research, and disclosure patterns shaping the cloud AI privacy conversation.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pageArticles.map((article, i) => (
            <Reveal key={article.url} delay={i * 60} className="h-full">
              <article className="group flex h-full flex-col border border-border bg-card/70 shadow-lg transition-all duration-400 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_50px_-24px_color-mix(in_oklch,var(--primary)_65%,transparent)]">
                <a
                  className="relative block aspect-[16/10] overflow-hidden border-b border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  href={article.url}
                  rel="noreferrer"
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
                    {article.tag}
                  </span>
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground">
                    <time dateTime={article.date}>{article.date}</time>
                    <span className="text-primary/80">External report</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-[1.15] tracking-[-.02em]">
                    <a
                      className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                      href={article.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{article.description}</p>
                  <div className="mt-7 flex items-center justify-between border-t border-border pt-4">
                    <a
                      className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-primary transition-all duration-300 group-hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                      href={article.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      className="font-mono text-[10px] text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                      href={article.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {article.source}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">
            Curated reports / page {page} of {totalPages}
          </p>
          <nav aria-label="Security intelligence pages" className="flex items-center gap-2">
            <button
              type="button"
              className="mr-2 inline-flex min-h-11 items-center gap-2 px-2 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                aria-current={n === page ? "page" : undefined}
                className={
                  n === page
                    ? "grid h-10 w-10 place-items-center border font-mono text-xs transition-colors border-primary bg-primary text-primary-foreground"
                    : "grid h-10 w-10 place-items-center border font-mono text-xs transition-colors border-border text-muted-foreground hover:border-primary hover:text-primary"
                }
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              className="ml-2 inline-flex min-h-11 items-center gap-2 px-2 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
