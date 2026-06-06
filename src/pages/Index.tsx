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

export default function Index() {
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
