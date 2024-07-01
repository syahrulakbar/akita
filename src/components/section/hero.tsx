export default function Hero() {
  return (
    <div
      id="home"
      className=" w-full h-screen flex flex-col justify-center items-center bg-fixed bg-cover bg-center bg-no-repeat relative grayscale"
      style={{ backgroundImage: `url(/images/akita-1/akita-1.12.JPG)` }}
    >
      <h1 className="absolute font-extrabold text-4xl  whitespace-nowrap md:text-7xl lg:text-8xl xl:text-9xl uppercase text-white bg-black blur-sm md:blur-md hover:blur-none ease-in-out transition-all duration-500 cursor-pointer">
        Akita Japan Fest
      </h1>
    </div>
  );
}
