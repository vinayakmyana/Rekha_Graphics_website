import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/company";

export function ContactCTASection() {
  return (
    <section className="container-edge py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-brand-ink p-10 text-white md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 80%, transparent), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--brand-green) 80%, transparent), transparent 70%)",
          }}
        />

        <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
              Let’s talk
            </span>
            <h2 className="display-2 mt-4 text-3xl text-white sm:text-5xl">
              Have a label, sticker or gasket spec in mind?
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
              Share your requirement — different colours, shapes, sizes, substrates.
              We’ll come back with a quote and a sample plan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink"
            >
              Contact us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`tel:${company.phones[1].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
