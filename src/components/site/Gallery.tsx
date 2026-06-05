import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import chocolate from "@/assets/flavor-chocolate.jpg";
import pistachio from "@/assets/flavor-pistachio.jpg";
import { Reveal } from "./Reveal";

const items = [
  { src: g1, alt: "Gold-drizzled cone", span: "row-span-2" },
  { src: chocolate, alt: "Chocolate scoop" },
  { src: g3, alt: "Layered sundae", span: "row-span-2" },
  { src: g2, alt: "Chocolate shavings macro" },
  { src: pistachio, alt: "Pistachio scoops" },
  { src: g4, alt: "Pastel swirl cone", span: "row-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Visual Journal</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Moments from the <span className="italic text-gradient-gold">creamery</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className={`relative overflow-hidden rounded-2xl glass-strong group cursor-pointer ${it.span ?? ""}`}
            >
              <button
                type="button"
                onClick={() => setOpen(it.src)}
                className="block h-full w-full"
                aria-label={`Open ${it.alt}`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] grid place-items-center bg-background/80 backdrop-blur-xl p-4 animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-6 right-6 grid place-items-center h-11 w-11 rounded-full glass-strong"
            onClick={() => setOpen(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={open}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
