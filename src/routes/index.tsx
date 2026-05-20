import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Home, Building2, TrendingUp, MapPinned,
  MessageCircle, FileText, Handshake, Award, BookOpen,
  Users, ShieldCheck, Star, Bed, Bath, Maximize, Plus, Minus,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionHeader } from "@/components/site/Section";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import p1 from "@/assets/KISHKINDHA.jpg";
import p2 from "@/assets/AYODHYAPURI.jpg";
import p3 from "@/assets/harmony.jpg";
import p4 from "@/assets/RadheShyam.jpeg";

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
  { icon: Home,      title: "Property Buying",     desc: "Discover homes that match your lifestyle, budget and aspirations across Ahmedabad." },
  { icon: Building2, title: "Property Selling",     desc: "Sell faster and smarter with strategic marketing and the right buyer network." },
  { icon: TrendingUp,title: "Investment Advisory",  desc: "Grow your wealth with handpicked, high-yield real estate opportunities." },
  { icon: MapPinned, title: "Land Acquisition",     desc: "End-to-end support for sourcing, due diligence and acquiring premium land." },
];

const steps = [
  { icon: MessageCircle, title: "Personal Consultation",    desc: "We start by understanding your goals, lifestyle and budget — no cookie-cutter advice." },
  { icon: FileText,      title: "Customized Marketing Plan", desc: "A tailored strategy that positions your property in front of the right audience." },
  { icon: Handshake,     title: "Smooth Selling Process",   desc: "From paperwork to handover, we handle the details so you can move with confidence." },
];

const whyUs = [
  { icon: Award,       title: "Years of Experience",   desc: "Decades of combined expertise in Ahmedabad real estate." },
  { icon: BookOpen,    title: "Deep Market Knowledge", desc: "Hyper-local insights that help you make informed decisions." },
  { icon: Users,       title: "Professional Team",     desc: "RERA-aware advisors who put your interests first." },
  { icon: ShieldCheck, title: "Transparent Deals",     desc: "Honest pricing, clear paperwork and zero hidden surprises." },
];

const properties = [
  { img: p1, title: "Aryaman Kishkindha ", location: "Narol, Ahmedabad",  price: "₹23 Lacs ",  beds: 1, baths: 3, area: "1850 sq.ft",     tag: "New Launch" },
  { img: p2, title: "Aryaman Ayodhyapuri ",   location: "Narol, Ahmedabad",       price: "₹32 Lacs",         beds: 2 & 3, baths: 5, area: "3200 sq.ft",     tag: "Premium"    },
  { img: p3, title: "Harmony 71",   location: "Lambha, Ahmedabad",           price: "₹1 Cr",         beds: 4, baths: 2, area: "1200 sq.ft",     tag: "Commercial" },
  { img: p4, title: "Radhe Shyam Heritage",     location: "Lambha, Ahmedabad",       price: "₹39 Lacs ",  beds:  2 & 3, baths: 0, area: "1500–4000 sq.ft", tag: "Premium"       },
];

const testimonials = [
  { name: "Rahul Mehta",  role: "Home Buyer", text: "The Nest Realty made buying our first home feel effortless. Honest advice, no pressure, and an incredible eye for what suits us." },
  { name: "Priya Shah",   role: "Investor",   text: "Their market insights helped me build a portfolio that's already paying off. A team that genuinely cares." },
  { name: "Anand Patel",  role: "Seller",     text: "Sold our villa in 6 weeks at the price we wanted. The marketing plan they built was world-class." },
];

