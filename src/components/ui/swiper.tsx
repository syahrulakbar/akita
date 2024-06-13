"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { CLIENTS } from "@/constant";

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
            <div className="flex items-center justify-center p-10">
              <div className="w-full lg:w-[70%] flex flex-col gap-10 dark:bg-black bg-white  drop-shadow-xl shadow-xl shadow-akita  rounded-2xl p-10">
                <div className="message">
                  <p className="text-xl text-black dark:text-white ">{`"${client.message}"`}</p>
                </div>
                <div className="flex flex-row items-center gap-5 border-t border-slate-300 py-5">
                  <Image
                    alt="profile pict"
                    src={client.profile.image}
                    width={50}
                    height={50}
                    className="rounded-full object-contain"
                  />
                  <div className="profile">
                    <h5 className="text-akita font-semibold text-lg">{client.profile.name}</h5>
                    <p className="font-light  text-black dark:text-white">
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
