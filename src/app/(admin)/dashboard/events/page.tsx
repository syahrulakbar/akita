import TableEvent from "@/components/table-event";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Events</h1>
      <TableEvent />
    </main>
  );
}
