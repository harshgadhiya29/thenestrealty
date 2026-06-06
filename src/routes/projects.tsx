import { createFileRoute, Link } from "@tanstack/react-router";
import { Bed, Maximize, MapPin, ArrowUpRight, ChevronLeft, ChevronRight, Phone, X, FileText, User, Mail, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";
const ki = "/assets/ki.jpg";
const a1 = "/assets/Aqua1.jpg";
const ar1 = "/assets/ar1.jpg";
const aa1 = "/assets/ayodhyapuri.jpg";
const h = "/assets/harmony.jpg";
const kv = "/assets/kv.jpeg";
const ak = "/assets/ak.jpg";
const ph = "/assets/ph.jpg";
const rh = "/assets/rh.jpg";
const s = "/assets/s.jpg";
const tntc = "/assets/tntc.jpeg";
const k = "/assets/k.jpg";

// ── Brochure PDF static paths ──
const tntcBrochure = "/assets/brochures/tntc.pdf";
const akBrochure = "/assets/brochures/kalptruve.pdf";
const arBrochure = "/assets/brochures/residency.pdf";
const aaBrochure = "/assets/brochures/ayodhyapri.pdf";
const kishBrochure = "/assets/brochures/kishkindha.pdf";
const rhBrochure = "/assets/brochures/radheshyam.pdf";
const keystoneBrochure = "/assets/brochures/keystone30.pdf";
const aquaBrochure = "/assets/brochures/amritbrochure.pdf";
const prarthanaBrochure = "/assets/brochures/parthna.pdf";
const kahanBrochure = "/assets/brochures/kahanvill.pdf";
const harmonyBrochure = "/assets/brochures/harmony71.pdf";
const sahityaBrochure = "/assets/brochures/sahitya.pdf";


/* ─── Brand tokens ─── */
const C = {
  gold: "#8B6914",
  goldL: "#c9a96e",
  dark: "#1c1610",
  cream: "#f7f3ee",
  muted: "#9a8464",
  bdr: "#ddd3c0",
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
  imgs: string[];
  title: string;
  location: string;
  contact: string[];
  specs: { label: string; sizes: string }[];
  tag: Filter;
  imgFit?: "cover" | "contain";
  brochureUrl?: string;
  brochureFileName?: string;
};

const projects: Project[] = [
  {
    imgs: [tntc],
    title: "The Nikol Trade Center - TNTC",
    location: "Nikol, Ahmedabad, Gujarat",
    contact: ["9313700464", "8485909112"],
    specs: [{ label: "Shops", sizes: "216 – 3481 Sq.Ft" }],
    tag: "Commercial",
    brochureUrl: tntcBrochure,
    brochureFileName: "TNTC - The Nikol Trade Center.pdf",
  },
  {
    imgs: [ak],
    title: "Aryaman Kalpvruksh",
    location: "Hathijan, Gujarat",
    contact: ["9925006434"],
    specs: [
      { label: "2 BHK Flats", sizes: "142, 146, 148, 160 Sq.Yd" },
      { label: "3 BHK Flats", sizes: "190, 210 Sq.Yd" },
      { label: "Shops", sizes: "600 – 3670 Sq.Ft" },
    ],
    tag: "New Launch",
    brochureUrl: akBrochure,
    brochureFileName: "Aryaman Kalpvruksh Brochure.pdf",
  },
  {
    imgs: [ar1],
    title: "Aryaman Residency",
    location: "Vatva, Ahmedabad, Gujarat",
    contact: ["9313213944"],
    specs: [
      { label: "2 BHK Flats", sizes: "136 Sq.Yd" },
      { label: "Shops", sizes: "448 – 758 Sq.Ft" },
    ],
    tag: "Residential",
    brochureUrl: arBrochure,
    brochureFileName: "Aryaman Residency Brochure.pdf",
  },
  {
    imgs: [aa1],
    title: "Aryaman Ayodhyapuri",
    location: "Narol, Ahmedabad, Gujarat",
    contact: ["9925008300", "9925008400"],
    specs: [
      { label: "1 BHK Flats", sizes: "96 Sq.Yd" },
      { label: "2 BHK Flats", sizes: "129, 138, 145 Sq.Yd" },
      { label: "3 BHK Flats", sizes: "196 Sq.Yd" },
    ],
    tag: "Premium",
    brochureUrl: aaBrochure,
    brochureFileName: "Aryaman Ayodhyapuri Brochure.pdf",
  },
  {
    imgs: [ki],
    title: "Aryaman Kishkindha",
    location: "Narol, Ahmedabad, Gujarat",
    contact: ["9925008300", "9925008400"],
    specs: [{ label: "1 BHK Flats", sizes: "89, 92, 96 Sq.Yd" }],
    tag: "New Launch",
    brochureUrl: kishBrochure,
    brochureFileName: "Aryaman Kishkindha Brochure.pdf",
  },
  {
    imgs: [rh],
    title: "Radhe Shyam Heritage",
    location: "Lambha, Ahmedabad",
    contact: ["9998115571", "9998115581"],
    specs: [
      { label: "2 BHK Flats", sizes: "150 Sq.Yd" },
      { label: "3 BHK Flats", sizes: "215 Sq.Yd" },
      { label: "Shops", sizes: "269 – 2098 Sq.Ft" },
    ],
    tag: "Premium",
    brochureUrl: rhBrochure,
    brochureFileName: "Radhe Shyam Heritage Brochure.pdf",
  },
  {
    imgs: [k],
    title: "Keystone 30",
    location: "New, Vastral, Ahmedabad, Gujarat",
    contact: ["9624293030"],
    specs: [{ label: "4 BHK Bungalows", sizes: "Plot 124–228 Sq.Yd · Build 300 Sq.Yd" }],
    tag: "Premium",
    brochureUrl: keystoneBrochure,
    brochureFileName: "Keystone 30 Brochure.pdf",
  },
  {
    imgs: [a1],
    title: "Aqua Green City",
    location: "Ahmedabad, Gujarat",
    contact: ["7096950550"],
    specs: [
      { label: "2 BHK Flats", sizes: "134, 140 Sq.Yd" },
      { label: "Shops", sizes: "292 – 988 Sq.Ft" },
    ],
    tag: "New Launch",
    brochureUrl: aquaBrochure,
    brochureFileName: "Aqua Green City Brochure.pdf",
  },
  {
    imgs: [ph],
    title: "Prarthana Homes",
    location: "New, Vastral, Ahmedabad, Gujarat",
    contact: ["9925003055"],
    specs: [{ label: "4 BHK Bungalows", sizes: "Plot 86–134 Sq.Yd · Build 166 Sq.Yd" }],
    tag: "Residential",
    brochureUrl: prarthanaBrochure,
    brochureFileName: "Prarthana Homes Brochure.pdf",
  },
  {
    imgs: [kv],
    title: "Kahan Villa",
    location: "Ahmedabad, Gujarat",
    contact: ["9925001037"],
    specs: [{ label: "4 BHK Bungalows", sizes: "Plot 99–125 Sq.Yd · Build 180 Sq.Yd · G+2" }],
    tag: "Premium",
    brochureUrl: kahanBrochure,
    brochureFileName: "Kahan Villa Brochure.pdf",
  },
  {
    imgs: [h],
    title: "Harmony 71",
    location: "Lambha, Ahmedabad, Gujarat",
    contact: ["9925062394"],
    specs: [{ label: "4 BHK Bungalows", sizes: "Plot 65.50–173 Sq.Yd · Build 165–203 Sq.Yd" }],
    tag: "Commercial",
    brochureUrl: harmonyBrochure,
    brochureFileName: "Harmony 71 Brochure.pdf",
  },
  {
    imgs: [s],
    title: "Sahitya Nest",
    location: "Vastral, Ahmedabad, Gujarat",
    contact: ["8200010914"],
    specs: [{ label: "2 BHK Flats", sizes: "174 Sq.Yd" }],
    tag: "Residential",
    brochureUrl: sahityaBrochure,
    brochureFileName: "Sahitya Nest Brochure.pdf",
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
   MODAL — shared base
════════════════════════════════════════════ */
function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        backgroundColor: "rgba(28,22,16,0.72)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          width: "100%",
          maxWidth: 440,
          padding: "32px 28px 28px",
          position: "relative",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        {/* close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 14, right: 14,
            width: 32, height: 32, borderRadius: "50%",
            border: `1px solid ${C.bdr}`, backgroundColor: "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: C.muted,
          }}
        >
          <X style={{ width: 15, height: 15 }} />
        </button>
        {children}
      </div>
    </div>
  );
}

/* ── Controlled input field ── */
function FieldControlled({
  icon,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      border: `1px solid ${C.bdr}`, borderRadius: 8,
      padding: "10px 14px", backgroundColor: "#faf8f5",
    }}>
      <span style={{ color: C.muted, flexShrink: 0, display: "flex" }}>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          border: "none", background: "transparent", outline: "none",
          fontSize: 13, color: C.dark, width: "100%",
        }}
      />
    </div>
  );
}

