import { createFileRoute } from "@tanstack/react-router";
import {
  Building2, MapPinned, ArrowRight, Phone,
  ShieldCheck, Rocket, Megaphone, Users, Handshake,
  Network, BarChart3, Landmark, Headset, ClipboardCheck, BadgeCheck,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";
const serviceHero = "/assets/service-hero.png";
const servicecta = "/assets/servicecat.png";

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
    icon: ShieldCheck,
    label: "01",
    title: "Brand Positioning",
    tagline: "Build a brand that stands out",
    desc: "Creating a premium project identity and strong market positioning through strategic branding that enhances visibility, trust, and overall market demand.",
    points: ["Strategic brand identity creation", "Premium positioning in the market", "Clear messaging that builds trust"],
  },
  {
    icon: Rocket,
    label: "02",
    title: "Project Launch Strategy",
    tagline: "Launch with maximum impact",
    desc: "Strategic launch planning designed to maximize visibility, buyer engagement, and market impact.",
    points: ["Pre-launch buzz creation & market positioning", "Multi-channel promotional campaign execution", "Targeted buyer outreach & engagement strategy"],
  },
  {
    icon: Megaphone,
    label: "03",
    title: "360° Marketing",
    tagline: "Marketing from every angle",
    desc: "Integrated digital and offline campaigns designed to build strong project visibility, attract the right audience, and create consistent brand awareness across all channels.",
    points: ["Digital marketing campaigns", "Offline marketing & on-ground promotions", "Brand awareness & visibility strategy"],
  },
  {
    icon: Users,
    label: "04",
    title: "Lead Generation",
    tagline: "Turn interest into buyers",
    desc: "Targeted lead acquisition systems designed to attract high-quality buyers and investors through data-driven marketing and strategic outreach.",
    points: ["Targeted audience segmentation & profiling", "Digital ad campaigns for lead capture", "High-conversion landing pages & funnels"],
  },
  {
    icon: Handshake,
    label: "05",
    title: "Sales Execution",
    tagline: "From inquiry to closure",
    desc: "Professional handling of inquiries, site visits, negotiations, and complete sales coordination to ensure smooth and effective conversion from leads to buyers.",
    points: ["Inquiry handling & lead qualification", "Site visit planning & client coordination", "Professional negotiation & deal closure support"],
  },
  {
    icon: Network,
    label: "06",
    title: "Channel Partner Network",
    tagline: "Stronger network, wider reach",
    desc: "Strong broker and industry connections that amplify project exposure, accelerate sales, and create wider market opportunities through an established channel ecosystem.",
    points: ["Builder–broker relationship management", "Strong channel partner onboarding & engagement", "Broker incentive & commission structuring"],
  },
  {
    icon: BarChart3,
    label: "07",
    title: "Market Analysis",
    tagline: "Insights that drive smart decisions",
    desc: "Research-based market intelligence and location analysis designed to identify growth opportunities, understand buyer behavior, and position projects effectively in competitive markets.",
    points: ["Location feasibility & demand analysis", "Competitor benchmarking & pricing insights", "Buyer behavior & market trend research"],
  },
  {
    icon: Landmark,
    label: "08",
    title: "Investor Network",
    tagline: "Connected to serious investors",
    desc: "A growing network of active investors and qualified buyers that enhances project visibility, accelerates deal closures, and creates stronger market reach through trusted investment connections.",
    points: ["Access to verified investors & HNI buyers", "Early-stage project investment outreach", "Strong referral & repeat investor network"],
  },
  {
    icon: Headset,
    label: "09",
    title: "After-Sales Support",
    tagline: "Support beyond the sale",
    desc: "Ongoing assistance after the sale, ensuring smooth documentation, coordination, and customer support to build long-term trust and satisfaction.",
    points: ["Documentation assistance & handover support", "Coordination with developers & legal teams", "Post-sale customer support & query handling"],
  },
  {
    icon: ClipboardCheck,
    label: "10",
    title: "Project Planning & Analysis",
    tagline: "Plan smart, build better",
    desc: "We analyse locations, buyer demand, and market trends to help developers plan projects with stronger positioning, better sales potential, and long-term growth success.",
    points: ["Location feasibility & land analysis", "Buyer demand & target audience study", "Market trends & competitor evaluation"],
  },
];

const statsData = [
  { icon: Building2,  value: "950+",  label: "Properties Sold",  sub: "across Ahmedabad" },
  { icon: Users,      value: "1100+", label: "Happy Families",   sub: "and growing" },
  { icon: MapPinned,  value: "12+",   label: "Project Sites",    sub: "prime locations" },
  { icon: BadgeCheck, value: "11+",   label: "Years Experience", sub: "in real estate" },
];

