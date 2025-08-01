import Navbar from '../components/Navbar';  // or '@/components/Navbar'
import Hero from '../components/Hero';      // or '@/components/Hero'
// import FeatureSection from '@/components/homePage/FeatureSection';
import FeaturesSection from '@/components/homePage/FeatureSection';
import TestimonialsSection from '@/components/homePage/TestimonialSection';
import "@/styles/components/homePage/_features.scss";
import "@/styles/components/homePage/_testimonials.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  );
}
