import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import MarqueItem from "../ui/marqueitem";

const Marque = () => {
  return (
    <>
      <div className={cn(`max-container my-20 mt-32 bg-akita py-10 lg:mt-0`)}>
        <Marquee autoFill pauseOnHover pauseOnClick>
          <MarqueItem />
        </Marquee>
      </div>
    </>
  );
};

export default Marque;
