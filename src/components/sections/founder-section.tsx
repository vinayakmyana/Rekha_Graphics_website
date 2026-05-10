import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";
import { company } from "@/data/company";

export function FounderSection() {
  const f = company.founder;
  return (
    <section className="container-edge py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] opacity-70"
              style={{
                background:
                  "linear-gradient(140deg, color-mix(in oklab, var(--brand-blue) 18%, transparent), color-mix(in oklab, var(--brand-green) 18%, transparent))",
                filter: "blur(24px)",
              }}
            />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white">
              <img
                src={founderImg}
                alt={`${f.name}, ${f.title}`}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7"
        >
          <span className="eyebrow">Proprietor</span>
          <h2 className="display-2 mt-4 text-3xl text-brand-ink sm:text-5xl">
            {f.name}
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            {f.title}
          </p>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            {f.note}
          </p>
          <blockquote className="mt-8 border-l-2 border-brand-green pl-5 font-display text-lg italic text-brand-ink md:text-xl">
            “Trust in every stick — that is the only metric that matters.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
