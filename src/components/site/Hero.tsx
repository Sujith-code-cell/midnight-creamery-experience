import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-icecream.jpg";

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + y * 0.0003})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-dvh w-full overflow-hidden bg-hero-gradient pt-28">
      {/* Animated gradient orbs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.16_75/0.25),transparent_60%)] blur-3xl animate-float-slow" />
        <div className="absolute top-40 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.18_280/0.25),transparent_60%)] blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.16_75/0.2),transparent_60%)] blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-10 px-4 sm:px-6 pb-24 pt-10 lg:pt-20">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest uppercase text-gold animate-fade-up">
            <Sparkles className="w-3.5 h-3.5" />
            Small-batch · Crafted nightly
          </span>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] animate-fade-up [animation-delay:120ms]">
            Crafted for
            <br />
            <span className="text-gradient-gold italic">Midnight</span> Cravings
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground animate-fade-up [animation-delay:240ms]">
            Small-batch artisanal ice cream made with extraordinary ingredients
            and unforgettable flavors. Slow-churned in copper, finished by hand,
            served at the perfect frost.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up [animation-delay:360ms]">
            <a
              href="#flavors"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-navy shadow-[0_10px_40px_-10px_var(--gold-glow)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-10px_var(--gold-glow)]"
            >
              Explore Flavors
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#order"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-medium text-foreground hover:bg-white/10 transition"
            >
              Order Now
            </a>
          </div>

          {/* Mini stats */}
          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md animate-fade-up [animation-delay:500ms]">
            {[
              ["50+", "Flavors"],
              ["4.9★", "Rated"],
              ["15y", "Crafting"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl sm:text-3xl text-gradient-gold">{n}</dt>
                <dd className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero visual */}
        <div className="relative lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[3/4]">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 50% 60%, oklch(0.78 0.16 75 / 0.45), transparent 60%)",
              }}
            />
            {/* Image card */}
            <div
              ref={imgRef}
              className="relative h-full w-full overflow-hidden rounded-[2.5rem] glass-strong gold-glow will-change-transform"
            >
              <img
                src={heroImg}
                alt="Signature Midnight Chocolate scoop with gold leaf"
                className="h-full w-full object-cover"
                width={1536}
                height={1536}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>

            {/* Floating glass chips */}
            <div className="absolute -left-6 top-10 hidden sm:flex items-center gap-3 rounded-2xl glass-strong px-4 py-3 animate-float">
              <div className="h-9 w-9 rounded-full bg-gradient-gold" />
              <div>
                <p className="text-xs text-muted-foreground">Tonight's pick</p>
                <p className="text-sm font-medium">Midnight Chocolate</p>
              </div>
            </div>

            <div className="absolute -right-4 bottom-8 hidden sm:block rounded-2xl glass-strong px-4 py-3 animate-float-slow">
              <p className="text-xs text-muted-foreground">Made with</p>
              <p className="text-sm font-medium">24K edible gold</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
