import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start" },
    prefersReduced ? [] : [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section className="bg-surface-2 py-20 md:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Voices from the floor" title={<>What partners say.</>} />
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={() => embla?.scrollPrev()}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-brand-ink hover:border-brand-ink"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next"
              onClick={() => embla?.scrollNext()}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-brand-ink hover:border-brand-ink"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="card-soft flex min-w-0 flex-[0_0_100%] flex-col p-8 sm:flex-[0_0_85%] md:flex-[0_0_55%] lg:flex-[0_0_42%]"
              >
                <Quote className="h-7 w-7 text-brand-blue" />
                <blockquote className="mt-5 font-display text-xl leading-snug text-brand-ink md:text-2xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <p className="font-semibold text-brand-ink">{t.author}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => embla?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${selected === i ? "w-6 bg-brand-blue" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
       
      </div>
    </section>
  );
}
