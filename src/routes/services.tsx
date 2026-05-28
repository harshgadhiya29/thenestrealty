import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Building2, TrendingUp, MapPinned, ArrowRight, Phone, ShieldCheck, Rocket, Megaphone, Users, Handshake, Network, BarChart3, Landmark, Headset, ClipboardCheck, BadgeCheck } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useEffect, useRef, useState } from "react";
import serviceHero  from "@/assets/service-hero.png";
import servicecta  from "@/assets/servicecat.png";


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
    accent: "#C9A96E",
  },
  {
    icon: Rocket,
    label: "02",
    title: "Project Launch Strategy",
    tagline: "Launch with maximum impact",
    desc: "Strategic launch planning designed to maximize visibility, buyer engagement, and market impact.",
    points: ["Pre-launch buzz creation & market positioning", "Multi-channel promotional campaign execution", "Targeted buyer outreach & engagement strategy"],
    accent: "#C9A96E",
  },
  {
    icon: Megaphone,
    label: "03",
    title: "360° MARKETING",
    tagline: "Marketing from every angle",
    desc: "Integrated digital and offline campaigns designed to build strong project visibility, attract the right audience, and create consistent brand awareness across all channels.",
    points: ["Digital marketing campaigns", "Offline marketing & on-ground promotions", "Brand awareness & visibility strategy"],
    accent: "#C9A96E",
  },
  {
    icon: Users,
    label: "04",
    title: "LEAD GENERATION",
    tagline: "Turn interest into buyers",
    desc: "Targeted lead acquisition systems designed to attract high-quality buyers and investors through data-driven marketing and strategic outreach.",
    points: ["Targeted audience segmentation & profiling", "Digital ad campaigns for lead capture", "High-conversion landing pages & funnels"],
    accent: "#C9A96E",
  },
   {
    icon: Handshake,
    label: "05",
    title: "SALES EXECUTION",
    tagline: "From inquiry to closure",
    desc: "Professional handling of inquiries, site visits, negotiations, and complete sales coordination to ensure smooth and effective conversion from leads to buyers.",
    points: ["Inquiry handling & lead qualification", "Site visit planning & client coordination", "Professional negotiation & deal closure support"],
    accent: "#C9A96E",
  },
  {
    icon: Network,
    label: "06",
    title: "CHANNEL PARTNER NETWORK",
    tagline: "Stronger network, wider reach",
    desc: "Strong broker and industry connections that amplify project exposure, accelerate sales, and create wider market opportunities through an established channel ecosystem.",
    points: ["Builder–broker relationship management", "Strong channel partner onboarding & engagement", "Broker incentive & commission structuring"],
    accent: "#C9A96E",
  },
   {
    icon: BarChart3,
    label: "07",
    title: "MARKET ANALYSIS",
    tagline: "Insights that drive smart decisions",
    desc: "Research-based market intelligence and location analysis designed to identify growth opportunities, understand buyer behavior, and position projects effectively in competitive markets.",
    points: ["Location feasibility & demand analysis", "Competitor benchmarking & pricing insights", "Buyer behavior & market trend research"],
    accent: "#C9A96E",
  },
   {
    icon: Landmark,
    label: "08",
    title: "INVESTOR NETWORK",
    tagline: "Connected to serious investors",
    desc: "A growing network of active investors and qualified buyers that enhances project visibility, accelerates deal closures, and creates stronger market reach through trusted investment connections.",
    points: ["Access to verified investors & HNI buyers", "Early-stage project investment outreach", "Strong referral & repeat investor network"],
    accent: "#C9A96E",
  },
  {
    icon: Headset,
    label: "09",
    title: "AFTER-SALES SUPPORT",
    tagline: "Support beyond the sale",
    desc: "Ongoing assistance after the sale, ensuring smooth documentation, coordination, and customer support to build long-term trust and satisfaction.",
    points: ["Documentation assistance & handover support", "Coordination with developers & legal teams", "Post-sale customer support & query handling"],
    accent: "#C9A96E",
  },
  {
    icon: ClipboardCheck,
    label: "10",
    title: "PROJECT PLANNING & ANALYSIS",
    tagline: "Plan smart, build better",
    desc: "We analyse locations, buyer demand, and market trends to help developers plan projects with stronger positioning, better sales potential, and long-term growth success.",
    points: ["Location feasibility & land analysis", "Buyer demand & target audience study", "Market trends & competitor evaluation"],
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
  <section className="relative overflow-hidden min-h-[860px]">
  
  {/* FULL BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src={serviceHero}
      alt="The Nest Realty Services"
      className="w-full h-full object-cover"
    />

    {/* LEFT LIGHT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/40 to-transparent" />

    {/* GOLDEN OVERLAY */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, transparent 60%)",
      }}
    />

    {/* SOFT VIGNETTE */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10" />
  </div>

  {/* CONTENT */}
  <div className="container-x relative z-10">
    <div className="max-w-[640px] min-h-[860px] flex flex-col justify-center py-20">
      
      {/* EYEBROW */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-primary" />

        <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
          Our Services
        </p>
      </div>

      {/* TITLE */}
      <h1
        className="font-bold text-[#1d140d] leading-[0.98]"
        style={{
          fontSize: "clamp(3.5rem, 7vw, 6.2rem)",
          fontFamily: "Georgia, serif",
        }}
      >
        Real estate,
        <br />
        done{" "}
        <span className="text-primary italic font-medium">
          right
        </span>
        <br />
        for you.
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-8 text-[#6e5b4b] leading-relaxed text-lg max-w-[560px]">
        From finding your first home to building a property portfolio —
        we bring expertise, local knowledge and honest guidance to every
        step.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                     bg-primary text-primary-foreground font-medium
                     shadow-xl hover:opacity-90 hover:translate-y-[-2px]
                     transition-all duration-300"
        >
          Book Free Consultation →
        </a>

        <a
          href="tel:+91XXXXXXXXXX"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                     border border-[#dfcfb8]
                     bg-white/80 backdrop-blur-md
                     text-[#6b5132] font-medium
                     hover:border-primary hover:bg-white
                     transition-all duration-300"
        >
          <Phone size={16} />
          Call Now
        </a>
      </div>

      {/* STATS BAR */}
      <div
        className="mt-16 grid grid-cols-3 rounded-[1.8rem]
                   border border-white/40 bg-white/70 backdrop-blur-xl
                   overflow-hidden shadow-2xl max-w-[720px]"
      >
        {[
          {
            icon: Building2,
            value: "500+",
            label: "Properties Sold",
          },
          {
            icon: BadgeCheck,
            value: "12+",
            label: "Years Experience",
          },
          {
            icon: Users,
            value: "98%",
            label: "Client Satisfaction",
          },
        ].map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-6 border-r border-[#eee2d3] last:border-r-0"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-primary" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary leading-none">
                  {item.value}
                </h3>

                <p className="mt-1 text-xs tracking-[0.12em] uppercase text-[#8d7763]">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
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
    <section className="py-16 bg-background">
  <div className="container-x">
    
    <div
      className="relative overflow-hidden rounded-[2rem] border border-[#e9dfd2]
                 min-h-[360px] shadow-[0_15px_60px_rgba(0,0,0,0.06)]"
    >
      
      {/* BACKGROUND IMAGE */}
      <img
        src={servicecta}
        alt="Luxury interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* LIGHT OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(248,244,238,0.97) 0%, rgba(248,244,238,0.94) 28%, rgba(248,244,238,0.65) 48%, rgba(248,244,238,0.12) 72%, rgba(248,244,238,0.02) 100%)",
        }}
      />

      {/* SOFT GOLDEN GLOW */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, transparent 45%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        
        <div className="max-w-[480px] px-8 py-8 md:px-14 md:py-6">
          
          {/* SMALL LABEL */}
          <p className="text-[11px] tracking-[0.28em] uppercase text-primary font-semibold mb-4">
            Let’s Build Success Together
          </p>

          {/* TITLE */}
          <h2
            className="font-bold text-[#17120d] leading-[1.02]"
            style={{
              fontSize: "clamp(2.3rem, 4vw, 2.5rem)",
              fontFamily: "Georgia, serif",
            }}
          >
            Your vision.
            <br />
            Our expertise.
            <br />
            Lasting value.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 text-[#675647] leading-relaxed text-sm md:text-base max-w-md">
            Partner with The Nest Realty and experience
            real estate services that deliver results.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            
            {/* PRIMARY BTN */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2
                         px-7 py-3.5 rounded-xl
                         bg-primary text-primary-foreground
                         font-semibold text-sm
                         shadow-lg
                         hover:opacity-90 hover:-translate-y-[2px]
                         transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight size={16} />
            </a>

            {/* SECONDARY BTN */}
            <a
              href="/projects"
              className="inline-flex items-center gap-2
                         px-7 py-3.5 rounded-xl
                         border border-[#ddd1c1]
                         bg-white/90 backdrop-blur-md
                         text-[#5c4630]
                         font-semibold text-sm
                         hover:border-primary hover:bg-white
                         transition-all duration-300"
            >
              View Our Projects
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* SOFT RIGHT VIGNETTE */}
      <div
        className="absolute inset-y-0 right-0 w-[25%]"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.10), transparent)",
        }}
      />
    </div>
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