"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import Image from "next/image";

export function DialogViewTicket({ imageUrl }: { imageUrl: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Image alt="image preview" src={imageUrl} width={100} height={100} objectFit="contain" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  overflow-y-scroll max-h-full md:max-w-screen-lg p-5 lg:p-10 ">
        <DialogHeader>
          <DialogTitle>Proof of Payment</DialogTitle>
          <DialogDescription>{`Pastikan bukti pembayaran sesuai`}</DialogDescription>
        </DialogHeader>
        <Image
          src={imageUrl}
          width={200}
          height={160}
          alt={"image preview"}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ height: "100%", width: "100%" }}
        />
      </DialogContent>
    </Dialog>
  );
}
