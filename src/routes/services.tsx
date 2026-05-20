import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Building2, TrendingUp, MapPinned, ArrowRight, Phone } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — The Nest Realty" },
      { name: "description", content: "Property buying, selling, investment advisory and land acquisition services in Ahmedabad." },
      { property: "og:title", content: "Services — The Nest Realty" },
      { property: "og:description", content: "Complete real estate services across Ahmedabad." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Home,
    label: "01",
    title: "Property Buying",
    tagline: "Find your perfect match",
    desc: "From shortlisting to site visits to final negotiation — we walk every step of the buying journey with you, making sure your home matches your life and your budget.",
    points: ["Curated shortlists", "Site visits & comparisons", "Negotiation & paperwork"],
    accent: "#C9A96E",
  },
  {
    icon: Building2,
    label: "02",
    title: "Property Selling",
    tagline: "Sell faster, earn smarter",
    desc: "Sell faster and smarter. We craft a tailored marketing plan for your property and bring it in front of qualified buyers across our network.",
    points: ["Property valuation", "Targeted marketing", "Buyer screening"],
    accent: "#C9A96E",
  },
  {
    icon: TrendingUp,
    label: "03",
    title: "Investment Advisory",
    tagline: "Grow wealth through property",
    desc: "Build wealth through real estate with a strategy designed around your risk profile and time horizon — backed by hyper-local market intelligence.",
    points: ["Yield analysis", "Portfolio planning", "Exit strategy"],
    accent: "#C9A96E",
  },
  {
    icon: MapPinned,
    label: "04",
    title: "Land Acquisition",
    tagline: "Secure land, secure future",
    desc: "End-to-end support for sourcing, due diligence and acquiring land — for self-use, development or long-term holding.",
    points: ["Title verification", "RERA / regulatory checks", "Acquisition support"],
    accent: "#C9A96E",
  },
];

