import Image from "next/image";
import Link from "next/link";

export default function Event() {
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
  const TICKET = [
    {
      id: 1,
      name: "Presale Ticket 1 (10 August)",
      status: "Available",
      time: "22:26:43",
      type: "One-day pass",
      entrance: "Regular entrance",
      price: "Rp25,000",
      link: "/ticket",
    },
    {
      id: 2,
      name: "Presale Ticket 2 (12 August)",
      status: "Available",
      time: "22:26:43",
      type: "One-day pass",
      entrance: "Regular entrance",
      price: "Rp30,000",
      link: "/ticket",
    },
    {
      id: 3,
      name: "Presale Ticket 3 (13 August)",
      status: "Available",
      time: "22:26:43",
      type: "One-day pass",
      entrance: "Regular entrance",
      price: "Rp35,000",
      link: "/ticket",
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
          {TICKET.map((item, index) => (
            <div key={index} className="rounded-2xl overflow-hidden">
              <div className="group bg-white dark:bg-gray-950 rounded-3xl flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 transition-colors duration-100 h-full hover:bg-blue-600/5 dark:hover:bg-blue-600/10">
                <div className="px-4 sm:px-6 pt-4 sm:pt-6 flex flex-col flex-grow">
                  <div className="flex flex-row items-center gap-x-3">
                    <Link
                      href={{
                        pathname: `/ticket/${item.id}`,
                        query: { ticketName: item.name },
                      }}
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={"/images/senshi.png"}
                        alt="logo"
                        width={50}
                        height={50}
                        className="bg-white rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col items-start gap-y-1">
                      <Link
                        className="font-semibold tracking-tight !leading-1.4 text-black dark:text-white"
                        href={{
                          pathname: `/ticket/${item.id}`,
                          query: { ticketName: item.name },
                        }}
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </Link>
                      <div className="flex items-center gap-x-1.5 text-xs sm:text-sm">
                        <span className="flex aspect-square w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500"></span>
                          <span className="relative inline-flex rounded-full aspect-square w-2 bg-green-500"></span>
                        </span>
                        <span className="tracking-tight">Available</span>
                      </div>
                      <span className="text-xs sm:text-sm tracking-tight text-gray-500 dark:text-gray-400 v-popper--has-tooltip">
                        <span>The ticket purchase ends in</span>&nbsp;
                        <div className="inline">
                          <span>
                            &nbsp;<span style={{ display: "none" }}>0</span>22:
                            <span style={{ display: "none" }}>0</span>26:
                            <span style={{ display: "none" }}>0</span>43
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-x-2 mt-4">
                    <span className="bg-gradient-to-tr from-sky-500 to-sky-100 gradient-silver text-white px-2.5 py-1.5 rounded-full text-xs sm:text-sm !leading-none line-clamp-1 font-semibold tracking-tight h-full flex items-center justify-center">
                      One-day pass
                    </span>
                    <span className="flex items-center gap-x-1.5 text-xs sm:text-sm tracking-tight line-clamp-1 px-2.5 py-1.5 rounded-full bg-gray-100 text-black dark:bg-gray-900 dark:text-white h-full">
                      <svg
                        viewBox="0 0 21 21"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 sm:h-5"
                      >
                        <path d="M11.9999 9.81245C11.8415 9.81245 11.6832 9.75412 11.5582 9.62912C11.3165 9.38745 11.3165 8.98745 11.5582 8.74578L18.3915 1.91245C18.6332 1.67078 19.0332 1.67078 19.2749 1.91245C19.5165 2.15412 19.5165 2.55412 19.2749 2.79578L12.4415 9.62912C12.3249 9.74578 12.1665 9.81245 11.9999 9.81245Z"></path>
                        <path d="M15.358 10.4791H11.333C10.9913 10.4791 10.708 10.1958 10.708 9.8541V5.8291C10.708 5.48743 10.9913 5.2041 11.333 5.2041C11.6747 5.2041 11.958 5.48743 11.958 5.8291V9.2291H15.358C15.6997 9.2291 15.983 9.51244 15.983 9.8541C15.983 10.1958 15.6997 10.4791 15.358 10.4791Z"></path>
                        <path d="M13.0003 19.6457H8.00033C3.47533 19.6457 1.54199 17.7123 1.54199 13.1873V8.18734C1.54199 3.66234 3.47533 1.729 8.00033 1.729H9.66699C10.0087 1.729 10.292 2.01234 10.292 2.354C10.292 2.69567 10.0087 2.979 9.66699 2.979H8.00033C4.15866 2.979 2.79199 4.34567 2.79199 8.18734V13.1873C2.79199 17.029 4.15866 18.3957 8.00033 18.3957H13.0003C16.842 18.3957 18.2087 17.029 18.2087 13.1873V11.5207C18.2087 11.179 18.492 10.8957 18.8337 10.8957C19.1753 10.8957 19.4587 11.179 19.4587 11.5207V13.1873C19.4587 17.7123 17.5253 19.6457 13.0003 19.6457Z"></path>
                      </svg>
                      <span>Regular entrance</span>
                    </span>
                  </div>
                </div>
                <div className="px-5 sm:px-8 flex items-center justify-between gap-x-3 border-t border-dashed border-gray-200 dark:border-gray-700 group-hover:border-blue-600 dark:group-hover:border-blue-600 py-2.5 sm:py-4 mt-4 sm:mt-6 relative flex-grow-0">
                  <div className="aspect-square rounded-full bg-white dark:bg-gray-950 h-8 sm:h-10 absolute left-0 -translate-x-1/2 top-0 -translate-y-1/2 border border-gray-200 dark:border-gray-700 group-hover:border-blue-600 transition-colors duration-100"></div>
                  <div className="aspect-square rounded-full bg-white dark:bg-gray-950 h-8 sm:h-10 absolute right-0 translate-x-1/2 top-0 -translate-y-1/2 border border-gray-200 dark:border-gray-700 group-hover:border-blue-600 transition-colors duration-100"></div>
                  <div className="flex flex-col">
                    <span className="font-semibold tracking-tighter text-base sm:text-xl text-black dark:text-white">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={{
                        pathname: `/ticket/${item.id}`,
                        query: { ticketName: item.name },
                      }}
                      rel="noopener noreferrer"
                      className="px-4 py-3 sm:py-3.5 rounded-2xl text-white font-semibold tracking-tight transition active:scale-95 flex items-center gap-x-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <span>Get ticket</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
