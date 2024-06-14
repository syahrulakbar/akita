"use client";

import { NAVBAR } from "@/constant";
import Link from "next/link";
import { ButtonDarkMode } from "../ui/button-darkmode";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MobileNav from "./mobile-nav";
import { Sling as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });
  return (
    <>
      <motion.nav
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`padding-container fixed top-0 z-20  w-full pt-4 ${
          isScroll
            ? "border-b border-input   bg-gradient-to-t from-transparent to-background  pb-3 backdrop-blur-3xl  transition-all duration-500 ease-in-out"
            : ""
        } `}
      >
        <nav className="max-container flex flex-row w-full justify-between lg:justify-around items-center px-2">
          <Link href={"/"} className="uppercase font-bold text-xl">
            秋田県
          </Link>
          <ul className="hidden lg:flex gap-5">
            {NAVBAR.map((item, index) => (
              <li
                key={index}
                className="text-sm text-slate-900 transition duration-200 ease-in-out  hover:text-akita dark:text-white dark:hover:text-akita"
              >
                <Link href={item.href} className="capitalize">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center flex-row gap-2">
            <ButtonDarkMode />
            <div
              className={`z-20 rounded-full  dark:text-white text-black md:hidden font-light   ${
                isOpen
                  ? "text-white transition-all duration-200 ease-in-out"
                  : " transition-all delay-300"
              }`}
            >
              <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
            </div>
          </div>

          <div className="absolute right-0 top-0 z-0 w-full md:hidden">
            <AnimatePresence mode="wait">{isOpen && <MobileNav />}</AnimatePresence>
          </div>
        </nav>
      </motion.nav>
    </>
  );
}
