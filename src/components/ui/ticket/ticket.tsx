"use client";

import useCountdownTimer from "@/hooks/useCountdownTimer";
import { EventsTable } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TimeLeftProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Ticket({ event }: { event: EventsTable }) {
  const { id, event_name, price, end_date } = event;
  const { timeLeft }: { timeLeft: TimeLeftProps } = useCountdownTimer(end_date);
  const { days, hours, minutes, seconds } = timeLeft;
  const isAvailable = end_date > new Date().toISOString();
  return (
    <>
      {isAvailable ? (
        <div className=" rounded-2xl overflow-hidden">
          <div className="group bg-white dark:bg-gray-950 rounded-3xl flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 transition-colors duration-100 h-full hover:bg-blue-600/5 dark:hover:bg-blue-600/10">
            <div className="px-4 sm:px-6 pt-4 sm:pt-6 flex flex-col flex-grow">
              <div className="flex flex-row items-center gap-x-3">
                <Link
                  href={{
                    pathname: `/ticket/${id}`,
                    query: { ticketName: event_name },
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
                      pathname: `/ticket/${id}`,
                      query: { ticketName: event_name },
                    }}
                    rel="noopener noreferrer"
                  >
                    {event_name}
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
                        {days}d {hours}h {minutes}m {seconds}s
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
                  Rp{price}
                </span>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href={{
                    pathname: `/ticket/${id}`,
                    query: { ticketName: event_name },
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
      ) : (
        <div className="pointer-events-none opacity-50 rounded-2xl overflow-hidden">
          <div className="group bg-white dark:bg-gray-950 rounded-3xl flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 transition-colors duration-100 h-full hover:bg-blue-600/5 dark:hover:bg-blue-600/10">
            <div className="px-4 sm:px-6 pt-4 sm:pt-6 flex flex-col flex-grow">
              <div className="flex flex-row items-center gap-x-3">
                <p>
                  <Image
                    src={"/images/senshi.png"}
                    alt="logo"
                    width={50}
                    height={50}
                    className="bg-white rounded-full"
                  />
                </p>
                <div className="flex flex-col items-start gap-y-1">
                  <p className="font-semibold tracking-tight !leading-1.4 text-black dark:text-white">
                    {event_name}
                  </p>
                  <div className="flex items-center gap-x-1.5 text-xs sm:text-sm">
                    <span className="flex aspect-square w-2 relative">
                      <span className="relative inline-flex rounded-full aspect-square w-2 bg-red-500"></span>
                    </span>
                    <span className="tracking-tight">Expired</span>
                  </div>
                  <span className="text-xs sm:text-sm tracking-tight text-gray-500 dark:text-gray-400 v-popper--has-tooltip">
                    <span>The ticket was expired</span>&nbsp;
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
                  Rp{price}
                </span>
              </div>
              <div className="flex-shrink-0">
                <button
                  disabled
                  className="disabled:pointer-events-none disabled:opacity-50 px-4 py-3 sm:py-3.5 rounded-2xl text-white font-semibold tracking-tight transition active:scale-95 flex items-center gap-x-1 bg-blue-600 hover:bg-blue-700"
                >
                  <span>Get ticket</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
