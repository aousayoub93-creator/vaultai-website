import { useState } from "react";
import Reveal from "./Reveal";
import { ChevronDown } from "../icons";
import { faqItems } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-border bg-card px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Field notes / 08</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-.04em] lg:text-6xl">
              Questions worth
              <br />
              <span className="text-primary">answering plainly.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal className="divide-y divide-border border-y border-border">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium transition-colors hover:text-primary"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-primary transition-transform"
                    style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                  />
                </button>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <p className="min-h-0 overflow-hidden text-sm leading-7 text-muted-foreground">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
