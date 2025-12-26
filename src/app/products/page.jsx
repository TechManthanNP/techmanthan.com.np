"use client";

import dynamic from "next/dynamic";
import Subscribe from "@/components/homePage/Subscribe";
import ProductHero from "@/components/productPage/ProductHero";

// Dynamically load heavy components
const SmartHRMS = dynamic(() => import("@/components/productPage/SmartHRMS"), { ssr: false });
const SkillMentor = dynamic(() => import("@/components/productPage/Skillmentor"), { ssr: false });
const FiscalMind = dynamic(() => import("@/components/productPage/FiscalMind"), { ssr: false });

export default function ProductsPage() {
  return (
    <section>
      <ProductHero />
      <SmartHRMS />
      <SkillMentor />
      <FiscalMind />
      <Subscribe />
    </section>
  );
}
