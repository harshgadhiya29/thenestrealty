import { createFileRoute, Link } from "@tanstack/react-router";
import { Bed, Maximize, MapPin, ArrowUpRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";
import ki from "@/assets/kishakidha.jpg";
import ki1 from "@/assets/kishakidha1.jpg";

import p2 from "@/assets/ayodhyapuri2.jpg";
import p4 from "@/assets/radheShyam.jpeg";

import a1 from "@/assets/Aqua1.jpg";
import a2 from "@/assets/Aqua2.jpg";
import ar1 from "@/assets/ar1.jpg";
import ar2 from "@/assets/ar2.jpg";
import aa1 from "@/assets/ayodhyapuri.jpg";
import aa2 from "@/assets/ayodhyapuri1.jpg";
import h from "@/assets/harmony.jpg";
import h1 from "@/assets/harmony2.jpeg";
import kv from "@/assets/kv.jpeg";
import kv1 from "@/assets/kv1.jpeg";
import ak from "@/assets/ak.jpg";
import ak1 from "@/assets/ak1.jpg";
import ak3 from "@/assets/ak3.jpg";
import k from "@/assets/k.jpg";
import k1 from "@/assets/k1.jpg";
import ph from "@/assets/ph.jpg";
import ph1 from "@/assets/ph1.jpg";
import rh from "@/assets/rh.jpg";
import rh1 from "@/assets/rh1.jpg";
import s from "@/assets/s.jpg";
import s1 from "@/assets/s1.jpg";
import tntc from "@/assets/tntc.jpg";
import tntc1 from "@/assets/tntc1.jpg";

/* ─── Brand tokens ─── */
const C = {
  gold:  "#8B6914",
  goldL: "#c9a96e",
  dark:  "#1c1610",
  cream: "#f7f3ee",
  muted: "#9a8464",
  bdr:   "#ddd3c0",
} as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — The Nest Realty" },
      { name: "description", content: "Browse premium residential, commercial and land projects across Ahmedabad with The Nest Realty." },
      { property: "og:title", content: "Our Projects — The Nest Realty" },
      { property: "og:description", content: "Handpicked properties for families, investors and businesses." },
    ],
  }),
  component: Projects,
});

const FILTERS = ["All", "Residential", "Commercial", "Premium", "New Launch", "Ready to Move"] as const;
type Filter = (typeof FILTERS)[number];

type Project = {
  imgs:     string[];
  title:    string;
  location: string;
  contact:  string[];
  specs:    { label: string; sizes: string }[];
  tag:      Filter;
};

