import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import { CONTRIBUTORS } from "@/constant";

const ContributorsMarque = () => {
  return (
    <>
      <div className={cn(`max-container bg-akita py-10 `)}>
        <Marquee autoFill pauseOnHover pauseOnClick>
          <div className="w-full flex flex-row  items-center justify-between gap-5 px-2 text-white">
            {CONTRIBUTORS.map((contributor) => (
              <p className="font-semibold text-2xl" key={contributor}>
                {contributor}
              </p>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default ContributorsMarque;
