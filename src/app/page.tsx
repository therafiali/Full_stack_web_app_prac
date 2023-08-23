import { responseType } from "@/components/utils/ProductDataArrayAndTypes";
import Copyright from "@/components/views/Copyright";
import Footer from "@/components/views/Footer";
import Hero from "@/components/views/Hero";
import Jwellery from "@/components/views/Jwellery";
import Newsletter from "@/components/views/Newsletter";
import ProductCarousel from "@/components/views/ProductCarousel";
import ProductsType from "@/components/views/ProductsType";

async function fetchAllProductsData() {
  let res = await fetch(
    `https://lt4uzorl.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`
  );
  if (!res.ok) {
    throw new Error("Failed to all fetch data");
  }
  return res.json();
}

export default async function Home() {
  let { result }: responseType = await fetchAllProductsData();
  // console.log(result);
  return (
    <main>
      <Hero />
      <ProductsType />
      <ProductCarousel ProductData={result} />
      <Jwellery/>
      <Newsletter/>
      <Footer/>
      <Copyright/>
      
    </main>
  );
}
