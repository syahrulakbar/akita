import { CONTACT, NAVBAR, SOCIAL_MEDIA } from "@/constant";
import Icon from "@/lib/icon";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl flex flex-col items-center justify-center  text-black dark:text-white ">
      <div className="max-container w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 px-5 py-10  border-b border-black dark:border-white">
        <div className="desc md:col-span-2">
          <Image alt="logo akita" src={"/images/akita.png"} width={150} height={100} />
          <p className="font-light text-slate-900 dark:text-gray-200 text-xs">{`Akita Japan Fest is a jejepangan event in Purwokerto. This event was held by Vandesu and Vetus. This event aims to introduce Japanese culture to the people of Purwokerto. This event will be filled with various events such as cosplay, live music, dance cover, and many more. So don't miss it!`}</p>
        </div>
        <div className="nav flex flex-col gap-3">
          <h5 className="font-semibold text-xl">Company</h5>
          <ul className="flex flex-col gap-3 font-light text-sm text-slate-900 dark:text-gray-200">
            {NAVBAR.map((item, index) => (
              <Link key={index} href={item.href} className="hover:text-akita">
                {item.name}
              </Link>
            ))}
            <Link href={"/dashboard"} className="hover:text-akita">
              Dashboard
            </Link>
          </ul>
        </div>
        <div className="contact flex flex-col gap-3">
          <h5 className="font-semibold text-xl">Follow Us</h5>
          <ul className="flex flex-col gap-3 font-light text-sm text-slate-900 dark:text-gray-200">
            {SOCIAL_MEDIA.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-2 hover:text-akita"
              >
                <Icon name={item.icon} size={16} />
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="contact flex flex-col gap-3">
          <h5 className="font-semibold text-xl">Contact Us</h5>
          <ul className="flex flex-col gap-3 font-light text-sm text-slate-900 dark:text-gray-200">
            {CONTACT.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-2 hover:text-akita"
              >
                <Icon name={item.icon} size={16} />

                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[90%] pt-3 pb-10 flex flex-col gap-2 lg:flex-row items-center justify-between">
        <p className="text-center text-sm md:text-base">
          &copy; 2024 Akita Japan Fest. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
