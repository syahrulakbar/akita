import { getAllData } from "@/actions/dashboard";
import TableDashboard from "@/components/ui/dashboard/table-dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const dashboard = await getAllData(query);

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <TableDashboard dashboard={dashboard?.data} />
    </main>
  );
}
