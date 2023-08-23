import CardAll from "@/components/shared/CardAll";
import {
  oneProductType,
  responseType,
} from "@/components/utils/ProductDataArrayAndTypes";
import { FC } from "react";

async function fetchAllProductsData() {
  let res = await fetch(
    `https://lt4uzorl.api.sanity.io/v2023-08-03/data/query/production?query=++*%5B_type+%3D%3D+%27products%27+%26%26+productTypes%5B1%5D+%3D%3D+%27Male%27%5D`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}
const Male = async ({ params }: { params: { mtype: string } }) => {
  let res: responseType = await fetchAllProductsData();
  console.log('rafi2',res.result)
  if (params.mtype !== "Male") {
    let orginalSortedDataOfParams = res.result.filter(
      (items: oneProductType) => items.productTypes[0] === params.mtype
    );
    res = { result: orginalSortedDataOfParams };
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4">
      {res.result.map((items: oneProductType, index: number) => (
        <CardAll key={index} singleProductData={items} />
      ))}
    </div>
  );
};

export default Male;
