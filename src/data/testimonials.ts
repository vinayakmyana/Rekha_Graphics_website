// Placeholder testimonials. Replace with real client quotes when supplied.
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  isPlaceholder: true;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Consistent quality and on-time delivery — exactly what we look for in a long-term print partner.",
    author: "Operations Lead",
    role: "Industrial OEM",
    isPlaceholder: true,
  },
  {
    quote:
      "Customization is genuinely customer-first. Specifications are met without back and forth.",
    author: "Procurement Manager",
    role: "Electronics Manufacturer",
    isPlaceholder: true,
  },
  {
    quote:
      "Their attention to finish and adhesive performance is noticeable from the very first batch.",
    author: "Quality Engineer",
    role: "Pharma Packaging",
    isPlaceholder: true,
  },
  {
    quote:
      "Rolls arrive consistent across runs — winding, registration, slit widths, all dependable.",
    author: "Production Head",
    role: "FMCG",
    isPlaceholder: true,
  },
];
