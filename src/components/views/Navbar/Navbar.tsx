"use client";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { NavbarArray, NavbarItemType } from "../../utils/navbarArrayandTypes";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

import { HiOutlineChevronDown } from "react-icons/hi";
import DropDown from "./DropDown";
import Expand from "./Expand";
import { useRouter } from "next/navigation";
import ContextWrapper from "@/app/global/Context";
import CartState from "./CartState";

const Navbar = () => {
  const router = useRouter();
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [Search, setSearch] = useState("");

  function handleSearchCalledFunc(e: any) {
    if (e.key === "Enter" && e.keyCode === 13) {
      router.push(`/search/${Search}`);
    }
  }
  return (
    <ContextWrapper>
    <div className="sticky top-0 bg-opacityDownColor backdrop-blur-lg z-40">
      <div className="flex py-6 justify-between items-center space-x-12 ">
        <div className="w-36 flex-shrink-0">
          <Image width={500} height={500} alt="Dine Store" src={"/Logo.webp"} />
        </div>
        <div className="hidden lg:flex justify-between items-center w-full">
          <ul className="flex space-x-5 font-medium text-lg text-purple-950">
            {NavbarArray.map((item: NavbarItemType, i) => (
              <li
                className="flex items-center relative rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer group"
                key={i}
              >
                <Link className="" href={item.href}>
                  {item.label}
                </Link>
                {item.isDropDown ? (
                  <HiOutlineChevronDown
                    className="mt-1 -rotate-180 group-hover:rotate-0 duration-300"
                    size={16}
                  />
                ) : (
                  ""
                )}
                {item.isDropDown && (
                  <div
                    className={` invisible group-hover:visible absolute top-8 px-4 py-6 te font-light left-0 mt-2 p-2 bg-gray-200 min-w-[7.8rem]`}
                  >
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="flex border items-center text-gray-600 px-1 rounded-md">
            <Link href={`/search/${Search}`}>
              <BiSearch />
            </Link>
            <input
              type="text"
              value={Search}
              onKeyDown={handleSearchCalledFunc}
              onChange={(e) => setSearch(e.target.value)}
              className="focus:outline-none pr-5 py-1 pl-1 w-80"
              placeholder="Search in Our Store"
            />
          </div>
          <CartState/>
        </div>
        <div className="flex lg:hidden">
          <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ? (
              <div className="flex lg:hidden">
                <GrClose size={25} />
              </div>
            ) : (
              <div className="flex lg:hidden">
                <GiHamburgerMenu size={25} />
              </div>
            )}
          </div>
        </div>
      </div>
      {isNavbarOpen && <MobileNav />}
    </div>
    </ContextWrapper>
  );
};

export default Navbar;

const MobileNav = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100">
      {NavbarArray.map((item: NavbarItemType, i: number) => (
        <Expand key={i} item={item} />
      ))}
    </div>
  );
};
