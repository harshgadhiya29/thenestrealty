import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Home, Building2, TrendingUp, MapPinned,
  MessageCircle, FileText, Handshake, Award, BookOpen,
  Users, ShieldCheck, Star, Bed, Bath, Maximize, Plus, Minus,
  Megaphone,
  BadgeCheck,
  Target,
  BadgeDollarSign,
  MapPin,
  Phone,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionHeader } from "@/components/site/Section";
const heroImg = "/assets/hero-image.png";
const aboutImg = "/assets/hero-about.jpeg";
const p1 = "/assets/kishakidha.jpg";
const p2 = "/assets/ayodhyapuri.jpg";
const p3 = "/assets/harmony.jpg";
const p4 = "/assets/radheShyam.jpeg";
const about2 = "/assets/about-hero.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Nest Realty — Your Trusted Real Estate in Ahmedabad" },
      { name: "description", content: "Premium real estate services in Ahmedabad." },
      { property: "og:title", content: "The Nest Realty — Your Trusted Real Estate in Ahmedabad" },
      { property: "og:description", content: "Build your memories with your Dream Nest." },
    ],
  }),
  component: HomePage,
});

/* ─── Animation hook: triggers once element enters viewport ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Animated counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal(0.5);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Data ─── */
const services = [
  { icon: ShieldCheck, title: "Brand Positioning", desc: "Creating a premium project identity and strong market positioning through strategic branding that enhances visibility, trust, and overall market demand." },
  { icon: Handshake, title: "SALES EXECUTION", desc: "Professional handling of inquiries, site visits, negotiations, and complete sales coordination to ensure smooth and effective conversion from leads to    buyers." },
  { icon: Megaphone, title: "360° MARKETING", desc: "Integrated digital and offline campaigns designed to build strong project visibility, attract the right audience, and create consistent brand awareness across all channels." },
  { icon: Users, title: "LEAD GENERATION", desc: "Targeted lead acquisition systems designed to attract high-quality buyers and investors through data-driven marketing and strategic outreach." },
];

const steps = [
  { icon: Target, title: "Market Positioning", desc: "Creating the right strategy to position projects effectively in competitive markets." },
  { icon: Megaphone, title: "Strategic Marketing", desc: "Building visibility through branding, digital marketing and targeted campaigns." },
  { icon: BadgeDollarSign, title: " Sales Execution", desc: "Managing the complete buyer journey through professional sales coordination." },
  { icon: TrendingUp, title: "Result-Driven Growth", desc: "Focused on lead conversion, sales performance and long-term project success." },

];

const whyUs = [
  { icon: Award, title: "Years of Experience", desc: "Decades of combined expertise in Ahmedabad real estate." },
  { icon: BookOpen, title: "Deep Market Knowledge", desc: "Hyper-local insights that help you make informed decisions." },
  { icon: Users, title: "Professional Team", desc: "RERA-aware advisors who put your interests first." },
  { icon: ShieldCheck, title: "Transparent Deals", desc: "Honest pricing, clear paperwork and zero hidden surprises." },
];

const properties = [
  {
    img: p1,
    title: "Aryaman Kishkindha",
    location: "Narol, Ahmedabad",
    contact: "9925008300",
    specs: [
      { label: "1 BHK Flats", sizes: "89, 92, 96 Sq.Yd" },
    ],
    tag: "New Launch",
  },
  {
    img: p2,
    title: "Aryaman Ayodhyapuri",
    location: "Narol, Ahmedabad",
    contact: "9925008300",
    specs: [
      { label: "1 BHK Flats", sizes: "96 Sq.Yd" },

    ],
    tag: "Premium",
  },
  {
    img: p3,
    title: "Harmony 71",
    location: "Lambha, Ahmedabad",
    contact: "9925062394",
    specs: [
      { label: "4 BHK Bungalows", sizes: " 165–203 Sq.Yd" },
    ],
    tag: "Commercial",
  },
  {
    img: p4,
    title: "Radhe Shyam Heritage",
    location: "Lambha, Ahmedabad",
    contact: "9998115571",
    specs: [
      { label: "2 BHK Flats", sizes: "150 Sq.Yd" },

    ],
    tag: "Premium",
  },
];


const testimonials = [
  { name: "Rahul Mehta", role: "Home Buyer", text: "The Nest Realty made buying our first home feel effortless. Honest advice, no pressure, and an incredible eye for what suits us." },
  { name: "Priya Shah", role: "Investor", text: "Their market insights helped me build a portfolio that's already paying off. A team that genuinely cares." },
  { name: "Anand Patel", role: "Seller", text: "Sold our villa in 6 weeks at the price we wanted. The marketing plan they built was world-class." },
];

