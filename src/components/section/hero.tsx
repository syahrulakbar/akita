import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Index");
  return (
    <div id="home" className="relative w-full h-screen flex flex-col justify-center items-center ">
      <Image
        alt="hero"
        src={"/images/akita-1/akita-1.12.JPG"}
        fill
        className="object-cover grayscale"
      />
      <div className="absolute bg-white w-full lg:w-1/2 h-[150px] sm:h-[200px]  blur-sm md:blur-md hover:blur-none ease-in-out transition-all duration-500 cursor-pointe">
        <div>
          <Image alt="hero" src={"/images/senshi-1.png"} fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
