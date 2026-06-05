import { useState } from "react";
import { MapPin, Clock, Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Get in touch</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Visit the <span className="italic text-gradient-gold">creamery</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            We pour our hearts into every batch. Come taste the difference, or send us a note.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { icon: MapPin, t: "212 Lantern Lane, Brooklyn, NY" },
              { icon: Clock, t: "Tue – Sun · 4pm – Midnight" },
              { icon: Mail, t: "hello@midnightcreamery.com" },
            ].map((x) => (
              <li key={x.t} className="flex items-center gap-4">
                <span className="grid place-items-center h-11 w-11 rounded-2xl glass-strong text-gold">
                  <x.icon className="w-4 h-4" />
                </span>
                <span className="text-sm">{x.t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid place-items-center h-11 w-11 rounded-2xl glass-strong hover:bg-white/10 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden glass-strong aspect-[16/9] relative">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-73.99%2C40.71%2C-73.95%2C40.74&layer=mapnik"
              className="absolute inset-0 h-full w-full grayscale-[40%] contrast-110"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-background/40 mix-blend-multiply" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Message sent", { description: "We'll get back to you shortly." });
            }}
            className="rounded-[2rem] glass-strong p-8 sm:p-10"
          >
            <h3 className="font-display text-2xl">Send us a note</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Catering, private events, or just to say hi.
            </p>

            <div className="mt-6 grid gap-4">
              <Field label="Name" id="name" />
              <Field label="Email" id="email" type="email" />
              <Field label="Subject" id="subject" />
              <div>
                <label htmlFor="msg" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-medium text-navy hover:-translate-y-0.5 transition disabled:opacity-50"
                disabled={sent}
              >
                {sent ? "Sent — thank you" : "Send message"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-transparent transition"
      />
    </div>
  );
}
