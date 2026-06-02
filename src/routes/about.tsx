import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart, MapPin, Users, Award, TrendingUp, Linkedin, Facebook, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionHeader } from "@/components/site/Section";
import aboutImg1 from "@/assets/about.png";
import meet from "@/assets/meet.png";
import karan from "@/assets/karan.png";
import type { LucideIcon } from "lucide-react";

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

/* ─── Threads Icon (not in lucide-react) ─── */
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 192 192" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.372-39.134 15.265-38.105 34.569.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.195 47.292 9.643 32.788 28.08 19.882 44.485 13.224 67.315 13.001 95.932L13 96v.067c.224 28.617 6.882 51.447 19.788 67.854C47.292 182.358 68.882 191.806 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-24.723-24.553Z" />
  </svg>
);

/* ─── Typed stat item ─── */
interface StatItem {
  icon: LucideIcon;
  n: number;
  s: string;
  label: string;
  sub: string;
}

/* ─── Typed value card ─── */
interface ValueCard {
  icon: LucideIcon;
  title: string;
  num: string;
  text: string;
}

/* ─── Typed director ─── */
interface Director {
  name: string;
  role: string;
  image: string;
  desc: string;
  socials: {
    linkedin: string;
    facebook: string;
    instagram: string;
    threads: string;
  };
}

const stats: StatItem[] = [
  { icon: Award, n: 11, s: "+", label: "Years", sub: "of experience" },
  { icon: Users, n: 1100, s: "+", label: "Families", sub: "served across Gujarat" },
  { icon: TrendingUp, n: 950, s: "+", label: "Deals", sub: "closed successfully" },
  { icon: MapPin, n: 12, s: "+", label: "Listings", sub: "active properties" },
  { icon: Eye, n: 12000, s: "+", label: "Visits", sub: "Site Visits Generated" },
];

const values: ValueCard[] = [
  {
    icon: Target,
    title: "Our Mission",
    num: "01",
    text: "To deliver strategic real estate sales and marketing solutions that help developers scale projects successfully while creating transparent, valuable, and growth-focused experiences for buyers and investors.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    num: "02",
    text: "To become Gujarat's most trusted and modern sole selling and real estate marketing partner by redefining project sales through innovation, professionalism, and market expertise.",
  },
  {
    icon: Heart,
    title: "Our Values",
    num: "03",
    text: "At The Nest Realty, we believe real estate success comes from transparency, professionalism, and strong relationships. Our strategic approach helps developers grow while building trust with buyers and investors.",
  },
];

const directors: Director[] = [
  {
    name: "Jaydip Sonraj",
    role: "Director",
    image: karan,
    desc: "He drives sales strategy, client relationships and operational excellence to deliver consistent results.",
    socials: {
      linkedin: "https://www.linkedin.com/in/jaydepp-sonraj-b20440404",
      facebook: "https://www.facebook.com/share/1banP1dSbX/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/jaydeppsonraj",
      threads: "https://www.threads.com/@jaydeppsonraj",
    },
  },
  {
    name: "Ajay Sorathiya",
    role: "Director",
    image: meet,
    desc: "With deep market knowledge and a strategic mindset, he leads the vision, growth and partnerships at The Nest Realty.",
    socials: {
      linkedin: "https://www.linkedin.com/in/ajay-sorathiya-1a516b1a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      facebook: "https://www.facebook.com/share/1BWQCe5TBX/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/ajayy_sorathiya_official?igsh=MTcxOG9jdDB2cGxvNA==",
      threads: "https://www.threads.com/@ajayy_sorathiya_official?igshid=NTc4MTIwNjQ2YQ==",
    },
  },
];

