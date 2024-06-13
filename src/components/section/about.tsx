import { DATA } from "@/constant";
import Icon from "@/lib/icon";
import { CalendarCheck } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about-us"
      className="mx-auto flex flex-col gap-3  min-h-screen max-w-7xl px-5 py-10  lg:p-20"
    >
      <div className="lg:w-[50%] flex flex-col gap-3">
        <div>
          <p className="text-sky-500 bg-sky-100 rounded-full inline-block px-5 py-1">
            Introduction
          </p>
        </div>
        <h2 className="font-bold text-4xl">{`Who's Akita?`}</h2>
        <p className="text-lg">
          Akita is an event management platform that makes a solution for event organisers to manage
          events, venues, communities, collaborate, and find potential to learn together.
        </p>
      </div>
      <div className="flex flex-row my-10">
        <div className="w-1/2 min-h-[50vh] grid grid-cols-2 p-10 gap-2">
          {DATA.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 hover:border-sky-500 border p-5 rounded-md"
            >
              <div className="flex flex-row items-center gap-2">
                <div className="bg-sky-100  w-[50px] h-[50px] flex items-center justify-center rounded-full">
                  <Icon name={item.icon} color="#0ea5e9" />
                </div>
                <p className="font-bold text-4xl text-sky-500">{item.total}+</p>
              </div>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="w-1/2 min-h-[50vh] flex items-center justify-center">
          <Image alt="logo akita" src={"/images/akita.png"} width={250} height={100} />
        </div>
      </div>
    </section>
  );
}
