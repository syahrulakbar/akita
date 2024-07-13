"use client";

import useRedirectAfterSomeSeconds from "@/hooks/useRedirectAfterSomeSeconds";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function Page() {
  const { secondsRemaining } = useRedirectAfterSomeSeconds("/", 10);
  const { width, height } = useWindowSize();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);
  return (
    <>
      {loaded && <Confetti width={width} height={height} recycle={false} />}
      <div className="mx-auto overflow-x-hidden flex flex-col gap-3 items-center min-h-screen max-w-7xl px-5 py-10 lg:p-20 justify-center text-center">
        <p className="text-4xl font-bold uppercase">Arigathanks</p>
        <h2>We will contact you soon</h2>
        <p>
          Redirecting to homepage in {secondsRemaining}{" "}
          {secondsRemaining > 1 ? "seconds" : "second"}.
        </p>
      </div>
    </>
  );
}
