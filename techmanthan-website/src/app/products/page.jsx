import ProductHero from "@/components/productPage/ProductHero"
import SmartHRMS from "@/components/productPage/SmartHRMS"
import SkillMentor from "@/components/productPage/Skillmentor"
import FiscalMind from "@/components/productPage/FiscalMind"
import Subscribe from "@/components/homePage/Subscribe"
import Navbar from "@/components/Navbar"

export default function ProductsPage() {
  return (
    <section>
      <Navbar></Navbar>
      {/* <h1>Products</h1> */}
      <ProductHero></ProductHero>
      <SmartHRMS></SmartHRMS>
      <SkillMentor></SkillMentor>
      <FiscalMind></FiscalMind>
      <Subscribe></Subscribe>
    </section>
  )
}
