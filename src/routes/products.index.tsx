import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { ContactCTASection } from "@/components/sections/contact-cta-section";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products — Rekha Graphics" },
      {
        name: "description",
        content:
          "Explore our full product range: chromo art, PVC, polycarbonate, vinyl, polyester, maplitho, security stickers, acrylic labels and paper gaskets.",
      },
    ],
  }),
});

function ProductsPage() {
  return (
    <>
      <section className="container-edge pt-32 pb-12 md:pt-40">
        <SectionHeading
          eyebrow="Product range"
          title={<>Nine product families. One workshop.</>}
          description="Self-adhesive labels, industrial stickers and paper gaskets — printed and finished in-house with full customization across colours, shapes and sizes."
        />
      </section>

      <section className="container-edge pb-20 md:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
