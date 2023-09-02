"use client";
import { cartContext } from "@/app/global/Context";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const SubComp = () => {
  const {
    userData,
    LogOut,
    sendEmailVerificationCode,
    upadateUserNamePhoto,
    loading,
  } = useContext(cartContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const [IsUserEditingName, setIsUserEditingName] = useState(false);
  const [SetNameOf, setSetNameOf] = useState("");

  let name = userData?.displayName;
  function handleEditName() {
    upadateUserNamePhoto(SetNameOf);
    setIsUserEditingName(false);
    window.location.reload();
  }

  return (
    <div className="overflow-hidden">
      {userData ? (
        <div
          onClick={() => setProfileOpen(true)}
          className="cursor-pointer  w-8 h-8 rounded-full flex items-center justify-center text-gray-600 bg-white"
        >
          {userData.photoUrl ? (
            <Image
              className="object-cover rounded-full"
              src={userData.photoUrl}
              alt={userData.displayName}
              width={50}
              height={50}
            />
          ) : userData.displayName ? (
            <p className="text-sm uppercase">{userData.displayName.slice(0, 1)}</p>
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
          profileOpen ? "visible translate-y-0" : "invisible -translate-y-full "
        } py-4 px-4 duration-500 w-96 h-full bg-gray-800 text-gray-100 absolute right-0 top-0 bottom-0 z-50 `}
      >
        <div className="flex justify-between items-center py-2">
          <h6 className="font-semibold text-xl ">Profile</h6>
          <div onClick={() => setProfileOpen(false)}>
            <AiOutlineClose size={25} />
          </div>
        </div>
        {userData && (
          <div>
            {loading && <div>Loading...</div>}
            {IsUserEditingName && (
              <div className="flex">
                <input
                  value={SetNameOf}
                  type="text"
                  className="w-full"
                  onChange={(e) => setSetNameOf(e.target.value)}
                />

                <button
                  onClick={handleEditName}
                  className="px-1 py-2 bg-purple-500 rounded-lg"
                >
                  Done
                </button>
              </div>
            )}

            <h3 className="text-xl font-semibold">
              {name ? name : "User Name not Set"}
            </h3>
            {!name && (
              <button
                className="w-full border rounded-lg py-2 px-2"
                onClick={() => setIsUserEditingName(true)}
              >
                Edit Name
              </button>
            )}
            <h3 className="text-xl font-semibold">{userData.email}</h3>
            <p className="text-sm font-base">
              Is Email verified:{" "}
              {userData.emailVerified ? " verified" : " unverified"}
            </p>
            <button
              className="w-full border rounded-lg py-2 px-2"
              onClick={sendEmailVerificationCode}
            >
              Verify Email
            </button>
            <p className="text-xs text-red-500">
              if changed didnot reflected please refresh{" "}
            </p>
            <p className="text-xs text-red-500">
              please check your inbox after clicking verify email
            </p>
            <button
              className="w-full border rounded-lg py-2 px-2"
              onClick={LogOut}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubComp;
