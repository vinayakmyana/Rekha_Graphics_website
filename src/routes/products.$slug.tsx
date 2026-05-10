import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { products, getProduct } from "@/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/data/company";

export const Route = createFileRoute("/products/$slug")({
  component: ProductDetailPage,
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — Rekha Graphics` },
      {
        name: "description",
        content: loaderData?.product.shortDescription ?? "",
      },
      { property: "og:title", content: `${loaderData?.product.name} — Rekha Graphics` },
      { property: "og:description", content: loaderData?.product.shortDescription ?? "" },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="container-edge grid min-h-[60vh] place-items-center pt-32 text-center">
      <div>
        <h1 className="display-2 text-4xl">Product not found</h1>
        <Link to="/products" className="mt-6 inline-flex text-brand-blue">
          ← Back to products
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-edge pt-32 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const related = product.relatedSlugs
    .map((s: string) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  return (
    <>
      <section className="container-edge pt-32 md:pt-40">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-brand-blue"
        >
          <ArrowLeft className="h-4 w-4" />
          All products
        </Link>

        <div className="mt-8 grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-surface-2">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <span className="eyebrow">Product</span>
            <h1 className="display-1 mt-4 text-4xl text-brand-ink sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              {product.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(27,95,181,0.6)]"
              >
                Request a quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`tel:${company.phones[1].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:border-brand-ink"
              >
                <Phone className="h-4 w-4" /> Call now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-edge py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-2xl font-semibold text-brand-ink">
              About this product
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              {product.longDescription}
            </p>
          </div>

          <div className="md:col-span-5 md:pl-6">
            <div className="card-soft p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
                Specifications
              </p>
              <ul className="mt-4 space-y-3">
                {product.specifications.map((s: string) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-soft mt-5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-green">
                Customization
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {product.customizationOptions.map((c: string) => (
                  <li
                    key={c}
                    className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-brand-ink"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-surface-2 py-20 md:py-28">
          <div className="container-edge">
            <SectionHeading eyebrow="Related" title={<>You may also like.</>} />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ProductCard key={r.slug} product={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
