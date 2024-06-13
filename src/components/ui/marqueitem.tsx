import Image from "next/image";
import React from "react";

export default function MarqueItem() {
  return (
    <div className="w-full flex flex-row  items-center justify-between gap-5 px-2 ">
      <Image
        src={"/images/logos/sunkiss.svg"}
        width={150}
        height={100}
        alt="sunkiss logo"
        className="object-contain "
      />
      <Image
        src={"/images/logos/sekawan.svg"}
        width={200}
        height={100}
        alt="sekawan logo"
        className="object-contain"
      />
    </div>
  );
}
