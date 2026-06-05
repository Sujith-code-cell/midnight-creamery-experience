import { useState } from "react";
import { Heart, Plus } from "lucide-react";
import { toast } from "sonner";
import chocolate from "@/assets/flavor-chocolate.jpg";
import vanilla from "@/assets/flavor-vanilla.jpg";
import strawberry from "@/assets/flavor-strawberry.jpg";
import caramel from "@/assets/flavor-caramel.jpg";
import pistachio from "@/assets/flavor-pistachio.jpg";
import blueberry from "@/assets/flavor-blueberry.jpg";
import { Reveal } from "./Reveal";

const flavors = [
  { name: "Midnight Chocolate", desc: "70% single-origin cacao with whisper of sea salt.", price: 12, img: chocolate, tag: "Signature" },
  { name: "Vanilla Velvet", desc: "Madagascar bourbon vanilla, slow-churned to silk.", price: 10, img: vanilla, tag: "Classic" },
  { name: "Strawberry Dream", desc: "Sun-ripened Hokkaido strawberries, hand-folded.", price: 11, img: strawberry, tag: "Seasonal" },
  { name: "Salted Caramel Gold", desc: "Burnt caramel, fleur de sel, 24K gold leaf.", price: 14, img: caramel, tag: "Limited" },
  { name: "Pistachio Royale", desc: "Sicilian Bronte pistachios, orange blossom honey.", price: 13, img: pistachio, tag: "Rare" },
  { name: "Blueberry Frost", desc: "Wild Maine blueberries, hint of vanilla bean.", price: 11, img: blueberry, tag: "Fresh" },
];

export function Flavors() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  return (
    <section id="flavors" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Signature Collection</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Flavors worth <span className="text-gradient-gold italic">staying up</span> for
          </h2>
          <p className="mt-5 text-muted-foreground">
            Six house creations, each composed like a fragrance — top notes, heart, base.
            Released in batches of just 200 jars.
          </p>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flavors.map((f, i) => (
            <Reveal as="li" key={f.name} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl glass-strong p-3 transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-30px_var(--gold-glow)]">
                <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-gold">
                    {f.tag}
                  </span>
                  <button
                    type="button"
                    aria-label={`Favorite ${f.name}`}
                    onClick={() => {
                      setLiked((s) => ({ ...s, [f.name]: !s[f.name] }));
                    }}
                    className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full glass hover:bg-white/10 transition"
                  >
                    <Heart
                      className={`w-4 h-4 transition ${
                        liked[f.name] ? "fill-[var(--gold)] text-[var(--gold)]" : "text-foreground"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-4 pt-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl">{f.name}</h3>
                    <span className="font-display text-lg text-gradient-gold">${f.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{f.desc}</p>

                  <button
                    type="button"
                    onClick={() => toast.success(`${f.name} added to cart`, { description: `$${f.price}.00 · 1 jar` })}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gradient-gold)] px-5 py-2.5 text-sm font-medium text-navy opacity-90 hover:opacity-100 transition"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
