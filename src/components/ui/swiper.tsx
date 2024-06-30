"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { CLIENTS } from "@/constant";
import { CircleUserRound } from "lucide-react";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {CLIENTS.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center py-10 px-2  ">
              <div className="w-full lg:w-[70%] flex flex-col gap-10 dark:bg-black bg-white shadow-xl shadow-akita   rounded-2xl p-10">
                <div className="message">
                  <p className="text-lg lg:text-xl text-black dark:text-white  ">{`"${client.message}"`}</p>
                </div>
                <div className="flex flex-row items-center gap-5 border-t border-slate-300 py-5 text-akita">
                  <CircleUserRound width={32} height={32} />
                  <div className="profile">
                    <h5 className="text-akita font-semibold text-sm sm:text-base lg:text-lg">
                      {client.profile.name}
                    </h5>
                    <p className="font-light  text-black dark:text-white text-xs sm:text-sm lg:text-base">
                      {client.profile.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
