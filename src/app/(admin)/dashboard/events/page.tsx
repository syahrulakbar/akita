import { getAllEvents } from "@/actions/event";
import TableEvent from "@/components/ui/event/table-event";
import { Metadata } from "next";

import Pagination from "@/components/pagination";

export const metadata: Metadata = {
  title: "Events",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  // const page = Number(searchParams?.page) || 1;
  const events = await getAllEvents(query);

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Events</h1>
      <TableEvent events={events?.data} />
      {/* <Pagination totalPage={10} /> */}
    </main>
  );
}
