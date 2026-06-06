import { createFileRoute } from "@tanstack/react-router";
import { Play, ArrowRight, ChevronLeft, ChevronRight, Users, Video, Heart, TrendingUp, Megaphone, MapPin } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";
const campainHero = "/assets/campainehero.png";

export const Route = createFileRoute("/campaigns")({
  head: () => ({
    meta: [
      { title: "Campaigns — The Nest Realty" },
      { name: "description", content: "Creative real estate campaigns that connect people with projects and deliver real results." },
      { property: "og:title", content: "Campaigns — The Nest Realty" },
      { property: "og:description", content: "Campaign showcase from Ahmedabad's trusted real estate advisors." },
    ],
  }),
  component: Campaigns,
});

// ── Data ─────────────────────────────────────────────────────────
const campaigns = [
  {
    number: "01",
    eyebrow: "TNTC CAMPAIGN",
    title: "Vruthi toh\nAhiya Vase Che.",
    description: "A heartfelt campaign that celebrates living close to nature with modern comforts and thoughtful spaces.",
    reels: "6 Reels",
    type: "Concept Campaign",
    theme: "light",
    playlistId: "PLzjqr-vXhLMGsxPcvputEas6ewApWbvJm",
    playlistUrl: "https://www.youtube.com/playlist?list=PLzjqr-vXhLMGsxPcvputEas6ewApWbvJm",
    color: "#C8973A",
  },
  {
    number: "02",
    eyebrow: "AARYAMAN KALPRUKSH CAMPAIGN",
    title: "Maango\nTe Made.",
    description: "A promise of thoughtful living, crafted for a better tomorrow and a life full of possibilities.",
    reels: "5 Reels",
    type: "Concept Campaign",
    theme: "light",
    playlistId: "PLzjqr-vXhLMHX91qE8y4DE1fN_WJqcRtW",
    playlistUrl: "https://www.youtube.com/playlist?list=PLzjqr-vXhLMHX91qE8y4DE1fN_WJqcRtW",
    color: "#C8973A",
  },
  {
    number: "03",
    eyebrow: " CHANNEL PARTNER MEET",
    title: "Channel\n Partner Meet.",
    description: "A successful meet that brought together our valuable channel partners to align, connect and grow.",
    reels: "6 Reels",
    type: "Channel Partner Meet",
    theme: "dark",
    playlistId: "PLzjqr-vXhLMG6GZFlx3Tzz9fG6n2OUozK",
    playlistUrl: "https://youtube.com/playlist?list=PLzjqr-vXhLMG6GZFlx3Tzz9fG6n2OUozK",
    color: "#8B6FE8",
  },
  {
    number: "04",
    eyebrow: "ANNUAL EXCELLENCE AWARD",
    title: "Annual\nExcellence Award.",
    description: "Celebrating achievements, recognizing hard work and inspiring excellence across our team.",
    reels: "6 Reels",
    type: "Team Celebration",
    theme: "light",
    playlistId: "PLzjqr-vXhLMFkflVHW5la8OXGVER0yk3m",
    playlistUrl: "https://youtube.com/playlist?list=PLzjqr-vXhLMFkflVHW5la8OXGVER0yk3m",
    color: "#C8973A",
  },
];

const heroStats = [
  { icon: Megaphone, value: "50000+", label: "Qualified Leads Generated", sub: "active projects" },
  { icon: Video, value: "100+", label: "Campaign Reels Created", sub: "across platforms" },
  { icon: Users, value: "5M+", label: "Reel Views Generated", sub: "nationwide" },
  { icon: MapPin, value: "20M+", label: "Audience Reach", sub: "and growing" },
];

const bottomStats = [
  { icon: Users, value: "10M+", label: "Total Reach", sub: "across all campaigns" },
  { icon: Video, value: "3M+", label: "Video Views", sub: "organic & paid" },
  { icon: Heart, value: "1.2M+", label: "Engagements", sub: "likes, shares & saves" },
  { icon: TrendingUp, value: "50K+", label: "Leads Generated", sub: "verified inquiries" },
];

