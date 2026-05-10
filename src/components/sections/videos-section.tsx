import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { videos } from "@/data/videos";

export function VideosSection() {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    prefersReduced ? [] : [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="container-edge py-20 md:py-28">
      <SectionHeading eyebrow="Inside the workshop" title={<>Watch us at work.</>} />

      <div className="mt-10 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {videos.map((v, i) => (
            <button
              key={i}
              onClick={() => setActive(v.youtubeId)}
              className="card-soft group relative min-w-0 flex-[0_0_85%] overflow-hidden p-0 sm:flex-[0_0_55%] md:flex-[0_0_42%] lg:flex-[0_0_32%]"
            >
              <div className="relative aspect-video">
                <img
                  src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 grid place-items-center bg-black/20 transition-colors group-hover:bg-black/35">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-blue shadow-lg transition-transform group-hover:scale-105">
                    <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
                  </span>
                </span>
              </div>
              <div className="p-5 text-left">
                <p className="font-display text-base font-semibold text-brand-ink">{v.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Video · YouTube
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${active}?autoplay=1`}
              title="Workshop video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
