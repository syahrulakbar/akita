import { DATA } from "@/constant";
import Icon from "@/lib/icon";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about-us"
      className="mx-auto flex flex-col gap-3  min-h-screen max-w-7xl px-5 py-10  lg:p-20"
    >
      <div className=" flex flex-col gap-3">
        <div>
          <p className="text-sky-500 bg-sky-100 rounded-full inline-block px-5 py-1">
            Introduction
          </p>
        </div>
        <h2 className="font-bold text-4xl">
          {"Who's"}
          <span className="ml-2 bg-gradient-to-tr from-sky-500 to-cyan-300 bg-clip-text text-transparent">
            Akita
          </span>
          ?
        </h2>
        <p>
          {`Akita Japan Fest is a jejepangan event in Purwokerto. This event was held by Vandesu and Vetus. This event aims to introduce Japanese culture to the people of Purwokerto. This event will be filled with various events such as cosplay, live music, dance cover, and many more. So don't miss it!`}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row my-10 lg:gap-0 gap-5">
        <div className="w-full lg:w-1/2 min-h-[50vh] grid grid-cols-2 p-0 lg:p-10 gap-2">
          {DATA.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 group hover:border-sky-500 border p-5 rounded-md overflow-hidden"
            >
              <div className="flex flex-col xl:flex-row items-start xl:items-center gap-2">
                <div className="lg:bg-sky-100 group-hover:bg-sky-500  transition-all ease-in-out duration-300 group-hover:text-white text-sky-500  overflow-hidden w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex items-center justify-center rounded-full">
                  <Icon name={item.icon} size={24} />
                </div>
                <p className="font-bold text-3xl  lg:text-4xl text-sky-500">{item.total}+</p>
              </div>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="w-full relative lg:w-1/2 min-h-[50vh] flex items-center justify-center ">
          <div className="w-full h-full absolute bottom-0">
            <Image alt="logo akita" src={"/images/akitul.png"} fill objectFit="contain" />
          </div>
          <Image
            alt="pattern"
            src={"/images/pattern/pattern-1.png"}
            fill
            className="absolute -z-10 object-cover dark:opacity-10 lg:rounded-lg  opacity-10"
          />
          <div className="bg-akita absolute w-full h-full -z-20 lg:rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
