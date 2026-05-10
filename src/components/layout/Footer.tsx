import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { company } from "@/data/company";
import { navItems } from "@/data/navigation";
import { products } from "@/data/products";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="container-edge grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <img src={logo} alt="Rekha Graphics" className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {company.description}. Manufacturing self-adhesive labels, stickers and gaskets
            since {company.established} from Ahilyanagar, Maharashtra.
          </p>
          <p className="mt-6 font-display text-lg text-brand-ink">
            “{company.tagline}”
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Navigate
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground hover:text-brand-blue">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Products
          </h4>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="text-foreground hover:text-brand-blue"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Reach us
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2 text-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              <span>
                {company.address.line1}, {company.address.line2},{" "}
                {company.address.city} - {company.address.pin},{" "}
                {company.address.state}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-blue" />
              <a href={`tel:${company.phones[1].replace(/\s/g, "")}`} className="hover:text-brand-blue">
                {company.phones[1]}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-blue" />
              <a href={`mailto:${company.emails[0]}`} className="hover:text-brand-blue">
                {company.emails[0]}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-edge flex flex-col items-start justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Rekha Graphics. All rights reserved.</p>
          <p>{company.certifications.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
