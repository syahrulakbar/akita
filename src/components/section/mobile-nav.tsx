"use client";
import React from "react";
import { motion } from "framer-motion";
import { menuSlide, slide } from "@/constant/animation";
import { NAVBAR } from "@/constant";
import Link from "next/link";
import { SelectLanguage } from "../ui/select-language";

const MobileNav = () => {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="w-[70%] float-end flex min-h-screen  flex-col justify-start items-start   gap-5 bg-akita p-5 pt-20"
    >
      <p className="w-full border-b-2 border-blue-100 text-[10px] font-bold uppercase leading-[20px] text-white ">
        navigasi
      </p>
      {NAVBAR.map((item, index) => (
        <motion.div
          custom={index}
          variants={slide}
          animate="enter"
          exit={"exit"}
          initial="initial"
          key={index}
          className="text-xl font-bold text-white transition duration-200 ease-in-out hover:text-black  dark:text-white "
        >
          <Link href={item.href} className="capitalize">
            {item.name}
          </Link>
        </motion.div>
      ))}
      <div>
        <SelectLanguage />
      </div>
    </motion.div>
  );
};

export default MobileNav;