// Animated counter hook
function useCountUp(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, 1200, start);
  return (
    <div style={{ textAlign: "left" }}>
      <div
        style={{
          fontSize: "clamp(1.6rem, 3vw, 2rem)",
          fontWeight: 700,
          color: "#C9A96E",
          lineHeight: 1,
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "0.72rem",
          color: "#a08060",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginTop: "0.35rem",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function ServiceCard({ s, index }: { s: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Icon = s.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
        background: hovered ? "#1a1410" : "#fff",
        border: `1.5px solid ${hovered ? "#C9A96E" : "#ede8df"}`,
        borderRadius: "16px",
        padding: "2.2rem 2rem",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 20px 50px rgba(201,169,110,0.15)"
          : "0 2px 16px rgba(0,0,0,0.06)",
        transitionProperty: "opacity, transform, background, border-color, box-shadow",
        transitionDuration: `0.6s, 0.6s, 0.3s, 0.3s, 0.3s`,
        transitionTimingFunction: "ease",
      }}
    >
      {/* Number badge */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.8rem",
          fontFamily: "'Georgia', serif",
          fontSize: "3.5rem",
          fontWeight: 700,
          color: hovered ? "rgba(201,169,110,0.12)" : "rgba(0,0,0,0.05)",
          lineHeight: 1,
          transition: "color 0.3s ease",
          userSelect: "none",
        }}
      >
        {s.label}
      </div>

      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "12px",
          background: hovered ? "rgba(201,169,110,0.15)" : "#f9f5ef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.4rem",
          transition: "background 0.3s ease",
        }}
      >
        <Icon size={22} color={hovered ? "#C9A96E" : "#8a6d3b"} strokeWidth={1.5} />
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#C9A96E",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
      >
        {s.tagline}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.35rem",
          fontWeight: 700,
          color: hovered ? "#fff" : "#1a1410",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          margin: "0 0 0.9rem",
          transition: "color 0.3s ease",
        }}
      >
        {s.title}
      </h3>

      {/* Divider */}
      <div
        style={{
          width: hovered ? "60px" : "36px",
          height: "2px",
          background: "#C9A96E",
          marginBottom: "1rem",
          transition: "width 0.3s ease",
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: hovered ? "rgba(255,255,255,0.65)" : "#6b5e4e",
          margin: "0 0 1.4rem",
          transition: "color 0.3s ease",
        }}
      >
        {s.desc}
      </p>

      {/* Points */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.55rem",
        }}
      >
        {s.points.map((p) => (
          <li
            key={p}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "0.85rem",
              color: hovered ? "rgba(255,255,255,0.75)" : "#4a3c2e",
              transition: "color 0.3s ease",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#C9A96E",
                flexShrink: 0,
              }}
            />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Stats counter trigger
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <PageLayout>
      {/* ── HERO: White editorial split layout ───────────────────── */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #f0ebe2",
          overflow: "hidden",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.4rem 4rem",
            borderBottom: "1px solid #f0ebe2",
          }}
        >
          <div
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "1.1rem",
              color: "#1a1410",
              letterSpacing: "0.04em",
              fontWeight: 700,
            }}
          >
            The Nest Realty
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              border: "1px solid #e8dfd0",
              borderRadius: "100px",
              padding: "0.35rem 1rem",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#8a6d3b",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A96E" }}
            />
            Ahmedabad's Trusted Realty Partner
          </div>
        </div>

        {/* ── Main split grid — equal padding on both sides ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 440px",
            minHeight: "520px",
          }}
        >
          {/* ── Left: headline + stats ── */}
          <div
            style={{
              padding: "4rem 5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "1px solid #f0ebe2",
              position: "relative",
            }}
          >
            {/* Ghost decorative number */}
            <div
              style={{
                position: "absolute",
                bottom: "2.5rem",
                left: "5rem",
                fontFamily: "'Georgia', serif",
                fontSize: "6rem",
                fontWeight: 700,
                color: "#f5f0e8",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 0,
              }}
            >
              04
            </div>

            <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "560px" }}>
              {/* Eyebrow */}
              <div
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C9A96E",
                  fontWeight: 700,
                  marginBottom: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A96E" }}
                />
                Our Services
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)",
                  fontWeight: 700,
                  color: "#1a1410",
                  lineHeight: 1.12,
                  margin: "0 0 1.5rem",
                }}
              >
                Real estate,
                <br />
                done{" "}
                <em style={{ color: "#C9A96E", fontStyle: "italic" }}>right</em>
                <br />
                for you.
              </h1>

              {/* Sub */}
              <p
                style={{
                  fontSize: "0.97rem",
                  color: "#7a6858",
                  lineHeight: 1.78,
                  maxWidth: "480px",
                  margin: "0 0 2.5rem",
                  fontWeight: 400,
                }}
              >
                From finding your first home to building a property portfolio — we bring
                expertise, local knowledge, and honest guidance to every step.
              </p>

              {/* CTA buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "0.9rem",
                  flexWrap: "wrap",
                  marginBottom: "3rem",
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#C9A96E",
                    color: "#fff",
                    padding: "0.85rem 1.8rem",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    transition: "background 0.2s ease",
                  }}
                >
                  Book Free Consultation <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+91XXXXXXXXXX"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "1px solid #ddd4c5",
                    color: "#5a4020",
                    padding: "0.85rem 1.8rem",
                    borderRadius: "8px",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <Phone size={15} /> Call Now
                </a>
              </div>

              {/* Stats strip */}
              <div
                ref={statsRef}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  borderTop: "1px solid #f0ebe2",
                  paddingTop: "2rem",
                  gap: "1rem",
                }}
              >
                <StatItem value={500} suffix="+" label="Properties Sold" start={statsVisible} />
                <StatItem value={12} suffix="+" label="Years Experience" start={statsVisible} />
                <StatItem value={98} suffix="%" label="Client Satisfaction" start={statsVisible} />
              </div>
            </div>
          </div>

          {/* ── Right: service rows panel — equal padding ── */}
          <div
            style={{
              background: "#faf7f2",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "4rem 3.5rem",
              gap: "0.85rem",
            }}
          >
          
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "3px",
                background: "linear-gradient(to bottom, transparent, #C9A96E 30%, #C9A96E 70%, transparent)",
              }}
            />

            <div
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#b09070",
                fontWeight: 600,
                marginBottom: "0.25rem",
              }}
            >
              What we offer
            </div>

            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.2rem",
                    background: "#fff",
                    border: "1px solid #ede8df",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#C9A96E";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 4px 16px rgba(201,169,110,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#ede8df";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "#f9f5ef",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="#8a6d3b" strokeWidth={1.5} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a1410" }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{ fontSize: "0.74rem", color: "#a08060", marginTop: "3px" }}
                    >
                      {s.points.join(" · ")}
                    </div>
                  </div>
                  <ArrowRight size={14} color="#C9A96E" />
                </div>
              );
            })}

            <div
              style={{
                marginTop: "0.25rem",
                padding: "1rem 1.2rem",
                borderRadius: "12px",
                background: "#fff7ec",
                border: "1px solid #f0dfc0",
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(201,169,110,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={16} color="#C9A96E" />
              </div>
              <div>
                <div
                  style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5a4020" }}
                >
                  Free 30-min consultation
                </div>
                <div
                  style={{ fontSize: "0.72rem", color: "#a08060", marginTop: "2px" }}
                >
                  No obligation · Available 6 days a week
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "#faf7f2" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          {/* Section label */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div
              style={{
                display: "inline-block",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C9A96E",
                fontWeight: 700,
                marginBottom: "0.8rem",
              }}
            >
              What We Offer
            </div>
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#1a1410",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Everything under <em>one roof</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {services.map((s, i) => (
              <ServiceCard key={s.title} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "#12100d",
          padding: "6rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative top line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
          }}
        />

        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#C9A96E",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            Free Consultation
          </p>
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1.2rem",
            }}
          >
            Not sure where to start?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}
          >
            Book a free 30-minute consultation. We'll help you map out the smartest next
            step for your real estate journey.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "#C9A96E",
              color: "#12100d",
              padding: "1rem 2.4rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.92rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Book Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── KEYFRAMES ──────────────────────────────────────────────── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </PageLayout>
  );
}