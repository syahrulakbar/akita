import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="mx-auto relative max-w-7xl  min-h-[40vh] rounded-none lg:rounded-lg flex flex-col gap-5 items-center justify-center px-5 lg:px-0">
      <div className="flex flex-col gap-5 items-center justify-center ">
        <div>
          <p className="text-sky-500 bg-sky-100 rounded-full inline-block px-5 py-1">Contact Us</p>
        </div>
        <h2 className="font-bold text-center text-2xl lg:text-4xl text-white">
          Contact Us For Question or Collaboration
        </h2>
        <Link
          href={"https://wa.me/62882005359995"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-400 px-10 rounded-full text-white hover:bg-akita transition-all duration-300 ease-in-out hover:border-white border border-green-400 text-lg flex items-center gap-2 py-2"
        >
          Whatsapp <Phone className="ml-2 h-4 w-4" />
        </Link>
      </div>
      <Image
        alt="pattern"
        src={"/images/pattern/pattern-1.png"}
        fill
        className="absolute -z-10 object-cover dark:opacity-10 lg:rounded-lg  opacity-5"
      />
      <div className="bg-akita absolute w-full h-full -z-20 lg:rounded-lg"></div>
    </section>
  );
}
