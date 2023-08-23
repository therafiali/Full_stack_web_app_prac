import React, { FC } from "react";
import { oneProductType } from "../utils/ProductDataArrayAndTypes";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const Card: FC<{ singleProductData: oneProductType }> = ({
  singleProductData,
}) => {
  function urlFor(source: any) {
    return builder.image(source);
  }

  return (
    <div className="max-w-sm min-w-[24rem] hover:scale-110 duration-300 mx-auto space-y-3">
      <div className="w-full">
        <Image
          height={500}
          width={500}
          className="w-full bg-red-500 h-full"
          src={urlFor(singleProductData.image[0])
            .width(1000)
            .height(1000)
            .url()}
          alt={singleProductData.image[0].alt}
        />
      </div>
      <div className="space-y-1 text-gray-600 font-semibold text-lg">
        <h6>{singleProductData.productName}</h6>
        <p>${singleProductData.price}</p>
      </div>
    </div>
  );
};

export default Card;
