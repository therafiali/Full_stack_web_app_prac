"use client";
import { cartContext } from "@/app/global/Context";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const SubComp = () => {
  const { userData, LogOut } = useContext(cartContext);
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className="overflow-hidden">
      {userData ? (
        <div
          onClick={() => setProfileOpen(true)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 bg-white"
        >
          {userData.photoUrl ? (
            <Image
              className="object-cover"
              src={userData.photoUrl}
              alt={userData.displayName}
              width={100}
              height={100}
            />
          ) : userData.displayName ? (
            <p className="text-sm">{userData.displayName.slice(0, 1)}</p>
          ) : (
            <p className="text-sm uppercase">{userData.email.slice(0, 1)}</p>
          )}
        </div>
      ) : (
        <div className="flex gap-2">
          <Link
            href={"/signup"}
            className="border bg-slate-300 text-gray-950 px-4 py-2"
          >
            Signup
          </Link>
          <Link
            href={"/signin"}
            className="border bg-slate-300 text-gray-950 px-4 py-2"
          >
            SignIN
          </Link>
        </div>
      )}
      <div
        className={` ${
          profileOpen ? "visible translate-x-0" : "invisible translate-x-full "
        } py-4 px-4 duration-500 w-96 h-full bg-gray-800 text-gray-100 absolute right-0 top-0 bottom-0 z-50 `}
      >
        <div className="flex justify-between items-center py-2">
          <h6 className="font-semibold text-xl ">Profile</h6>
          <div onClick={() => setProfileOpen(false)}>
            <AiOutlineClose size={25} />
          </div>
        </div>
        <button className="w-full border rounded-lg py-2 px-2" onClick={LogOut}>Log Out</button>
      </div>
    </div>
  );
};

export default SubComp;
