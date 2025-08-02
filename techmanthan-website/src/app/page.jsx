// import FeatureSection from '@/components/homePage/FeatureSection';
import Hero from "@/components/Hero";
import ContactUs from "@/components/homePage/ContactUs";
import FeaturesSection from "@/components/homePage/FeatureSection";
import ProductShowcase from "@/components/homePage/ProductShowcase";
import Subscribe from "@/components/homePage/Subscribe";
import TestimonialsSection from "@/components/homePage/TestimonialSection";
import Navbar from "@/components/Navbar";
import "@/styles/components/homePage/_features.scss";
import "@/styles/components/homePage/_testimonials.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <ProductShowcase />
      <Subscribe />
      <ContactUs />
    </>
  );
}
