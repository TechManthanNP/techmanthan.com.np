import Subscribe from "@/components/homePage/Subscribe";
import Consultation from "@/components/solutionPage/Consultation";
import CoreServices from "@/components/solutionPage/CoreServices";
import HeroSolutions from "@/components/solutionPage/HeroSolutions";
import ProvenProcess from "@/components/solutionPage/ProvenProcess";
import SolutionsApart from "@/components/solutionPage/SolutionApart";

// src/app/about/page.jsx
export default function SolutionsPage() {
  return (
    <>
      <HeroSolutions />
      <SolutionsApart />
      <ProvenProcess />
      <CoreServices />
      <Consultation />
      <Subscribe />
    </>
  );
}
