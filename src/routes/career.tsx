import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Clock3, Mail, MapPinned, Megaphone, Users } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";
import career from "@/assets/career.png";
import career2 from "@/assets/career2.png";

import {
  CalendarDays,
  User,
  ShieldCheck,
  BadgeCheck,
  Upload,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — The Nest Realty" },
      { name: "description", content: "Join The Nest Realty — open positions in Ahmedabad." },
    ],
  }),
  component: Career,
});
const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "0.65rem",
  color: "#2a241d",
  fontSize: "0.9rem",
  fontWeight: 600,
  fontFamily: "'DM Sans', sans-serif",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "52px",
  border: "1px solid #e8dfd2",
  borderRadius: "10px",
  padding: "0 1rem",
  outline: "none",
  background: "#fff",
  color: "#2b241d",
  fontSize: "0.92rem",
  fontFamily: "'DM Sans', sans-serif",
  boxSizing: "border-box",   // ✅ now valid
};

const selectStyle: React.CSSProperties = {
  width: "100%",
  height: "52px",
  border: "1px solid #e8dfd2",
  borderRadius: "10px",
  padding: "0 1rem",
  appearance: "none",
  outline: "none",
  background: "#fff",
  color: "#2b241d",
  fontSize: "0.92rem",
  fontFamily: "'DM Sans', sans-serif",
  boxSizing: "border-box",   // ✅ now valid
};