const faqs = [
  { q: "Where do you operate?", a: "We are based in Ahmedabad and serve clients across the city and surrounding regions, including Sanand, Shilaj, Bopal and SG Highway." },
  { q: "Do you charge for consultations?", a: "No. Initial consultations are completely free — we want to understand your goals before recommending anything." },
  { q: "Can you help NRI clients?", a: "Absolutely. We regularly help NRI clients with end-to-end property buying, selling and management across Ahmedabad." },
  { q: "Are your listings RERA-registered?", a: "Yes — we only deal with RERA-registered projects and verified land parcels for full legal transparency." },
];

/* ─── Reusable reveal wrapper ─── */
function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const { ref, visible } = useReveal();

  const transforms: Record<string, string> = {
    up: "translateY(40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════════════ */
function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  /* Parallax on hero image — disabled on mobile to prevent cutoff */
  const heroImgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handle = () => {
      if (heroImgRef.current && window.innerWidth >= 768) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <PageLayout>
      {/* ── Hero ── */}
      {/*
        FIX: Removed `bg-fixed` (causes image cutoff/crop on iOS & many mobile browsers
        because it uses viewport-relative positioning instead of element-relative).
        Now uses a positioned <img> as the background so it always fills the section
        fully without cropping, and parallax is only applied on desktop (md+).
      */}
      <section className="relative z-10 min-h-[88vh] flex items-center text-back overflow-hidden">

        {/* Hero background image — fills section, never crops */}
        <img
          ref={heroImgRef}
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          style={{ willChange: "transform" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0" />

        {/* Animated floating orb accents */}
        <div className="absolute top-24 right-6 md:right-24 h-40 w-40 md:h-64 md:w-64 rounded-full bg-primary/5 blur-3xl animate-pulse pointer-events-none z-10" />

        <div
          className="absolute bottom-16 right-12 md:right-48 h-28 w-28 md:h-40 md:w-40 rounded-full bg-primary/10 blur-2xl pointer-events-none z-10"
          style={{ animation: "floatOrb 6s ease-in-out infinite" }}
        />

        {/* Content */}
        <div className="relative z-20 w-full px-5 sm:px-8 md:px-14 lg:px-24 py-24 md:py-0">
          <div className="max-w-4xl text-left">

            {/* Badge */}
            <span
              className="inline-block px-3 sm:px-4 py-1.5 bg-primary/50 border border-primary/50 text-white text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] rounded-full"
              style={{ animation: "slideInLeft 0.8s ease forwards" }}
            >
              Build your memories with your Dream Nest
            </span>

            {/* Heading */}
            <h1
              className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.1] md:leading-[1.05]"
              style={{ animation: "fadeUp 0.9s 0.2s ease both" }}
            >
              Ahmedabad's{" "}
              <span
                className="text-primary"
                style={{ animation: "shimmer 3s 1.2s ease infinite" }}
              >
                Trusted
              </span>
              <br className="hidden sm:block" />
              {" "}Sole Selling Agency for
              <br className="hidden sm:block" />
              {" "}Residential & Commercial Projects
            </h1>

            {/* Description */}
            <p
              className="mt-5 sm:mt-6 max-w-xl text-black/80 text-base sm:text-lg leading-relaxed"
              style={{ animation: "fadeUp 0.9s 0.4s ease both" }}
            >
              We help developers scale sales and buyers discover verified investment
              opportunities.
            </p>

            {/* Buttons */}
            <div
              className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
              style={{ animation: "fadeUp 0.9s 0.6s ease both" }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-md font-medium transition-colors overflow-hidden relative text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 border border-primary hover:bg-white hover:text-blaack text-primary px-5 sm:px-7 py-3 sm:py-3.5 rounded-md font-medium transition-all duration-300 text-sm sm:text-base"
              >
                Get Quotation
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs z-20"
          style={{ animation: "fadeUp 1s 1.2s ease both" }}
        >
          <span
            className="block h-8 w-px bg-white/20"
            style={{ animation: "grow 1.5s 1.5s ease infinite" }}
          />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative lg:-mt-8 mt-6 sm:mt-8 md:-mt-20 z-30 px-3 sm:px-4 md:px-8 lg:px-14">
        <div className="max-w-7xl mx-auto">

          {/* Floating Stats Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/5 overflow-hidden">

            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { n: 1100, s: "+", l: "Happy Families", icon: Home },
                { n: 950, s: "+", l: "Properties Closed", icon: Building2 },
                { n: 11, s: "+", l: "Years of Trust", icon: ShieldCheck },
                { n: 12, s: "+", l: "Listings Projects", icon: BadgeCheck },
              ].map(({ n, s, l, icon: Icon }, i) => (
                <Reveal key={l} delay={i * 100} direction="up">
                  <div
                    className={`group flex items-center gap-3 sm:gap-4 py-5 sm:py-7 px-4 sm:px-5 md:px-7 transition-all duration-300 hover:bg-primary/5 ${i !== 3 ? "md:border-r border-black/10" : ""
                      } ${i % 2 === 0 ? "border-r border-black/10 md:border-r-0" : ""} ${i < 2 ? "border-b border-black/10 md:border-b-0" : ""
                      }`}
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center h-10 w-10 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-primary/10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-none">
                        <AnimatedCounter target={n} suffix={s} />
                      </div>
                      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                        {l}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <Reveal direction="left">
            <div className="relative">
              <img
                src={about2}
                alt="About The Nest Realty"
                className="rounded-lg shadow-elegant w-full hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 hidden md:block bg-primary text-primary-foreground p-4 sm:p-6 rounded-lg shadow-elegant"
                style={{ animation: "float 4s ease-in-out infinite" }}
              >
                <div className="text-2xl sm:text-3xl font-semibold">11+</div>
                <div className="text-xs uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div>
              <SectionHeader eyebrow="About Us" title="Crafting nests, not just transactions" />
              <p className="mt-5 sm:mt-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
                {" "}
                <strong className="text-foreground">The Nest Realty</strong> is a modern real estate sales & marketing
                partner for developers who want more than just leads —
                they want measurable growth. We combine branding,
                digital marketing, project sales, and strategic positioning
                to maximize visibility and accelerate successful project
                outcomes.
              </p>


              {/* Signature */}
              {/* Signature */}
              <div className="mt-8">
                <h3
                  className="text-primary"
                  style={{
                    fontFamily: "  serif",
                    fontSize: "2.4rem",
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  Ajay Sorathiya
                </h3>

                <div className="mt-2">
                  <p
                    className="font-semibold text-[#17120d]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Founder & Director
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3
               rounded-xl border border-[#d9c5a5]
               text-[#6b5132] font-medium
               hover:bg-primary hover:text-white
               transition-all duration-300"
              >
                Know More About Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 sm:py-20 md:py-28 bg-secondary">
        <div className="container-x">
          <Reveal direction="up">
            <SectionHeader
              center
              eyebrow="What we do"
              title="Services that move you forward"
              subtitle="A complete suite of real estate services, delivered with warmth and seasoned precision."
            />
          </Reveal>
          <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 120} direction="up">
                <div className="group bg-background p-6 sm:p-8 rounded-lg border border-border hover:border-primary hover:shadow-elegant hover:-translate-y-2 transition-all duration-300">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 transition-all duration-300">
                    <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container-x">
          <Reveal direction="up">
            <SectionHeader
              center
              eyebrow="How it works"
              title="A simple, four-step journey"
            />
          </Reveal>

          <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 150} direction="up">
                <div className="relative pt-6">
                  {/* Number Badge */}
                  <span className="absolute -top-0 left-8 z-20 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold shadow-xl border-4 border-background group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base">
                    0{i + 1}
                  </span>

                  {/* Card */}
                  <div className="group relative p-6 sm:p-8 border border-border rounded-2xl bg-background hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-primary/10 mb-5 sm:mb-6 group-hover:bg-primary/15 transition-all duration-300">
                      <s.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="relative z-10 text-lg sm:text-xl font-semibold">{s.title}</h3>
                    <p className="relative z-10 mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="py-16 sm:py-20 md:py-28 bg-secondary text-black">
        <div className="container-x">
          <Reveal direction="left">
            <div className="max-w-2xl">
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Why Choose Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold gold-line">Built on trust, delivered with detail</h2>
            </div>
          </Reveal>
          <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 120} direction="up">
                <div className="group p-6 sm:p-8 border border-black/10 rounded-lg hover:border-primary hover:-translate-y-2 hover:bg-white/5 transition-all duration-300">
                  <w.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-black/70 leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Properties ── */}


      {/* ── Testimonials ── */}
      {/* <section className="py-20 md:py-28 bg-secondary">
        <div className="container-x">
          <Reveal direction="up">
            <SectionHeader center eyebrow="Testimonials" title="Words from our nest" />
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 150} direction="up">
                <div className="bg-background p-8 rounded-lg border border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex gap-1 text-primary">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-current"
                        style={{ animation: `starPop 0.4s ${j * 80}ms ease both` }}
                      />
                    ))}
                  </div>
                  <p className="mt-5 text-foreground/80 leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── FAQs ── */}
      {/* <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <Reveal direction="left">
            <div>
              <SectionHeader
                eyebrow="FAQs"
                title="Questions, answered"
                subtitle="Everything you might want to know before working with The Nest Realty."
              />
              <Link to="/faqs" className="mt-6 inline-flex items-center gap-2 text-primary font-medium group">
                See all FAQs <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <button
                  key={f.q}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left bg-background border border-border rounded-lg p-5 hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium">{f.q}</span>
                    <span
                      className="transition-transform duration-300"
                      style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      {openFaq === i
                        ? <Minus className="h-4 w-4 text-primary shrink-0" />
                        : <Plus className="h-4 w-4 text-primary shrink-0" />}
                    </span>
                  </div>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{
                      maxHeight: openFaq === i ? "200px" : "0",
                      opacity: openFaq === i ? 1 : 0,
                      marginTop: openFaq === i ? "12px" : "0",
                    }}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section> */}

      <ContactSection />

      {/* ── Global keyframes ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes grow {
          0%   { transform: scaleY(0); opacity: 0; }
          50%  { transform: scaleY(1); opacity: 1; }
          100% { transform: scaleY(0); opacity: 0; }
        }
        @keyframes shimmer {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.75; }
        }
        @keyframes starPop {
          from { opacity: 0; transform: scale(0.4) rotate(-20deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </PageLayout>
  );
}

/* ════════════════════════════════════════════════
   CONTACT SECTION
════════════════════════════════════════════════ */
export function ContactSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-accent text-white">
      <div className="container-x grid lg:grid-cols-2 gap-10 sm:gap-12">
        <Reveal direction="left">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Contact Us</span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-semibold gold-line">Let's build your dream nest</h2>
            <p className="mt-5 sm:mt-6 text-white/70 max-w-md leading-relaxed text-sm sm:text-base">
              Tell us a little about what you're looking for. We'll get back within one working day.
            </p>
            <div className="mt-6 sm:mt-8 space-y-3 text-sm text-white/80">
              {[
                ["📍", "509,Hilltown Impressa, Opp.Parikh Hospital, Nikol, Ahmedabad, India 380049"],
                ["📞", "+91  9925004160"],
                ["✉️", "info@thenestrealty@gmail.com"],
              ].map(([icon, text], i) => (
                <div
                  key={text}
                  className="flex items-start gap-2 hover:text-primary transition-colors cursor-default"
                  style={{ animation: `fadeUp 0.5s ${0.1 * i + 0.3}s ease both` }}
                >
                  <span className="shrink-0">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll get back to you soon."); }}
            className="bg-white/5 backdrop-blur border border-white/10 p-6 sm:p-8 rounded-lg space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Full Name"
                className="bg-transparent border border-white/20 px-4 py-3 rounded-md text-sm focus:border-primary outline-none placeholder:text-white/40 transition-colors duration-200 w-full"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="bg-transparent border border-white/20 px-4 py-3 rounded-md text-sm focus:border-primary outline-none placeholder:text-white/40 transition-colors duration-200 w-full"
              />
            </div>
            <input
              placeholder="Phone Number"
              className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md text-sm focus:border-primary outline-none placeholder:text-white/40 transition-colors duration-200"
            />
            <select className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md text-sm focus:border-primary outline-none transition-colors duration-200">
              <option className="bg-accent">I'm interested in...</option>
              <option className="bg-accent">Buying a property</option>
              <option className="bg-accent">Selling a property</option>
              <option className="bg-accent">Investment advisory</option>
              <option className="bg-accent">Land acquisition</option>
            </select>
            <textarea
              rows={4}
              placeholder="Tell us a bit more..."
              className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md text-sm focus:border-primary outline-none placeholder:text-white/40 transition-colors duration-200"
            />
            <button
              type="submit"
              className="group w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3.5 rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 hover:gap-4 hover:shadow-lg hover:scale-[1.02]"
            >
              Send Message
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}