import DropUsALine from "@/components/contactUsPage/DropUsALine";
import HeroSection from "@/components/contactUsPage/Hero";
import Navbar from "@/components/Navbar";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DropUsALine />
      </main>
    </>
  );
}
