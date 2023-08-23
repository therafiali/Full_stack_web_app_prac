import BASE_PATH_FORAPI from "@/components/shared/BasePathForApi";
import AllProductsCompo from "@/components/views/AllProducts";


async function fetchAllProductData() {
    let res = await fetch(`https://my-app-pi-lake.vercel.app/api/products?start=0&end=10`, {
        next: {
            revalidate: 120
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch product page")
    }
    return res.json();
};


const Products = async () => {
    const ProdutcData = await fetchAllProductData()
    return (
        <AllProductsCompo ProdutcData={ProdutcData} />
    )
}

export default Products