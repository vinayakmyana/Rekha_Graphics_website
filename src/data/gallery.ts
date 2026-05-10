import w1 from "@/assets/workshop-1.jpg";
import w2 from "@/assets/workshop-2.jpg";
import w3 from "@/assets/workshop-3.jpg";
import controlPanel from "@/assets/control-panel.jpg";

export type GalleryImage = { src: string; alt: string };

export const gallery: GalleryImage[] = [
  { src: w1, alt: "Rekha Graphics printing workshop" },
  { src: w2, alt: "Precision label printing in progress" },
  { src: w3, alt: "Quality inspection of finished labels" },
  { src: controlPanel, alt: "Industrial control panel labels and gaskets" },
  { src: w2, alt: "Roll-form sticker production" },
  { src: w1, alt: "Workshop floor and machinery" },
];
