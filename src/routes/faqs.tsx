import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — The Nest Realty" },
      { name: "description", content: "Frequently asked questions about working with The Nest Realty in Ahmedabad." },
      { property: "og:title", content: "FAQs — The Nest Realty" },
      { property: "og:description", content: "Everything you need to know before you reach out." },
    ],
  }),
  component: Faqs,
});

const faqs = [
  { q: "Where do you operate?", a: "We are based in Ahmedabad and serve clients across the city and surrounding regions, including Sanand, Shilaj, Bopal, Thaltej and SG Highway." },
  { q: "Do you charge for consultations?", a: "No. Initial consultations are completely free — we want to understand your goals before recommending anything." },
  { q: "Can you help NRI clients?", a: "Absolutely. We regularly help NRI clients with end-to-end property buying, selling and management across Ahmedabad." },
  { q: "Are your listings RERA-registered?", a: "Yes — we only deal with RERA-registered projects and verified land parcels for full legal transparency." },
  { q: "How long does the buying process take?", a: "It depends on the property type and financing, but a typical home purchase wraps up in 30–60 days from shortlist to handover." },
  { q: "Do you assist with home loans?", a: "Yes. We work with leading banks and NBFCs and can connect you with the right partner for the best rates." },
  { q: "What documents do I need to sell my property?", a: "Title documents, sale deed, latest tax receipts, society NOC (if applicable) and KYC. We'll guide you through the entire checklist." },
  { q: "Do you handle commercial properties?", a: "Yes — offices, retail spaces and investment-grade commercial real estate across Ahmedabad." },
];

const chips = ["RERA Verified", "NRI Friendly", "End-to-End Legal", "Curated Listings"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

function FaqHero() {
  return (
    <div className="border-b border-[#b8882a]/20 overflow-hidden">
      {/* Top bar — slides down on load */}
      <motion.div
        className="bg-[#1a120a] px-8 md:px-16 py-2.5 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-[#b8882a]">
          The Nest Realty
        </span>
        <span className="font-sans text-[10px] tracking-[0.05em] text-[#4a3020]">
          Ahmedabad · Gujarat · India
        </span>
      </motion.div>

      {/* Body — split layout */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] bg-[#faf6ef]">
        {/* Left — staggered typographic reveal */}
        <div className="px-8 md:px-14 py-14 border-b md:border-b-0 md:border-r border-[#b8882a]/20 flex flex-col justify-center overflow-hidden">
          <motion.p
            className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-[#b8882a] mb-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.15}
          >
            Knowledge Centre
          </motion.p>

          <div className="font-serif overflow-hidden">
            <motion.span
              className="block text-6xl md:text-7xl font-semibold text-[#1a120a] leading-none"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
              FAQ
            </motion.span>
            <motion.span
              className="block text-6xl md:text-7xl font-semibold italic text-[#b8882a] leading-none"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
            >
              s
            </motion.span>
          </div>

          <motion.p
            className="font-sans text-[10px] tracking-[0.1em] uppercase text-[#8c7060] mt-5"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.55}
          >
            Frequently Asked Questions
          </motion.p>
        </div>

        {/* Right — staggered content reveal */}
        <div className="px-8 md:px-14 py-14 flex flex-col justify-center gap-5">
          <motion.p
            className="font-sans text-base font-medium text-[#1a120a] leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            Quick answers to the things people ask us most often.
          </motion.p>

          <motion.p
            className="font-sans text-sm text-[#8c7060] leading-[1.75]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.52}
          >
            From RERA compliance to home loan guidance, NRI support and
            consultation policy — everything you need to know before reaching out,
            all in one place.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 pt-1"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.64}
          >
            {chips.map((chip, i) => (
              <motion.span
                key={chip}
                className="font-sans text-[11px] text-[#5a3e28] border border-[#b8882a]/30 px-3 py-1.5 rounded-full bg-[#b8882a]/[0.06] cursor-default"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 + i * 0.07 }}
                whileHover={{
                  backgroundColor: "rgba(184,136,42,0.14)",
                  scale: 1.04,
                  transition: { duration: 0.18 },
                }}
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
    >
      <motion.button
        onClick={onToggle}
        className="w-full text-left bg-white border rounded-lg p-5"
        animate={{
          borderColor: isOpen
            ? "rgba(184,136,42,0.55)"
            : "rgba(184,136,42,0.2)",
        }}
        whileHover={{ borderColor: "rgba(184,136,42,0.45)" }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-sans font-medium text-[#1a120a]">{faq.q}</span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Plus className="h-4 w-4 text-[#b8882a] shrink-0" />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p className="mt-3 text-sm text-[#8c7060] leading-relaxed font-sans">
                {faq.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageLayout>
      <FaqHero />

      <section className="py-20 md:py-28 bg-white">
        <div className="container-x max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              faq={f}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}