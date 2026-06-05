import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Amara Chen",
    role: "Pastry Chef · Sora",
    quote:
      "The Midnight Chocolate is the first ice cream I've tasted that holds its own next to a Michelin dessert. Astonishing depth.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Daniel Whitcomb",
    role: "Food Critic · The Standard",
    quote:
      "Texturally perfect. Every flavor reads like a composed dish. This is the new high-water mark for artisan ice cream.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Priya Naidu",
    role: "Hotelier · Maison Verte",
    quote:
      "We serve Midnight Creamery to our suite guests. It is, hands down, the most requested amenity in the entire hotel.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, []);

  const r = reviews[i];

  return (
    <section id="reviews" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Praise</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Loved by <span className="italic text-gradient-gold">connoisseurs</span>
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative rounded-[2rem] glass-strong p-8 sm:p-14 text-center">
            <div className="flex justify-center gap-1 text-gold">
              {Array.from({ length: r.rating }).map((_, n) => (
                <Star key={n} className="w-4 h-4 fill-[var(--gold)]" />
              ))}
            </div>
            <blockquote className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl leading-snug">
              “{r.quote}”
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <img
                src={r.avatar}
                alt={r.name}
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 rounded-full ring-2 ring-[var(--gold)]/40 object-cover"
              />
              <div className="text-left">
                <p className="font-medium">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                aria-label="Previous"
                onClick={() => setI((n) => (n - 1 + reviews.length) % reviews.length)}
                className="grid place-items-center h-10 w-10 rounded-full glass hover:bg-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, n) => (
                  <button
                    key={n}
                    aria-label={`Go to review ${n + 1}`}
                    onClick={() => setI(n)}
                    className={`h-1.5 rounded-full transition-all ${
                      n === i ? "w-8 bg-[var(--gradient-gold)]" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                aria-label="Next"
                onClick={() => setI((n) => (n + 1) % reviews.length)}
                className="grid place-items-center h-10 w-10 rounded-full glass hover:bg-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
