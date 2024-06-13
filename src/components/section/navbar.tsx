"use client";

import { NAVBAR } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { ButtonDarkMode } from "../ui/button-darkmode";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { scrollY } = useScroll();
  const { theme } = useTheme();

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
            Akita Japan Fest
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
          <div>
            <ButtonDarkMode />
          </div>
        </nav>
      </motion.nav>
    </>
  );
}
