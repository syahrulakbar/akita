import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

export default function TabsGallery() {
  return (
    <Tabs
      defaultValue="first"
      className="w-full flex items-center justify-center flex-col overflow-hidden"
    >
      <TabsList>
        <TabsTrigger value="first">Akita Vol 1</TabsTrigger>
        <TabsTrigger value="second">Akita Vol 1.5</TabsTrigger>
      </TabsList>
      <TabsContent value="first" className="w-full flex flex-col md:flex-row gap-2 ">
        <div className="logos w-full md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-up">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.1.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.2.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.3.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.4.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.5.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-up">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.1.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.2.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.3.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.4.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.5.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
        <div className="logos w-full md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-down">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.6.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.7.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.8.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.9.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.10.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.16.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-down">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.6.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.7.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.8.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.9.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.10.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.16.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
        <div className="logos w-full  md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-up">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.11.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.12.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.13.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.14.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.15.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-up">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.11.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.12.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.13.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.14.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-1.15.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="second" className="w-full flex flex-col md:flex-row gap-2 ">
        <div className="logos w-full md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-down">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.1.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.2.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.3.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.4.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.5.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-down">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.1.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.2.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.3.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.4.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.5.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
        <div className="logos w-full md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-up">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.6.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.7.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.8.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.9.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.10.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-up">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.6.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.7.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.8.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.9.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.10.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
        <div className="logos w-full md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-down">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.11.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.12.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.13.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.14.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.15.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-down">
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.11.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.12.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.13.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.14.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery akita"
              src={"/images/akita-1/akita-2.15.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
