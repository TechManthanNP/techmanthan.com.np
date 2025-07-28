import AboutHero from "@/components/aboutPage/AboutHero";
import Differentiators from "@/components/aboutPage/Differentiators";
import MissionVision from "@/components/aboutPage/MissionVision";
import StatsSection from "@/components/aboutPage/StatsSection";
import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <MissionVision />
        <StatsSection />
        <Differentiators />
      </main>
    </>
  );
}
