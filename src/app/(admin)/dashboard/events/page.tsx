import { getAllEvents } from "@/app/actions/event";
import TableEvent from "@/components/ui/event/table-event";
import { Metadata } from "next";

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
  const events = await getAllEvents(query);

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Events</h1>
      <TableEvent events={events?.data} />
    </main>
  );
}
