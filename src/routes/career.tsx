import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";
import career from "@/assets/carrer.jpg";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — The Nest Realty" },
      { name: "description", content: "Join The Nest Realty — open positions in Ahmedabad." },
    ],
  }),
  component: Career,
});

const openings = [
  {
    role: "Senior Real Estate Advisor",
    type: "Full-time",
    location: "Ahmedabad",
    dept: "Advisory",
    desc: "Guide clients through complex buying decisions with clarity and expertise.",
  },
  {
    role: "Marketing Manager",
    type: "Full-time",
    location: "Ahmedabad",
    dept: "Marketing",
    desc: "Shape how the city's most trusted realty brand tells its story.",
  },
  {
    role: "Client Relationship Executive",
    type: "Full-time",
    location: "Ahmedabad",
    dept: "Client Success",
    desc: "Be the face of The Nest — build lasting relationships, not just transactions.",
  },
  {
    role: "Site Visit Coordinator",
    type: "Full-time",
    location: "Ahmedabad",
    dept: "Operations",
    desc: "Orchestrate seamless on-ground experiences for our clients.",
  },
];

const culture = [
  { stat: "15+", label: "Years of trust" },
  { stat: "500+", label: "Families served" },
  { stat: "4", label: "Open roles" },
  { stat: "100%", label: "Ahmedabad-rooted" },
];

const steps = [
  { n: "01", title: "Send your resume", desc: "Email careers@thenestrealty.in — one line about why you." },
  { n: "02", title: "Intro call", desc: "20 minutes. We want to understand what you're looking for." },
  { n: "03", title: "Meet the team", desc: "In-person at our Ahmedabad office." },
  { n: "04", title: "Decision", desc: "We move fast. Typically within a week." },
];

/* ── intersection observer hook ── */
function useInView(rootMargin = "-40px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, inView };
}

/* ── Role row ── */
function RoleRow({ role, type, location, dept, desc, index }: {
  role: string; type: string; location: string;
  dept: string; desc: string; index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView();

  return (
    <a
      ref={ref as any}
      href="mailto:careers@thenestrealty.in"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "56px 1fr auto",
        alignItems: "center",
        gap: "1.5rem",
        padding: "1.8rem 0",
        borderBottom: "1px solid #e8e0d0",
        textDecoration: "none",
        background: hovered ? "#fdf9f2" : "transparent",
        transition: "background 0.25s ease",
        paddingLeft: hovered ? "1rem" : "0",
        cursor: "pointer",
        opacity: 0,
        animation: inView ? `crFadeUp 0.55s ease forwards ${index * 80}ms` : "none",
      }}
    >
      {/* index */}
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "0.8rem",
        fontStyle: "italic",
        color: "#c8a96e",
        paddingLeft: "0.5rem",
      }}>
        0{index + 1}
      </span>

      {/* content */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.3rem" }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            fontWeight: 500,
            color: "#1a1612",
          }}>
            {role}
          </span>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            color: "#9a6f1e",
            background: "#fdf3e0",
            border: "1px solid #e8d4a0",
            borderRadius: 3,
            padding: "0.2rem 0.55rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
          }}>
            {dept}
          </span>
        </div>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.82rem",
          color: "#8a7e74",
          margin: 0,
          fontWeight: 300,
        }}>
          {desc}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.45rem" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#a89880" }}>
            {type}
          </span>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#c8a96e", flexShrink: 0 }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#a89880" }}>
            {location}
          </span>
        </div>
      </div>

      {/* apply arrow */}
      <div style={{
        width: 40, height: 40,
        border: `1px solid ${hovered ? "#9a6f1e" : "#e8d4a0"}`,
        borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        transition: "border-color 0.25s, background 0.25s",
        background: hovered ? "#9a6f1e" : "transparent",
        marginRight: "0.5rem",
      }}>
        <ArrowUpRight
          size={15}
          style={{ color: hovered ? "#fff" : "#c8a96e", transition: "color 0.25s" }}
        />
      </div>
    </a>
  );
}

