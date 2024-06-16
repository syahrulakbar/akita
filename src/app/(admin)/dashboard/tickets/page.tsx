import TableTicket from "@/components/table-ticket";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickets",
};

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Tickets</h1>
      <TableTicket />
    </main>
  );
}
