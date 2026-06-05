import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#flavors", label: "Flavors" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : "glass"
          }`}
          aria-label="Primary"
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-[var(--gradient-gold)] text-navy font-display text-lg font-bold shadow-[0_0_30px_-5px_var(--gold-glow)]">
              M
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
            </span>
            <span className="font-display text-lg tracking-tight">
              Midnight <span className="text-gradient-gold">Creamery</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:scale-x-0 after:origin-left after:bg-[var(--gradient-gold)] after:transition-transform hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#flavors"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-4 py-2 text-sm font-medium text-navy hover:opacity-90 transition shadow-[0_0_30px_-8px_var(--gold-glow)]"
            >
              <ShoppingBag className="w-4 h-4" />
              Order
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl glass"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-strong p-2 animate-fade-up">
            <ul className="grid">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