/* ── process step ── */
function Step({ n, title, desc, delay, inView }: {
  n: string; title: string; desc: string; delay: number; inView: boolean;
}) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column" as const,
      gap: "0.6rem",
      opacity: 0,
      animation: inView ? `crFadeUp 0.6s ease forwards ${delay}ms` : "none",
    }}>
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "2rem",
        fontStyle: "italic",
        color: "#e8d4a0",
        lineHeight: 1,
      }}>
        {n}
      </span>
      <div style={{ width: 24, height: 1, background: "#9a6f1e" }} />
      <h4 style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.9rem",
        fontWeight: 500,
        color: "#1a1612",
        margin: 0,
      }}>
        {title}
      </h4>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.78rem",
        color: "#8a7e74",
        lineHeight: 1.65,
        margin: 0,
        fontWeight: 300,
      }}>
        {desc}
      </p>
    </div>
  );
}

function Career() {
  const [v, setV] = useState(false);
  const processSection = useInView();
  const cultureSection = useInView();
  const ctaSection = useInView();

  useEffect(() => {
    const t = setTimeout(() => setV(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <PageLayout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes crFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes crSlideIn {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes crCounterIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes crPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }
        @keyframes crTickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ═══════════════════════════════════
          HERO — full-width, editorial
      ═══════════════════════════════════ */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid #e8e0d0" }}>

        {/* top status bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "0.9rem clamp(1.5rem, 6vw, 4rem)",
          borderBottom: "1px solid #e8e0d0",
          opacity: 0,
          animation: v ? "crFadeUp 0.5s ease forwards 0ms" : "none",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "#4caf78",
              display: "inline-block",
              animation: "crPulse 2s ease infinite",
            }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem", letterSpacing: "0.2em",
              textTransform: "uppercase" as const, color: "#9a6f1e", fontWeight: 500,
            }}>
              Now Hiring · Ahmedabad
            </span>
          </div>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem", letterSpacing: "0.15em", color: "#b0a090",
          }}>
            The Nest Realty · Careers
          </span>
        </div>

        {/* ── hero content: two-column grid ── */}
        <div style={{
          padding: "clamp(3rem, 8vh, 6rem) clamp(1.5rem, 6vw, 4rem) clamp(2rem, 5vh, 4rem)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "center",
        }}>

          {/* ── LEFT: text content ── */}
          <div>
            {/* large number accent */}
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(6rem, 18vw, 14rem)",
              fontStyle: "italic",
              color: "#f0e8d8",
              lineHeight: 0.85,
              userSelect: "none",
              position: "relative",
              zIndex: 0,
              marginBottom: "-0.15em",
              opacity: 0,
              animation: v ? "crFadeUp 1s ease forwards 100ms" : "none",
            }}>
              4
            </div>

            {/* headline overlaps the number */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h1 style={{
                margin: 0,
                opacity: 0,
                animation: v ? "crSlideIn 0.8s ease forwards 300ms" : "none",
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
                  color: "#1a1612",
                  display: "block",
                  lineHeight: 1.08,
                }}>
                  Open roles.
                </span>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
                  color: "#9a6f1e",
                  display: "block",
                  lineHeight: 1.08,
                }}>
                  Real impact.
                </span>
              </h1>

              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "clamp(2rem, 6vw, 8rem)",
                marginTop: "2.5rem",
                flexWrap: "wrap" as const,
              }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                  lineHeight: 1.75, color: "#5a4e44",
                  maxWidth: "40ch", margin: 0,
                  fontWeight: 300,
                  opacity: 0,
                  animation: v ? "crFadeUp 0.7s ease forwards 550ms" : "none",
                }}>
                  Join a small, talented team that's redefining real estate
                  advisory in Ahmedabad. We work with clarity, care, and a
                  long-term mindset — and we expect the same from the people
                  we hire.
                </p>

                <div style={{
                  opacity: 0,
                  animation: v ? "crFadeUp 0.7s ease forwards 700ms" : "none",
                }}>
                  <a href="#openings" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem", fontWeight: 500,
                    color: "#fff", background: "#9a6f1e",
                    padding: "0.9rem 2rem", borderRadius: 3,
                    textDecoration: "none",
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "#7d5916";
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = "0 8px 24px rgba(154,111,30,0.28)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "#9a6f1e";
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    See open roles <ArrowRight size={14} />
                  </a>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem", color: "#a89880",
                    margin: "0.6rem 0 0", fontWeight: 300,
                  }}>
                    All positions based in Ahmedabad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: image ── */}
          <div style={{
            opacity: 0,
            animation: v ? "crFadeUp 0.9s ease forwards 400ms" : "none",
            height: "clamp(320px, 55vh, 520px)",
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
          }}>
            <img
              src={career}
              alt="Modern real estate in Ahmedabad"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
            {/* subtle golden overlay tint */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(154,111,30,0.08) 0%, transparent 60%)",
              pointerEvents: "none",
            }} />
            {/* bottom caption badge */}
            <div style={{
              position: "absolute",
              bottom: "1.2rem",
              left: "1.2rem",
              background: "rgba(26,22,18,0.72)",
              backdropFilter: "blur(8px)",
              borderRadius: 3,
              padding: "0.5rem 0.9rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#4caf78", flexShrink: 0,
                animation: "crPulse 2s ease infinite",
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "#f5f0e8",
                fontWeight: 400,
              }}>
                Ahmedabad Office
              </span>
            </div>
          </div>

        </div>

        {/* ── scrolling ticker strip ── */}
        <div style={{
          borderTop: "1px solid #e8e0d0",
          overflow: "hidden",
          padding: "0.85rem 0",
          background: "#fff",
          opacity: 0,
          animation: v ? "crFadeUp 0.5s ease forwards 900ms" : "none",
        }}>
          <div style={{
            display: "flex",
            width: "max-content",
            animation: "crTickerScroll 18s linear infinite",
            gap: 0,
          }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                {["Advisory-first culture", "RERA Verified", "NRI Friendly", "15+ Years", "End-to-End Legal", "500+ Families served", "Ahmedabad-rooted"].map((t, j) => (
                  <span key={j} style={{ display: "flex", alignItems: "center" }}>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.72rem", letterSpacing: "0.18em",
                      textTransform: "uppercase" as const,
                      color: "#9a6f1e", fontWeight: 400,
                      whiteSpace: "nowrap" as const,
                      padding: "0 2rem",
                    }}>
                      {t}
                    </span>
                    <span style={{ color: "#e8d4a0", fontSize: "0.6rem" }}>✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          OPEN ROLES — full-width list
      ═══════════════════════════════════ */}
      <section id="openings" style={{ background: "#ffffff", padding: "4rem clamp(1.5rem, 6vw, 4rem)" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: "2rem",
          flexWrap: "wrap" as const, gap: "1rem",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.5rem" }}>
              <div style={{ width: 24, height: 1, background: "#9a6f1e" }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem", letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
                color: "#9a6f1e", fontWeight: 500,
              }}>
                Open Positions
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "#1a1612", margin: 0,
            }}>
              Currently hiring
            </h2>
          </div>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem", color: "#a89880",
            fontStyle: "italic",
          }}>
            All roles · Ahmedabad, Gujarat
          </span>
        </div>

        <div style={{ borderTop: "1px solid #e8e0d0" }}>
          {openings.map((o, i) => (
            <RoleRow key={o.role} {...o} index={i} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════
          CULTURE NUMBERS — horizontal strip
      ═══════════════════════════════════ */}
      <div
        ref={cultureSection.ref}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid #e8e0d0",
          borderBottom: "1px solid #e8e0d0",
          background: "#fff",
        }}
      >
        {culture.map((c, i) => (
          <div key={c.label} style={{
            padding: "2.5rem 1.5rem",
            borderRight: i < culture.length - 1 ? "1px solid #e8e0d0" : "none",
            opacity: 0,
            animation: cultureSection.inView ? `crFadeUp 0.5s ease forwards ${i * 100}ms` : "none",
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontStyle: "italic",
              color: "#9a6f1e",
              lineHeight: 1,
              marginBottom: "0.4rem",
            }}>
              {c.stat}
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem", letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: "#a89880", fontWeight: 400,
            }}>
              {c.label}
            </div>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════
          PROCESS — horizontal timeline
      ═══════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "4.5rem clamp(1.5rem, 6vw, 4rem)" }}>
        <div ref={processSection.ref}>
          <div style={{
            display: "flex", alignItems: "center", gap: "0.7rem",
            marginBottom: "3rem",
            opacity: 0,
            animation: processSection.inView ? "crFadeUp 0.5s ease forwards 0ms" : "none",
          }}>
            <div style={{ width: 24, height: 1, background: "#9a6f1e" }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem", letterSpacing: "0.3em",
              textTransform: "uppercase" as const,
              color: "#9a6f1e", fontWeight: 500,
            }}>
              How It Works
            </span>
          </div>

          {/* connecting line + steps */}
          <div style={{ position: "relative" }}>
            {/* horizontal connector */}
            <div style={{
              position: "absolute",
              top: "1.05rem",
              left: "1.5rem",
              right: "1.5rem",
              height: 1,
              background: "#e8d4a0",
            }} />

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
              position: "relative",
            }}>
              {steps.map((s, i) => (
                <Step
                  key={s.n} {...s}
                  delay={i * 120}
                  inView={processSection.inView}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FOOTER CTA — full-width dark bar
      ═══════════════════════════════════ */}
      <section
        ref={ctaSection.ref}
        style={{
          background: "#1a1612",
          padding: "4rem clamp(1.5rem, 6vw, 4rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(3rem, 10vw, 8rem)",
          flexWrap: "wrap" as const,
        }}
      >
        <div style={{
          opacity: 0,
          animation: ctaSection.inView ? "crFadeUp 0.6s ease forwards 100ms" : "none",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem", letterSpacing: "0.28em",
            textTransform: "uppercase" as const,
            color: "#9a6f1e", fontWeight: 500, margin: "0 0 0.6rem",
          }}>
            Don't see your role?
          </p>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            color: "#f5f0e8", margin: "0 0 0.5rem",
            lineHeight: 1.2,
          }}>
            We're always open to{" "}
            <em style={{ fontStyle: "italic", color: "#c8a96e" }}>great people.</em>
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem", color: "rgba(245,240,232,0.5)",
            fontWeight: 300, margin: 0, maxWidth: "44ch",
          }}>
            Drop us a note. We read every message.
          </p>
        </div>

        <div style={{
          display: "flex", flexDirection: "column" as const, gap: "0.8rem",
          opacity: 0,
          animation: ctaSection.inView ? "crFadeUp 0.6s ease forwards 300ms" : "none",
        }}>
          <a href="mailto:careers@thenestrealty.in" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem", fontWeight: 500,
            color: "#1a1612", background: "#c8a96e",
            padding: "1rem 2.2rem", borderRadius: 3,
            textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            transition: "background 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#d4b87a";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#c8a96e";
              el.style.transform = "translateY(0)";
            }}
          >
            <Mail size={15} />
            careers@thenestrealty.in
          </a>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.68rem", color: "rgba(245,240,232,0.3)",
            margin: 0, textAlign: "center" as const,
          }}>
            We reply within 2 working days
          </p>
        </div>
      </section>

    </PageLayout>
  );
}