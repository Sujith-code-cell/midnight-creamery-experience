import { Reveal } from "./Reveal";

const stats = [
  { n: "50+", l: "Signature Flavors" },
  { n: "25K+", l: "Happy Customers" },
  { n: "15", l: "Years of Craft" },
  { n: "100%", l: "Natural Ingredients" },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[2rem] glass-strong overflow-hidden">
          <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
            {stats.map((s, i) => (
              <Reveal as="li" key={s.l} delay={i * 80} className="px-6 py-10 text-center">
                <p className="font-display text-4xl sm:text-5xl text-gradient-gold">{s.n}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
