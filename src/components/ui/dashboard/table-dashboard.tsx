"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dashboard } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import Search from "@/components/search";

export default function TableDashboard({ dashboard }: { dashboard: Dashboard[] }) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2">
      <Search placeholder="Search by event name" />
      <Table>
        <TableCaption>A list of all data</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Event Name</TableHead>
            <TableHead className="text-center">Approved</TableHead>
            <TableHead className="text-center">Pending</TableHead>
            <TableHead className="text-center">Rejected</TableHead>
            <TableHead className="text-center">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dashboard &&
            dashboard.length > 0 &&
            dashboard.map((data, index) => {
              const { event_name, status, total } = data;
              const { approved, pending, rejected } = status;
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{event_name}</TableCell>
                  <TableCell className="text-center">{approved}</TableCell>
                  <TableCell className="text-center">{pending}</TableCell>
                  <TableCell className="text-center">{rejected}</TableCell>
                  <TableCell className="text-center">{total}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
