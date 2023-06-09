import { getContacUstPage } from "@/sanity/sanity-utils";
import Link from "next/link";
import React from "react";

const middleFooterLinks = [
  { href: "/product", label: "PRODUCT" },
  { href: "/priceing", label: "PRICES " },
  { href: "/arenas", label: "ARENAS" },
  { href: "/blog", label: " BLOG" },
];

export const Footer = () => {
  return (
    <footer className="bg-white text-black defaultSpacing">
      <div className="max-w-3xl mx-auto py-10 flex justify-between">
        <ul className="hidden flex-1 items-center justify-center space-x-8 lg:flex ">
          {middleFooterLinks.map((middleFooterLinks) => (
            <li key={middleFooterLinks.href} className="hover:text-yellow-500">
              <Link href={middleFooterLinks.href}>
                {middleFooterLinks.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/*  contactUs data Rendered here */}

      <div>
        <div className="grid grid-cols-2 gap-4 justify-between">
          <div className="cursor-pointer opacity-75 transtion hover:opacity-100 font-bold px-2 pt-2 lg:px-10 text-2xl">
            <Link href="/"> {"PadelPlay"}</Link>
          </div>

          <div className="contactUsDivs flex justify-end ">
            <Link href="/contactus">
              <button className="transparentButton">CONTACT US</button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-end pb-4">
          {"Follow Us:"}
          <a
            href="https://www.instagram.com/padelplay.nu/?hl=en"
            className="px-2 hover:text-yellow-500"
          >
            {"Instagram"}
          </a>
          <span className="text-gray-400 pr-2">{"|"}</span>
          <a
            href="https://www.linkedin.com/company/padelplay/?originalSubdomain=se"
            className="pr-2 hover:text-yellow-500"
          >
            {"LinkedIn"}
          </a>
        </div>
        <div className="text-center font-thin text-gray-400 pb-4">
          <p>{"Copyright PadelPlay 2023"}</p>
        </div>
      </div>
    </footer>
  );
};