/* ── Success state shown inside both modals ── */
function SuccessState({ message }: { message: string }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 0 8px" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 56, height: 56, borderRadius: "50%",
        backgroundColor: "#f0fdf4", marginBottom: 14,
        border: "2px solid #4ade80",
      }}>
        <CheckCircle style={{ width: 26, height: 26, color: "#16a34a" }} />
      </div>
      <p style={{ fontSize: 15, fontWeight: 700, color: C.dark, margin: "0 0 6px", fontFamily: "Georgia, serif" }}>
        {message}
      </p>
      <p style={{ fontSize: 12, color: C.muted, margin: 0 }}>
        This window will close automatically…
      </p>
    </div>
  );
}

/* ── CALL MODAL ── */
function CallModal({ open, onClose, project }: { open: boolean; onClose: () => void; project: Project }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setName(""); setPhone(""); setEmail(""); setSubmitted(false);
    }
  }, [open]);

  function handleSubmit() {
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => { onClose(); }, 2000);
  }

  return (
    <Modal open={open} onClose={onClose}>
      {submitted ? (
        <SuccessState message="Request Received! We'll call you shortly." />
      ) : (
        <>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 52, height: 52, borderRadius: "50%",
              backgroundColor: C.dark, marginBottom: 12,
            }}>
              <Phone style={{ width: 22, height: 22, color: C.goldL }} />
            </div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: C.dark, margin: "0 0 6px" }}>
              Talk To Our Sales Expert
            </h2>
            <p style={{ fontSize: 12, color: C.muted, margin: 0 }}>
              Fill in your details and our team will contact you shortly.
            </p>
            <p style={{ fontSize: 11, color: C.gold, marginTop: 4, fontWeight: 600 }}>{project.title}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <FieldControlled
              icon={<User style={{ width: 14, height: 14 }} />}
              placeholder="Full Name *"
              value={name}
              onChange={setName}
            />
            <FieldControlled
              icon={<Phone style={{ width: 14, height: 14 }} />}
              placeholder="Mobile Number *"
              value={phone}
              onChange={setPhone}
              type="tel"
            />
            <FieldControlled
              icon={<Mail style={{ width: 14, height: 14 }} />}
              placeholder="Email Address"
              value={email}
              onChange={setEmail}
              type="email"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!name.trim() || !phone.trim()}
            style={{
              marginTop: 16, width: "100%", padding: "13px 0",
              backgroundColor: name.trim() && phone.trim() ? C.gold : C.muted,
              color: "#fff",
              border: "none", borderRadius: 8,
              cursor: name.trim() && phone.trim() ? "pointer" : "not-allowed",
              fontSize: 13, fontWeight: 600, letterSpacing: "0.06em",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              transition: "background-color 0.2s ease",
            }}
          >
            <Phone style={{ width: 14, height: 14 }} />
            Request Call Back
          </button>

          <p style={{ textAlign: "center", fontSize: 10, color: C.muted, marginTop: 12 }}>
            🔒 We respect your privacy. Your details are safe with us.
          </p>
        </>
      )}
    </Modal>
  );
}

