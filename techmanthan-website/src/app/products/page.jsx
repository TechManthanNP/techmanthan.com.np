import ProductHero from "@/components/productPage/ProductHero"
import SmartHRMS from "@/components/productPage/SmartHRMS"
import Navbar from "@/components/Navbar"

export default function ProductsPage() {
  return (
    <section>
      <Navbar></Navbar>
      {/* <h1>Products</h1> */}
      <ProductHero></ProductHero>
      <SmartHRMS></SmartHRMS>
    </section>
  )
}