function AboutPage() {
  return (
    <PageLayout>

      {/* ════════════════════════════════
          HERO — Background Image Layout
      ════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col border-b border-border overflow-hidden bg-[#f8f5ef]">

        {/* ── Background image + overlays ── */}
        <div className="absolute inset-0 z-0">
          <img src={aboutImg1} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-white/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5ef] via-[#f8f5ef]/30 to-transparent" />
        </div>

        {/* ── Eyebrow dateline row ── */}
        <div className="relative z-10 container-x pt-10">
          <div className="flex items-center gap-4 mb-10" style={{ animation: "fadeDown 0.6s 0.05s ease both" }}>
            <span className="text-primary text-xs uppercase tracking-[0.28em] font-semibold whitespace-nowrap">
              The Nest Realty
            </span>
            <div
              className="h-px bg-border flex-1"
              style={{ animation: "lineGrow 1s 0.35s ease both", transformOrigin: "left", transform: "scaleX(0)" }}
            />
            <span className="text-muted-foreground text-xs hidden sm:inline-block whitespace-nowrap tracking-wider">
              Ahmedabad · Gujarat · India
            </span>
          </div>
        </div>

        {/* ── Main content row ── */}
        <div className="relative z-10 container-x flex-1 grid lg:grid-cols-[1fr_1px_1fr] items-center pb-10">

          {/* LEFT */}
          <div className="pb-10 lg:pr-20 lg:-ml-6" style={{ animation: "fadeUp 0.75s 0.15s ease both" }}>
            <div className="flex items-start gap-4">
              <div
                className="w-[3px] rounded-full bg-primary flex-shrink-0 mt-1"
                style={{ animation: "barGrow 0.7s 0.45s ease both", height: 0 }}
              />
              <div>
                <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-extrabold leading-[1.0] tracking-tight text-foreground">
                  <span style={{ animation: "fadeUp 0.65s 0.3s ease both", display: "inline-block" }}>About</span>
                  <br />
                  <span className="text-primary italic" style={{ animation: "fadeUp 0.65s 0.45s ease both", display: "inline-block" }}>The Nest</span>
                  <br />
                  <span style={{ animation: "fadeUp 0.65s 0.6s ease both", display: "inline-block" }}>Realty</span>
                </h1>
              </div>
            </div>

            <div
              className="h-[3px] w-24 bg-primary rounded-full mt-7 mb-7"
              style={{ animation: "lineGrow 0.8s 0.85s ease both", transformOrigin: "left", transform: "scaleX(0)" }}
            />

            <p className="text-muted-foreground text-base leading-relaxed max-w-[420px]" style={{ animation: "fadeUp 0.65s 0.95s ease both" }}>
              A modern real estate house with old-world values built to help you find a place you'll truly call home.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4" style={{ animation: "fadeUp 0.65s 1.1s ease both" }}>
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-all duration-300 hover:gap-3 hover:shadow-lg">
                Talk to us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors group">
                View projects
                <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          {/* CENTER RULE */}
          <div className="hidden lg:flex justify-center h-full">
            <div className="w-px bg-border/60 h-[70%]" />
          </div>

          {/* RIGHT */}
          <div
            className="pb-10 lg:pl-20 lg:ml-10 border-t lg:border-t-0 border-border pt-10 lg:pt-0"
            style={{ animation: "fadeUp 0.75s 0.3s ease both" }}
          >
            <div className="bg-background/70 backdrop-blur-md rounded-3xl border border-border/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="h-px bg-primary"
                  style={{ animation: "lineGrow 0.6s 0.65s ease both", transformOrigin: "left", transform: "scaleX(0)", width: "2rem" }}
                />
                <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold">Our Story</span>
              </div>

              <p className="text-foreground text-lg font-semibold leading-relaxed mb-5" style={{ animation: "fadeUp 0.65s 0.55s ease both" }}>
                The real-estate vertical of{" "}
                <span className="text-primary">Swarnim Vasudha LLP</span>
                , a Gujarat-based group with a long-standing reputation for ethics and execution.
              </p>

              <p className="text-muted-foreground leading-relaxed" style={{ animation: "fadeUp 0.65s 0.7s ease both" }}>
                The Nest Realty partners with developers to build strong project visibility through branding, digital campaigns, and structured sales execution. Based in Ahmedabad, we focus on connecting the right audience with the right opportunities while maintaining a premium and transparent customer experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-2" style={{ animation: "fadeUp 0.65s 0.85s ease both" }}>
                {["NRI Friendly", "End-to-End Legal", "Curated Listings"].map((tag, i) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full border border-primary/30 text-sm text-primary bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    style={{ animation: `fadeUp 0.4s ${0.85 + i * 0.09}s ease both` }}
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
              {stats.map(({ icon: Icon, n, s, label, sub }, i) => (
                <div
                  key={label}
                  className="group flex items-center gap-4 py-7 px-5 hover:bg-secondary/60 transition-colors duration-300"
                  style={{ animation: `fadeUp 0.55s ${0.2 + i * 0.1}s ease both` }}
                >
                  <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-primary/10 items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-extrabold text-primary leading-none">
                      <Counter target={n} suffix={s} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      <span className="text-foreground font-semibold uppercase tracking-wide">{label}</span>
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
          LEADERSHIP SECTION
      ════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#faf7f2]">
        <div className="container-x">

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

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            {directors.map((person, i) => (
              <Reveal key={person.name} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="group bg-background border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="grid md:grid-cols-[260px_1fr]">

                    {/* Image */}
                    <div className="relative overflow-hidden bg-muted" style={{ minHeight: "383px" }}>
                      <img
                        src={person.image}
                        alt={person.name}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
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

                      <div className="mt-4 h-[2px] w-16 bg-primary rounded-full" />

                      <p className="mt-5 text-muted-foreground leading-relaxed">
                        {person.desc}
                      </p>

                      {/* FIX 1–4: Social Icons — restored proper <a> opening tags */}
                      <div className="mt-8 flex items-center gap-3">
                        <a
                          href={person.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="LinkedIn"
                          className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 hover:brightness-110 transition-all duration-300"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                          href={person.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Facebook"
                          className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 hover:brightness-110 transition-all duration-300"
                        >
                          <Facebook className="h-4 w-4" />
                        </a>
                        <a
                          href={person.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Instagram"
                          className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 hover:brightness-110 transition-all duration-300"
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                        <a
                          href={person.socials.threads}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Threads"
                          className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 hover:brightness-110 transition-all duration-300"
                        >
                          <ThreadsIcon className="h-4 w-4" />
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
            {values.map((v, i) => (
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