/* ── BROCHURE MODAL ── */
function BrochureModal({ open, onClose, project }: { open: boolean; onClose: () => void; project: Project }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setName(""); setPhone(""); setEmail(""); setSubmitted(false);
    }
  }, [open]);

  function handleDownload() {
    if (!name.trim() || !phone.trim()) return;

    if (project.brochureUrl) {
      const a = document.createElement("a");
      a.href = project.brochureUrl;
      a.download = project.brochureFileName ?? project.title + ".pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    setSubmitted(true);
    setTimeout(() => { onClose(); }, 2000);
  }

  return (
    <Modal open={open} onClose={onClose}>
      {submitted ? (
        <SuccessState message="Download started! Check your downloads folder." />
      ) : (
        <>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 52, height: 52, borderRadius: "50%",
              backgroundColor: C.dark, marginBottom: 12,
            }}>
              <FileText style={{ width: 22, height: 22, color: C.goldL }} />
            </div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: C.dark, margin: "0 0 6px" }}>
              Download Project Brochure
            </h2>
            <p style={{ fontSize: 12, color: C.muted, margin: 0 }}>
              Please share your details to receive the latest brochure and project information.
            </p>
            <p style={{ fontSize: 11, color: C.gold, marginTop: 4, fontWeight: 600 }}>{project.title}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <FieldControlled
              icon={<User style={{ width: 14, height: 14 }} />}
              placeholder="Full Name *"
              value={name}
              onChange={setName}
            />
            <FieldControlled
              icon={<Phone style={{ width: 14, height: 14 }} />}
              placeholder="Mobile Number *"
              value={phone}
              onChange={setPhone}
              type="tel"
            />
            <FieldControlled
              icon={<Mail style={{ width: 14, height: 14 }} />}
              placeholder="Email Address"
              value={email}
              onChange={setEmail}
              type="email"
            />
          </div>

          <button
            onClick={handleDownload}
            disabled={!name.trim() || !phone.trim() || !project.brochureUrl}
            style={{
              marginTop: 16, width: "100%", padding: "13px 0",
              backgroundColor: name.trim() && phone.trim() && project.brochureUrl ? C.gold : C.muted,
              color: "#fff", border: "none", borderRadius: 8,
              cursor: name.trim() && phone.trim() && project.brochureUrl ? "pointer" : "not-allowed",
              fontSize: 13, fontWeight: 600, letterSpacing: "0.06em",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              transition: "background-color 0.2s ease",
            }}
          >
            <FileText style={{ width: 14, height: 14 }} />
            {project.brochureUrl ? "Download Brochure" : "Brochure Coming Soon"}
          </button>

          <p style={{ textAlign: "center", fontSize: 10, color: C.muted, marginTop: 12 }}>
            🔒 We respect your privacy. Your details are safe with us.
          </p>
        </>
      )}
    </Modal>
  );
}

