import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/data/company";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Rekha Graphics" },
      {
        name: "description",
        content:
          "Reach Rekha Graphics in Ahilyanagar, Maharashtra. Call, email, WhatsApp or visit us at MIDC Nimblak Road.",
      },
    ],
  }),
});

function ContactPage() {
  const primaryPhone = company.phones[1];
  return (
    <>
      <section className="container-edge pt-32 pb-12 md:pt-40">
        <SectionHeading
          eyebrow="Get in touch"
          title={<>Let’s talk specifications.</>}
          description="No forms, no friction. Call, email, WhatsApp or drop by the workshop."
        />
      </section>

      <section className="container-edge py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <a
            href={`tel:${primaryPhone.replace(/\s/g, "")}`}
            className="card-soft group flex flex-col p-6"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-soft text-brand-blue">
              <Phone className="h-5 w-5" />
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Call us
            </p>
            <p className="mt-2 font-display text-lg font-semibold text-brand-ink">
              {primaryPhone}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Mon – Sat · 10:00 – 18:30</p>
          </a>

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="card-soft group flex flex-col p-6"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-soft text-brand-green">
              <MessageCircle className="h-5 w-5" />
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              WhatsApp
            </p>
            <p className="mt-2 font-display text-lg font-semibold text-brand-ink">
              Chat with us
            </p>
            <p className="mt-1 text-sm text-muted-foreground">+91 93701 47921</p>
          </a>

          <a
            href={`mailto:${company.emails[0]}`}
            className="card-soft group flex flex-col p-6"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-soft text-brand-blue">
              <Mail className="h-5 w-5" />
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Email us
            </p>
            <p className="mt-2 break-all font-display text-base font-semibold text-brand-ink">
              {company.emails[0]}
            </p>
            <p className="mt-1 break-all text-sm text-muted-foreground">{company.emails[1]}</p>
          </a>

          <a
            href={company.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="card-soft group flex flex-col p-6"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-soft text-brand-green">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Visit us
            </p>
            <p className="mt-2 font-display text-base font-semibold text-brand-ink">
              View on Google Maps
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              MIDC Nimblak Road, Ahilyanagar
            </p>
          </a>
        </div>
      </section>

      <section className="container-edge py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-semibold text-brand-ink">
              Workshop &amp; office
            </h3>
            <address className="mt-5 not-italic text-muted-foreground">
              Rekha Graphics<br />
              {company.address.line1}<br />
              {company.address.line2}<br />
              {company.address.city} - {company.address.pin}<br />
              {company.address.state}
            </address>

            <div className="mt-8 space-y-3 text-sm">
              {company.phones.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-blue" />
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand-blue">
                    {p}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-brand-blue" />
                <a
                  href="https://rekhagraphics.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-blue"
                >
                  {company.website}
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border">
            <iframe
              title="Rekha Graphics location"
              src="https://www.google.com/maps?q=MIDC+Nimblak+Ahilyanagar+Maharashtra+414111&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