const faqs = [
  { q: "Where do you operate?",            a: "We are based in Ahmedabad and serve clients across the city and surrounding regions, including Sanand, Shilaj, Bopal and SG Highway." },
  { q: "Do you charge for consultations?", a: "No. Initial consultations are completely free — we want to understand your goals before recommending anything." },
  { q: "Can you help NRI clients?",         a: "Absolutely. We regularly help NRI clients with end-to-end property buying, selling and management across Ahmedabad." },
  { q: "Are your listings RERA-registered?",a: "Yes — we only deal with RERA-registered projects and verified land parcels for full legal transparency." },
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
    up:    "translateY(40px)",
    left:  "translateX(-40px)",
    right: "translateX(40px)",
    none:  "none",
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

  /* Parallax on hero image */
  const heroImgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handle = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <PageLayout>
      {/* ── Hero ── */}
    <section
  className="relative z-10 h-[88vh] min-h-[600px] flex items-center text-white overflow-hidden bg-cover bg-center bg-fixed"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 z-0" />

  {/* Animated floating orb accents */}
  <div className="absolute top-24 right-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse pointer-events-none z-10" />

  <div
    className="absolute bottom-16 right-48 h-40 w-40 rounded-full bg-primary/8 blur-2xl pointer-events-none z-10"
    style={{ animation: "floatOrb 6s ease-in-out infinite" }}
  />

  {/* Content */}
  <div className="container-x relative z-20">
    {/* Badge */}
    <span
      className="inline-block px-4 py-1.5 bg-primary/50 border border-primary/50 text-white text-xs uppercase tracking-[0.25em] rounded-full"
      style={{ animation: "slideInLeft 0.8s ease forwards" }}
    >
      Build your memories with your Dream Nest
    </span>

    {/* Heading */}
    <h1
      className="mt-6 text-4xl sm:text-5xl md:text-7xl font-semibold max-w-4xl leading-[1.05]"
      style={{ animation: "fadeUp 0.9s 0.2s ease both" }}
    >
      Your Trusted Real Estate Service in{" "}
      <span
        className="text-primary"
        style={{ animation: "shimmer 3s 1.2s ease infinite" }}
      >
        Ahmedabad
      </span>
    </h1>

    {/* Description */}
    <p
      className="mt-6 max-w-xl text-white/80 text-lg"
      style={{ animation: "fadeUp 0.9s 0.4s ease both" }}
    >
      From your first home to your next investment — The Nest Realty
      crafts honest, personal real estate journeys for families and
      investors across Ahmedabad.
    </p>

    {/* Buttons */}
    <div
      className="mt-8 flex flex-wrap gap-4"
      style={{ animation: "fadeUp 0.9s 0.6s ease both" }}
    >
      <Link
        to="/projects"
        className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-7 py-3.5 rounded-md font-medium transition-colors overflow-hidden relative"
      >
        <span className="relative z-10 flex items-center gap-2">
          Explore Properties
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>

        <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
      </Link>

      <Link
        to="/contact"
        className="group inline-flex items-center gap-2 border border-white/30 hover:bg-white hover:text-accent text-white px-7 py-3.5 rounded-md font-medium transition-all duration-300"
      >
        Talk to an Expert
      </Link>
    </div>
  </div>

  {/* Scroll cue */}
  <div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs z-20"
    style={{ animation: "fadeUp 1s 1.2s ease both" }}
  >
    {/* <span>Scroll</span> */}

    <span
      className="block h-8 w-px bg-white/20"
      style={{ animation: "grow 1.5s 1.5s ease infinite" }}
    />
  </div>
</section>

      {/* ── Stats ── */}
      <section className="bg-accent text-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { n: 500, s: "+", l: "Happy Families" },
            { n: 120, s: "+", l: "Properties Closed" },
            { n: 15,  s: "+", l: "Years of Trust" },
            { n: 50,  s: "+", l: "Premium Listings" },
          ].map(({ n, s, l }, i) => (
            <Reveal key={l} delay={i * 100} direction="up">
              <div className="py-10 px-6 text-center">
                <div className="text-3xl md:text-4xl font-semibold text-primary">
                  <AnimatedCounter target={n} suffix={s} />
                </div>
                <div className="mt-1 text-sm text-white/70">{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="left">
            <div className="relative">
              <img
                src={aboutImg}
                alt="About The Nest Realty"
                className="rounded-lg shadow-elegant w-full hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div
                className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground p-6 rounded-lg shadow-elegant"
                style={{ animation: "float 4s ease-in-out infinite" }}
              >
                <div className="text-3xl font-semibold">15+</div>
                <div className="text-xs uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div>
              <SectionHeader eyebrow="About Us" title="Crafting nests, not just transactions" />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                The Nest Realty is the real-estate arm of{" "}
                <strong className="text-foreground">Swarnim Vasudha LLP</strong>, built on the
                simple belief that a home is more than four walls — it's where memories are built.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {["RERA-aware advisory", "End-to-end legal support", "Curated premium inventory", "NRI-friendly process"].map((t, i) => (
                  <li
                    key={t}
                    className="flex items-center gap-2"
                    style={{ animation: `fadeUp 0.5s ${0.1 * i}s ease both`, animationPlayState: "paused" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> {t}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group">
                Learn more about us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-x">
          <Reveal direction="up">
            <SectionHeader
              center
              eyebrow="What we do"
              title="Services that move you forward"
              subtitle="A complete suite of real estate services, delivered with warmth and seasoned precision."
            />
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 120} direction="up">
                <div className="group bg-background p-8 rounded-lg border border-border hover:border-primary hover:shadow-elegant hover:-translate-y-2 transition-all duration-300">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 transition-all duration-300">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal direction="up">
            <SectionHeader center eyebrow="How it works" title="A simple, three-step journey" />
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 150} direction="up">
                <div className="relative p-8 border border-border rounded-lg bg-background hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 group">
                  <span className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold group-hover:scale-110 transition-transform duration-300">
                    0{i + 1}
                  </span>
                  <s.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="py-20 md:py-28 bg-accent text-white">
        <div className="container-x">
          <Reveal direction="left">
            <div className="max-w-2xl">
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-semibold gold-line">Built on trust, delivered with detail</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 120} direction="up">
                <div className="group p-8 border border-white/10 rounded-lg hover:border-primary hover:-translate-y-2 hover:bg-white/5 transition-all duration-300">
                  <w.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Properties ── */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal direction="up">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeader eyebrow="Featured" title="Handpicked properties for you" />
              <Link to="/projects" className="text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all group">
                View all <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} direction="up">
                <article className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Tag slides in on hover */}
                    {/* <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                      {p.tag}
                    </span> */}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.location}</p>
                    <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                      {p.beds > 0  && <span className="flex items-center gap-1"> {p.beds} BHK</span>}
                      {/* {p.baths > 0 && <span className="flex items-center gap-1"><Bath    className="h-3.5 w-3.5" /> {p.baths}</span>} */}
                      <span              className="flex items-center gap-1"><Maximize className="h-3.5 w-3.5" /> {p.area}</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-primary font-semibold">{p.price}</span>
                      <Link to="/contact" className="text-xs uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors">
                        Enquire →
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 md:py-28 bg-secondary">
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
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 md:py-28">
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
                        : <Plus  className="h-4 w-4 text-primary shrink-0" />}
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
      </section>

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
    <section className="py-20 md:py-28 bg-accent text-white">
      <div className="container-x grid lg:grid-cols-2 gap-12">
        <Reveal direction="left">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Contact Us</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold gold-line">Let's build your dream nest</h2>
            <p className="mt-6 text-white/70 max-w-md leading-relaxed">
              Tell us a little about what you're looking for. We'll get back within one working day.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/80">
              {[
                ["📍", "509,Hilltown Impressa, Opp.Parikh Hospital, Nikol, Ahmedabad, India 380049"],
                ["📞", "+91 98765 43210"],
                ["✉️", "hello@thenestrealty.in"],
              ].map(([icon, text], i) => (
                <div
                  key={text}
                  className="flex items-center gap-2 hover:text-primary transition-colors cursor-default"
                  style={{ animation: `fadeUp 0.5s ${0.1 * i + 0.3}s ease both` }}
                >
                  {icon} {text}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll get back to you soon."); }}
            className="bg-white/5 backdrop-blur border border-white/10 p-8 rounded-lg space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Full Name"
                className="bg-transparent border border-white/20 px-4 py-3 rounded-md text-sm focus:border-primary outline-none placeholder:text-white/40 transition-colors duration-200"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="bg-transparent border border-white/20 px-4 py-3 rounded-md text-sm focus:border-primary outline-none placeholder:text-white/40 transition-colors duration-200"
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