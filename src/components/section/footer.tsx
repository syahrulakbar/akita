import { CONTACT, NAVBAR, SOCIAL_MEDIA } from "@/constant";
import Icon from "@/lib/icon";
import Image from "next/image";
import Link from "next/link";
import { SelectLanguage } from "../ui/select-language";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Index");
  const keys = ["navigation"] as const;
  return (
    <footer className="flex flex-col items-center justify-center  text-black dark:text-white ">
      <div className="max-container w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 px-5 py-10  border-b border-black dark:border-white">
        <div className="desc md:col-span-2">
          <Image alt="logo akita" src={"/images/akita.png"} width={150} height={100} />
          <p className="font-light text-slate-900 dark:text-gray-200">
            Akita helps creators interact and collaborate with an all-in-one online platform that
            creates a unique community.
          </p>
        </div>
        <div className="nav flex flex-col gap-3">
          <h5 className="font-semibold text-xl">Company</h5>
          <ul className="flex flex-col gap-3 font-light text-sm text-slate-900 dark:text-gray-200">
            {NAVBAR.map((item, index) => (
              <Link key={index} href={item.href} className="hover:text-akita">
                {item.name}
              </Link>
            ))}
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
        <p className="flex flex-row gap-1 items-center ">
          <span>
            <Icon name="Copyright" size={15} />
          </span>
          2024 Akita Japan Fest. All Right Reseved
        </p>
        <SelectLanguage />
      </div>
    </footer>
  );
}