const projects: Project[] = [
  {
    imgs:     [ak, ak1, ak3],
    title:    "Aryaman Kalpvruksh",
    location: "Hathijan, Gujarat",
    contact:  ["9925006434"],
    specs: [
      { label: "2 BHK Flats",  sizes: "142, 146, 148, 160 Sq.Yd" },
      { label: "3 BHK Flats",  sizes: "190, 210 Sq.Yd" },
      { label: "Shops",        sizes: "600 – 3670 Sq.Ft" },
    ],
    tag: "New Launch",
  },
  {
    imgs:     [s, s1],
    title:    "Sahitya Nest",
    location: "Vastral, Ahmedabad, Gujarat",
    contact:  ["8200010914"],
    specs: [
      { label: "2 BHK Flats", sizes: "174 Sq.Yd" },
    ],
    tag: "Residential",
  },
  {
    imgs:     [p4, rh, rh1],
    title:    "Radhe Shyam Heritage",
    location: "Lambha, Ahmedabad",
    contact:  ["9998115571", "9998115581"],
    specs: [
      { label: "2 BHK Flats", sizes: "150 Sq.Yd" },
      { label: "3 BHK Flats", sizes: "215 Sq.Yd" },
      { label: "Shops",       sizes: "269 – 2098 Sq.Ft" },
    ],
    tag: "Premium",
  },
  {
    imgs:     [ki, p2, ki1],
    title:    "Aryaman Kishkindha",
    location: "Narol, Ahmedabad, Gujarat ",
    contact:  ["9925008300", "9925008400"],
    specs: [
      { label: "1 BHK Flats", sizes: "89, 92, 96 Sq.Yd" },
    ],
    tag: "New Launch",
  },
  {
    imgs:     [aa1, aa2, ],
    title:    "Aryaman Ayodhyapuri ",
    location: "Narol, Ahmedabad, Gujarat",
    contact:  ["9925008300", "9925008400"],
    specs: [
      { label: "1 BHK Flats", sizes: "96 Sq.Yd" },
      { label: "2 BHK Flats", sizes: "129, 138, 145 Sq.Yd" },
      { label: "3 BHK Flats", sizes: "196 Sq.Yd" },
    ],
    tag: "Premium",
  },
  {
    imgs:     [a1, a2],
    title:    "Aqua Green City",
    location: "Ahmedabad, Gujarat",
    contact:  ["7096950550"],
    specs: [
      { label: "2 BHK Flats", sizes: "134, 140 Sq.Yd" },
      { label: "Shops",       sizes: "292 – 988 Sq.Ft" },
    ],
    tag: "New Launch",
  },
  {
    imgs:     [k, k1],
    title:    "Keystone 30",
    location: "New, Vastral, Ahmedabad, Gujarat",
    contact:  ["9624293030"],
    specs: [
      { label: "4 BHK Bungalows", sizes: "Plot 124–228 Sq.Yd · Build 300 Sq.Yd" },
    ],
    tag: "Premium",
  },
  {
    imgs:     [ph, ph1],
    title:    "Prarthana Homes",
    location: "New, Vastral, Ahmedabad, Gujarat",
    contact:  ["9925003055"],
    specs: [
      { label: "4 BHK Bungalows", sizes: "Plot 86–134 Sq.Yd · Build 166 Sq.Yd" },
    ],
    tag: "Residential",
  },
  {
    imgs:     [kv, kv1],
    title:    "Kahan Villa",
    location: "Ahmedabad, Gujarat",
    contact:  ["9925001037"],
    specs: [
      { label: "4 BHK Bungalows", sizes: "Plot 99–125 Sq.Yd · Build 180 Sq.Yd · G+2" },
    ],
    tag: "Premium",
  },
  {
    imgs:     [ar1, ar2],
    title:    "Aryaman Residency",
    location: "Vatva, Ahmedabad, Gujarat",
    contact:  ["9313213944"],
    specs: [
      { label: "2 BHK Flats", sizes: "136 Sq.Yd" },
      { label: "Shops",       sizes: "448 – 758 Sq.Ft" },
    ],
    tag: "Residential",
  },
  {
    imgs:     [tntc, tntc1],
    title:    "The Nikol Trade Center",
    location: "Nikol, Ahmedabad, Gujarat",
    contact:  ["9313700464", "8485909112"],
    specs: [
      { label: "Shops", sizes: "216 – 3481 Sq.Ft" },
    ],
    tag: "Commercial",
  },
  {
    imgs:     [h, h1],
    title:    "Harmony 71",
    location: "Lambha, Ahmedabad, Gujarat ",
    contact:  ["9925062394"],
    specs: [
      { label: "4 BHK Bungalows", sizes: "Plot 65.50–173 Sq.Yd · Build 165–203 Sq.Yd" },
    ],
    tag: "Commercial",
  },
];

/* ── fires once when element enters viewport ── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ════════════════════════════════════════════
   PROJECTS PAGE
════════════════════════════════════════════ */
function Projects() {
  const [show, setShow]     = useState(false);
  const [active, setActive] = useState<Filter>("All");
  const grid                = useInView(0.05);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);

  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  const fu = (d: number): React.CSSProperties => ({
    opacity:    show ? 1 : 0,
    transform:  show ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.5s ${d}s ease, transform 0.5s ${d}s ease`,
  });

  return (
    <PageLayout>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "#fff", borderBottom: `1px solid ${C.bdr}` }}>
        <div className="container-x">
          <div style={{ display: "flex", minHeight: 240 }}>

            {/* LEFT dark stamp */}
            <div
              className="hidden sm:flex"
              style={{
                flexDirection:   "column",
                alignItems:      "center",
                justifyContent:  "center",
                flexShrink:      0,
                width:           148,
                backgroundColor: C.dark,
                padding:         "32px 20px",
                gap:             12,
                ...fu(0),
              }}
            >
              <span style={{ fontFamily: "Georgia, serif", fontSize: 64, fontWeight: 700, color: C.goldL, lineHeight: 1 }}>
                {String(projects.length).padStart(2, "0")}
              </span>
              <span style={{ display: "block", width: 30, height: 1, backgroundColor: C.gold, opacity: 0.5 }} />
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", lineHeight: 1.8 }}>Active</p>
                <p style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", lineHeight: 1.8 }}>Projects</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 4 }}>
                <span className="animate-pulse" style={{ display: "block", width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4ade80" }} />
                <span style={{ fontSize: 7, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>Live</span>
              </div>
            </div>

            {/* RIGHT content */}
            <div style={{ flex: 1, borderLeft: `3px solid ${C.gold}`, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "32px 28px 28px 36px" }}>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, ...fu(0.07) }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ display: "block", width: 22, height: 1, backgroundColor: C.gold }} />
                  <span style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, fontWeight: 600 }}>The Nest Realty</span>
                </div>
                <span className="hidden md:block" style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted }}>
                  Ahmedabad · Gujarat · India
                </span>
              </div>

              <div style={fu(0.14)}>
                <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: C.dark, lineHeight: 1.1, margin: "16px 0 0" }}>
                  Our <em style={{ fontStyle: "italic", color: C.gold }}>Featured</em><br />Projects
                </h1>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.75, maxWidth: 460, marginTop: 10 }}>
                  Curated homes, plots and commercial spaces across Narol, Lambha,
                  Bopal and Thaltej — handpicked for families, first-time buyers and investors.
                </p>
              </div>

              <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${C.bdr}`, display: "flex", alignItems: "center", justifyContent: "space-between", ...fu(0.22) }}>
                <span style={{ fontSize: 11, color: C.muted }}>
                  Showing <strong style={{ color: C.dark, fontWeight: 700 }}>{filtered.length}</strong>{" "}
                  {filtered.length === 1 ? "project" : "projects"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section id="projects" style={{ backgroundColor: C.cream, paddingBlock: "3.5rem" }}>
        <div className="container-x">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "6rem 0", color: C.muted, fontSize: 14 }}>
              No projects found for this category.
            </div>
          ) : (
            <div
              ref={grid.ref}
              className="grid sm:grid-cols-2 lg:grid-cols-3"
              style={{ gap: 24 }}
            >
              {filtered.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} visible={grid.visible} />
              ))}
            </div>
          )}
        </div>
      </section>

    </PageLayout>
  );
}

