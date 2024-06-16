"use client";

import Footer from "@/components/section/footer";
import Navbar from "@/components/section/navbar";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <div className="mx-auto flex flex-col gap-3 items-center min-h-screen max-w-7xl px-5 py-10 lg:p-20 justify-center text-center">
        <p className="text-4xl font-bold uppercase ">Sorry, Something Went Wrong!</p>
        <p className="text-center text-sm">{`Error: ${error.message}`}</p>
        <Button onClick={() => reset()} variant={"outline"}>
          Try Again
        </Button>
      </div>
      <Footer />
    </>
  );
}
