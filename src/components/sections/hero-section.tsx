import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import hero from "@/assets/hero-products.jpg";
import { company } from "@/data/company";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      {/* soft background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 16%, transparent), transparent 70%)",
        }}
      />
      <div className="container-edge relative grid items-center gap-12 pb-20 md:grid-cols-12 md:pb-28">
        <div className="md:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Est. {company.established} · Ahilyanagar, MH
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="display-1 mt-5 text-[2.5rem] leading-[1.02] text-brand-ink sm:text-6xl md:text-7xl"
          >
            Stickers, labels{" "}
            <span className="gradient-text-blue">&amp; gaskets</span>
            <br />
            engineered to stick.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            A premium manufacturer of self-adhesive labels, industrial stickers and paper
            gaskets. ISO-certified processes, in-house customization, and a team that
            takes “Trust in every sticker” personally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(27,95,181,0.6)] transition-transform hover:-translate-y-0.5"
            >
              Explore products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-ink"
            >
              Contact now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-green" />
              ISO 9001 Certified
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-blue" />
              In-house customization
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <span className="font-mono uppercase tracking-[0.2em] text-xs">
                Since {company.established}
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-5"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] opacity-70"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--brand-blue) 12%, transparent), color-mix(in oklab, var(--brand-green) 10%, transparent))",
                filter: "blur(28px)",
              }}
            />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-[var(--shadow-lift)]">
              <img
                src={hero}
                alt="Industrial labels and stickers"
                className="h-[440px] w-full object-cover md:h-[560px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-soft)] sm:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Capability
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-ink">
                Paper Gaskets &amp; Industrial Labels
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
