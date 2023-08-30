import CartComp from "@/components/views/CartParent/CartChld";
import ContextWrapper from "../global/Context";

async function fetchAllStoreProducts() {
  let res = await fetch(
    `https://lt4uzorl.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'products']`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}


const Cart = async () => {
  let allProductsOfStore = await fetchAllStoreProducts();
  return (
      <CartComp allProductsOfStore={allProductsOfStore.result} />
  );
};

export default Cart;
