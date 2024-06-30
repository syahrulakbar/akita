import { getAllTickets } from "@/app/actions/ticket";
import TableTicket from "@/components/ui/ticket/table-ticket";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickets",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const tickets = await getAllTickets(query);
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Tickets</h1>
      <TableTicket ticket={tickets?.data} />
    </main>
  );
}