/* ════════════════════════════════════════════
  PROJECTS PAGE
════════════════════════════════════════════ */
function Projects() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState<Filter>("All");
  const grid = useInView(0.05);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);

  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  const fu = (d: number): React.CSSProperties => ({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(16px)",
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
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                width: 148,
                backgroundColor: C.dark,
                padding: "32px 20px",
                gap: 12,
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
  PROJECT CARD
════════════════════════════════════════════ */
function ProjectCard({
  project: p,
  index: i,
  visible,
}: {
  project: Project;
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [callOpen, setCallOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  const total = p.imgs.length;
  // ── CHANGE: always use "cover" so images fill the card completely ──
  const imgFit = "cover";

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
    <>
      <CallModal open={callOpen} onClose={() => setCallOpen(false)} project={p} />
      <BrochureModal open={brochureOpen} onClose={() => setBrochureOpen(false)} project={p} />

      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          backgroundColor: "#fff",
          border: `1px solid ${hovered ? C.gold : C.bdr}`,
          borderRadius: 8,
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.55s ${i * 0.08}s ease, transform 0.55s ${i * 0.08}s ease, border-color 0.25s ease`,
          display: "flex",
          flexDirection: "column",
        }}
      >

        {/* ── IMAGE SLIDER ── */}
        <div style={{
          position: "relative", height: 210, overflow: "hidden",
          backgroundColor: C.dark,
          flexShrink: 0,
        }}>

          {p.imgs.map((src, idx) => {
            const isCurrent = idx === activeImg;
            return (
              <img
                key={idx}
                src={src}
                alt={`${p.title} ${idx + 1}`}
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transform: isCurrent
                    ? animating
                      ? direction === "right" ? "translateX(-100%)" : "translateX(100%)"
                      : "translateX(0%)"
                    : direction === "right"
                      ? "translateX(100%)"
                      : "translateX(-100%)",
                  transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
                  zIndex: isCurrent ? 1 : 0,
                }}
              />
            );
          })}

          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,22,16,0.65) 0%, transparent 55%)", pointerEvents: "none", zIndex: 2 }} />

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

          <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.dark, lineHeight: 1.15, margin: 0 }}>
            {p.title}
          </h3>
          <p style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5, fontSize: 11, color: C.muted }}>
            <MapPin style={{ width: 11, height: 11, flexShrink: 0 }} />
            {p.location}
          </p>

          {/* specs */}
          <div style={{ marginTop: 12, borderTop: `1px solid ${C.bdr}`, paddingTop: 10, display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
            {p.specs.map((s, si) => (
              <div key={si} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, fontSize: 10 }}>
                <span style={{
                  flexShrink: 0, backgroundColor: C.cream, border: `1px solid ${C.bdr}`,
                  borderRadius: 4, padding: "2px 8px", color: C.dark, fontWeight: 600,
                  letterSpacing: "0.03em", display: "flex", alignItems: "center", gap: 4,
                }}>
                  <Bed style={{ width: 10, height: 10, color: C.gold }} />
                  {s.label}
                </span>
                <span style={{ color: C.muted, textAlign: "right", lineHeight: 1.55, fontSize: 10 }}>
                  {s.sizes}
                </span>
              </div>
            ))}
          </div>

          {/* ── CTA BUTTONS ── */}
          <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${C.bdr}`, display: "flex", gap: 8 }}>

            {/* Call Now */}
            <button
              onClick={() => setCallOpen(true)}
              style={{
                flex: 1,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                padding: "9px 0",
                border: `1px solid ${C.bdr}`,
                borderRadius: 6,
                backgroundColor: "#fff",
                color: C.dark,
                fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
                cursor: "pointer",
                transition: "border-color 0.2s ease, background-color 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = C.gold;
                e.currentTarget.style.backgroundColor = C.cream;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = C.bdr;
                e.currentTarget.style.backgroundColor = "#fff";
              }}
            >
              <Phone style={{ width: 12, height: 12, color: C.gold }} />
              Call Now
            </button>

            {/* Download Brochure */}
            <button
              onClick={() => setBrochureOpen(true)}
              style={{
                flex: 1,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                padding: "9px 0",
                border: "none",
                borderRadius: 6,
                backgroundColor: C.gold,
                color: "#fff",
                fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.dark)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.gold)}
            >
              <FileText style={{ width: 12, height: 12 }} />
              Brochure
            </button>
          </div>
        </div>

        {/* bottom sweep bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, height: 2,
          width: hovered ? "100%" : "0%",
          backgroundColor: C.gold,
          transition: "width 0.42s ease",
        }} />
      </article>
    </>
  );
}