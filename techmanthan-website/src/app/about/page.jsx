import AboutHero from "@/components/aboutPage/AboutHero";
import Mission from "@/components/aboutPage/Mission";
import LifeAtTM from "@/components/aboutPage/LifeAtTM";
import OurTeam from "@/components/aboutPage/OurTeam";
import Subscribe from "@/components/homePage/Subscribe";
import JoinUs from "@/components/aboutPage/JoinUs";
import Differentiators from "@/components/aboutPage/Differentiators";
import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <Mission />
        {/* <MissionVision></MissionVision> */}
        <LifeAtTM></LifeAtTM>
<Differentiators></Differentiators>
        <OurTeam />
<JoinUs></JoinUs>
      </main>
      <Subscribe></Subscribe>

    </>
  );
}