/* ════════════════════════════════════════════
   PROJECT CARD — image slider + specs + contact
════════════════════════════════════════════ */
function ProjectCard({
  project: p,
  index:   i,
  visible,
}: {
  project: Project;
  index:   number;
  visible: boolean;
}) {
  const [hovered, setHovered]     = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const total = p.imgs.length;

  function goTo(next: number, dir: "left" | "right") {
    if (animating || next === activeImg) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActiveImg(next);
      setAnimating(false);
    }, 350);
  }

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    goTo((activeImg - 1 + total) % total, "left");
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    goTo((activeImg + 1) % total, "right");
  }

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:        "relative",
        backgroundColor: "#fff",
        border:          `1px solid ${hovered ? C.gold : C.bdr}`,
        borderRadius:    8,
        overflow:        "hidden",
        opacity:         visible ? 1 : 0,
        transform:       visible ? "translateY(0)" : "translateY(32px)",
        transition:      `opacity 0.55s ${i * 0.08}s ease, transform 0.55s ${i * 0.08}s ease, border-color 0.25s ease`,
        display:         "flex",
        flexDirection:   "column",
      }}
    >

      {/* ── IMAGE SLIDER ── */}
      <div style={{ position: "relative", height: 210, overflow: "hidden", backgroundColor: C.dark, flexShrink: 0 }}>

        {p.imgs.map((src, idx) => {
          const isCurrent = idx === activeImg;
          return (
            <img
              key={idx}
              src={src}
              alt={`${p.title} ${idx + 1}`}
              loading="lazy"
              style={{
                position:   "absolute",
                inset:      0,
                width:      "100%",
                height:     "100%",
                objectFit:  "cover",
                transform:  isCurrent
                  ? animating
                    ? direction === "right" ? "translateX(-100%)" : "translateX(100%)"
                    : "translateX(0%)"
                  : direction === "right"
                    ? "translateX(100%)"
                    : "translateX(-100%)",
                transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
                zIndex:     isCurrent ? 1 : 0,
              }}
            />
          );
        })}

        {/* gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,22,16,0.65) 0%, transparent 55%)", pointerEvents: "none", zIndex: 2 }} />

        {/* prev */}
        {total > 1 && (
          <button
            onClick={prev}
            style={{
              position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
              zIndex: 3, width: 30, height: 30, borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.25)", backgroundColor: "rgba(28,22,16,0.55)",
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", opacity: hovered ? 1 : 0, transition: "opacity 0.25s ease, background-color 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.gold)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(28,22,16,0.55)")}
          >
            <ChevronLeft style={{ width: 15, height: 15 }} />
          </button>
        )}

        {/* next */}
        {total > 1 && (
          <button
            onClick={next}
            style={{
              position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
              zIndex: 3, width: 30, height: 30, borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.25)", backgroundColor: "rgba(28,22,16,0.55)",
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", opacity: hovered ? 1 : 0, transition: "opacity 0.25s ease, background-color 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.gold)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(28,22,16,0.55)")}
          >
            <ChevronRight style={{ width: 15, height: 15 }} />
          </button>
        )}

        {/* dot indicators */}
        {total > 1 && (
          <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5, zIndex: 3 }}>
            {p.imgs.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.preventDefault(); goTo(idx, idx > activeImg ? "right" : "left"); }}
                style={{
                  width: activeImg === idx ? 18 : 6, height: 6, borderRadius: 99,
                  backgroundColor: activeImg === idx ? C.goldL : "rgba(255,255,255,0.45)",
                  border: "none", padding: 0, cursor: "pointer",
                  transition: "width 0.3s ease, background-color 0.3s ease",
                }}
              />
            ))}
          </div>
        )}

        {/* counter */}
        {total > 1 && (
          <span style={{
            position: "absolute", top: 10, right: 10,
            fontSize: 9, fontWeight: 600, letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.75)", backgroundColor: "rgba(28,22,16,0.5)",
            padding: "2px 8px", borderRadius: 99, zIndex: 3,
          }}>
            {activeImg + 1} / {total}
          </span>
        )}
      </div>

      {/* ── CARD BODY ── */}
      <div style={{ padding: "16px 18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* title + location */}
        <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.dark, lineHeight: 1.15, margin: 0 }}>
          {p.title}
        </h3>
        <p style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5, fontSize: 11, color: C.muted }}>
          <MapPin style={{ width: 11, height: 11, flexShrink: 0 }} />
          {p.location}
        </p>

        {/* specs table */}
        <div
          style={{
            marginTop:    12,
            borderTop:    `1px solid ${C.bdr}`,
            paddingTop:   10,
            display:      "flex",
            flexDirection:"column",
            gap:          6,
            flex:         1,
          }}
        >
          {p.specs.map((s, si) => (
            <div
              key={si}
              style={{
                display:         "flex",
                alignItems:      "flex-start",
                justifyContent:  "space-between",
                gap:             8,
                fontSize:        10,
              }}
            >
              {/* label chip */}
              <span
                style={{
                  flexShrink:      0,
                  backgroundColor: C.cream,
                  border:          `1px solid ${C.bdr}`,
                  borderRadius:    4,
                  padding:         "2px 8px",
                  color:           C.dark,
                  fontWeight:      600,
                  letterSpacing:   "0.03em",
                  display:         "flex",
                  alignItems:      "center",
                  gap:             4,
                }}
              >
                <Bed style={{ width: 10, height: 10, color: C.gold }} />
                {s.label}
              </span>
              {/* sizes */}
              <span
                style={{
                  color:      C.muted,
                  textAlign:  "right",
                  lineHeight: 1.55,
                  fontSize:   10,
                }}
              >
                {s.sizes}
              </span>
            </div>
          ))}
        </div>

        {/* contact + CTA */}
        <div
          style={{
            marginTop:  14,
            paddingTop: 12,
            borderTop:  `1px solid ${C.bdr}`,
            display:    "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          {/* contact numbers */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {p.contact.map((num, ni) => (
              <a
                key={ni}
                href={`tel:${num}`}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            5,
                  fontSize:       10,
                  color:          C.muted,
                  textDecoration: "none",
                  fontWeight:     500,
                  letterSpacing:  "0.04em",
                  transition:     "color 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
              >
                <Phone style={{ width: 10, height: 10, flexShrink: 0 }} />
                {num}
              </a>
            ))}
          </div>

          {/* enquire CTA */}
          <Link
            to="/contact"
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            6,
              fontSize:       9,
              letterSpacing:  "0.18em",
              textTransform:  "uppercase",
              fontWeight:     600,
              color:          C.gold,
              textDecoration: "none",
              flexShrink:     0,
            }}
          >
            Enquire
            <span
              style={{
                display:         "flex",
                alignItems:      "center",
                justifyContent:  "center",
                width:           24,
                height:          24,
                borderRadius:    "50%",
                border:          `1px solid ${C.gold}`,
                backgroundColor: hovered ? C.gold : "transparent",
                color:           hovered ? "#fff" : C.gold,
                transition:      "all 0.22s ease",
              }}
            >
              <ArrowUpRight style={{ width: 10, height: 10 }} />
            </span>
          </Link>
        </div>
      </div>

      {/* bottom sweep bar */}
      <div
        style={{
          position:        "absolute",
          bottom:          0,
          left:            0,
          height:          2,
          width:           hovered ? "100%" : "0%",
          backgroundColor: C.gold,
          transition:      "width 0.42s ease",
        }}
      />
    </article>
  );
}