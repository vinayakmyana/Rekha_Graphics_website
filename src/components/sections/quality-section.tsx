import { Link } from "@tanstack/react-router";
import { ArrowRight, Microscope, Layers3, Wrench, Factory } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    icon: Microscope,
    title: "Stringent quality checks",
    body: "Quality auditors and analysts maintain a strict vigil at every stage — from raw material to final delivery.",
  },
  {
    icon: Layers3,
    title: "Right material, right finish",
    body: "Best-in-class substrates, UV coatings and adhesives — chosen to last in the environments they ship into.",
  },
  {
    icon: Wrench,
    title: "Built-in customization",
    body: "Different colours, shapes and sizes — tailored to client specifications without inflating cost or timelines.",
  },
  {
    icon: Factory,
    title: "Advanced infrastructure",
    body: "Rotary flexo and screen-printing roll-form lines, supported by skilled professionals and disciplined process control.",
  },
];

export function QualitySection() {
  return (
    <section className="container-edge py-20 md:py-28">
      <SectionHeading
        eyebrow="Quality assurance"
        title={
          <>
            Quality is not a department.{" "}
            <span className="text-muted-foreground">It’s the floor.</span>
          </>
        }
        description="ISO 9001 processes, a long-term view of customer satisfaction, and a workshop where checks happen before, during and after every run."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.title} className="card-soft p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-blue">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-brand-ink">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/quality"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
        >
          Read more on quality
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
