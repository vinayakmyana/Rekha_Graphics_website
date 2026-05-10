import { gallery } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/section-heading";

export function GallerySection() {
  const loop = [...gallery, ...gallery];
  return (
    <section className="bg-surface-2 py-20 md:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="The workshop"
          title={<>Light, machines, and roll after roll.</>}
        />
      </div>

      <div className="marquee-pause mt-12 overflow-hidden">
        <div className="marquee-track flex w-max gap-5 px-5 sm:px-8 lg:px-12">
          {loop.map((g, i) => (
            <div
              key={i}
              className="relative h-64 w-[420px] shrink-0 overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-soft)]"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
