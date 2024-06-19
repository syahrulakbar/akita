import React from "react";
import { AccordionFaq } from "../accordion-faq";

export default function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto flex flex-col gap-10 items-center min-h-screen max-w-7xl px-5 py-10  lg:p-20"
    >
      <div className=" flex flex-col gap-3 items-center  text-center">
        <div>
          <p className="text-sky-500 bg-sky-100 rounded-full inline-block px-5 py-1">FAQ</p>
        </div>
        <h2 className="font-bold text-4xl">Frequently Asked Questions</h2>
        <p className="text-center">
          Here are some frequently asked questions about the Akita Japan Fest event
        </p>
      </div>
      <AccordionFaq />
    </section>
  );
}
