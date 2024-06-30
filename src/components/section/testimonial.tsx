import React from "react";
import Marque from "./marque";
import SwiperComponent from "../ui/swiper";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="mx-auto flex flex-col gap-3 items-center min-h-screen max-w-7xl px-5 py-10 lg:p-20"
    >
      <div>
        <p className="text-sky-500 bg-sky-100 rounded-full inline-block px-5 py-1">Testimonials</p>
      </div>
      <h2 className="text-center font-bold text-4xl">Our Client</h2>
      <p className="text-center">
        {`Let’s Take a Look at Our Incredible Clients, Guest Stars, Visitors and Their Opinion About Us`}
      </p>
      <Marque />
      <SwiperComponent />
    </section>
  );
}
