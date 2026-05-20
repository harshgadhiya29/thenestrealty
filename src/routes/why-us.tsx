import { createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, Users, ShieldCheck, Sparkles, Globe2, Clock, ThumbsUp } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Us — The Nest Realty" },
      { name: "description", content: "Why families and investors trust The Nest Realty for real estate in Ahmedabad." },
      { property: "og:title", content: "Why Us — The Nest Realty" },
      { property: "og:description", content: "Built on trust, delivered with detail." },
    ],
  }),
  component: WhyUs,
});

const reasons = [
  { icon: Award,      title: "15+ Years of Experience", desc: "Decades of combined expertise across residential, commercial and land deals in Ahmedabad." },
  { icon: BookOpen,   title: "Deep Market Knowledge",   desc: "Hyper-local insights on micro-markets, pricing trends and upcoming infrastructure." },
  { icon: Users,      title: "Professional Team",       desc: "RERA-aware advisors who treat every brief like their own." },
  { icon: ShieldCheck,title: "Transparent Deals",       desc: "Honest pricing, clear paperwork, zero hidden surprises." },
  { icon: Sparkles,   title: "Curated Inventory",       desc: "We only put forward properties we'd recommend to our own family." },
  { icon: Globe2,     title: "NRI-Friendly",            desc: "Remote-first process with secure documentation and trusted on-ground support." },
  { icon: Clock,      title: "Fast Turnaround",         desc: "Tight response times, organised follow-ups, and no time wasted." },
  { icon: ThumbsUp,   title: "Long-Term Relationships", desc: "Most of our business comes from referrals — and that says it all." },
];

/* ── tiny hook: fires when element enters viewport ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.5);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function WhyUs() {
  return (
    <PageLayout>
      {/* ════════════════════════════════════
          HERO — split editorial layout
      ════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-background">
        {/* diagonal accent stripe */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--primary)/0.06) 0%, transparent 55%)",
          }}
        />
        {/* top rule */}
        <div className="container-x pt-10 pb-0">
          <div className="h-px w-full bg-border" />
        </div>

        <div className="container-x grid lg:grid-cols-2 gap-0 min-h-[560px] items-stretch">
          {/* LEFT: large typographic statement */}
          <div
            className="flex flex-col justify-center py-20 pr-0 lg:pr-16 border-r-0 lg:border-r border-border"
            style={{ animation: "fadeSlideUp 0.7s ease both" }}
          >
            <p
              className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-6"
              style={{ animation: "fadeSlideUp 0.6s ease both" }}
            >
              The Nest Realty · Est. 2009
            </p>

            <h1
              className="font-bold leading-[1.05] text-foreground"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
                animation: "fadeSlideUp 0.75s 0.1s ease both",
              }}
            >
              Why families
              <br />
              <span className="text-primary">trust us</span>
              <br />
              with their
              <br />
              biggest move.
            </h1>

            <div
              className="mt-8 h-px w-16 bg-primary"
              style={{ animation: "expandWidth 0.8s 0.4s ease both" }}
            />

            <p
              className="mt-6 text-muted-foreground text-base leading-relaxed max-w-md"
              style={{ animation: "fadeSlideUp 0.75s 0.3s ease both" }}
            >
              Eight reasons families, investors and NRIs keep coming back — and
              recommending us to people they care about.
            </p>
          </div>

          {/* RIGHT: stat tiles stacked */}
          <div
            className="flex flex-col justify-center py-20 pl-0 lg:pl-16 gap-0"
            style={{ animation: "fadeSlideUp 0.8s 0.2s ease both" }}
          >
            {[
              { value: 15,   suffix: "+",  label: "Years in Ahmedabad real estate" },
              { value: 1200, suffix: "+",  label: "Families & investors served" },
              { value: 94,   suffix: "%",  label: "Client referral rate" },
          
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="group flex items-center gap-6 py-7 border-b border-border last:border-b-0 hover:pl-2 transition-all duration-300"
                style={{ animation: `fadeSlideUp 0.7s ${0.2 + i * 0.1}s ease both` }}
              >
                <span
                  className="text-primary font-bold tabular-nums shrink-0"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1 }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-muted-foreground leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* bottom rule */}
        <div className="container-x">
          <div className="h-px w-full bg-border" />
        </div>
      </section>

      {/* ════════════════════════════════════
          REASONS GRID
      ════════════════════════════════════ */}
      <ReasonGrid />

      {/* ════════════════════════════════════
          CLOSING QUOTE / CTA STRIP
      ════════════════════════════════════ */}
      <CtaStrip />

      {/* keyframe definitions */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandWidth {
          from { width: 0; opacity: 0; }
          to   { width: 4rem; opacity: 1; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </PageLayout>
  );
}

/* ── Reasons grid with scroll-triggered stagger ── */
function ReasonGrid() {
  const { ref, visible } = useInView(0.05);
  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container-x">
        {/* section label */}
        <div className="flex items-center gap-4 mb-14">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
            What sets us apart
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative p-7 rounded-xl border border-border bg-background overflow-hidden
                         hover:border-primary hover:shadow-[0_8px_32px_hsl(var(--primary)/0.12)]
                         transition-all duration-400 cursor-default"
              style={
                visible
                  ? { animation: `cardIn 0.55s ${i * 0.07}s ease both` }
                  : { opacity: 0 }
              }
            >
              {/* hover glow bg */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 20%, hsl(var(--primary)/0.07), transparent 70%)",
                }}
              />

              {/* icon */}
              <div className="relative h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center
                              group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <r.icon className="h-5 w-5" />
              </div>

              {/* index number */}
              <span className="absolute top-6 right-7 text-2xl font-bold text-muted-foreground/15 tabular-nums select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="relative mt-5 text-base font-semibold text-foreground leading-snug">
                {r.title}
              </h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA strip ── */
function CtaStrip() {
  const { ref, visible } = useInView(0.3);
  return (
    <section
      ref={ref}
      className="py-20 border-t border-border"
      style={visible ? { animation: "fadeSlideUp 0.7s ease both" } : { opacity: 0 }}
    >
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-2">
            Ready to begin?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Let's find your perfect property.
          </h2>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground
                     font-semibold text-sm tracking-wide hover:opacity-90 hover:scale-[1.03]
                     transition-all duration-200 shadow-md whitespace-nowrap"
        >
          Talk to an advisor →
        </a>
      </div>
    </section>
  );
}

export default WhyUs;