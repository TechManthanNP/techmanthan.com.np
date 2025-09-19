import CareerTabs from "@/components/careerPage/CareerTabs";
import HeroSection from "@/components/careerPage/Hero";
import JoinTeamSection from "@/components/careerPage/jobsPage/JoinTeamSection";
import Subscribe from "@/components/homePage/Subscribe";
import Navbar from "@/components/Navbar";

export default function CareerLayout({ children }) {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CareerTabs />
      <div>{children}</div>
      <JoinTeamSection />
      <Subscribe />
    </div>
  );
}
