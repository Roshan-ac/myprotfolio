"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import NavMenus from "./NavMenus";
import RightMenu from "./RightMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <motion.div
        animate={{ y: ["-80%", "0%"] }}
        transition={{
          duration: 0.4,
          ease: "linear",
        }}
        className="w-full z-10 md:px-6 py-1 px-4 fixed top-0"
      >
        <div className="text-white m-auto container flex items-center justify-between">
          <Link href={"/"} className="flex items-center cursor-pointer">
            <span className="text-green-500 md:text-3xl font-bold text-2xl mb-1 mr-[1.5]">
              P
            </span>
            <span className="md:text-2xl text-xl font-semibold">ortfolio</span>
          </Link>
          {/* <NavMenus /> */}
          {/* <RightMenu /> */}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
