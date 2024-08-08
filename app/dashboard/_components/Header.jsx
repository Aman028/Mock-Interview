"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  });
  const onpay = () => {
    alert("Coming SOON!!");
  };
  const onsupport = () => {
    alert("Customer support Coming SOON!!");
  };
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
      <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
      <ul className="hidden md:flex gap-6">
        <Link href={"/dashboard"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard" && "text-primary font-bold"
            }`}
          >
            Dashboard
          </li>
        </Link>
        <Link href={"/dashboard/"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard/questions" && "text-primary font-bold"
            }`}
            onClick={onsupport}
          >
            Questions
          </li>
        </Link>
        <Link href={"/dashboard/"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard/upgrade" && "text-primary font-bold"
            }`}
            onClick={onpay}
          >
            Upgrade
          </li>
        </Link>
        <Link href={"/dashboard"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard/how" && "text-primary font-bold"
            }`}
          >
            How it works?
          </li>
        </Link>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
