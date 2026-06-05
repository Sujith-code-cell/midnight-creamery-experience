import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Flavors } from "@/components/site/Flavors";
import { Experience } from "@/components/site/Experience";
import { FlavorOfDay } from "@/components/site/FlavorOfDay";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { SundaeBuilder } from "@/components/site/SundaeBuilder";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Midnight Creamery — Crafted for Midnight Cravings" },
      {
        name: "description",
        content:
          "Small-batch artisanal ice cream made with extraordinary ingredients and unforgettable flavors. Crafted in Brooklyn, served after dark.",
      },
      { property: "og:title", content: "Midnight Creamery — Crafted for Midnight Cravings" },
      {
        property: "og:description",
        content:
          "Small-batch artisanal ice cream made with extraordinary ingredients and unforgettable flavors.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300..700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Flavors />
        <Experience />
        <FlavorOfDay />
        <SundaeBuilder />
        <Gallery />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </>
  );
}
