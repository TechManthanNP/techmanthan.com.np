import BenefitsSection from "@/components/careerPage/jobsPage/BenefitsSection";
import JobIntro from "@/components/careerPage/jobsPage/JobIntro";
import JobOpenings from "@/components/careerPage/jobsPage/JobOpenings";

export default function JobsPage() {
  return (
    <>
      <JobIntro />
      <JobOpenings />
      <BenefitsSection />
    </>
  );
}
