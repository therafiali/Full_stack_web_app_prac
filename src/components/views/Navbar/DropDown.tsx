import { NavbarItemType } from "@/components/utils/navbarArrayandTypes";
import Link from "next/link";
import { FC } from "react";

const DropDown: FC<{ item: NavbarItemType }> = ({ item }) => {
  return (
    <ul>
        {item.dropDownData?.map((item: NavbarItemType, i) => (
        <li key={i} className="hover:ml-2 group-hover:duration-300    ">
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
