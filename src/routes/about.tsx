import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart, MapPin, Users, Award, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionHeader } from "@/components/site/Section";
import aboutImg from "@/assets/about-hero.jpeg";
import aboutImg1 from "@/assets/about-hero.png";
import meet from "@/assets/Meet.png";
import karan from "@/assets/karan.png";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Nest Realty" },
      { name: "description", content: "Learn about The Nest Realty, the real estate arm of Swarnim Vasudha LLP." },
      { property: "og:title", content: "About Us — The Nest Realty" },
      { property: "og:description", content: "Crafting nests, not just transactions." },
    ],
  }),
  component: AboutPage,
});

/* ─── Scroll reveal hook ─── */
function useReveal(threshold = 0.12) {
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
  }, [threshold]);
  return { ref, visible };
}

function Reveal({
  children, delay = 0, direction = "up", className = "",
}: {
  children: React.ReactNode; delay?: number;
  direction?: "up" | "left" | "right" | "none"; className?: string;
}) {
  const { ref, visible } = useReveal();
  const t: Record<string, string> = {
    up: "translateY(40px)", left: "translateX(-40px)",
    right: "translateX(40px)", none: "none",
  };
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translate(0,0)" : t[direction],
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

/* ─── Animated counter ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const { ref, visible } = useReveal(0.4);
  useEffect(() => {
    if (!visible) return;
    let v = 0;
    const step = Math.ceil(target / 55);
    const id = setInterval(() => {
      v += step;
      if (v >= target) { setN(target); clearInterval(id); } else setN(v);
    }, 20);
    return () => clearInterval(id);
  }, [visible, target]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ─── Vertical line that draws downward ─── */
function VerticalRule({ delay = 0 }: { delay?: number }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className="hidden lg:block w-px bg-border self-stretch"
      style={{
        transform: visible ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
        transition: `transform 1s ease ${delay}ms`,
      }}
    />
  );
}

