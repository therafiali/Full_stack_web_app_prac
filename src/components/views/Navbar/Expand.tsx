import { NavbarItemType } from "@/components/utils/navbarArrayandTypes";
import Link from "next/link";
import React, { FC, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
  const [isExpended, setisExpended] = useState<boolean>(false);
  const [isTime, setTime] = useState<boolean>(false);
  function handleExpand(){
    setisExpended(!isExpended);
    setTimeout(() => {
        setTime(!isTime)
    }, 100);
  }
  return (
    <li className={`${isExpended ? "h-48" : "h-12"} list-none   `}>
      {" "}
      <div
        onClick={handleExpand}
        className="flex justify-between hover:bg-purple-600 rounded-md duration-300 items-center py-2 px-3 "
      >
        <Link href={item.href}>{item.label}</Link>

        {item.isDropDown ? (
          <HiOutlineChevronDown
            className="mt-1 -rotate-180 group-hover:rotate-90 duration-300"
            size={15}
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col space-y-1 mt-2">
        {isExpended &&
          item.dropDownData?.map((subitem: NavbarItemType, i: number) => (
            <Link
              className="hover:bg-gray-50 duration-300 py-1 px-5 rounded-md"
              href={subitem.href}
              key={i}
            >
              {subitem.label}
            </Link>
          ))}
      </div>
    </li>
  );
};

export default Expand;
