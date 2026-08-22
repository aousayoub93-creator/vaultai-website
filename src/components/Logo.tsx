export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-8 w-8 place-items-center border border-primary/70">
        <div className="h-3 w-3 bg-primary" />
        <div className="absolute inset-1 border border-primary/30" />
      </div>
      <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-foreground">
        VAULT<span className="text-primary">SYSTEMS</span>
      </span>
    </div>
  );
}
