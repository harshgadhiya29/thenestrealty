import { createFileRoute } from "@tanstack/react-router";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef } from "react";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — The Nest Realty" },
      { name: "description", content: "Insights on Ahmedabad real estate, investment trends and home-buying tips." },
      { property: "og:title", content: "Blogs — The Nest Realty" },
      { property: "og:description", content: "Real estate insights from Ahmedabad's trusted advisors." },
    ],
  }),
  component: Blogs,
});

const posts = [
  { img: p1, title: "Buying Your First Home in Ahmedabad: A 2026 Guide", date: "May 12, 2026", cat: "Buying", read: "6 min" },
  { img: p2, title: "Why Shilaj is Quietly Becoming Ahmedabad's Premium Address", date: "May 5, 2026", cat: "Markets", read: "4 min" },
  { img: p3, title: "Commercial vs Residential: Where to Invest in 2026", date: "Apr 28, 2026", cat: "Investment", read: "7 min" },
  { img: p4, title: "Land Investment 101: What to Check Before You Buy", date: "Apr 19, 2026", cat: "Land", read: "5 min" },
  { img: p2, title: "How NRIs Can Buy Property in India Without Stress", date: "Apr 8, 2026", cat: "NRI", read: "8 min" },
  { img: p1, title: "Home Loan Trends and What They Mean For You", date: "Mar 30, 2026", cat: "Finance", read: "5 min" },
];

const featured = posts[0];
const rest = posts.slice(1);

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animationPlayState = "running";
            (e.target as HTMLElement).classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Blogs() {
  useScrollReveal();

  return (
    <PageLayout>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="blog-hero relative overflow-hidden">
        {/* Animated background lines */}
        <div className="hero-grid" aria-hidden />

        <div className="container-x relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
          {/* Eyebrow */}
          <div className="hero-eyebrow flex items-center gap-3 mb-8">
            <span className="block h-px w-10 bg-primary" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">The Nest Journal</span>
          </div>

          {/* Split headline */}
          <div className="hero-headline-wrap max-w-4xl">
            <h1 className="hero-headline font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-foreground">
              <span className="block overflow-hidden">
                <span className="hero-line-1 inline-block">Real Estate.</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line-2 inline-block text-outline">Real Talk.</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line-3 inline-block">Real Ahmedabad.</span>
              </span>
            </h1>
          </div>

          {/* Bottom bar */}
          <div className="hero-meta mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-border pt-8">
            <p className="max-w-sm text-muted-foreground text-base leading-relaxed hero-sub">
              Market shifts, investment strategies, and honest home-buying guides written for people who take property seriously.
            </p>
            <div className="hero-stats flex gap-8 hero-sub">
              {[["50+", "Articles"], ["12k+", "Readers"], ["Weekly", "Updates"]].map(([val, label]) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-foreground font-display">{val}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating category pills */}
        <div className="hero-tags container-x pb-6 flex flex-wrap gap-2 relative z-10">
          {["All", "Buying", "Markets", "Investment", "Land", "NRI", "Finance"].map((tag, i) => (
            <button
              key={tag}
              className={`tag-pill text-xs px-4 py-1.5 rounded-full border transition-all duration-200 ${
                i === 0
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
              style={{ animationDelay: `${0.6 + i * 0.07}s` }}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* ── FEATURED POST ───────────────────────────────────────── */}
      <section className="py-12 md:py-16 border-y border-border bg-muted/30">
        <div className="container-x" data-reveal>
          <div className="reveal-item group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-background shadow-elegant hover:shadow-xl transition-shadow duration-500">
            {/* Image */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={featured.img}
                alt={featured.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full font-medium">
                ✦ Featured
              </span>
            </div>
            {/* Content */}
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium mb-4">
                  {featured.cat}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-display leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Navigating your first property purchase in one of India's fastest-growing cities. We break down every step — from locality selection to loan disbursement.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
                  <span>{featured.read} read</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link">
                  Read article
                  <ArrowRight className="h-4 w-4 translate-x-0 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION LABEL ───────────────────────────────────────── */}
      <div className="container-x pt-16 pb-6" data-reveal>
        <div className="reveal-item flex items-center gap-4">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Latest Articles</span>
          <span className="flex-1 h-px bg-border" />
        </div>
      </div>

      {/* ── GRID ────────────────────────────────────────────────── */}
      <section className="pb-24 md:pb-32">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <article
              key={i}
              data-reveal
              className="reveal-item group bg-background border border-border rounded-xl overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-400"
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                {/* Color overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-400" />
                <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-xs px-3 py-1 rounded-full font-medium border border-border/50">
                  {p.cat}
                </span>
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{p.date}</span>
                  <span>{p.read} read</span>
                </div>
                <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary font-medium group/link">
                  Read more
                  <ArrowRight className="h-3 w-3 translate-x-0 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Styles ─────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');

        .font-display { font-family: 'DM Serif Display', Georgia, serif; }

        /* Hero background grid */
        .hero-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(hsl(var(--border) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border) / 0.5) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%);
          animation: gridFadeIn 1.2s ease forwards;
        }
        @keyframes gridFadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }

        /* Outlined text */
        .text-outline {
          -webkit-text-stroke: 2px hsl(var(--primary));
          color: transparent;
        }

        /* Hero staggered line reveals */
        .hero-line-1, .hero-line-2, .hero-line-3 {
          display: inline-block;
          transform: translateY(110%);
          animation: slideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-line-1 { animation-delay: 0.1s; }
        .hero-line-2 { animation-delay: 0.22s; }
        .hero-line-3 { animation-delay: 0.34s; }

        @keyframes slideUp {
          to { transform: translateY(0); }
        }

        .hero-eyebrow {
          opacity: 0;
          animation: fadeInUp 0.6s ease 0.05s forwards;
        }
        .hero-sub {
          opacity: 0;
          animation: fadeInUp 0.6s ease 0.5s forwards;
        }
        .hero-tags .tag-pill {
          opacity: 0;
          animation: fadeInUp 0.5s ease forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Scroll reveal */
        [data-reveal] .reveal-item {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease calc(var(--delay, 0s)), transform 0.6s cubic-bezier(0.16,1,0.3,1) calc(var(--delay, 0s));
        }
        [data-reveal].revealed .reveal-item {
          opacity: 1;
          transform: translateY(0);
        }
        /* Featured (single child, no delay var needed) */
        [data-reveal]:not(:has(.reveal-item)) {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        [data-reveal].revealed:not(:has(.reveal-item)) {
          opacity: 1; transform: translateY(0);
        }
      `}</style>
    </PageLayout>
  );
}