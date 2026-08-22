import Reveal from "./Reveal";
import { Check } from "../icons";
import { comparisonRows } from "../data/content";

export default function Comparison() {
  return (
    <section className="bg-background px-6 py-24 lg:px-10 lg:py-32" id="compare">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-border pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Decision matrix / 03</p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[.95] tracking-[-.04em] lg:text-7xl">
                Control is not a feature.
                <br />
                <span className="text-primary">It is the architecture.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              A direct comparison for leaders evaluating where business intelligence should live.
            </p>
          </div>
        </Reveal>

        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="bg-card font-mono text-[10px] uppercase tracking-[.14em]">
                <th className="w-[29%] p-5 text-muted-foreground">Dimension</th>
                <th className="w-[35%] border-l border-border p-5 text-muted-foreground">Cloud AI services</th>
                <th className="border-l border-primary/40 bg-primary/8 p-5 text-primary">Vault AI</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.dimension} className={i % 2 === 1 ? "bg-card/50" : ""}>
                  <th className="border-t border-border p-5 text-sm font-medium text-foreground">
                    {row.dimension}
                  </th>
                  <td className="border-l border-border border-t p-5 text-sm text-muted-foreground">{row.cloud}</td>
                  <td className="border-l border-primary/20 border-t p-5 text-sm font-medium text-foreground">
                    <Check className="mr-2 inline h-4 w-4 text-primary" />
                    {row.vault}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
