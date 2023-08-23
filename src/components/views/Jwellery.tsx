import React from "react";
import Image from "next/image";
import Link from "next/link";

const Jwellery = () => {
  const productDetail = [
    {
      title: "Using Good Quality Materials",
    },
    {
      title: "100% Handmade Products",
    },
    {
      title: "Modern Fashion Design",
    },
    {
      title: "Discount for Bulk Orders",
    },
  ];
  return (
    <section className="mt-36  mx-auto pb-28 bg-[#fbfcff] ">
      <div className="flex justify-center lg:justify-end ">
        <h2 className="text-3xl text-center md:text-5xl leading-tight max-w-lg font-boold tracking-wider ">
          Unique and Authentic Vintage Designer Jewellery
        </h2>
      </div>

      {/* Start here */}

      <div className="mt-12 grid-cols-1 gap-x-6 grid lg:grid-cols-2">
        {/* left */}
        <div className="grid grid-cols-1 gap-x-6  md:grid-cols-2 justify-center items-center relative">
          <div className="max-w-sm tracking-widest absolute opacity-[.07] z-10 font-extrabold mx-auto hidden md:text-8xl md:block text-[#212121]">
            Different from others
          </div>
          {productDetail.map((item) => (
            <div key={item.title}>
              <div className="z-20" >
                <h4 className=" font-bold text-center tracking-widest  py-4">
                  {item.title}
                </h4>
                <p className="tracking-widest text-center  text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 lg:mt-0 mt-10 mx-auto items-center  md:flex-row ">
          <div className=" flex-shrink-0 ">
            <Image
              alt="feature"
              width={300}
              height={350}
              className="flex-shrink-0 flex justify-center"
              src={"/feature.webp"}
            />
          </div>

          <div className="">
            <p className=" text-justify  text-gray-600 tracking-widest">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <div className="">
              <button className="mt-8   tracking-widest bg-[#212121] text-white text-sm w-3/4 lg:w-28 font-bold lg:py-3 border-black border-2 shadow-inner hover:bg-[#212121]"> See All Products</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jwellery;
