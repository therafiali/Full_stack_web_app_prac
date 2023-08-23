import { oneProductType } from "@/components/utils/ProductDataArrayAndTypes";
import { client } from "../../../../sanity/lib/client";
import Card from "@/components/shared/Card";
import { idText } from "typescript";

async function getAllProductsForSearch() {
  let response = await client.fetch(`*[_type == 'products']`);
  return response;
}
const Search = async ({ params }: { params: { query: string } }) => {
  let slug = params.query.toLowerCase();
  let data = await getAllProductsForSearch();
  let dataToMap = await data.filter((item: oneProductType) => {
    // console.log("Log", item.productName.toLowerCase().indexOf(slug))
    if (item.productName.toLowerCase().indexOf(slug) >= 0) {
      return true;
    }
    return false;
  });
  console.log(dataToMap, slug);
  return (
    <div className="grid grid-col-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-4">
      {dataToMap &&
        dataToMap.map((items: oneProductType, i: number) => (
          <Card key={i} singleProductData={items} />
        ))}
    </div>
  );
};
export default Search;
