import DigitalExhibition from "@/components/arcPage/DigitalExhibition";
import HeroSection from "@/components/arcPage/Hero";
import Navbar from "@/components/Navbar";

export default function ArcPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DigitalExhibition />
      </main>
    </>
  );
}
