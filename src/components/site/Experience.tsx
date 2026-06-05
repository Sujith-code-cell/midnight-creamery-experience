import craftImg from "@/assets/about-craft.jpg";
import { Reveal } from "./Reveal";
import { Leaf, Snowflake, Flame, Award } from "lucide-react";

const steps = [
  { icon: Leaf, title: "Source", text: "We hand-pick single-origin cacao, Madagascar vanilla, and farm-fresh dairy from growers we've known for a decade." },
  { icon: Flame, title: "Craft", text: "Slow-cooked custards in seasoned copper pots — never powdered bases, never shortcuts." },
  { icon: Snowflake, title: "Freeze", text: "Churned at -40°C for a microscopic crystal structure that melts like silk on the tongue." },
  { icon: Award, title: "Finish", text: "Each jar is finished by hand with seasonal accents — gold leaf, candied citrus, fleur de sel." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] glass-strong">
            <img
              src={craftImg}
              alt="Artisan pouring cream into a copper pot"
              loading="lazy"
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl glass-strong p-5 max-w-[220px]">
            <p className="font-display text-3xl text-gradient-gold">48h</p>
            <p className="text-xs text-muted-foreground mt-1">from cream to jar — every single batch</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">The Experience</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
              The art of <span className="italic text-gradient-gold">slow</span> ice cream
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              Four rituals separate good ice cream from unforgettable. We've spent fifteen
              years refining ours. The result is something you'll taste in the first spoonful.
            </p>
          </Reveal>

          <ol className="mt-10 relative">
            <span aria-hidden className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/50 to-transparent" />
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="relative pl-16 pb-8 last:pb-0">
                <span className="absolute left-0 top-0 grid place-items-center h-11 w-11 rounded-full glass-strong text-gold">
                  <s.icon className="w-4 h-4" />
                </span>
                <h3 className="font-display text-xl">
                  <span className="text-gold mr-2">0{i + 1}</span>
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground max-w-md">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
