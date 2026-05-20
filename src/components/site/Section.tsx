import { ReactNode } from "react";

export function SectionHeader({
  eyebrow, title, subtitle, center = false,
}: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground ${center ? "gold-line-center" : "gold-line"}`}>
        {title}
      </h2>
      {subtitle && <p className="mt-6 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function PageHero({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative bg-accent text-accent-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,var(--primary),transparent_60%)]" />
      <div className="container-x relative py-20 md:py-28">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">The Nest Realty</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-white/70 text-lg">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
