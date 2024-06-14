import { useTranslations } from "next-intl";
import React from "react";
import Marque from "./marque";
import SwiperComponent from "../ui/swiper";

export default function Testimonial() {
  const t = useTranslations("Index");
  return (
    <section
      id="testimonial"
      className="mx-auto flex flex-col gap-3 items-center min-h-screen max-w-7xl px-5 py-10 lg:p-20"
    >
      <div>
        <p className="text-sky-500 bg-sky-100 rounded-full inline-block px-5 py-1">Testimonials</p>
      </div>
      <h2 className="text-center font-bold text-4xl">{t("client")}</h2>
      <p className="text-center">{t("desc-client")}</p>
      <Marque />
      <SwiperComponent />
    </section>
  );
}
