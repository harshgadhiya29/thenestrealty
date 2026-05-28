import { createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, Users, ShieldCheck, Sparkles, Globe2, Clock, ThumbsUp, Headphones } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";
import whyus from "@/assets/why-us.png";
import whycta from "@/assets/whyus-cta.png";


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
  { icon: Sparkles,   title: "Sales Execution",       desc: "Complete sales coordination from lead handling to site visits and final closures." },
  { icon: Globe2,     title: "Channel Partner Network",            desc: "Strong broker and partner connections that expand project exposure and sales opportunities." },
  { icon: Clock,      title: "Strategic Marketing",         desc: "Data-driven marketing strategies designed to improve visibility, engagement and project reach." },
  { icon: Headphones,   title: "After Sales Services", desc: "From documentation support to resale, rental and property assistance — we stay connected with our clients even after the deal is done." },
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
  {/* FULL BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src={whyus}
      alt="The Nest Realty"
      className="w-full h-full object-cover"
    />

    {/* dark + golden overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/35 to-background/10" />

    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--primary)/0.10) 0%, transparent 55%)",
      }}
    />
  </div>

  {/* TOP BORDER */}
  <div className="container-x relative z-10 pt-8">
    <div className="h-px w-full bg-white/10" />
  </div>

  {/* HERO CONTENT */}
  <div className="container-x relative z-10 min-h-[760px] flex items-center">
    <div className="max-w-[620px] py-20">
      
      {/* SMALL LABEL */}
      <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-6">
        The Nest Realty · Est. 2009
      </p>

      {/* HEADING */}
      <h1
        className="font-bold text-balck leading-[1.02]"
        style={{
          fontSize: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        Why Developers
        <br />
        Choose
        <br />
        <span className="text-primary">The Nest Realty</span>
      </h1>

      {/* divider */}
      <div className="mt-7 h-px w-16 bg-primary" />

      {/* DESCRIPTION */}
      <p className="mt-6 max-w-xl text-black/75 leading-relaxed text-base">
        We partner with developers to plan, market and sell projects the
        right way — with transparency, strategy and commitment at every
        step.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-4 mt-8">
        <button className="h-12 px-6 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg hover:opacity-90 transition">
          Explore Projects →
        </button>

        <button className="h-12 px-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-black hover:bg-white/20 transition font-medium">
          Get Quotation →
        </button>
      </div>
    </div>
  </div>

  {/* FLOATING STATS BAR */}
  <div className="container-x relative z-20 -mt-24 pb-10">
    <div className="grid grid-cols-2 lg:grid-cols-6 rounded-[2rem] overflow-hidden border border-white/10 bg-white/90 backdrop-blur-xl shadow-2xl">
      {[
        {
          value: "11+",
          label: "Years in Ahmedabad real estate",
        },
        {
          value: "1,100+",
          label: "Happy Families",
        },
        {
          value: "950+",
          label: "Homes Delivered",
        },
        {
          value: "50,000+",
          label: "Leads Generated",
        },
        {
          value: "12,000+",
          label: "Site Visits Generated",
        },
        {
          value: "365 Days",
          label: "365 Deals Our Milestone",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative px-6 py-7 text-center border-b lg:border-b-0 lg:border-r border-black/5 last:border-r-0"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-primary">
            {item.value}
          </h3>

          <p className="mt-2 text-sm leading-snug text-muted-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </div>
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
  className="py-16"
  style={visible ? { animation: "fadeSlideUp 0.7s ease both" } : { opacity: 0 }}
>
  <div className="container-x">
    <div className="relative overflow-hidden rounded-[2rem] border border-border min-h-[320px] lg:min-h-[360px]">
      
      {/* BACKGROUND IMAGE */}
      <img
        src={whycta}
        alt="Luxury interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* LEFT LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f2eb] via-[#f7f2eb]/30 to-transparent" />

      {/* SOFT GOLD OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary)/0.08) 0%, transparent 60%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-[520px] px-8 py-10 md:px-14 md:py-8">
          
          {/* SMALL LABEL */}
          <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">
            Ready to begin?
          </p>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.05]">
            Let’s find your
            <br />
            perfect property.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md text-sm md:text-base">
            Partner with experts who understand your goals
            and deliver results.
          </p>

          {/* BUTTON */}
          <div className="mt-7">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         bg-primary text-primary-foreground
                         font-medium text-sm shadow-lg
                         hover:opacity-90 hover:translate-y-[-2px]
                         transition-all duration-300"
            >
              Talk to an advisor
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default WhyUs;