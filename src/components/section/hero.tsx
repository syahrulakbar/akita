import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Index");
  return (
    <div id="home" className="w-full h-screen flex flex-col justify-center items-center ">
      <h1 className="font-extrabold text-4xl whitespace-nowrap  lg:text-5xl xl:text-6xl uppercase bg-gradient-to-tr from-sky-500 to-cyan-300 bg-clip-text text-transparent">
        Akita Japan Fest
      </h1>
      <p>Best Event at Purwokerto</p>
    </div>
  );
}
