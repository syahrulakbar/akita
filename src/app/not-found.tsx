import Footer from "@/components/section/footer";
import Navbar from "@/components/section/navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex flex-col gap-3 items-center min-h-screen max-w-7xl px-5 py-10 lg:p-20 justify-center text-center">
        <p className="text-4xl font-bold">404</p>
        <h2 className="uppercase">Page Not Found</h2>
        <p className="text-center text-sm">{`But if you don't change your direction, and if you keep looking, you may end up where you are heading.`}</p>
        <Link href="/" className="rounded-full border px-2 py-1 border-sky-500 text-sky-500">
          Take me home
        </Link>
      </div>
      <Footer />
    </>
  );
}
