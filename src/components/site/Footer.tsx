import { useState } from "react";
import { toast } from "sonner";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5 bg-[oklch(0.06_0.03_265)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-2">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-[var(--gradient-gold)] text-navy font-display text-lg font-bold">
                M
              </span>
              <span className="font-display text-xl">
                Midnight <span className="text-gradient-gold">Creamery</span>
              </span>
            </a>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm">
              Small-batch ice cream made with extraordinary ingredients. Crafted in
              Brooklyn, served after dark.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Subscribed", { description: `We'll send our nightly drops to ${email}` });
                setEmail("");
              }}
              className="mt-8 flex items-center gap-2 rounded-full glass-strong p-1.5 max-w-md"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--gradient-gold)] px-5 py-2 text-sm font-medium text-navy"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {[
              { h: "Shop", l: ["Flavors", "Sundae Builder", "Gift Cards", "Wholesale"] },
              { h: "Studio", l: ["About", "Experience", "Gallery", "Press"] },
              { h: "Visit", l: ["Brooklyn", "Hours", "Contact", "FAQ"] },
            ].map((c) => (
              <div key={c.h}>
                <h4 className="font-display text-sm uppercase tracking-widest text-gold">{c.h}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.l.map((x) => (
                    <li key={x}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                        {x}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Midnight Creamery. Crafted with care.
          </p>
          <div className="flex gap-2">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid place-items-center h-9 w-9 rounded-full glass hover:bg-white/10"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
