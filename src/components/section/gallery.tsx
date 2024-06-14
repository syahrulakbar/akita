import TabsGallery from "../tabs-gallery";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="mx-auto flex flex-col gap-10 items-center    min-h-screen max-w-7xl px-5 py-10  lg:p-20"
    >
      <div className=" flex flex-col gap-3 items-center  ">
        <div>
          <p className="text-sky-500 bg-sky-100 rounded-full inline-block px-5 py-1">Content</p>
        </div>
        <h2 className="font-bold text-4xl">{`Our Gallery`}</h2>
        <p className="text-center">
          Keseruan pengunjung di event Akita Japan Festival Vol 1 dan Vol 1.5
        </p>
      </div>
      <TabsGallery />
    </section>
  );
}
