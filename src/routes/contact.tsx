import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { ContactSection } from "./index";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — The Nest Realty" },
      { name: "description", content: "Get in touch with The Nest Realty in Ahmedabad." },
      { property: "og:title", content: "Contact Us — The Nest Realty" },
      { property: "og:description", content: "We're here to help you find or sell your dream nest." },
    ],
  }),
  component: ContactPage,
});

/* ── intersection observer hook ── */
function useInView(rootMargin = "-60px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, inView };
}

/* ── Badge pill ── */
function Badge({ label, delay, started }: { label: string; delay: number; started: boolean }) {
  return (
    <span style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.75rem",
      color: "#7a5514",
      border: "1px solid #c8a96e",
      borderRadius: 999,
      padding: "0.4rem 1rem",
      display: "inline-block",
      opacity: 0,
      animation: started ? `cnFadeUp 0.5s ease forwards ${delay}ms` : "none",
    }}>
      {label}
    </span>
  );
}

/* ── Contact Hero ── */
function ContactHero() {
  const [v, setV] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setV(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes cnFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cnLineGrow {
          from { width: 0; opacity: 0; }
          to   { width: 56px; opacity: 1; }
        }
        @keyframes cnFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <section style={{
        background: "#faf8f4",
        minHeight: "82vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "clamp(4rem, 10vh, 7rem) clamp(1.5rem, 8vw, 5rem)",
        position: "relative",
        borderBottom: "1px solid #e8e0d0",
        overflow: "hidden",
      }}>

        {/* subtle background texture lines */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          opacity: 0,
          animation: v ? "cnFadeIn 1.2s ease forwards 200ms" : "none",
        }}>
          <svg width="100%" height="100%" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice"
            style={{ position: "absolute", inset: 0 }} aria-hidden="true">
            <line x1="0" y1="350" x2="1400" y2="350" stroke="#9a6f1e" strokeOpacity="0.06" strokeWidth="1" />
            <line x1="700" y1="0" x2="700" y2="700" stroke="#9a6f1e" strokeOpacity="0.06" strokeWidth="1" />
            <circle cx="700" cy="350" r="280" fill="none" stroke="#9a6f1e" strokeOpacity="0.05" strokeWidth="1" />
            <circle cx="700" cy="350" r="180" fill="none" stroke="#9a6f1e" strokeOpacity="0.04" strokeWidth="1" />
          </svg>
        </div>

        {/* section label */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem",
          marginBottom: "2.2rem",
          opacity: 0,
          animation: v ? "cnFadeUp 0.6s ease forwards 100ms" : "none",
        }}>
          <div style={{ width: 28, height: 1, background: "#9a6f1e" }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem", letterSpacing: "0.32em",
            textTransform: "uppercase" as const,
            color: "#9a6f1e", fontWeight: 500,
          }}>
            Contact Us
          </span>
          <div style={{ width: 28, height: 1, background: "#9a6f1e" }} />
        </div>

        {/* main title */}
        <h1 style={{
          margin: "0 0 0.15em",
          lineHeight: 1.05,
          opacity: 0,
          animation: v ? "cnFadeUp 0.85s ease forwards 280ms" : "none",
        }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            color: "#1a1612",
            display: "block",
          }}>
            Get in
          </span>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            color: "#9a6f1e",
            display: "block",
          }}>
            Touch.
          </span>
        </h1>

        {/* gold rule */}
        <div style={{
          height: 1, background: "#9a6f1e",
          margin: "2rem auto",
          width: 0, opacity: 0,
          animation: v ? "cnLineGrow 0.8s ease forwards 600ms" : "none",
        }} />

        {/* subtitle */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(0.92rem, 1.6vw, 1.05rem)",
          lineHeight: 1.75,
          color: "#5a4e44",
          maxWidth: "52ch",
          margin: "0 auto 2rem",
          opacity: 0,
          animation: v ? "cnFadeUp 0.7s ease forwards 750ms" : "none",
        }}>
          A modern real estate house with old-world values — here to help you
          find, sell, or invest with clarity and care. We respond within one
          working day.
        </p>

        {/* badge pills */}
        {/* <div style={{
          display: "flex", flexWrap: "wrap" as const,
          justifyContent: "center", gap: "0.5rem",
          marginBottom: "2.8rem",
        }}>
          <Badge label="RERA Verified"   delay={900}  started={v} />
          <Badge label="NRI Friendly"     delay={970}  started={v} />
          <Badge label="End-to-End Legal" delay={1040} started={v} />
          <Badge label="Curated Listings" delay={1110} started={v} />
        </div> */}

        {/* CTAs */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "1.4rem", flexWrap: "wrap" as const,
          opacity: 0,
          animation: v ? "cnFadeUp 0.6s ease forwards 1200ms" : "none",
        }}>
          <a href="#contact-form" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem", fontWeight: 500,
            letterSpacing: "0.04em",
            color: "#fff", background: "#9a6f1e",
            padding: "0.9rem 2rem",
            borderRadius: 3, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#7d5916";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(154,111,30,0.28)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#9a6f1e";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Send a Message
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a href="tel:+919876543210" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem", fontWeight: 400,
            color: "#5a4e44", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#9a6f1e"}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#5a4e44"}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call us directly
          </a>
        </div>

        {/* scroll hint */}
        {/* <div style={{
          position: "absolute", bottom: "2rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column" as const,
          alignItems: "center", gap: "0.4rem",
          opacity: 0,
          animation: v ? "cnFadeUp 0.6s ease forwards 1500ms" : "none",
        }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.6rem", letterSpacing: "0.25em",
            textTransform: "uppercase" as const, color: "#c8a96e",
          }}>
            Scroll
          </span>
          <div style={{
            width: 1, height: 36,
            background: "linear-gradient(to bottom, #c8a96e, transparent)",
          }} />
        </div> */}
      </section>
    </>
  );
}

/* ── Map Section ── */
function MapSection() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: "#faf8f4", padding: "4rem 0 5rem" }}>
      <div
        ref={ref}
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}
      >
        <div style={{
          display: "flex", alignItems: "center", gap: "0.8rem",
          marginBottom: "1.2rem",
          opacity: 0,
          animation: inView ? "cnFadeUp 0.6s ease forwards 100ms" : "none",
        }}>
          <div style={{ width: 28, height: 1, background: "#9a6f1e" }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem", letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            color: "#9a6f1e", fontWeight: 500,
          }}>
            Our Location
          </span>
        </div>

        <div style={{
          border: "1px solid #e8e0d0", overflow: "hidden",
          height: 400, borderRadius: 6,
          opacity: 0,
          animation: inView ? "cnFadeUp 0.7s ease forwards 250ms" : "none",
        }}>
          <iframe
            title="Ahmedabad map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14685.362288091717!2d72.66063336193974!3d23.047972411463984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8771895ed8fd%3A0xc2c0f6eb38fe1853!2sHill%20Town%20Square!5e0!3m2!1sen!2sin!4v1779189156611!5m2!1sen!2sin"
            style={{ width: "100%", height: "100%", display: "block" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
function ContactPage() {
  return (
    <PageLayout>
      <ContactHero />
      <div id="contact-form">
        <ContactSection />
      </div>
      <MapSection />
    </PageLayout>
  );
}