const openings = [
  {
    role: "Senior Real Estate Advisor",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "3-6 Years Experience",
    icon: BriefcaseBusiness,
  },
  {
    role: "Marketing Manager",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "2-5 Years Experience",
    icon: Megaphone,
  },
  {
    role: "Client Relationship Executive",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "1-3 Years Experience",
    icon: Users,
  },
  {
    role: "Site Visit Coordinator",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "1-2 Years Experience",
    icon: Building2,
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
<section
  style={{
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    background: "#f8f5ef",
  }}
>
  {/* LEFT LIGHT AREA */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, #f8f5efab 0%, #f8f5eff8 42%, rgba(248, 245, 239, 0.38) 50%, rgba(248, 245, 239, 0.13) 50%, rgba(0,0,0,0) 100%)",
      zIndex: 1,
    }}
  />

  {/* RIGHT IMAGE */}
  <div
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      width: "62%",
      height: "100%",
      backgroundImage: `url(${career})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* DARK OVERLAY */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.18)",
      }}
    />
  </div>

  {/* CONTENT */}
  <div
    style={{
      position: "relative",
      zIndex: 3,
      width: "100%",
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 clamp(1.5rem,5vw,6rem)",
    }}
  >
    <div
      style={{
        maxWidth: "560px",
      }}
    >
      {/* SMALL LABEL */}
      <p
        style={{
          margin: 0,
          marginBottom: "1.2rem",
          fontSize: "0.82rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#b58a3c",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
        }}
      >
        Careers at The Nest Realty
      </p>

      {/* HEADING */}
      <h1
        style={{
          margin: 0,
          lineHeight: 0.95,
          fontFamily: "'Playfair Display', serif",
        }}
      >
        <span
          style={{
            display: "block",
            fontSize: "clamp(3rem,6vw,5.7rem)",
            color: "#111111",
            fontWeight: 700,
          }}
        >
          Open roles.
        </span>

        <span
          style={{
            display: "block",
            marginTop: "0.2rem",
            fontSize: "clamp(3rem,6vw,5.7rem)",
            color: "#b58a3c",
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          Real impact.
        </span>
      </h1>

      {/* LINE */}
      <div
        style={{
          width: "58px",
          height: "2px",
          background: "#c79b47",
          marginTop: "2rem",
          marginBottom: "1.8rem",
        }}
      />

      {/* DESCRIPTION */}
      <p
        style={{
          margin: 0,
          maxWidth: "520px",
          color: "#4b4b4b",
          fontSize: "1rem",
          lineHeight: 1.9,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Join a team that’s redefining real estate advisory in Ahmedabad.
        We work with clarity, care, and a long-term mindset — and we
        expect the same from the people we hire.
      </p>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {/* PRIMARY BUTTON */}
        <a
          href="#openings"
          style={{
            background: "#b07a23",
            color: "#ffffff",
            textDecoration: "none",
            padding: "1rem 2rem",
            borderRadius: "4px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            transition: "0.3s ease",
          }}
        >
          See Open Roles →
        </a>

        {/* SECONDARY BUTTON */}
        <a
          href="#about"
          style={{
            color: "#3b3b3b",
            textDecoration: "none",
            padding: "1rem 1.8rem",
            borderRadius: "4px",
            border: "1px solid rgba(0,0,0,0.15)",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(8px)",
          }}
        >
          Learn more about us →
        </a>
      </div>
    </div>
  </div>
</section>
      {/* ═══════════════════════════════════
          OPEN ROLES — full-width list
      ═══════════════════════════════════ */}
   
<section
  id="openings"
  style={{
    background: "#f8f5ef",
    padding: "5rem clamp(1.5rem,5vw,4rem)",
  }}
>
  <div
    style={{
      maxWidth: "1120px",
      margin: "0 auto",
    }}
  >
    {/* TOP */}
    <div
      style={{
        textAlign: "center",
        marginBottom: "2.8rem",
      }}
    >
      <p
        style={{
          margin: 0,
          marginBottom: "0.7rem",
          fontSize: "0.72rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#c09346",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
        }}
      >
        Open Positions
      </p>

      <h2
        style={{
          margin: 0,
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem,4vw,3.1rem)",
          color: "#181512",
          fontWeight: 600,
        }}
      >
        Explore current{" "}
        <span
          style={{
            color: "#c09346",
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          opportunities
        </span>
      </h2>

      <p
        style={{
          margin: "1rem auto 0",
          maxWidth: "520px",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "#857b6f",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        We’re growing, and we’re looking for motivated individuals
        who are passionate about real estate and client success.
      </p>
    </div>

    {/* JOB CARD */}
    <div
      style={{
        background: "#fff",
        border: "1px solid #ece4d8",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {openings.map((job, index) => {
        const Icon = job.icon;

        return (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "2.5fr 1.3fr 1.3fr 1.5fr auto",
              alignItems: "center",
              gap: "1rem",
              padding: "1.25rem 2.5rem",
              borderBottom:
                index !== openings.length - 1
                  ? "1px solid #f2ece3"
                  : "none",
            }}
          >
            {/* ROLE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {/* ICON BOX */}
              <div
                style={{
                  width: "38  px",
                  height: "38px",
                  borderRadius: "10px",
                  border: "1px solid #eadfce",
                  background: "#fcfaf6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon
                  size={18}
                  color="#c09346"
                  strokeWidth={1.8}
                />
              </div>

              <h3
                style={{
                  margin: 0,
                  color: "#1c1814",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {job.role}
              </h3>
            </div>

            {/* LOCATION */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                color: "#7f7669",
                fontSize: "0.88rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <MapPinned size={15} color="#c09346" />
              {job.location}
            </div>

            {/* TYPE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                color: "#7f7669",
                fontSize: "0.88rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <BriefcaseBusiness size={15} color="#c09346" />
              {job.type}
            </div>

            {/* EXPERIENCE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                color: "#7f7669",
                fontSize: "0.88rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <Clock3 size={15} color="#c09346" />
              {job.experience}
            </div>

            {/* BUTTON */}
            <button
              style={{
                height: "42px",
                padding: "0 1.4rem",
                borderRadius: "8px",
                border: "1px solid #e7d8bf",
                background: "#fff",
                color: "#c09346",
                fontSize: "0.84rem",
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                cursor: "pointer",
                transition: "0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              Apply Now
            </button>
          </div>
        );
      })}
    </div>

    {/* BOTTOM BUTTON */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <button
        style={{
          background: "#fff",
          border: "1px solid #e4d6bf",
          color: "#b38435",
          padding: "0.9rem 1.8rem",
          borderRadius: "8px",
          fontSize: "0.9rem",
          fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif",
          cursor: "pointer",
        }}
      >
        View All Openings →
      </button>
    </div>
  </div>
</section>

   {/* ═══════════════════════════════════
APPLY FORM — SECTION
      ═══════════════════════════════════ */}

<section
  id="apply"
  style={{
    background: "#f8f5ef",
    padding: "5rem clamp(1rem,5vw,4rem)",
  }}
>
  <div
    style={{
      maxWidth: "1220px",
      margin: "0 auto",
      background: "#ffffff",
      border: "1px solid #ece4d8",
      borderRadius: "18px",
      padding: "clamp(1.5rem,4vw,3.5rem)",
      boxSizing: "border-box",
    }}
  >
    {/* TOP */}
    <div
      style={{
        textAlign: "center",
        marginBottom: "3rem",
      }}
    >
      <p
        style={{
          margin: 0,
          marginBottom: "0.7rem",
          fontSize: "0.72rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#c09346",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
        }}
      >
        Apply For A Position
      </p>

      <h2
        style={{
          margin: 0,
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem,5vw,3.4rem)",
          color: "#181512",
          lineHeight: 1.2,
        }}
      >
        Apply{" "}
        <span
          style={{
            color: "#c09346",
            fontStyle: "italic",
          }}
        >
          now
        </span>
      </h2>

      <p
        style={{
          margin: "1rem auto 0",
          maxWidth: "560px",
          color: "#8b8175",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Fill in your details, choose a role that fits you best,
        upload your CV and let’s start the conversation.
      </p>
    </div>

    {/* FORM */}
    <form>
      {/* FIRST GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "1.4rem",
        }}
      >
        {/* FULL NAME */}
        <div>
          <label style={labelStyle}>
            Full Name *
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            style={inputStyle}
          />
        </div>

        {/* MOBILE */}
        <div>
          <label style={labelStyle}>
            Mobile Number *
          </label>

          <input
            type="text"
            placeholder="Enter your mobile number"
            style={inputStyle}
          />
        </div>

        {/* EMAIL */}
        <div>
          <label style={labelStyle}>
            Email Address *
          </label>

          <input
            type="email"
            placeholder="Enter your email address"
            style={inputStyle}
          />
        </div>

        {/* POSITION */}
        <div>
          <label style={labelStyle}>
            Select Position *
          </label>

          <div style={{ position: "relative" }}>
            <select style={selectStyle}>
              <option>Choose a position</option>
              <option>
                Senior Real Estate Advisor
              </option>
              <option>Marketing Manager</option>
              <option>
                Client Relationship Executive
              </option>
              <option>
                Site Visit Coordinator
              </option>
            </select>

            <ChevronDown
              size={18}
              color="#9c8e7a"
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <label style={labelStyle}>
            Experience (Years) *
          </label>

          <div style={{ position: "relative" }}>
            <select style={selectStyle}>
              <option>
                Choose your experience
              </option>
              <option>0-1 Years</option>
              <option>1-3 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>

            <ChevronDown
              size={18}
              color="#9c8e7a"
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* LOCATION */}
        <div>
          <label style={labelStyle}>
            Current Location *
          </label>

          <input
            type="text"
            placeholder="Enter your current location"
            style={inputStyle}
          />
        </div>
      </div>

      {/* SECOND GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "1.4rem",
          marginTop: "1.4rem",
          alignItems: "stretch",
        }}
      >
        {/* FILE UPLOAD */}
        <div>
          <label style={labelStyle}>
            Upload CV *
          </label>

          <label
            htmlFor="resume-upload"
            style={{
              border: "1px dashed #e2d8ca",
              borderRadius: "12px",
              minHeight: "170px",
              background: "#fffdf9",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: "1.5rem",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            {/* ICON */}
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "50%",
                border: "1px solid #ecdcc3",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Upload
                size={28}
                color="#c09346"
                strokeWidth={1.8}
              />
            </div>

            <p
              style={{
                margin: 0,
                color: "#2b241d",
                fontSize: "0.95rem",
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Drag & drop your file here
            </p>

            <span
              style={{
                marginTop: "0.35rem",
                color: "#9a8f82",
                fontSize: "0.85rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              or Choose File
            </span>

            <span
              style={{
                marginTop: "0.9rem",
                color: "#b1a79b",
                fontSize: "0.72rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              PDF, DOC, DOCX (Max. 5MB)
            </span>

            <input
              id="resume-upload"
              type="file"
              style={{ display: "none" }}
            />
          </label>
        </div>

        {/* COVER LETTER */}
        <div>
          <label style={labelStyle}>
            Cover Letter (Optional)
          </label>

          <textarea
            placeholder="Tell us about yourself and why you'd be a great fit for our team..."
            style={{
              width: "100%",
              minHeight: "170px",
              border: "1px solid #e8dfd2",
              borderRadius: "12px",
              padding: "1rem",
              resize: "none",
              outline: "none",
              background: "#fff",
              color: "#2b241d",
              fontSize: "0.92rem",
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      {/* CHECKBOX */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "0.7rem",
          marginTop: "1.4rem",
          flexWrap: "wrap",
        }}
      >
        <input
          type="checkbox"
          style={{
            marginTop: "3px",
          }}
        />

        <p
          style={{
            margin: 0,
            color: "#8a8175",
            fontSize: "0.84rem",
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
            flex: 1,
            minWidth: "220px",
          }}
        >
          I agree to the privacy policy and consent to my data
          being used for recruitment purposes.
        </p>
      </div>

      {/* SUBMIT BUTTON */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <button
          type="submit"
          style={{
            minHeight: "54px",
            padding: "0 2.6rem",
            border: "none",
            borderRadius: "10px",
            background: "#b57f2d",
            color: "#fff",
            fontSize: "0.95rem",
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.7rem",
            cursor: "pointer",
            boxShadow:
              "0 10px 24px rgba(181,127,45,0.22)",
            flexWrap: "wrap",
          }}
        >
          Submit Application
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  </div>
</section>
  




      {/* ═══════════════════════════════════
          CULTURE NUMBERS — horizontal strip
      ═══════════════════════════════════ */}
      {/* <div
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
      </div> */}

      {/* ═══════════════════════════════════
          PROCESS — horizontal timeline
      ═══════════════════════════════════ */}
 {/* <section
  style={{
    background: "#ffffff",
    padding: "4.5rem clamp(1.5rem, 6vw, 4rem)",
  }}
>
  <div ref={processSection.ref}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.7rem",
        marginBottom: "3rem",
        justifyContent: window.innerWidth < 768 ? "center" : "flex-start",
        opacity: 0,
        animation: processSection.inView
          ? "crFadeUp 0.5s ease forwards 0ms"
          : "none",
      }}
    >
      <div
        style={{
          width: 24,
          height: 1,
          background: "#9a6f1e",
        }}
      />

      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#9a6f1e",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        How It Works
      </span>
    </div>

    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1.05rem",
          left: "1.5rem",
          right: "1.5rem",
          height: 1,
          background: "#e8d4a0",
          display: window.innerWidth < 992 ? "none" : "block",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            window.innerWidth < 768
              ? "1fr"
              : window.innerWidth < 992
              ? "repeat(2, 1fr)"
              : "repeat(4, 1fr)",
          gap: window.innerWidth < 768 ? "2.5rem" : "2rem",
          position: "relative",
        }}
      >
        {steps.map((s, i) => (
          <div
            key={s.n}
            style={{
              position: "relative",
            }}
          >
            {window.innerWidth < 768 && i !== steps.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: "70px",
                  left: "20px",
                  width: "1px",
                  height: "calc(100% + 1.5rem)",
                  background: "#e8d4a0",
                }}
              />
            )}

            <Step
              {...s}
              delay={i * 120}
              inView={processSection.inView}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section> */}
      {/* BENEFITS STRIP */}
<div
  style={{
    marginTop: "3rem",
    background: "#f7f3ec",
    border: "1px solid #eee4d6",
    borderRadius: "14px",
    overflow: "hidden",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
    }}
  >
    {[
      {
        icon: CalendarDays,
        title: "Quick Response",
        desc: "We respond to every application within 5 business days.",
      },
      {
        icon: Users,
        title: "Growth Opportunities",
        desc: "Continuous learning and real growth await you.",
      },
      {
        icon: ShieldCheck,
        title: "Great Culture",
        desc: "A supportive, transparent and people-first environment.",
      },
      {
        icon: BadgeCheck,
        title: "Meaningful Impact",
        desc: "Work on projects that shape communities and create value.",
      },
    ].map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.6rem 1.8rem",
            borderRight:
              index !== 3
                ? "1px solid #e9dfd1"
                : "none",
          }}
        >
          {/* ICON */}
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "#fbf8f2",
              border: "1px solid #eadfce",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon
              size={20}
              color="#bc8a3c"
              strokeWidth={1.8}
            />
          </div>

          {/* CONTENT */}
          <div>
            <h4
              style={{
                margin: 0,
                marginBottom: "0.35rem",
                color: "#1f1a15",
                fontSize: "0.95rem",
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                margin: 0,
                color: "#7f7568",
                fontSize: "0.82rem",
                lineHeight: 1.7,
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: "220px",
              }}
            >
              {item.desc}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>

      {/* ═══════════════════════════════════
          FOOTER CTA — full-width dark bar
      ═══════════════════════════════════ */}
  <section
  ref={ctaSection.ref}
  style={{
    background: "#f8f5ef",
    padding: "2rem 0 5rem",
  }}
>
  <div
    style={{
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "0 clamp(1.5rem,5vw,4rem)",
    }}
  >
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "18px",
        background: "#15120f",
        minHeight: "250px",
        display: "grid",
        gridTemplateColumns: "1.2fr 0.9fr 0.8fr",
        alignItems: "center",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(21,18,15,0.96) 0%,
              rgba(21,18,15,0.92) 45%,
              rgba(21,18,15,0.78) 65%,
              rgba(21,18,15,0.25) 100%
            ),
            url(${career2})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.95,
        }}
      />

      {/* LEFT CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "3rem",
          opacity: 0,
          animation: ctaSection.inView
            ? "crFadeUp 0.7s ease forwards 100ms"
            : "none",
        }}
      >
        <p
          style={{
            margin: 0,
            marginBottom: "1rem",
            color: "#b7863f",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          LET'S BUILD GREAT THINGS TOGETHER
        </p>

        <h2
          style={{
            margin: 0,
            color: "#f7f1e8",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem,4vw,3.2rem)",
            lineHeight: 1.1,
            fontWeight: 600,
          }}
        >
          We’re always open to
          <br />

          <span
            style={{
              color: "#c79649",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            great people.
          </span>
        </h2>

        <p
          style={{
            marginTop: "1.2rem",
            marginBottom: 0,
            color: "rgba(255,255,255,0.65)",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
            maxWidth: "420px",
          }}
        >
          Drop us a note. We have many openings!
        </p>
      </div>

      {/* CENTER BUTTON */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          animation: ctaSection.inView
            ? "crFadeUp 0.7s ease forwards 250ms"
            : "none",
        }}
      >
        <a
          href="mailto:careers@thenestrealty.in"
          style={{
            height: "58px",
            padding: "0 2rem",
            borderRadius: "10px",
            background: "#b57f2d",
            color: "#fff",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.8rem",
            fontSize: "0.95rem",
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: "0 12px 30px rgba(181,127,45,0.35)",
            transition: "0.3s ease",
          }}
        >
          <Mail size={18} />
          careers@thenestrealty.in
        </a>

        <p
          style={{
            marginTop: "1rem",
            marginBottom: 0,
            color: "rgba(255,255,255,0.38)",
            fontSize: "0.78rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          We usually respond in 24 working hours.
        </p>
      </div>

      {/* RIGHT EMPTY SPACE FOR IMAGE */}
      <div />
    </div>
  </div>
</section>

    </PageLayout>
  );
}