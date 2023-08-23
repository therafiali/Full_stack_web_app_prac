import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { hero } from "../assets";

const Hero = () => {
  const btnText = "Start\nShopping";
  return (
    <section className="py-5 flex justify-between items-center ">
      <div className="space-y-6  max-w-sm">
        {/* content  */}
        <button className="rounded-md bg-primaryWhite text-blue-700">
          Sale 70%
        </button>
        <h1 className="text-4xl md:text-6xl text-gray-800 font-bold">
          An Insdutrial Take on Streetwear
        </h1>
        <p className="text-gray-700">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button
          aria-label="redirect to our all products page"
          className="flex gap-3 items-center rounded-md ring-1 ring-slate-800 bg-gray-950 text-white text-lg font-semibold py-2 px-5"
        >
          <BsCart2 />
          <p className="whitespace-pre leading-4">{btnText}</p>
        </button>
        <div className="flex gap-4">
          <div className="w-14 md:w-28">
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"
              }
              alt="Bazzar"
            />{" "}
          </div>
          <div className="w-14 md:w-28">
            {" "}
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"
              }
              alt="Bustle"
            />
          </div>
          <div className="w-14 md:w-28">
            {" "}
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"
              }
              alt="Versace"
            />
          </div>
          <div className="w-14 md:w-28">
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"
              }
              alt="Instyle"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex rounded-full bg-primaryWhite ">
        {/* image */}
        <Image src={hero} alt="Hero Girl Image" />
      </div>
    </section>
  );
};

export default Hero;
