import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSummarySection } from "@/components/sections/about-summary-section";
import { ProductsPreview } from "@/components/sections/products-preview";
import { QualitySection } from "@/components/sections/quality-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { VideosSection } from "@/components/sections/videos-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactCTASection } from "@/components/sections/contact-cta-section";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rekha Graphics — Stickers, Labels & Gaskets Manufacturing" },
      {
        name: "description",
        content:
          "Rekha Graphics manufactures self-adhesive labels, industrial stickers and paper gaskets since 2001. ISO-certified quality, in-house customization, Ahilyanagar, India.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <HeroSection />
      <AboutSummarySection />
      <ProductsPreview />
      <QualitySection />
      <TestimonialsSection />
      {/* <VideosSection /> */}
      <GallerySection />
      <ContactCTASection />
    </>
  );
}