function AboutPage() {
  return (
    <PageLayout>

      {/* ════════════════════════════════
          HERO — Newspaper Grid Layout
      ════════════════════════════════ */}
     {/* ════════════════════════════════
    HERO — Background Image Layout
════════════════════════════════ */}
<section className="relative min-h-[92vh] flex flex-col border-b border-border overflow-hidden bg-[#f8f5ef]">

  {/* ── Background image + overlays ── */}
  <div className="absolute inset-0 z-0">
    <img
      src={aboutImg1}
      alt=""
      className="w-full h-full object-cover object-center"
    />

    {/* soft light overlay */}
    <div className="absolute inset-0 bg-white/65" />

    {/* left side readability gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5ef] via-[#f8f5ef]/80 to-transparent" />
  </div>

  {/* ── Eyebrow dateline row ── */}
  <div className="relative z-10 container-x pt-10">
    <div
      className="flex items-center gap-4 mb-10"
      style={{ animation: "fadeDown 0.6s 0.05s ease both" }}
    >
      <span className="text-primary text-xs uppercase tracking-[0.28em] font-semibold whitespace-nowrap">
        The Nest Realty
      </span>

      <div
        className="h-px bg-border flex-1"
        style={{
          animation: "lineGrow 1s 0.35s ease both",
          transformOrigin: "left",
          transform: "scaleX(0)",
        }}
      />

      <span className="text-muted-foreground text-xs hidden sm:inline-block whitespace-nowrap tracking-wider">
        Ahmedabad · Gujarat · India
      </span>
    </div>
  </div>

  {/* ── Main content row ── */}
  <div className="relative z-10 container-x flex-1 grid lg:grid-cols-[1fr_1px_1fr] items-center pb-10">

    {/* LEFT CONTENT */}
    <div
      className="pb-10 lg:pr-20 lg:-ml-6"
      style={{ animation: "fadeUp 0.75s 0.15s ease both" }}
    >
      <div className="flex items-start gap-4">

        {/* Vertical line */}
        <div
          className="w-[3px] rounded-full bg-primary flex-shrink-0 mt-1"
          style={{
            animation: "barGrow 0.7s 0.45s ease both",
            height: 0,
          }}
        />

        {/* Heading */}
        <div>
          <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-extrabold leading-[1.0] tracking-tight text-foreground">

            <span
              style={{
                animation: "fadeUp 0.65s 0.3s ease both",
                display: "inline-block",
              }}
            >
              About
            </span>

            <br />

            <span
              className="text-primary italic"
              style={{
                animation: "fadeUp 0.65s 0.45s ease both",
                display: "inline-block",
              }}
            >
              The Nest
            </span>

            <br />

            <span
              style={{
                animation: "fadeUp 0.65s 0.6s ease both",
                display: "inline-block",
              }}
            >
              Realty
            </span>
          </h1>
        </div>
      </div>

      {/* Underline */}
      <div
        className="h-[3px] w-24 bg-primary rounded-full mt-7 mb-7"
        style={{
          animation: "lineGrow 0.8s 0.85s ease both",
          transformOrigin: "left",
          transform: "scaleX(0)",
        }}
      />

      {/* Description */}
      <p
        className="text-muted-foreground text-base leading-relaxed max-w-[420px]"
        style={{ animation: "fadeUp 0.65s 0.95s ease both" }}
      >
        A modern real estate house with old-world values built to help you find
        a place you'll truly call home.
      </p>

      {/* Buttons */}
      <div
        className="mt-8 flex flex-wrap items-center gap-4"
        style={{ animation: "fadeUp 0.65s 1.1s ease both" }}
      >
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-all duration-300 hover:gap-3 hover:shadow-lg"
        >
          Talk to us

          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors group"
        >
          View projects

          <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </div>

    {/* CENTER VERTICAL RULE */}
    <div className="hidden lg:flex justify-center h-full">
      <div className="w-px bg-border/60 h-[70%]" />
    </div>

    {/* RIGHT CONTENT */}
    <div
      className="pb-10 lg:pl-20 lg:ml-10 border-t lg:border-t-0 border-border pt-10 lg:pt-0"
      style={{ animation: "fadeUp 0.75s 0.3s ease both" }}
    >

      {/* Glass card */}
      <div className="bg-background/70 backdrop-blur-md rounded-3xl border border-border/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

        {/* Card heading */}
        <div className="flex items-center gap-3 mb-5">

          <div
            className="h-px bg-primary"
            style={{
              animation: "lineGrow 0.6s 0.65s ease both",
              transformOrigin: "left",
              transform: "scaleX(0)",
              width: "2rem",
            }}
          />

          <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold">
            Our Story
          </span>
        </div>

        {/* Paragraph */}
        <p
          className="text-foreground text-lg font-semibold leading-relaxed mb-5"
          style={{ animation: "fadeUp 0.65s 0.55s ease both" }}
        >
          The real-estate vertical of{" "}
          <span className="text-primary">
            Swarnim Vasudha LLP
          </span>
          , a Gujarat-based group with a long-standing reputation for ethics and
          execution.
        </p>

        {/* Description */}
        <p
          className="text-muted-foreground leading-relaxed"
          style={{ animation: "fadeUp 0.65s 0.7s ease both" }}
        >
          The Nest Realty partners with developers to build strong project
          visibility through branding, digital campaigns, and structured sales
          execution. Based in Ahmedabad, we focus on connecting the right
          audience with the right opportunities while maintaining a premium and
          transparent customer experience.
        </p>

        {/* Tags */}
        <div
          className="mt-6 flex flex-wrap gap-2"
          style={{ animation: "fadeUp 0.65s 0.85s ease both" }}
        >
          {[
            "NRI Friendly",
            "End-to-End Legal",
            "Curated Listings",
          ].map((tag, i) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-primary/30 text-sm text-primary bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
              style={{
                animation: `fadeUp 0.4s ${
                  0.85 + i * 0.09
                }s ease both`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* ── Stats footer bar ── */}
<div className="relative z-10 px-4 md:px-8 lg:px-14 pb-8 -mt-6">
  <div className="bg-background/90 backdrop-blur-md rounded-3xl border border-border shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">

    <div className="container-x grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-border">

      {[
        {
          icon: Award,
          n: 11,
          s: "+",
          label: "Years",
          sub: "of experience",
        },
        {
          icon: Users,
          n: 1100,
          s: "+",
          label: "Families",
          sub: "served across Gujarat",
        },
        {
          icon: TrendingUp,
          n: 950,
          s: "+",
          label: "Deals",
          sub: "closed successfully",
        },
        {
          icon: MapPin,
          n: 12,
          s: "+",
          label: "Listings",
          sub: "active properties",
        },
       {
  icon: Eye,
  n: 12000,
  s: "+",
  label: "Visits",
  sub: "Site Visits Generated",
}
      ].map(({ icon: Icon, n, s, label, sub }, i) => (
        <div
          key={label}
          className="group flex items-center gap-4 py-7 px-5 hover:bg-secondary/60 transition-colors duration-300"
          style={{
            animation: `fadeUp 0.55s ${0.2 + i * 0.1}s ease both`,
          }}
        >

          {/* Icon */}
          <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-primary/10 items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
            <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
          </div>

          {/* Counter */}
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-primary leading-none">
              <Counter target={n} suffix={s} />
            </div>

            <div className="text-xs text-muted-foreground mt-0.5">
              <span className="text-foreground font-semibold uppercase tracking-wide">
                {label}
              </span>

              <span className="mx-1 opacity-40">·</span>

              {sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</section>
      {/* ════════════════════════════════
          OUR STORY
      ════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal direction="left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-full w-full border-2 border-primary/20 rounded-lg" />
              <img
                src={aboutImg}
                alt="Our team"
                className="relative rounded-lg w-full object-cover shadow-xl hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              {/* <div
                className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-lg p-5 text-center shadow-xl"
                style={{ animation: "float 4s ease-in-out infinite" }}
              >
                <div className="text-3xl font-bold">15+</div>
                <div className="text-xs uppercase tracking-wider opacity-80 mt-0.5">Years Experience</div>
              </div> */}
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div>
              <SectionHeader eyebrow="Our Story" title="A house powered by Swarnim Vasudha LLP" />
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                 {" "}  <strong className="text-foreground">The Nest Realty</strong> was founded with a vision to redefine real estate sales and project marketing through a more strategic and modern approach. We recognized the growing need for a brand that could help developers not only market projects, but position them strongly in an increasingly competitive market.
               
               
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
What started as a focused initiative in Ahmedabad has steadily evolved into a trusted real estate sales and sole selling platform built on transparency, consistency, and deep market understanding.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-primary font-medium group hover:gap-3 transition-all"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

{/* ════════════════════════════════
    LEADERSHIP SECTION
════════════════════════════════ */}
<section className="py-24 md:py-32 bg-[#faf7f2]">
  <div className="container-x">

    {/* Heading */}
    <Reveal direction="up">
      <div className="text-center">
        <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">
          Our Leadership
        </span>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
          Meet Our Directors
        </h2>
      </div>
    </Reveal>

    {/* Cards */}
    <div className="mt-16 grid lg:grid-cols-2 gap-8">

      {[
         {
          name: "Jaydip Sonraj",
          role: "Director",
          image: karan,
          subtitle: "Jaydip Sonraj",
          desc: "He drives sales strategy, client relationships and operational excellence to deliver consistent results.",
        },
        {
          name: "Ajay Sorathiya",
          role: "Director",
          image: meet,
          subtitle: "Ajay Sorathiya",
          desc: "With deep market knowledge and a strategic mindset, he leads the vision, growth and partnerships at The Nest Realty.",
        },
       
      ].map((person, i) => (
        <Reveal
          key={person.name}
          delay={i * 120}
          direction={i % 2 === 0 ? "left" : "right"}
        >
          <div className="group bg-background border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">

            <div className="grid md:grid-cols-[260px_1fr]">

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full  md:h-[383px] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">

                <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
                  {person.role}
                </span>

                <h3 className="mt-3 text-3xl font-bold text-foreground">
                  {person.name}
                </h3>

                <p className="text-primary italic mt-1 text-lg">
                  {person.subtitle}
                </p>

                {/* Divider */}
                <div className="mt-5 h-[2px] w-16 bg-primary rounded-full" />

                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {person.desc}
                </p>

                {/* Social */}
                <div className="mt-8 flex items-center gap-3">

                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Users className="h-4 w-4" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
      {/* ════════════════════════════════
          MISSION / VISION / VALUES
      ════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-x">
          <Reveal direction="up">
            <SectionHeader center eyebrow="Who we are" title="The principles we live by" />
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Mission", num: "01", text: "To deliver strategic real estate sales and marketing solutions that help developers scale projects successfully while creating transparent, valuable, and growth-focused experiences for buyers and investors." },
              { icon: Eye,    title: "Our Vision",  num: "02", text: "To become Gujarat’s most trusted and modern sole selling and real estate marketing partner by redefiningproject sales through innovation, professionalism, and market expertise" },
              { icon: Heart,  title: "Our Values",  num: "03", text: "At The Nest Realty, we believe real estate success comes from transparency, professionalism, and strong relationships. Our strategic approach helps developers grow while building trust with buyers and investors." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 120} direction="up">
                <div className="group relative bg-background rounded-2xl border border-border overflow-hidden hover:border-primary hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 p-8 pt-10">
                  <div className="absolute top-4 right-4 text-8xl font-black text-foreground/[0.04] leading-none select-none pointer-events-none">
                    {v.num}
                  </div>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <v.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{v.title}</h3>
                  <div className="mt-2 h-0.5 w-0 bg-primary group-hover:w-12 transition-all duration-500 rounded-full" />
                  <p className="mt-4 text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CTA
      ════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal direction="up">
            <div className="bg-accent rounded-2xl overflow-hidden relative p-10 md:p-16">
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg,white 0,white 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,white 0,white 1px,transparent 1px,transparent 60px)",
                }}
              />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Let's connect</span>
                  <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
                    Ready to find<br />your dream nest?
                  </h2>
                  <p className="mt-4 text-white/60 max-w-md leading-relaxed">
                    Talk to our advisors and get a personal recommendation tailored to your goals and budget.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary-dark transition-all duration-300 hover:gap-4 hover:shadow-xl"
                  >
                    Get in touch
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                  >
                    Download Brochure
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes barGrow {
          from { height: 0; opacity: 0; }
          to   { height: 88px; opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
    </PageLayout>
  );
}