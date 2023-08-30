"use client";
import React, { FC, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { cartContext } from "@/app/global/Context";
import { oneProductType } from "@/components/utils/ProductDataArrayAndTypes";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../../sanity/lib/client";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const CartComp = ({
  allProductsOfStore,
}: {
  allProductsOfStore: Array<oneProductType>;
}) => {
  const [allProductsForCart, setallProductsForCart] = useState<any>();

  useEffect(() => {
    let stateStorage: any = localStorage.getItem("cart") as string;
    stateStorage = JSON.parse(stateStorage);
    if (stateStorage) {
      let data = allProductsOfStore.filter((item: oneProductType) => {
        for (let index = 0; index < stateStorage.length; index++) {
          const element = stateStorage[index];
          if (element.productId === item._id) {
            return true;
          }
        }
      });
      setallProductsForCart(data);
    }
  }, []);

  return (
    <div>
      <div className="py-6">
        {/* heading */}
        <h1 className="text-2xl font-semibold text-gray-900">Shopping Cart</h1>
      </div>
      <div className="flex justify-between flex-wrap">
        {/* products data show */}
        <div className="flex flex-col gap-5">
          {allProductsForCart &&
            allProductsForCart.map((item: oneProductType, index: number) => (
              <div className="flex gap-5" key={index}>
                <div className="w-40">
                  {/* image */}
                  <Image
                    className="rounded-xl"
                    src={urlFor(item.image[0]).width(1000).height(1000).url()}
                    alt={item.image[0].alt}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div>
                  {/* products detail */}
                  <div className="space-y-1 md:space-y-3 w-full">
                    <div className="flex justify-between">
                      <h2 className="md:text-2xl font-light text-gray-700">
                        {item.productName}
                      </h2>
                      <div className="cursor-pointer">
                        <RiDeleteBin6Line size={28} />
                      </div>
                    </div>
                    <p className="text-gray-400 font-medium">
                      {item.productTypes[0]}
                    </p>
                    <h3 className="text-sm md:text-base">
                      Delivery Estimation
                    </h3>
                    <h4 className="text-orange-400 font-semibold md:text-xl">
                      5 Working Days
                    </h4>
                    <div className="flex justify-between">
                      <div className="font-semibold md:text-lg">
                        ${item.price}
                      </div>
                      <div className="flex gap-2">
                        <button className="select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full bg-gray-200">
                          -
                        </button>
                        <p>1</p>
                        <button className="border select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full  border-gray-800">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* image and products */}
        </div>

        <div>
          {/* subtotal */}
          <div className="basis-1/4 space-y-6 px-6">
            <h6 className="font-semibold text-xl">Order Summary</h6>
            <div className="flex justify-between">
              <p className="text-lg font-light">Quantity:</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-light">Subtotal:</p>
              <p>$56</p>
            </div>
            <button className="text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full">
              Proceed To CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
