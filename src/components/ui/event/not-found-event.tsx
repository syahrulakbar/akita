import Link from "next/link";

export default function NotFoundEvent() {
  return (
    <>
      <p className="text-4xl font-bold text-center">Sorry</p>
      <p className="text-center text-sm">{`the event you are looking for is no longer available`}</p>
      <Link
        scroll
        href="/#event"
        className="rounded-full border px-2 py-1 border-sky-500 text-sky-500"
      >
        Search another events
      </Link>
    </>
  );
}
