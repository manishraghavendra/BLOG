import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { JetBrains_Mono } from "next/font/google";

const font = JetBrains_Mono({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-2xl dark:text-amber-50`}>
            Manish&apos;s<span className="text-purple-500">Blog</span>
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
