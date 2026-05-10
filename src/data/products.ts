import chromo from "@/assets/product-chromo.jpg";
import polycarbonate from "@/assets/product-polycarbonate.jpg";
import polyester from "@/assets/product-polyester.jpg";
import vinyl from "@/assets/product-vinyl.jpg";
import gasket from "@/assets/product-gasket.jpg";
import acrylic from "@/assets/product-acrylic.jpg";
import security from "@/assets/product-security.jpg";
import maplitho from "@/assets/product-maplitho.jpg";
import pvc from "@/assets/product-pvc.jpg";

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  specifications: string[];
  customizationOptions: string[];
  image: string;
  relatedSlugs: string[];
};

export const products: Product[] = [
  {
    slug: "chromo-art-sticker",
    name: "Chromo Art Sticker",
    shortDescription:
      "Multicolour chromo art labels with UV coating — built for printing labels and barcodes.",
    longDescription:
      "We offer Chromo Art Stickers in up to five colours with a protective UV coat. Widely used for printing labels and barcode labels, they are produced on rotary flexo and screen-printing roll-form machines. Available in a variety of slit widths and roll lengths, and tailored to create market demand for clients across diverse industries.",
    specifications: [
      "Up to 5 colours with UV coat",
      "Roll form, multiple slit widths",
      "Rotary flexo & screen printing",
      "Suited for labels & barcode labels",
    ],
    customizationOptions: ["Different colours", "Different shapes", "Different sizes"],
    image: chromo,
    relatedSlugs: ["pvc-sticker", "maplitho-paper-sticker", "polyester-sticker"],
  },
  {
    slug: "polycarbonate-sticker",
    name: "Polycarbonate Sticker",
    shortDescription:
      "High-grade polycarbonate stickers with outstanding thermal and physical resistance.",
    longDescription:
      "Engineered with high-quality polycarbonate, our stickers offer outstanding thermal and physical properties for demanding industrial applications. Manufactured under our ISO-certified quality system and offered with full customization to meet client specifications.",
    specifications: [
      "High-grade polycarbonate base",
      "Excellent thermal resistance",
      "Durable physical properties",
      "ISO 9001 quality processes",
    ],
    customizationOptions: ["Different colours", "Different shapes", "Different sizes"],
    image: polycarbonate,
    relatedSlugs: ["polyester-sticker", "acrylic-labels", "security-sticker"],
  },
  {
    slug: "polyester-sticker",
    name: "Polyester Sticker",
    shortDescription:
      "Highly flexible, durable polyester labels — water resistant and built to last.",
    longDescription:
      "Our polyester stickers are highly flexible and durable. Resistant to water and customizable to client specifications, they are available in both UL Approved and non-UL Approved raw materials.",
    specifications: [
      "Flexible & durable polyester",
      "Water resistant",
      "UL Approved option available",
      "Customizable to spec",
    ],
    customizationOptions: ["Different colours", "Different shapes", "Different sizes"],
    image: polyester,
    relatedSlugs: ["polycarbonate-sticker", "vinyl-sticker", "chromo-art-sticker"],
  },
  {
    slug: "vinyl-sticker",
    name: "Vinyl Sticker",
    shortDescription:
      "Polyester-coated vinyl with permanent adhesive — waterproof and long lasting.",
    longDescription:
      "Our Vinyl Stickers feature a polyester coating that protects design and text from damage. The adhesive is permanent, applied to the back surface, with a protective sheet to prevent unintended adhesion. Waterproof and long lasting, they perform reliably in harsh weather and are ideal for machines, barcodes and similar applications.",
    specifications: [
      "Polyester-coated vinyl",
      "Permanent backing adhesive",
      "Waterproof",
      "Suited for machines & barcodes",
    ],
    customizationOptions: ["Different colours", "Different shapes", "Different sizes"],
    image: vinyl,
    relatedSlugs: ["pvc-sticker", "polyester-sticker", "security-sticker"],
  },
  {
    slug: "paper-gaskets-washers",
    name: "Paper Gaskets & Washers",
    shortDescription:
      "All types of paper gaskets and washers — long lasting and ISO-certified quality.",
    longDescription:
      "We supply all types of paper gaskets and washers. As one of the leading suppliers in this segment, we provide customized solutions at affordable rates. Our ISO-certified production processes ensure consistent quality and a long service life across applications.",
    specifications: [
      "All types — paper gaskets & washers",
      "Long service life",
      "ISO 9001 quality processes",
      "Customizable sizes",
    ],
    customizationOptions: ["Different shapes", "Different sizes"],
    image: gasket,
    relatedSlugs: ["polycarbonate-sticker", "acrylic-labels", "polyester-sticker"],
  },
  {
    slug: "acrylic-labels",
    name: "Acrylic Labels",
    shortDescription:
      "Premium acrylic name plates and labels — strong agents of brand presence.",
    longDescription:
      "Our Acrylic Labels are highly useful as agents of brand awareness and are popular across multiple sectors. We offer printing through Screen Printing and UV Digital Printing at competitive rates, using best-in-class acrylic raw materials. Full customization is available to meet client specifications.",
    specifications: [
      "Best-quality acrylic base",
      "Screen & UV digital printing",
      "Competitive pricing",
      "Multi-sector use",
    ],
    customizationOptions: ["Different colours", "Different shapes", "Different sizes"],
    image: acrylic,
    relatedSlugs: ["polycarbonate-sticker", "security-sticker", "chromo-art-sticker"],
  },
  {
    slug: "security-sticker",
    name: "Security Sticker",
    shortDescription:
      "Tamper-evident, single-use stickers ideal for warranty and security applications.",
    longDescription:
      "Security Stickers are mostly used for warranty purposes — single-use, tamper-evident labels such as VOID stickers. Resistant to water and available in both Roll and Sheet form, they can be customized to client specifications.",
    specifications: [
      "Tamper-evident, single-use",
      "Water resistant",
      "Roll form & Sheet form",
      "Warranty-grade reliability",
    ],
    customizationOptions: ["Different colours", "Different shapes", "Different sizes"],
    image: security,
    relatedSlugs: ["vinyl-sticker", "polycarbonate-sticker", "acrylic-labels"],
  },
  {
    slug: "maplitho-paper-sticker",
    name: "Maplitho Paper Sticker",
    shortDescription:
      "Premium maplitho paper stickers and labels — durable with a long service life.",
    longDescription:
      "We offer Maplitho Paper Stickers and labels in premium quality. Customized solutions are available at affordable rates, with stickers supplied in roll-form labels for easy production-line use.",
    specifications: [
      "Premium maplitho paper",
      "Long service life",
      "Roll-form labels",
      "Customizable to spec",
    ],
    customizationOptions: ["Different colours", "Different shapes", "Different sizes"],
    image: maplitho,
    relatedSlugs: ["chromo-art-sticker", "pvc-sticker", "polyester-sticker"],
  },
  {
    slug: "pvc-sticker",
    name: "PVC Sticker",
    shortDescription:
      "Multicolour PVC stickers with UV coat — for plastic bottles, tins and more.",
    longDescription:
      "Our PVC Stickers come in up to five colours with a protective UV coat — widely used on plastic bottles, tins and similar packaging. Produced on rotary flexo and screen-printing roll-form machines, available in multiple slit widths and roll lengths, including a transparent base option.",
    specifications: [
      "Up to 5 colours with UV coat",
      "Transparent base option",
      "Roll form, multiple slit widths",
      "Rotary flexo & screen printing",
    ],
    customizationOptions: ["Different colours", "Different shapes", "Different sizes"],
    image: pvc,
    relatedSlugs: ["chromo-art-sticker", "vinyl-sticker", "maplitho-paper-sticker"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
