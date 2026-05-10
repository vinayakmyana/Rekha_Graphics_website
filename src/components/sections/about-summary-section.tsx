import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSummarySection() {
  return (
    <section className="container-edge py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                A quiet workshop in Ahilyanagar.{" "}
                <span className="text-muted-foreground">Two decades of stick.</span>
              </>
            }
          />
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
          >
            Read the full story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-5 md:col-span-7 md:grid-cols-2">
          <div className="card-soft p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-green">
              Since 2001
            </p>
            <p className="mt-3 text-base text-foreground">
              Rekha Graphics has manufactured self-adhesive labels, industrial stickers
              and paper gaskets — quietly serving brands across India.
            </p>
          </div>
          <div className="card-soft p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              Range
            </p>
            <p className="mt-3 text-base text-foreground">
              Chromo art, PVC, polycarbonate, vinyl, polyester, polypropylene, maplitho,
              security stickers and gaskets — all under one roof.
            </p>
          </div>
          <div className="card-soft p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-green">
              Quality
            </p>
            <p className="mt-3 text-base text-foreground">
              Stringent in-line checks, ISO 9001 processes, and a long-term focus on
              durability and finish.
            </p>
          </div>
          <div className="card-soft p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              Customization
            </p>
            <p className="mt-3 text-base text-foreground">
              Different colours, shapes and sizes — tailored to your specifications, on
              schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
