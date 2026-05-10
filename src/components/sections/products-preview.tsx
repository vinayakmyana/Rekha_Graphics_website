import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/data/products";

export function ProductsPreview() {
  const featured = products.slice(0, 6);
  return (
    <section className="bg-surface-2 py-20 md:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Product range"
            title={<>What we manufacture.</>}
            description="Nine product families across labels, stickers and gaskets — printed and finished in-house with full customization."
          />
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-brand-ink hover:border-brand-ink"
          >
            View all products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
