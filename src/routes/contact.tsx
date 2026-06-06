import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { ContactSection } from "./index";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, BarChart3, ChevronDown, Clock3, Mail, MapPin, Phone, ShieldCheck, Target, Users } from "lucide-react";
const contactus = "/assets/contactus.png";
const contact2 = "/assets/contact2.png";
const contact3 = "/assets/contact3.png";



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
  boxSizing: "border-box",
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
  boxSizing: "border-box",
};

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

      {/* ═══════════════════════════════════
    CONTACT HERO SECTION
═══════════════════════════════════ */}

      <section
        style={{
          position: "relative",
          background: "#f8f5ef",
          padding: "6rem clamp(1.5rem,5vw,4rem)",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${contactus})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(248, 245, 239, 0.43) 0%, rgba(248, 245, 239, 0.55) 28%, rgba(248, 245, 239, 0.53) 40%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1250px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            {/* TOP LABEL */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                marginBottom: "1.4rem",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "1px",
                  background: "#b58a3c",
                }}
              />

              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#b58a3c",
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Contact Us
              </span>

              <div
                style={{
                  width: "28px",
                  height: "1px",
                  background: "#b58a3c",
                }}
              />
            </div>

            {/* HEADING */}
            <h1
              style={{
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3rem,6vw,5.5rem)",
                lineHeight: 1.02,
                color: "#14110f",
                fontWeight: 600,
              }}
            >
              Let’s Build
              <br />
              Something
              <br />

              <span
                style={{
                  color: "#b58a3c",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                Remarkable.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              style={{
                marginTop: "2rem",
                maxWidth: "500px",
                color: "#5e5448",
                fontSize: "1rem",
                lineHeight: 1.9,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Partner with The Nest Realty for strategic marketing and
              successful sole selling. We turn your vision into real value.
            </p>

            {/* FEATURES */}
            <div
              style={{
                display: "flex",
                gap: "2.5rem",
                marginTop: "2.5rem",
                flexWrap: "wrap",
              }}
            >
              {/* ITEM */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "50%",
                    background: "#f3eadb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Users size={26} color="#b58a3c" />
                </div>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      color: "#1f1a15",
                      fontSize: "1rem",
                      lineHeight: 1.4,
                      fontWeight: 700,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Sole Selling
                    <br />
                    Experts
                  </h4>
                </div>
              </div>

              {/* ITEM */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "50%",
                    background: "#f3eadb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ShieldCheck size={26} color="#b58a3c" />
                </div>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      color: "#1f1a15",
                      fontSize: "1rem",
                      lineHeight: 1.4,
                      fontWeight: 700,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Result-Driven
                    <br />
                    Approach
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #ebe3d6",
              borderRadius: "16px",
              padding: "2.5rem",
              boxShadow: "0 15px 50px rgba(0,0,0,0.05)",
            }}
          >
            {/* FORM TOP */}
            <div style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  margin: 0,
                  marginBottom: "0.5rem",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.1rem",
                  color: "#1b1714",
                }}
              >
                Send us a message
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#7b7266",
                  fontSize: "0.92rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                We’ll get back to you within one working day.
              </p>
            </div>

            {/* FORM */}
            <form>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name *"
                  style={inputStyle}
                />

                <input
                  type="email"
                  placeholder="Email Address *"
                  style={inputStyle}
                />

                <input
                  type="text"
                  placeholder="Phone Number *"
                  style={inputStyle}
                />

                <input
                  type="text"
                  placeholder="Company / Builder Name *"
                  style={inputStyle}
                />
              </div>

              {/* PROJECT LOCATION */}
              <div style={{ marginTop: "1rem" }}>
                <input
                  type="text"
                  placeholder="Project Location *"
                  style={inputStyle}
                />
              </div>

              {/* SELECT */}
              <div style={{ marginTop: "1rem", position: "relative" }}>
                <select style={selectStyle}>
                  <option>Sole Selling Enquiry</option>
                  <option>Project Marketing</option>
                  <option>Investment Consulting</option>
                  <option>Brand Partnership</option>
                </select>

                <ChevronDown
                  size={18}
                  color="#9c8e7a"
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* MESSAGE */}
              <div style={{ marginTop: "1rem" }}>
                <textarea
                  placeholder="Tell us about your project..."
                  style={{
                    width: "100%",
                    minHeight: "130px",
                    border: "1px solid #e8dfd2",
                    borderRadius: "10px",
                    padding: "1rem",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                    fontSize: "0.92rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
              </div>

              {/* BUTTONS */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginTop: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <button
                  type="submit"
                  style={{
                    height: "52px",
                    padding: "0 2rem",
                    border: "none",
                    borderRadius: "8px",
                    background: "#b58a3c",
                    color: "#fff",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>

                <a
                  href="tel:+919999999999"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    textDecoration: "none",
                    color: "#6e6457",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <Phone size={16} color="#b58a3c" />
                  Call us directly
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#f8f5ef",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.9fr 1.3fr",
            gap: "3rem",
            alignItems: "stretch",
          }}
        >
          {/* LEFT CONTENT */}
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* TOP LABEL */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "26px",
                  height: "1px",
                  background: "#b58a3c",
                }}
              />

              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#b58a3c",
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Let’s Connect
              </span>
            </div>

            {/* HEADING */}
            <h2
              style={{
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem,5vw,4.8rem)",
                lineHeight: 1.08,
                color: "#171411",
                fontWeight: 600,
              }}
            >
              We’re here to
              <br />
              help you{" "}
              <span
                style={{
                  color: "#b58a3c",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                grow.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              style={{
                marginTop: "1.7rem",
                maxWidth: "420px",
                color: "#5f5549",
                fontSize: "1rem",
                lineHeight: 1.9,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Reach out to us for partnerships, project discussions,
              or any queries. We'd love to hear from you.
            </p>

            {/* CONTACT ITEMS */}
            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.6rem",
              }}
            >
              {/* PHONE */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#f1e8d8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} color="#b58a3c" />
                </div>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      marginBottom: "0.35rem",
                      color: "#1a1714",
                      fontSize: "1rem",
                      fontWeight: 700,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Phone
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      color: "#5f5549",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    +91 9925004160
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#f1e8d8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} color="#b58a3c" />
                </div>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      marginBottom: "0.35rem",
                      color: "#1a1714",
                      fontSize: "1rem",
                      fontWeight: 700,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Email
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      color: "#5f5549",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    connect@thenestrealty.in
                  </p>
                </div>
              </div>

              {/* OFFICE */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#f1e8d8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} color="#b58a3c" />
                </div>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      marginBottom: "0.35rem",
                      color: "#1a1714",
                      fontSize: "1rem",
                      fontWeight: 700,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Office
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      color: "#5f5549",
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    509,Hilltown Impressa, Opp.Parikh Hospital, Nikol,
                    <br />
                    Ahmedabad, India 380049
                  </p>
                </div>
              </div>

              {/* WORKING HOURS */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#f1e8d8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Clock3 size={20} color="#b58a3c" />
                </div>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      marginBottom: "0.35rem",
                      color: "#1a1714",
                      fontSize: "1rem",
                      fontWeight: 700,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Working Hours
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      color: "#5f5549",
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Mon - Sat: 10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            style={{
              height: "100%",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={contact2}
              alt="The Nest Realty"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#f8f5ef",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
          borderTop: "1px solid #eee5d8",
          borderBottom: "1px solid #eee5d8",
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* TOP LABEL */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.7rem",
              marginBottom: "1.2rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "1px",
                background: "#c49a52",
              }}
            />

            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#c49a52",
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Why Builders Choose Us
            </span>

            <div
              style={{
                width: "28px",
                height: "1px",
                background: "#c49a52",
              }}
            />
          </div>

          {/* HEADING */}
          <h2
            style={{
              margin: 0,
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              lineHeight: 1.2,
              color: "#171411",
              fontWeight: 600,
            }}
          >
            Your Project. Our Expertise.{" "}
            <span
              style={{
                color: "#c49a52",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Shared Success.
            </span>
          </h2>

          {/* FEATURES */}
          <div
            style={{
              marginTop: "4rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              borderTop: "1px solid #ede4d7",
              borderBottom: "1px solid #ede4d7",
            }}
          >
            {/* ITEM 1 */}
            <div
              style={{
                padding: "2.8rem 2rem",
                borderRight: "1px solid #ede4d7",
                borderBottom: "1px solid #ede4d7",
              }}
            >
              <div
                style={{
                  width: "62px",
                  height: "62px",
                  borderRadius: "50%",
                  background: "#f3eadc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <Target size={28} color="#c49a52" />
              </div>

              <h3
                style={{
                  margin: 0,
                  marginBottom: "0.9rem",
                  fontSize: "1.1rem",
                  color: "#1b1714",
                  fontWeight: 700,
                  lineHeight: 1.4,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                End-to-End Sole Selling
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#6b6258",
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                From strategy to sales, we manage everything so you can focus on building.
              </p>
            </div>

            {/* ITEM 2 */}
            <div
              style={{
                padding: "2.8rem 2rem",
                borderRight: "1px solid #ede4d7",
                borderBottom: "1px solid #ede4d7",
              }}
            >
              <div
                style={{
                  width: "62px",
                  height: "62px",
                  borderRadius: "50%",
                  background: "#f3eadc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <BarChart3 size={28} color="#c49a52" />
              </div>

              <h3
                style={{
                  margin: 0,
                  marginBottom: "0.9rem",
                  fontSize: "1.1rem",
                  color: "#1b1714",
                  fontWeight: 700,
                  lineHeight: 1.4,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Market Intelligence
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#6b6258",
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Data-driven insights and local expertise to position your project the right way.
              </p>
            </div>

            {/* ITEM 3 */}
            <div
              style={{
                padding: "2.8rem 2rem",
                borderRight: "1px solid #ede4d7",
                borderBottom: "1px solid #ede4d7",
              }}
            >
              <div
                style={{
                  width: "62px",
                  height: "62px",
                  borderRadius: "50%",
                  background: "#f3eadc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <Users size={28} color="#c49a52" />
              </div>

              <h3
                style={{
                  margin: 0,
                  marginBottom: "0.9rem",
                  fontSize: "1.1rem",
                  color: "#1b1714",
                  fontWeight: 700,
                  lineHeight: 1.4,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Strong Network
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#6b6258",
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Access to a wide network of investors, channel partners, and genuine buyers.
              </p>
            </div>

            {/* ITEM 4 */}
            <div
              style={{
                padding: "2.8rem 2rem",
                borderBottom: "1px solid #ede4d7",
              }}
            >
              <div
                style={{
                  width: "62px",
                  height: "62px",
                  borderRadius: "50%",
                  background: "#f3eadc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <ShieldCheck size={28} color="#c49a52" />
              </div>

              <h3
                style={{
                  margin: 0,
                  marginBottom: "0.9rem",
                  fontSize: "1.1rem",
                  color: "#1b1714",
                  fontWeight: 700,
                  lineHeight: 1.4,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Trusted by Developers
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#6b6258",
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Our commitment to transparency and results has earned the trust of leading builders.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

/* ── Map Section ── */
// function MapSection() {
//   const { ref, inView } = useInView();
//   return (
//     <section style={{ background: "#faf8f4", padding: "4rem 0 5rem" }}>
//       <div
//         ref={ref}
//         style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}
//       >
//         <div style={{
//           display: "flex", alignItems: "center", gap: "0.8rem",
//           marginBottom: "1.2rem",
//           opacity: 0,
//           animation: inView ? "cnFadeUp 0.6s ease forwards 100ms" : "none",
//         }}>
//           <div style={{ width: 28, height: 1, background: "#9a6f1e" }} />
//           <span style={{
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: "0.65rem", letterSpacing: "0.3em",
//             textTransform: "uppercase" as const,
//             color: "#9a6f1e", fontWeight: 500,
//           }}>
//             Our Location
//           </span>
//         </div>

//         <div style={{
//           border: "1px solid #e8e0d0", overflow: "hidden",
//           height: 400, borderRadius: 6,
//           opacity: 0,
//           animation: inView ? "cnFadeUp 0.7s ease forwards 250ms" : "none",
//         }}>
//           <iframe
//             title="Ahmedabad map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4823703533007!2d72.67522707588192!3d23.042770615573076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87110740a617%3A0x7b40e4887fdf32ae!2sHilltown%20Impressa%2C%20Nikol%2C%20Ahmedabad%2C%20Gujarat%20380049!5e0!3m2!1sen!2sin!4v1779868144964!5m2!1sen!2sin"
//             style={{ width: "100%", height: "100%", display: "block" }}
//             loading="lazy"
//           />
//         </div>
//       </div>
//     </section>

//   );
// }

/* ── Page ── */
function ContactPage() {
  return (
    <PageLayout>
      <ContactHero />
      <div id="contact-form">
        {/* <ContactSection /> */}
      </div>
      {/* <MapSection /> */}
      <section
        style={{
          padding: "0 clamp(1.5rem,5vw,4rem) 5rem",
          background: "#f8f5ef",
        }}
      >
        <div
          style={{
            maxWidth: "1370px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
            borderRadius: "18px",
            minHeight: "210px",
            padding: "3rem clamp(2rem,4vw,4rem)",
            backgroundImage: `url(${contact3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* DARK OVERLAY */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(24,17,12,0.92) 0%, rgba(24,17,12,0.82) 35%, rgba(24,17,12,0.35) 70%, rgba(24,17,12,0.15) 100%)",
            }}
          />

          {/* LIGHT GLOW */}
          <div
            style={{
              position: "absolute",
              top: "-120px",
              right: "-120px",
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              background: "rgba(201,154,73,0.18)",
              filter: "blur(90px)",
            }}
          />

          {/* CONTENT */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            {/* LEFT SIDE */}
            <div
              style={{
                flex: "1 1 500px",
                minWidth: "280px",
              }}
            >
              {/* LABEL */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  marginBottom: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "1px",
                    background: "#c89b52",
                  }}
                />

                <span
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#c89b52",
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Ready To Get Started?
                </span>
              </div>

              {/* HEADING */}
              <h2
                style={{
                  margin: 0,
                  color: "#fff",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem,5vw,3.6rem)",
                  lineHeight: 1.15,
                  fontWeight: 600,
                }}
              >
                Great Projects Deserve
                <br />
                the{" "}
                <span
                  style={{
                    color: "#d4a14e",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  Right Partner.
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p
                style={{
                  marginTop: "1.2rem",
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  maxWidth: "480px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Let’s discuss how we can maximize the value and
                success of your next project.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div
              style={{
                flex: "1 1 320px",
                minWidth: "280px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {/* BUTTON */}
                <a
                  href="/contact"
                  style={{
                    height: "56px",
                    width: "100%",
                    maxWidth: "280px",
                    padding: "0 2rem",
                    background: "#c89b52",
                    color: "#fff",
                    borderRadius: "6px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.7rem",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "all 0.25s ease",
                    boxShadow: "0 10px 30px rgba(201,154,73,0.25)",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background = "#b7863f";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "#c89b52";
                  }}
                >
                  Schedule a Meeting
                  <ArrowRight size={16} />
                </a>

                {/* OR */}
                <span
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.82rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  or
                </span>

                {/* CALL BUTTON */}
                <a
                  href="tel:+919876543210"
                  style={{
                    minHeight: "48px",
                    width: "100%",
                    maxWidth: "280px",
                    padding: "0.9rem 1.5rem",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(4px)",
                    borderRadius: "6px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.7rem",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif",
                    textAlign: "center",
                    boxSizing: "border-box",
                    flexWrap: "wrap",
                  }}
                >
                  <Phone size={16} color="#d4a14e" />
                  Call us: +91  9925004858
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}