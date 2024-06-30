import Image from "next/image";

export default function SenshiLogo() {
  return (
    <div className={` flex flex-row items-center justify-center`}>
      <Image alt="logo" src={"/images/akita.png"} width={200} height={200} objectFit="contain" />
    </div>
  );
}
