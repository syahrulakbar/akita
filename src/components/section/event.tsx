import { getAllEvents } from "@/actions/event";
import { EventsTable } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import Ticket from "../ui/ticket/ticket";

export default async function Event({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const events = await getAllEvents(query);

  const COMPETITION = [
    {
      name: "Coswalk Competition",
      quota: 50,
      fee: "Rp 25.000",
      prize: "Rp 450.000",
      registration: "https://wa.me/+6281548962893",
      image: "/images/akita-1/akita-2.8.JPG",
    },
    {
      name: "Henshin Challenge",
      quota: 10,
      fee: "Rp 25.000",
      prize: "Rp 550.000",
      registration: "https://wa.me/+6281548962893",
      image: "/images/akita-1/akita-1.15.JPG",
    },
    {
      name: "J-SONG Cover",
      quota: 10,
      fee: "Rp 25.000",
      prize: "Rp 550.000",
      registration: "https://wa.me/+6281548962893",
      image: "/images/akita-1/akita-1.11.JPG",
    },
    {
      name: "Cosplay Competition",
      quota: 10,
      fee: "Rp 25.000",
      prize: "Rp 550.000",
      registration: "https://wa.me/+6281548962893",
      image: "/images/akita-1/akita-2.13.JPG",
    },
  ];

  return (
    <section
      id="event"
      className="mx-auto flex flex-col gap-10 items-center min-h-screen max-w-7xl px-5 py-10  lg:p-20"
    >
      <div className=" flex flex-col gap-3 items-center">
        <div>
          <p className="text-sky-500 bg-sky-100 rounded-full inline-block px-5 py-1">Event</p>
        </div>
        <h2 className="font-bold text-4xl">Upcoming Event</h2>
        <p className="text-center">{"Let's Have Fun With Us!"}</p>
      </div>
      <div className=" min-h-screen w-full flex flex-col  gap-5">
        <div className="flex items-center justify-center">
          <Image
            src={"/images/senshi.png"}
            alt="logo"
            width={100}
            height={100}
            className="bg-white rounded-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-1 items-center justify-center">
            <div className="relative  group hover:border-sky-500 border  rounded-md text-center  px-3 py-10">
              <div className="absolute -top-3 w-full">
                <p className="  bg-sky-100 group-hover:bg-sky-500 group-hover:text-white text-sky-500 uppercase text-sm text-center transition-all ease-in-out duration-300 rounded-full  inline-block px-3 py-1">
                  Ticket
                </p>
              </div>
              <h3 className="uppercase font-bold text-4xl ">Get Your Ticket Now</h3>
              <p className=" text-sm font-light text-black dark:text-white">{`Don't miss this chance to experience the ultimate anime event of the year. Get your ticket today and join us at Senshi Matsuri`}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[300px]">
              <Image
                src={"/images/ticket.png"}
                alt="logo"
                fill
                className="rounded-lg  object-contain"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 lg:mt-10">
          {events?.data &&
            events?.data.length > 0 &&
            events?.data.map((item: EventsTable, index: number) => (
              <Ticket key={index} event={item} />
            ))}
        </div>

        {COMPETITION.map((item, index) => (
          <div
            key={index}
            className={`flex gap-5 lg:gap-0 flex-col ${
              index % 2 === 0 ? "lg:flex-row-reverse " : " lg:flex-row"
            } gap-2 items-center`}
          >
            <div className=" w-full lg:w-1/2 flex flex-col gap-1 items-center justify-center">
              <div className="relative text-sky-500 group hover:border-sky-500 border  rounded-md text-center  px-3 py-10 flex flex-col gap-1 items-center">
                <div className="absolute -top-3 w-full">
                  <p className="  bg-sky-100 group-hover:bg-sky-500 group-hover:text-white text-sky-500 uppercase text-sm text-center transition-all ease-in-out duration-300 rounded-full  inline-block px-3 py-1">
                    Competition
                  </p>
                </div>
                <h3 className="uppercase font-bold text-4xl ">{item.name}</h3>
                <p className=" text-sm font-light text-black dark:text-white">{`Quota: ${item.quota} | Fee: ${item.fee}`}</p>
                <p className="  text-black dark:text-white font-semibold text-lg">{`Prize Total: ${item.prize}`}</p>
                <Link
                  href={item.registration}
                  className="border border-sky-500 group-hover:border-sky-100 rounded-md group-hover:bg-sky-500 group-hover:text-white   p-2 my-2"
                >
                  Registration Here
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 ">
              <div className="relative w-full h-[300px]">
                <Image
                  src={item.image}
                  alt={`image-${item.name}`}
                  fill
                  objectFit="cover"
                  className="grayscale rounded-lg hover:grayscale-0 transition-all ease-in-out duration-300"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col lg:flex-row-reverse gap-2 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-1 items-center justify-center">
            <div className="relative text-sky-500 group hover:border-sky-500 border  rounded-md text-center  px-3 py-10">
              <div className="absolute -top-3 w-full">
                <p className="  bg-sky-100 group-hover:bg-sky-500 group-hover:text-white text-sky-500 uppercase text-sm text-center transition-all ease-in-out duration-300 rounded-full  inline-block px-3 py-1">
                  Save The Date
                </p>
              </div>
              <h3 className="uppercase font-bold text-4xl ">August 25, 2024</h3>
              <p className=" text-sm font-light text-black dark:text-white">{`Taman Andang Pangrenan Purwokerto`}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.222204519528!2d109.24118527484059!3d-7.440649092570328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655c2b6b21a7cf%3A0xaf087e189c86422e!2sTaman%20Andhang%20Pangrenan%20Purwokerto!5e0!3m2!1sid!2sid!4v1718452231456!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale rounded-lg hover:grayscale-0 transition-all ease-in-out duration-300"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
