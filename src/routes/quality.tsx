import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCTASection } from "@/components/sections/contact-cta-section";
import { Check } from "lucide-react";
import controlPanel from "@/assets/control-panel.jpg";

export const Route = createFileRoute("/quality")({
  component: QualityPage,
  head: () => ({
    meta: [
      { title: "Quality — Rekha Graphics" },
      {
        name: "description",
        content:
          "Stringent quality checks, ISO 9001 processes, in-house customization, and a long-term commitment to client satisfaction.",
      },
    ],
  }),
});

const strengths = [
  "High quality products",
  "Advanced infrastructure",
  "Skilled team of professionals",
  "Stringent quality checks",
  "Industry-leading prices",
  "Right quality at right cost and right time",
];

function QualityPage() {
  return (
    <>
      <section className="container-edge pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeading
              eyebrow="Quality assurance"
              title={
                <>
                  Quality is the core of the industry —{" "}
                  <span className="text-muted-foreground">and the floor.</span>
                </>
              }
              description="We adopt stringent quality measures to design top-notch products that can be availed at most affordable prices. Auditors, checkers and analysts uphold a strict vigil at each stage — from manufacturing to final delivery."
            />
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <img
                src={controlPanel}
                alt="Industrial control panel labels and gaskets"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-2 py-20 md:py-28">
        <div className="container-edge grid gap-10 md:grid-cols-2">
          <div className="card-soft p-8">
            <h3 className="font-display text-2xl font-semibold text-brand-ink">
              Customization
            </h3>
            <p className="mt-4 text-muted-foreground">
              We have garnered for ourselves a striking range of quality products backed
              with state-of-the-art technology. We focus on designing products that meet
              customer requirements — with customization done on the basis of:
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Different Colours", "Different Shapes", "Different Sizes"].map((x) => (
                <li
                  key={x}
                  className="rounded-full bg-brand-blue-soft px-4 py-1.5 text-xs font-semibold text-brand-blue"
                >
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft p-8">
            <h3 className="font-display text-2xl font-semibold text-brand-ink">
              Our aim
            </h3>
            <p className="mt-4 text-muted-foreground">
              To explore new markets and offer them a long-term service, while providing
              our nation more employment opportunities and delivering optimum-quality
              products.
            </p>
            <blockquote className="mt-6 border-l-2 border-brand-green pl-5 font-display italic text-brand-ink">
              “Our dedicated, customized software ensures adherence to customer-specific
              rules and quality standards — making it easier to meet requirements on time
              and with high quality.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="container-edge py-20 md:py-28">
        <SectionHeading
          eyebrow="Our strength"
          title={<>What enables us to be a reliable partner.</>}
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => (
            <li
              key={s}
              className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
              <span className="font-medium text-brand-ink">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <ContactCTASection />
    </>
  );
}
