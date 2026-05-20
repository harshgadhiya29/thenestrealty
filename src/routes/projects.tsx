import { createFileRoute, Link } from "@tanstack/react-router";
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";
import p1 from "@/assets/KISHKINDHA.jpg";
import p2 from "@/assets/AYODHYAPURI.jpg";
import p3 from "@/assets/harmony.jpg";
import p4 from "@/assets/RadheShyam.jpeg";
import p5 from "@/assets/property-1.jpg";
import p6 from "@/assets/property-2.jpg";
/* ─── Brand tokens — matches About Us palette exactly ─── */
const C = {
  gold:   "#8B6914",
  goldL:  "#c9a96e",
  dark:   "#1c1610",
  cream:  "#f7f3ee",
  cream2: "#ede8e0",
  muted:  "#9a8464",
  bdr:    "#ddd3c0",
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

const projects = [
 { img: p1, title: "Aryaman Kishkindha ", location: "Narol, Ahmedabad",  price: "₹23 Lacs ",  beds: 1, baths: 3, area: "1850 sq.ft",     tag: "New Launch" },
  { img: p2, title: "Aryaman Ayodhyapuri ",   location: "Narol, Ahmedabad",       price: "₹32 Lacs",         beds: 2 & 3, baths: 5, area: "3200 sq.ft",     tag: "Premium"    },
  { img: p3, title: "Harmony 71",   location: "Lambha, Ahmedabad",           price: "₹1 Cr",         beds: 4, baths: 2, area: "1200 sq.ft",     tag: "Commercial" },
  { img: p4, title: "Radhe Shyam Heritage",     location: "Lambha, Ahmedabad",       price: "₹39 Lacs ",  beds:  2 & 3, baths: 0, area: "1500–4000 sq.ft", tag: "Premium"       },
  { img: p5, title: "Nest Heights",         location: "Bopal, Ahmedabad",   price: "₹1.6 Cr",          beds: 4, baths: 4, area: "2400 sq.ft",      tag: "Ready to Move" as Filter, tagColor: "bg-violet-500" },
  { img: p6, title: "Vasudha Residency",    location: "Thaltej, Ahmedabad", price: "₹95 Lacs",            beds: 3, baths: 3, area: "1950 sq.ft",      tag: "Premium"       as Filter, tagColor: "bg-amber-500"  },
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

  /* staggered fade-up */
  const fu = (d: number): React.CSSProperties => ({
    opacity:    show ? 1 : 0,
    transform:  show ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.5s ${d}s ease, transform 0.5s ${d}s ease`,
  });

  return (
    <PageLayout>

      {/* ════════════════════════════════════════════
          HERO — Option D
          Dark stamp panel LEFT  +  gold-border content RIGHT
      ════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#fff", borderBottom: `1px solid ${C.bdr}` }}>
        <div className="container-x">
          <div style={{ display: "flex", minHeight: 240 }}>

            {/* ── LEFT: dark stamp panel ── */}
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
              {/* project number */}
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize:   64,
                  fontWeight: 700,
                  color:      C.goldL,
                  lineHeight: 1,
                }}
              >
                {String(projects.length).padStart(2, "0")}
              </span>

              {/* thin gold rule */}
              <span style={{ display: "block", width: 30, height: 1, backgroundColor: C.gold, opacity: 0.5 }} />

              {/* label */}
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", lineHeight: 1.8 }}>
                  Active
                </p>
                <p style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", lineHeight: 1.8 }}>
                  Projects
                </p>
              </div>

              {/* live dot */}
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 4 }}>
                <span
                  className="animate-pulse"
                  style={{ display: "block", width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4ade80" }}
                />
                <span style={{ fontSize: 7, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>
                  Live
                </span>
              </div>
            </div>

            {/* ── RIGHT: gold left-border content ── */}
            <div
              style={{
                flex:          1,
                borderLeft:    `3px solid ${C.gold}`,
                display:       "flex",
                flexDirection: "column",
                justifyContent:"space-between",
                padding:       "32px 28px 28px 36px",
              }}
            >

              {/* eyebrow row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, ...fu(0.07) }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ display: "block", width: 22, height: 1, backgroundColor: C.gold }} />
                  <span style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, fontWeight: 600 }}>
                    The Nest Realty
                  </span>
                </div>
                <span
                  className="hidden md:block"
                  style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted }}
                >
                  Ahmedabad · Gujarat · India
                </span>
              </div>

              {/* headline + subtitle */}
              <div style={fu(0.14)}>
                <h1
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize:   "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    color:      C.dark,
                    lineHeight: 1.1,
                    margin:     "16px 0 0",
                  }}
                >
                  Our{" "}
                  <em style={{ fontStyle: "italic", color: C.gold }}>Featured</em>
                  <br />
                  Projects
                </h1>
                <p
                  style={{
                    fontSize:   13,
                    color:      C.muted,
                    lineHeight: 1.75,
                    maxWidth:   460,
                    marginTop:  10,
                  }}
                >
                  Curated homes, plots and commercial spaces across Narol, Lambha,
                  Bopal and Thaltej — handpicked for families, first-time buyers
                  and investors.
                </p>
              </div>

              {/* filter pills + count */}
              <div
                style={{
                  marginTop:   24,
                  paddingTop:  20,
                  borderTop:   `1px solid ${C.bdr}`,
                  display:     "flex",
                  flexWrap:    "wrap" as const,
                  alignItems:  "center",
                  gap:         "12px 0",
                  justifyContent: "space-between",
                  ...fu(0.22),
                }}
              >
                {/* <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                  {FILTERS.map((f) => {
                    const isActive = f === active;
                    const count    = f === "All" ? projects.length : projects.filter((p) => p.tag === f).length;
                    return (
                      <button
                        key={f}
                        onClick={() => setActive(f)}
                        style={{
                          fontSize:        10,
                          letterSpacing:   "0.05em",
                          padding:         "5px 14px",
                          borderRadius:    3,
                          border:          `1px solid ${isActive ? C.gold : C.bdr}`,
                          backgroundColor: isActive ? C.gold : C.cream,
                          color:           isActive ? "#fff" : C.muted,
                          cursor:          "pointer",
                          transition:      "all 0.18s ease",
                          fontWeight:      isActive ? 600 : 400,
                        }}
                      >
                        {f}
                        {count > 0 && (
                          <span style={{ marginLeft: 5, fontSize: 9, opacity: isActive ? 0.75 : 0.45 }}>
                            {count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div> */}

                {/* result count */}
                <span style={{ fontSize: 11, color: C.muted, flexShrink: 0 }}>
                  Showing{" "}
                  <strong style={{ color: C.dark, fontWeight: 700 }}>{filtered.length}</strong>{" "}
                  {filtered.length === 1 ? "project" : "projects"}
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PROJECT GRID
      ════════════════════════════════════════════ */}
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
   PROJECT CARD
════════════════════════════════════════════ */
function ProjectCard({
  project: p,
  index:   i,
  visible,
}: {
  project: (typeof projects)[0];
  index:   number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

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
      }}
    >
      {/* image */}
      <div style={{ position: "relative", height: 215, overflow: "hidden" }}>
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          style={{
            width:      "100%",
            height:     "100%",
            objectFit:  "cover",
            transform:  hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.65s ease",
          }}
        />
        {/* overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,22,16,0.65) 0%, transparent 55%)" }} />

        {/* tag */}
        {/* <span
          className={`${p.tagColor} text-white`}
          style={{
            position:      "absolute",
            top:           12,
            left:          12,
            fontSize:      9,
            fontWeight:    600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding:       "3px 10px",
            borderRadius:  99,
          }}
        >
          {p.tag}
        </span> */}

        {/* price pill */}
        <span
          style={{
            position:        "absolute",
            bottom:          12,
            right:           12,
            backgroundColor: "rgba(28,22,16,0.72)",
            color:           C.goldL,
            fontFamily:      "Georgia, serif",
            fontSize:        14,
            fontWeight:      700,
            padding:         "3px 12px",
            borderRadius:    99,
          }}
        >
          {p.price}
        </span>
      </div>

      {/* card body */}
      <div style={{ padding: "16px 18px 20px" }}>

        <h3 style={{ fontFamily: "Georgia, serif", fontSize: 19, fontWeight: 700, color: C.dark, lineHeight: 1.15, margin: 0 }}>
          {p.title}
        </h3>

        <p style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5, fontSize: 11, color: C.muted }}>
          <MapPin style={{ width: 11, height: 11, flexShrink: 0 }} />
          {p.location}
        </p>

        {/* spec chips */}
        <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
          {p.beds > 0 && (
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: C.muted, backgroundColor: C.cream, border: `1px solid ${C.bdr}`, borderRadius: 4, padding: "3px 10px" }}>
              <Bed style={{ width: 11, height: 11 }} /> {p.beds} BHK
            </span>
          )}
          {/* {p.baths > 0 && (
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: C.muted, backgroundColor: C.cream, border: `1px solid ${C.bdr}`, borderRadius: 4, padding: "3px 10px" }}>
              <Bath style={{ width: 11, height: 11 }} /> {p.baths} Bath
            </span>
          )} */}
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: C.muted, backgroundColor: C.cream, border: `1px solid ${C.bdr}`, borderRadius: 4, padding: "3px 10px" }}>
            <Maximize style={{ width: 11, height: 11 }} /> {p.area}
          </span>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${C.bdr}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link
            to="/contact"
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            8,
              fontSize:       10,
              letterSpacing:  "0.18em",
              textTransform:  "uppercase",
              fontWeight:     600,
              color:          C.gold,
              textDecoration: "none",
            }}
          >
            Enquire Now
            <span
              style={{
                display:         "flex",
                alignItems:      "center",
                justifyContent:  "center",
                width:           26,
                height:          26,
                borderRadius:    "50%",
                border:          `1px solid ${C.gold}`,
                backgroundColor: hovered ? C.gold : "transparent",
                color:           hovered ? "#fff" : C.gold,
                transition:      "all 0.22s ease",
              }}
            >
              <ArrowUpRight style={{ width: 11, height: 11 }} />
            </span>
          </Link>
        </div>
      </div>

      {/* bottom sweep bar on hover */}
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