import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const bases = [
  { id: "chocolate", name: "Midnight Chocolate", color: "from-[#3a1d12] to-[#1a0a05]", price: 7 },
  { id: "vanilla", name: "Vanilla Velvet", color: "from-[#f5e9c8] to-[#d9c082]", price: 6 },
  { id: "pistachio", name: "Pistachio Royale", color: "from-[#bcd49a] to-[#7ea15f]", price: 8 },
  { id: "strawberry", name: "Strawberry Dream", color: "from-[#f8b6c2] to-[#d96e84]", price: 7 },
];
const toppings = [
  { id: "gold", name: "24K Gold Leaf", price: 4 },
  { id: "pistachio", name: "Sicilian Pistachios", price: 2 },
  { id: "berries", name: "Wild Berries", price: 2 },
  { id: "cocoa", name: "Cacao Nibs", price: 1 },
];
const sauces = [
  { id: "caramel", name: "Burnt Caramel", price: 2 },
  { id: "ganache", name: "Dark Ganache", price: 3 },
  { id: "honey", name: "Orange Blossom Honey", price: 2 },
];

export function SundaeBuilder() {
  const [base, setBase] = useState(bases[0]);
  const [tops, setTops] = useState<string[]>(["gold"]);
  const [sauce, setSauce] = useState<string | null>("ganache");

  const total = useMemo(() => {
    return (
      base.price +
      tops.reduce((s, id) => s + (toppings.find((t) => t.id === id)?.price ?? 0), 0) +
      (sauce ? sauces.find((s) => s.id === sauce)?.price ?? 0 : 0)
    );
  }, [base, tops, sauce]);

  const toggleTop = (id: string) =>
    setTops((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <section id="order" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Make it Yours</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Build your <span className="italic text-gradient-gold">dream sundae</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Preview */}
          <Reveal className="lg:col-span-2">
            <div className="sticky top-28 rounded-[2rem] glass-strong p-8 min-h-[460px] flex flex-col items-center justify-center">
              <div className="relative h-56 w-44">
                {/* Sauce drip */}
                {sauce && (
                  <div
                    className="absolute top-12 left-1/2 -translate-x-1/2 h-44 w-36 rounded-full opacity-80 blur-[2px] transition-all"
                    style={{
                      background:
                        sauce === "caramel"
                          ? "radial-gradient(circle,#c98a2f,transparent 70%)"
                          : sauce === "ganache"
                          ? "radial-gradient(circle,#1a0a05,transparent 70%)"
                          : "radial-gradient(circle,#e0a93a,transparent 70%)",
                    }}
                  />
                )}
                {/* Scoop */}
                <div
                  className={`relative mx-auto h-44 w-44 rounded-full bg-gradient-to-b ${base.color} shadow-[inset_-20px_-30px_60px_rgba(0,0,0,0.4),0_30px_60px_-20px_rgba(0,0,0,0.6)] transition-all duration-500`}
                >
                  {/* Toppings */}
                  {tops.includes("gold") && (
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(245,200,80,0.6),transparent_50%)]" />
                  )}
                  {tops.includes("pistachio") && (
                    <div className="absolute top-3 left-6 flex gap-1">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <span key={i} className="block h-1.5 w-1.5 rounded-full bg-[#7ea15f]" />
                      ))}
                    </div>
                  )}
                  {tops.includes("berries") && (
                    <>
                      <span className="absolute top-4 right-8 h-3 w-3 rounded-full bg-[#3a1c5a]" />
                      <span className="absolute top-8 right-4 h-2.5 w-2.5 rounded-full bg-[#7a1f3a]" />
                    </>
                  )}
                  {tops.includes("cocoa") && (
                    <div className="absolute top-2 left-10 flex flex-wrap gap-1 w-20">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className="block h-1 w-1 bg-[#2a1408] rotate-12" />
                      ))}
                    </div>
                  )}
                </div>
                {/* Glass */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-20 rounded-b-3xl glass border-t-0" />
              </div>
              <p className="mt-8 font-display text-xl">{base.name}</p>
              <p className="text-sm text-muted-foreground">
                {tops.length} toppings{sauce ? ` · ${sauces.find((s) => s.id === sauce)?.name}` : ""}
              </p>

              <div className="mt-8 w-full flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Total</p>
                  <p className="font-display text-3xl text-gradient-gold">${total}.00</p>
                </div>
                <button
                  type="button"
                  onClick={() => toast.success("Sundae added to cart", { description: `${base.name} · $${total}.00` })}
                  className="rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-medium text-navy hover:-translate-y-0.5 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Reveal>

          {/* Options */}
          <div className="lg:col-span-3 space-y-8">
            <Reveal>
              <OptionGroup title="Choose your base">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {bases.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBase(b)}
                      className={`relative rounded-2xl p-4 text-left transition glass-strong hover:bg-white/10 ${
                        base.id === b.id ? "ring-2 ring-[var(--gold)]" : ""
                      }`}
                    >
                      <span className={`block h-12 w-12 rounded-full bg-gradient-to-b ${b.color}`} />
                      <p className="mt-3 text-sm font-medium leading-tight">{b.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">${b.price}</p>
                    </button>
                  ))}
                </div>
              </OptionGroup>
            </Reveal>

            <Reveal>
              <OptionGroup title="Toppings">
                <div className="flex flex-wrap gap-2">
                  {toppings.map((t) => {
                    const active = tops.includes(t.id);
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => toggleTop(t.id)}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                          active
                            ? "bg-[var(--gradient-gold)] text-navy"
                            : "glass-strong text-foreground hover:bg-white/10"
                        }`}
                      >
                        {active && <Check className="w-3.5 h-3.5" />}
                        {t.name} <span className="opacity-70">+${t.price}</span>
                      </button>
                    );
                  })}
                </div>
              </OptionGroup>
            </Reveal>

            <Reveal>
              <OptionGroup title="Sauce">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSauce(null)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      sauce === null ? "bg-[var(--gradient-gold)] text-navy" : "glass-strong hover:bg-white/10"
                    }`}
                  >
                    None
                  </button>
                  {sauces.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSauce(s.id)}
                      className={`rounded-full px-4 py-2 text-sm transition ${
                        sauce === s.id
                          ? "bg-[var(--gradient-gold)] text-navy"
                          : "glass-strong hover:bg-white/10"
                      }`}
                    >
                      {s.name} <span className="opacity-70">+${s.price}</span>
                    </button>
                  ))}
                </div>
              </OptionGroup>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function OptionGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[1.5rem] glass-strong p-6">
      <h3 className="font-display text-lg mb-4">{title}</h3>
      {children}
    </div>
  );
}
