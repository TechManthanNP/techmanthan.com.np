import AboutHero from "@/components/aboutPage/AboutHero";
import Differentiators from "@/components/aboutPage/Differentiators";
import StatsSection from "@/components/aboutPage/StatsSection";
import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <Differentiators />
        <StatsSection />
      </main>
    </>
  );
}
