import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { FounderSection } from "@/components/sections/founder-section";
import { ContactCTASection } from "@/components/sections/contact-cta-section";
import { company } from "@/data/company";
import { ShieldCheck, Users, Sparkles, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Rekha Graphics" },
      {
        name: "description",
        content:
          "Founded in 2001 in Ahilyanagar, Rekha Graphics manufactures self-adhesive labels, stickers and gaskets. Read our company story, founder note, and quality philosophy.",
      },
    ],
  }),
});

const values = [
  { icon: ShieldCheck, title: "Quality first", body: "ISO 9001 processes and stringent in-line checks at every stage." },
  { icon: Sparkles, title: "Customization", body: "Different colours, shapes and sizes — built to client specification." },
  { icon: Users, title: "Skilled team", body: "A team that combines printing craft with disciplined process control." },
  { icon: HeartHandshake, title: "Client first", body: "A perfect blend of quality and reliability for long-term partnerships." },
];

function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="container-edge pt-32 pb-12 md:pt-40">
        <SectionHeading
          eyebrow="Our story"
          title={
            <>
              A workshop in Ahilyanagar.{" "}
              <span className="text-muted-foreground">
                A two-decade obsession with stick.
              </span>
            </>
          }
          description={`Incepted in ${company.established}, Rekha Graphics is recognised as a superlative manufacturer and exporter of a diverse assortment of self-adhesive labels, industrial stickers and paper gaskets — built around quality, customization and on-time delivery.`}
        />
      </section>

      {/* Story columns */}
      <section className="container-edge py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="card-soft p-8">
            <h3 className="font-display text-xl font-semibold text-brand-ink">
              Introduction
            </h3>
            <p className="mt-4 text-muted-foreground">
              Our better-quality product range is adhered to severe quality checks so as
              to ensure durability and long service life. Our range includes Chromo Art
              Stickers and Labels, PVC Sticker, Polycarbonate Sticker, Vinyl Sticker,
              Polypropylene Sticker, Maplitho Paper Sticker, Security Sticker (tamper
              proof) and Gaskets.
            </p>
          </div>
          <div className="card-soft p-8">
            <h3 className="font-display text-xl font-semibold text-brand-ink">
              Expert experience
            </h3>
            <p className="mt-4 text-muted-foreground">
              The commitment and dedication of our mentor and his years of experience in
              printing technology have helped the organization gain immense popularity in
              the world market. From inception, the company has strived to offer
              excellence integrated with innovation.
            </p>
          </div>
          <div className="card-soft p-8">
            <h3 className="font-display text-xl font-semibold text-brand-ink">
              Design &amp; infrastructure
            </h3>
            <p className="mt-4 text-muted-foreground">
              To design and print a world-class product range and meet client
              expectations, we have built up a highly advanced infrastructural facility,
              equipped with the latest machinery and instruments.
            </p>
          </div>
          <div className="card-soft p-8">
            <h3 className="font-display text-xl font-semibold text-brand-ink">
              Growth &amp; client satisfaction
            </h3>
            <p className="mt-4 text-muted-foreground">
              We believe in serving clients with the most favourable quality and
              reliability — a one-stop solution for printing and designing needs across
              electronics, pharma, plastics, chemicals, food, agriculture and more.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-edge py-16 md:py-24">
        <SectionHeading
          eyebrow="What we stand for"
          title={<>Core strengths.</>}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card-soft p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-brand-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <FounderSection />

      {/* Industries */}
      <section className="bg-surface-2 py-20 md:py-28">
        <div className="container-edge">
          <SectionHeading
            eyebrow="Industries we serve"
            title={<>Mainly offered to.</>}
            description="Per our brochure — products and services are offered to these industries for their product packing purposes."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {company.industries.map((i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-brand-ink"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
