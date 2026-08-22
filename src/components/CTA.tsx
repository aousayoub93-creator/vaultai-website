import { useState } from "react";
import Reveal from "./Reveal";
import { Mail, ArrowRight } from "../icons";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-primary px-6 py-24 text-primary-foreground lg:px-10 lg:py-32" id="assessment">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.9fr] lg:items-end">
        <Reveal>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] opacity-70">Next step / 09</p>
            <h2 className="mt-5 max-w-3xl font-serif text-6xl leading-[.9] tracking-[-.05em] lg:text-8xl">
              Find out what
              <br />
              <em>private AI</em> looks
              <br />
              like for you.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-8 opacity-80">
              Book a free 30-minute private AI readiness assessment with Vault Systems. No sales theatre. Just your environment, your constraints, and an honest starting point.
            </p>
          </div>
        </Reveal>

        <Reveal className="border border-primary-foreground/30 bg-primary-foreground/8 p-7">
          <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.16em]">
            <Mail className="h-4 w-4" />
            Private request
          </div>
          {submitted ? (
            <p className="text-sm leading-6">Thank you. We will be in touch shortly.</p>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[.12em] opacity-70">Work email</span>
                <input
                  className="mt-2 w-full border border-primary-foreground/30 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-primary-foreground/50 focus:border-primary-foreground"
                  placeholder="you@company.com"
                  required
                  type="email"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[.12em] opacity-70">
                  What are you protecting?
                </span>
                <textarea
                  className="mt-2 w-full resize-none border border-primary-foreground/30 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-primary-foreground/50 focus:border-primary-foreground"
                  placeholder="A short note about your environment"
                  required
                  rows={3}
                />
              </label>
              <button
                className="mt-2 flex w-full items-center justify-between bg-primary-foreground px-4 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-primary transition-transform hover:scale-[1.02] active:scale-[.98]"
                type="submit"
              >
                Request my assessment
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
