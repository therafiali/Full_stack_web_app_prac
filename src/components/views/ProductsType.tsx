import Image from "next/image";
import React from "react";

const ProductsType = () => {
  return (
    <div className="py-16 px-2 space-y-5">
      <div className="text-center  space-y-3">
        <p className="text-blue-800 text-sm">PROMOTIONS</p>
        <h3 className="text-3xl text-gray-800 font-bold">
          Our Promotions Events
        </h3>
      </div>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 justify-between lg:grid-cols-4 gap-5 px-2">
        <div className="w-full col-span-2 flex justify-center flex-col md:flex-row px-12  bg-cat1">
          <div className="max-w-[13rem] py-8">
            <h4 className="text-3xl font-extrabold">GET UPTO 60%</h4>
            <p className="text-xl">For the Summer Season</p>
          </div>
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              alt="summer season"
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75"
              }
            />
          </div>
        </div>
        <div className="w-full row-span-2 h-full bg-cat3">
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p className="text-lg">
              <del>$100.00</del>
              &nbsp;&nbsp;&nbsp;
              <b>
                <ins>$75.00</ins>
              </b>
            </p>
          </div>
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              alt="Flex Sweatshirt"
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75"
              }
            />
          </div>
        </div>
        <div className="w-full row-span-2 h-full bg-cat4">
          <div className="p-4">
            <p>Flex Push Button Bomber</p>
            <p className="text-lg">
              <del>$225.00</del>
              &nbsp;&nbsp;&nbsp;
              <b>
                <ins>$190.00</ins>
              </b>
            </p>
          </div>
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              alt="Flex Push Button Bomber"
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75"
              }
            />
          </div>
        </div>
        <div className="text-white w-full col-span-2  bg-cat2 flex flex-col justify-center items-center space-y-3 py-10">
          <h3 className="font-extrabold text-4xl ">GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button
            aria-label="ridirect user to discount sale page"
            className="py-1 px-8 bg-[#474747] rounded-lg tracking-widest"
          >
            DINEWEEKENDSALE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsType;
