import { getAllTickets } from "@/actions/ticket";
import { getAllUsers } from "@/actions/user";
import TableUser from "@/components/ui/user/table-user";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const users = await getAllUsers(query);
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Users</h1>
      <TableUser users={users?.data} />
    </main>
  );
}
