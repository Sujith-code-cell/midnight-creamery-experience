import { useEffect, useState } from "react";
import caramel from "@/assets/flavor-caramel.jpg";
import { Reveal } from "./Reveal";

function useCountdown() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);
      const diff = tomorrow.getTime() - now.getTime();
      setTime({
        h: Math.floor(diff / 3.6e6),
        m: Math.floor((diff / 6e4) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function FlavorOfDay() {
  const t = useCountdown();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Spotlight effect */}
            <div
              aria-hidden
              className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full opacity-50 blur-3xl animate-pulse-glow"
              style={{
                background: "radial-gradient(circle, oklch(0.78 0.16 75 / 0.6), transparent 70%)",
              }}
            />

            <div className="relative">
              <div className="relative mx-auto aspect-square max-w-sm rounded-3xl overflow-hidden gold-glow">
                <img
                  src={caramel}
                  alt="Salted Caramel Gold"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Rotating ring */}
              <div
                aria-hidden
                className="absolute inset-0 m-auto h-[90%] w-[90%] rounded-full border border-dashed border-[var(--gold)]/30 animate-spin-slow pointer-events-none"
              />
            </div>

            <div className="relative">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Flavor of the Day</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Salted Caramel <span className="italic text-gradient-gold">Gold</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Burnt-sugar caramel folded with French sea salt, finished with hand-applied 24K gold leaf.
                Available today only.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
                {[
                  ["Hours", t.h],
                  ["Minutes", t.m],
                  ["Seconds", t.s],
                ].map(([label, val]) => (
                  <div key={label as string} className="rounded-2xl glass px-3 py-4 text-center">
                    <p className="font-display text-3xl tabular-nums text-gradient-gold">{pad(val as number)}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
                  </div>
                ))}
              </div>

              <a
                href="#order"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-navy hover:-translate-y-0.5 transition"
              >
                Claim a Jar — $14
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