function ServiceCard({ s, index }: { s: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.12 }
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
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, background 0.3s, border-color 0.3s, box-shadow 0.3s`,
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
          color: hovered ? "rgba(201,169,110,0.12)" : "rgba(201,169,110,0.18)",
          lineHeight: 1,
          transition: "color 0.3s",
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
          transition: "background 0.3s",
        }}
      >
        <Icon size={22} color={hovered ? "#C9A96E" : "#8a6d3b"} strokeWidth={1.5} />
      </div>

      {/* Tagline */}
      <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.45rem", fontWeight: 600 }}>
        {s.tagline}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.3rem",
          fontWeight: 700,
          color: hovered ? "#fff" : "#1a1410",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          margin: "0 0 0.85rem",
          transition: "color 0.3s",
        }}
      >
        {s.title}
      </h3>

      {/* Divider */}
      <div style={{ width: hovered ? "60px" : "36px", height: "2px", background: "#C9A96E", marginBottom: "1rem", transition: "width 0.3s" }} />

      {/* Description */}
      <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: hovered ? "rgba(255,255,255,0.62)" : "#6b5e4e", margin: "0 0 1.3rem", transition: "color 0.3s" }}>
        {s.desc}
      </p>

      {/* Points */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {s.points.map((p) => (
          <li key={p} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.83rem", color: hovered ? "rgba(255,255,255,0.72)" : "#4a3c2e", transition: "color 0.3s" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <PageLayout>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src={serviceHero}
            alt="The Nest Realty Services"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/55 to-transparent" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.07) 0%, transparent 55%)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
        </div>

        {/* HERO TEXT CONTENT */}
        <div className="container-x relative z-10">
          <div className="max-w-[620px] flex flex-col justify-center pt-32 pb-16 min-h-[780px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">Our Services</p>
            </div>

            {/* Heading */}
            <h1
              className="font-bold text-[#1d140d] leading-[0.97]"
              style={{ fontSize: "clamp(3.4rem, 7vw, 6rem)", fontFamily: "Georgia, serif" }}
            >
              Real estate,
              <br />
              done{" "}
              <span className="text-primary italic font-medium">right</span>
              <br />
              for you.
            </h1>

            {/* Description */}
            <p className="mt-8 text-[#6e5b4b] leading-relaxed text-lg max-w-[520px]">
              From finding your first home to building a property portfolio —
              we bring expertise, local knowledge and honest guidance to every step.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              
              <a  href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                           bg-primary text-primary-foreground font-medium
                           shadow-xl hover:opacity-90 hover:-translate-y-0.5
                           transition-all duration-300"
              >
                Book Free Consultation →
              </a>
              
                <a href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                           border border-[#dfcfb8] bg-white/80 backdrop-blur-md
                           text-[#6b5132] font-medium
                           hover:border-primary hover:bg-white
                           transition-all duration-300"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

          </div>
        </div>

        {/* ── FULL-WIDTH STATS BAR ── */}
     {/* ── FULL-WIDTH STATS BAR ── */}
<div className="relative z-10 w-full px-4 md:px-8 lg:px-14 pb-8">
  <div className="bg-background/90 backdrop-blur-md rounded-3xl border border-border shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
      {statsData.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="group flex items-center gap-4 py-7 px-5
                       border-b lg:border-b-0 border-border
                       hover:bg-secondary/60 transition-colors duration-300"
            style={{ animation: `fadeUp 0.55s ${0.2 + i * 0.1}s ease both` }}
          >
            {/* Icon */}
            <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-primary/10 items-center justify-center
                            flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
              <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>

            <div>
              {/* Number */}
              <div className="text-2xl md:text-3xl font-extrabold text-primary leading-none">
                {item.value}
              </div>

              {/* Label · sub */}
              <div className="text-xs text-muted-foreground mt-0.5">
                <span className="text-foreground font-semibold uppercase tracking-wide">
                  {item.label}
                </span>
                <span className="mx-1 opacity-40">·</span>
                {item.sub}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

      </section>
      {/* ── /HERO ── */}


      {/* ── SERVICE CARDS ── */}
      <section style={{ padding: "7rem 0", background: "#faf7f2" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>

          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "inline-block", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A96E", fontWeight: 700, marginBottom: "0.8rem" }}>
              What We Offer
            </div>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1410", margin: 0, lineHeight: 1.2 }}>
              Everything under <em>one roof</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {services.map((s, i) => (
              <ServiceCard key={s.title} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA BAND ── */}
      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#e9dfd2] min-h-[360px] shadow-[0_15px_60px_rgba(0,0,0,0.06)]">

            <img
              src={servicecta}
              alt="Luxury interior"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 40%" }}
            />

            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(248,244,238,0.97) 0%, rgba(248,244,238,0.94) 28%, rgba(248,244,238,0.65) 48%, rgba(248,244,238,0.12) 72%, rgba(248,244,238,0.02) 100%)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, transparent 45%)" }} />

            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-[480px] px-8 py-10 md:px-14 md:py-8">

                <p className="text-[11px] tracking-[0.28em] uppercase text-primary font-semibold mb-4">
                  Let's Build Success Together
                </p>

                <h2
                  className="font-bold text-[#17120d] leading-[1.02]"
                  style={{ fontSize: "clamp(2.3rem, 4vw, 2.5rem)", fontFamily: "Georgia, serif" }}
                >
                  Your vision.
                  <br />
                  Our expertise.
                  <br />
                  Lasting value.
                </h2>

                <p className="mt-5 text-[#675647] leading-relaxed text-sm md:text-base max-w-md">
                  Partner with The Nest Realty and experience real estate services that deliver results.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  
                  <a  href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                               bg-primary text-primary-foreground font-semibold text-sm
                               shadow-lg hover:opacity-90 hover:-translate-y-[2px] transition-all duration-300"
                  >
                    Book Free Consultation
                    <ArrowRight size={16} />
                  </a>
                  
                <a  href="/projects"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                               border border-[#ddd1c1] bg-white/90 backdrop-blur-md
                               text-[#5c4630] font-semibold text-sm
                               hover:border-primary hover:bg-white transition-all duration-300"
                  >
                    View Our Projects
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 w-[25%]" style={{ background: "linear-gradient(to left, rgba(0,0,0,0.10), transparent)" }} />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </PageLayout>
  );
}