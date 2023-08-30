"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";


const CartState = () => {
  const [qunatity, setQuantity] = useState(0);
  const isBrowser = () => typeof window !== undefined;
  useEffect(() => {
    let data = localStorage.getItem("cart") as string;
    setQuantity(JSON.parse(data).length);
  }, []);

  if (isBrowser()) {
    return (
      <Link href={'/cart'} className="flex-shrink-0 relative items-center flex justify-center rounded-full bg-gray-300 w-11 h-11">
        <div className="absolute top-1 right-2 w-4 h-4 items-center flex justify-center bg-red-400 text-xs font-light rounded-full">
          {qunatity}
        </div>
        <BsCart2 size={24} />
      </Link>
    );
  }
};

export default CartState;
