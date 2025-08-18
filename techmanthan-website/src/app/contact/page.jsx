import DropUsALine from "@/components/contactUsPage/DropUsALine";
import HeroSection from "@/components/contactUsPage/Hero";
import JobAndARCSection from "@/components/contactUsPage/jobAndArc";
import SubscribeSection from "@/components/contactUsPage/Subscribe";
import Navbar from "@/components/Navbar";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DropUsALine />
        <JobAndARCSection />
        <SubscribeSection />
      </main>
    </>
  );
}