// ── Counter ───────────────────────────────────────────────────────
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let start = 0;
      const step = Math.ceil(target / 40);
      const t = setInterval(() => {
        start = Math.min(start + step, target);
        setCount(start);
        if (start >= target) clearInterval(t);
      }, 30);
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Scroll Reveal ─────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ── Playlist Strip ────────────────────────────────────────────────
function PlaylistStrip({
  playlistId, playlistUrl, campaignTitle, color, theme,
}: {
  playlistId: string; playlistUrl: string; campaignTitle: string; color: string; theme: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: dir === "left" ? -220 : 220, behavior: "smooth" });
  };
  const tiles = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="playlist-strip-wrap relative">
      <button
        onClick={() => scroll("left")}
        className={`strip-arrow strip-arrow-left ${theme === "dark" ? "strip-arrow-dark" : ""}`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => scroll("right")}
        className={`strip-arrow strip-arrow-right ${theme === "dark" ? "strip-arrow-dark" : ""}`}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <div ref={scrollRef} className="strip-scroll flex gap-3 overflow-x-auto">
        {tiles.map((i) => (
          <a key={i}
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="strip-tile flex-none"
          >
            <div className="strip-thumb relative">
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${playlistId}&index=${i + 1}&controls=0&modestbranding=1&showinfo=0&rel=0`}
                title={`${campaignTitle} reel ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="strip-iframe"
                loading="lazy"
              />
              <div className="strip-play-overlay">
                <div className="strip-play-btn" style={{ background: color }}>
                  <Play className="h-3.5 w-3.5 text-white fill-white ml-0.5" />
                </div>
                <p className="strip-overlay-title">{campaignTitle}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── Row background map ────────────────────────────────────────────
const rowBgClass: Record<number, string> = {
  0: "campaign-bg-warm",
  1: "campaign-bg-white",
  3: "campaign-bg-sage",
};

// ── Campaign Row ──────────────────────────────────────────────────
function CampaignRow({ c, index }: { c: typeof campaigns[0]; index: number }) {
  const reversed = index % 2 !== 0;
  const isDark = c.theme === "dark";
  const bgClass = isDark ? "campaign-dark" : `campaign-light ${rowBgClass[index] ?? ""}`;

  return (
    <section className={`campaign-row ${bgClass}`} data-reveal>
      <div className={`reveal-item campaign-inner ${reversed ? "campaign-reversed" : ""}`}>

        {/* ── Text side ── */}
        <div className="campaign-body">
          <span className="campaign-number">{c.number}</span>
          <span className="campaign-eyebrow">{c.eyebrow}</span>
          <h2 className="campaign-title font-display">{c.title}</h2>
          <p className="campaign-desc">{c.description}</p>

          <div className="campaign-meta">
            <span className="meta-item">
              <Video className="meta-icon" />
              <span className="meta-label">Reels</span>
              <span className="meta-val">{c.reels}</span>
            </span>
            <span className="meta-divider" />
            <span className="meta-item">
              <Video className="meta-icon" />
              <span className="meta-label">{isDark ? "Event Type" : "Campaign Type"}</span>
              <span className="meta-val">{c.type}</span>
            </span>
          </div>

          {/* Watch button — stays as-is, just centered via parent flex align-items:center */}
          <a href={c.playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn"
            style={{ "--btn-color": c.color } as React.CSSProperties}
          >
            Watch All Reels
            <span className="watch-btn-icon" style={{ background: c.color }}>
              <ArrowRight className="h-3.5 w-3.5 text-white" />
            </span>
          </a>
        </div>

        {/* ── Strip side ── */}
        <div className="campaign-media">
          <PlaylistStrip
            playlistId={c.playlistId}
            playlistUrl={c.playlistUrl}
            campaignTitle={c.title.replace("\n", " ")}
            color={c.color}
            theme={c.theme}
          />
        </div>
      </div>
    </section>
  );
}

// ── Main Page ─────────────────────────────────────────────────────
function Campaigns() {
  useScrollReveal();

  return (
    <PageLayout>

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="camp-hero relative overflow-hidden">
        <div className="hero-grid-bg" aria-hidden />
        <div
          className="hero-bg-image"
          style={{ backgroundImage: `url(${campainHero})` }}
          aria-hidden
        />

        <div className="container-x relative z-10 pt-28 pb-0 md:pt-36">
          {/* Brand eyebrow — matches reference image style */}
          {/* <p className="hero-brand-eyebrow">The Nest Realty · Est. 2018</p> */}

          <div className="max-w-2xl">
            <h1 className="hero-h1 font-display">
              <span className="block hero-h3-line1"> Campaign </span>
              <span className="block text-primary hero-h3-line2">Showcase</span>
              <span className="block hero-h1-brand font-display">Create Impact</span>
            </h1>
            <p className="hero-sub mt-5 max-w-md text-muted-foreground text-base leading-relaxed">
              Creative real estate campaigns that connect people with projects and deliver real results.
            </p>
          </div>
        </div>

        {/* Floating stats card */}
        <div className="relative z-10 px-4 md:px-8 lg:px-14 pb-8 mt-10">
          <div className="bg-background/90 backdrop-blur-md rounded-3xl border border-border shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {heroStats.map(({ icon: Icon, value, label, sub }, i) => {
                const match = value.match(/^(\d+)(\D*)$/);
                const n = match ? parseInt(match[1]) : 0;
                const s = match ? match[2] : "";
                return (
                  <div
                    key={label}
                    className="group flex items-center gap-4 py-7 px-5 hover:bg-secondary/60 transition-colors duration-300"
                    style={{ animation: `fadeInUp 0.55s ${0.2 + i * 0.1}s ease both`, opacity: 0 }}
                  >
                    <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-primary/10 items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-extrabold text-primary leading-none">
                        <Counter target={n} suffix={s} />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        <span className="text-foreground font-semibold uppercase tracking-wide">{label}</span>
                        <span className="mx-1 opacity-40">·</span>
                        {sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAMPAIGNS ══════════════════════════════════════════ */}
      {campaigns.map((c, i) => (
        <CampaignRow key={c.number} c={c} index={i} />
      ))}

      {/* ══ BEHIND THE CAMPAIGNS ═══════════════════════════════ */}
      <section className="btc-section py-16 md:py-20 border-t border-border" data-reveal>
        <div className="container-x reveal-item">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-8">
            Behind the Campaigns
          </p>
          <div className="btc-grid">
            {[
              "PLzjqr-vXhLMGsxPcvputEas6ewApWbvJm",
              "PLzjqr-vXhLMHX91qE8y4DE1fN_WJqcRtW",
              "PLzjqr-vXhLMG6GZFlx3Tzz9fG6n2OUozK",
              "PLzjqr-vXhLMFkflVHW5la8OXGVER0yk3m",
              "PLzjqr-vXhLMGsxPcvputEas6ewApWbvJm",
            ].map((pid, i) => (
              <div key={i} className="btc-cell group relative overflow-hidden rounded-lg">
                <iframe
                  src={`https://www.youtube.com/embed/videoseries?list=${pid}&index=${i + 1}&controls=0&modestbranding=1&showinfo=0`}
                  title={`Behind the campaign ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="btc-iframe"
                  loading="lazy"
                />
                <div className="btc-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM STATS ═══════════════════════════════════════ */}
      <section className="py-10 border-t border-border" data-reveal>
        <div className="reveal-item px-4 md:px-8 lg:px-14">
          <div className="bg-background/90 backdrop-blur-md rounded-3xl border border-border shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {bottomStats.map(({ icon: Icon, value, label, sub }) => {
                const match = value.match(/^([\d.]+)(\D*)$/);
                const n = match ? parseFloat(match[1]) : 0;
                const s = match ? match[2] : "";
                return (
                  <div
                    key={label}
                    className="group flex items-center gap-4 py-7 px-5 hover:bg-secondary/60 transition-colors duration-300"
                  >
                    <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-primary/10 items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-extrabold text-primary leading-none">
                        <Counter target={n} suffix={s} />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        <span className="text-foreground font-semibold uppercase tracking-wide">{label}</span>
                        <span className="mx-1 opacity-40">·</span>
                        {sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section className="cta-section py-16 text-center" data-reveal>
        <div className="container-x reveal-item">
          <div className="cta-card">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Ready to Scale?</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Let's Create Your Next<br />Success Story.
            </h2>
            <a href="/contact" className="cta-btn inline-flex items-center gap-2">
              Let's Connect <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ══ STYLES ═════════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
        .font-display { font-family: 'DM Serif Display', Georgia, serif; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gridFadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* ══ HERO ══ */
        .camp-hero {
          min-height: 560px;
          background: hsl(var(--background));
        }
        .hero-grid-bg {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(hsl(var(--border)/0.35) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)/0.35) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 60% 100% at 20% 50%, black 30%, transparent 100%);
          animation: gridFadeIn 1.2s ease forwards;
        }
        .hero-bg-image {
          position: absolute;
          top: 0; right: 0; bottom: 0; width: 55%; z-index: 1;
          background-size: cover;
          background-position: right center;
          -webkit-mask-image: linear-gradient(
            to right, transparent 0%, rgba(0,0,0,0.08) 10%,
            rgba(0,0,0,0.55) 28%, black 48%
          );
          mask-image: linear-gradient(
            to right, transparent 0%, rgba(0,0,0,0.08) 10%,
            rgba(0,0,0,0.55) 28%, black 48%
          );
        }

        /* ── Brand eyebrow: "The Nest Realty · Est. 2018" ── */
        .hero-brand-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: hsl(var(--primary));
          font-weight: 600;
          margin-bottom: 1rem;
          opacity: 0;
          animation: fadeInUp 0.55s 0.05s ease both;
        }

        /* ── Hero headline — reference image style ── */
        .hero-h1 {
          font-size: clamp(2.8rem, 5.5vw, 5.2rem);
          font-weight: 400;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: hsl(var(--foreground));
          opacity: 0;
          animation: fadeInUp 0.75s 0.15s ease both;
        }
        /* "Why Developers" and "Choose" — dark, normal weight */
        .hero-h1-line1,
        .hero-h1-line2 {
          color: hsl(var(--foreground));
          font-style: normal;
          font-weight: 700;
        }
        /* "The Nest Realty" — primary gold, italic serif like reference */
        .hero-h1-brand {
          color: hsl(var(--primary));
          font-style: italic;
          font-weight: 400;
        }

        .hero-sub { opacity: 0; animation: fadeInUp 0.55s 0.30s ease both; }

        /* ══ CAMPAIGN ROWS ══ */
        .campaign-row { border-bottom: 1px solid hsl(var(--border)); }
        .campaign-light   { background: hsl(var(--background)); }
        .campaign-bg-warm { background: hsl(36 40% 96%); }
        .campaign-bg-cool { background: hsl(210 30% 96%); }
        .campaign-bg-sage { background: hsl(150 20% 96%); }
        .campaign-dark    { background: hsl(220 22% 11%); color: #fff; }
.campaign-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  /* min-height: 360px; ← DELETE karo */
}
        .campaign-reversed {
          grid-template-columns: 1fr 1fr;
        }
        .campaign-reversed .campaign-body { order: 2; }
        .campaign-reversed .campaign-media { order: 1; }

        @media (max-width: 960px) {
          .campaign-inner,
          .campaign-reversed { grid-template-columns: 1fr; }
          .campaign-reversed .campaign-body,
          .campaign-reversed .campaign-media { order: unset; }
        }

        /* ── Campaign body: content centered, button also centered ── */
     .campaign-body {
  padding: 2rem 3rem 2rem 3.5rem;  /* ← padding ochhi karo */
  min-height: unset;               /* ← koi min-height nahi */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid hsl(var(--border));
  box-sizing: border-box;
}

        .campaign-reversed .campaign-body {
          padding: 3rem 3.5rem 3rem 3rem;
          border-right: none;
          border-left: 1px solid hsl(var(--border));
        }
        .campaign-dark    .campaign-body { border-color: hsl(220 10% 20%); }
        .campaign-bg-warm .campaign-body { border-color: hsl(36 20% 88%); }
        .campaign-bg-cool .campaign-body { border-color: hsl(210 15% 88%); }
        .campaign-bg-sage .campaign-body { border-color: hsl(150 15% 88%); }

        .campaign-number {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 4rem; font-weight: 700; line-height: 1;
          color: hsl(var(--foreground)/0.12);
          display: block; margin-bottom: 0.35rem;
        }
        .campaign-dark .campaign-number { color: hsl(220 10% 28%); }

        .campaign-eyebrow {
          font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: hsl(var(--primary)); font-weight: 600;
          display: block; margin-bottom: 0.55rem;
        }
        .campaign-dark .campaign-eyebrow { color: #b9a0f4; }

        .campaign-title {
          font-size: clamp(1.9rem, 2.8vw, 2.8rem);
          font-weight: 700; line-height: 1.1; letter-spacing: -0.02em;
          color: hsl(var(--foreground));
          margin-bottom: 0.85rem;
          white-space: pre-line;
        }
        .campaign-dark .campaign-title { color: #fff; }

        .campaign-desc {
          font-size: 0.83rem; line-height: 1.7;
          color: hsl(var(--muted-foreground));
          margin-bottom: 1.25rem;
          max-width: 400px;
          text-align: center;
        }
        .campaign-dark .campaign-desc { color: hsl(220 10% 65%); }

        /* Meta row — centered */
        .campaign-meta {
          display: flex; align-items: stretch;
          margin-bottom: 1.5rem;
          border: 1px solid hsl(var(--border));
          border-radius: 8px; overflow: hidden;
          padding: 0.55rem 0;
        }
        .campaign-dark .campaign-meta { border-color: hsl(220 10% 22%); }
        .campaign-bg-warm .campaign-meta { border-color: hsl(36 20% 84%); }
        .campaign-bg-cool .campaign-meta { border-color: hsl(210 15% 84%); }
        .campaign-bg-sage .campaign-meta { border-color: hsl(150 15% 84%); }

        .meta-item {
          display: flex; flex-direction: column; gap: 3px;
          padding: 0 1.25rem;
          align-items: center;
        }
        .meta-icon { width: 13px; height: 13px; color: hsl(var(--muted-foreground)); margin-bottom: 1px; }
        .meta-label {
          font-size: 0.58rem; text-transform: uppercase; letter-spacing: 0.1em;
          color: hsl(var(--muted-foreground));
        }
        .meta-val {
          font-size: 0.82rem; font-weight: 600;
          color: hsl(var(--foreground));
        }
        .campaign-dark .meta-val   { color: #fff; }
        .campaign-dark .meta-label { color: hsl(220 10% 55%); }
        .meta-divider {
          width: 1px; background: hsl(var(--border)); align-self: stretch;
        }
        .campaign-dark    .meta-divider { background: hsl(220 10% 22%); }
        .campaign-bg-warm .meta-divider { background: hsl(36 20% 84%); }
        .campaign-bg-cool .meta-divider { background: hsl(210 15% 84%); }
        .campaign-bg-sage .meta-divider { background: hsl(150 15% 84%); }

        /* Watch button — pill shape, centered by parent flex align-items:center */
        .watch-btn {
          display: inline-flex; align-items: center; gap: 0.55rem;
          border: 1.5px solid var(--btn-color, hsl(var(--primary)));
          color: var(--btn-color, hsl(var(--primary)));
          background: transparent;
          font-size: 0.78rem; font-weight: 600;
          padding: 0.4rem 0.4rem 0.4rem 1.1rem;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .watch-btn:hover {
          background: var(--btn-color, hsl(var(--primary)));
          color: #fff;
        }
        .watch-btn-icon {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .watch-btn:hover .watch-btn-icon { background: rgba(255,255,255,0.2) !important; }

        /* Media side */
     .campaign-media {
  padding: 1.5rem 2rem;   /* ← upar-niche 1.5rem j */
  display: flex;
  align-items: center;
  overflow: hidden;
}
        .campaign-reversed .campaign-media {
          padding: 2rem 2rem 2rem 2.5rem;
        }

        /* ══ PLAYLIST STRIP ══ */
        .playlist-strip-wrap { position: relative; width: 100%; }
        .strip-scroll { scrollbar-width: none; -ms-overflow-style: none; padding-bottom: 4px; }
        .strip-scroll::-webkit-scrollbar { display: none; }
        .strip-arrow {
          position: absolute; top: 42%; transform: translateY(-50%); z-index: 10;
          background: hsl(var(--background)); border: 1px solid hsl(var(--border));
          width: 30px; height: 30px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .strip-arrow:hover { background: hsl(var(--muted)); }
        .strip-arrow-left  { left: -15px; }
        .strip-arrow-right { right: -15px; }
        .strip-arrow-dark { background: hsl(220 20% 18%); border-color: hsl(220 10% 28%); color: #ccc; }
        .strip-arrow-dark:hover { background: hsl(220 20% 25%); }

        .strip-tile { cursor: pointer; text-decoration: none; }
        .strip-thumb {
           width: 168px;
  height: 235px;   
          border-radius: 12px; overflow: hidden; position: relative;
          background: hsl(var(--muted)); border: 1px solid hsl(var(--border));
          flex-shrink: 0;
        }
        .campaign-dark    .strip-thumb { background: hsl(220 20% 17%); border-color: hsl(220 10% 24%); }
        .campaign-bg-warm .strip-thumb { border-color: hsl(36 20% 86%); }
        .campaign-bg-cool .strip-thumb { border-color: hsl(210 15% 86%); }
        .campaign-bg-sage .strip-thumb { border-color: hsl(150 15% 86%); }

        .strip-iframe { width: 100%; height: 100%; border: none; pointer-events: none; }
        .strip-play-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.12) 55%, transparent 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          transition: background 0.2s; padding: 0.75rem;
        }
        .strip-tile:hover .strip-play-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 55%, transparent 100%);
        }
        .strip-play-btn {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.45); flex-shrink: 0;
        }
        .strip-overlay-title {
          position: absolute; bottom: 0.65rem; left: 0; right: 0;
          text-align: center; font-size: 0.6rem; font-weight: 600;
          color: #fff; letter-spacing: 0.03em; line-height: 1.3;
          padding: 0 0.5rem; text-shadow: 0 1px 4px rgba(0,0,0,0.7);
        }

        /* ══ BEHIND THE CAMPAIGNS ══ */
        .btc-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; }
        @media (max-width: 768px) { .btc-grid { grid-template-columns: repeat(2, 1fr); } }
        .btc-cell { aspect-ratio: 9/14; background: hsl(var(--muted)); position: relative; }
        .btc-iframe { width: 100%; height: 100%; border: none; pointer-events: none; }
        .btc-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
          transition: background 0.3s;
        }
        .btc-cell:hover .btc-overlay { background: linear-gradient(to top, rgba(0,0,0,0.1), transparent); }

        /* ══ CTA ══ */
        .cta-card {
          background: hsl(var(--primary)/0.05);
          border: 1px solid hsl(var(--primary)/0.2);
          border-radius: 1.5rem; padding: 3rem 2rem;
        }
        .cta-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: hsl(var(--primary)); color: #fff;
          font-size: 0.9rem; font-weight: 600;
          padding: 0.7rem 1.75rem; border-radius: 8px;
          text-decoration: none; transition: opacity 0.2s, transform 0.2s;
        }
        .cta-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        /* ══ SCROLL REVEAL ══ */
        [data-reveal] .reveal-item {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1);
        }
        [data-reveal].revealed .reveal-item { opacity: 1; transform: translateY(0); }

        /* ══ MOBILE ══ */
        @media (max-width: 768px) {
          .campaign-body {
            padding: 1.75rem;
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid hsl(var(--border));
          }
          .campaign-media { padding: 1.5rem; }
          .hero-bg-image { width: 100%; opacity: 0.15; }
        }
      `}</style>
    </PageLayout>
  );
}