import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { Pencil, Plus, Trash2 } from "lucide-react";
import Search from "./search";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}>
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function RowSkeleton({ length }: { length: number }) {
  return (
    <TableRow>
      {Array.from({ length }).map((_, index) => (
        <TableCell key={index}>
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </TableCell>
      ))}
      <TableCell>
        <div className="flex flex-row items-center justify-center gap-3  ">
          <Button variant={"outline"}>
            <Pencil size={16} />
          </Button>
          <Button variant="outline" className=" text-red-500">
            <Trash2 size={16} />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}

export function EventsTableSkeleton() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Events</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
          <Search placeholder={"Search by event name"} />
          <Button className="w-full lg:w-max flex flex-row items-center gap-2">
            <Plus size={16} />
            Add New Event
          </Button>
        </div>
        <Table>
          <TableCaption>A list of your recent tickets</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Total Ticket</TableHead>
              <TableHead>Proof of Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <RowSkeleton length={7} />
            <RowSkeleton length={7} />
            <RowSkeleton length={7} />
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
export function UsersTableSkeleton() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Users</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
          <Search placeholder={"Search by event name, email"} />
          <Button className="w-full lg:w-max flex flex-row items-center gap-2">
            <Plus size={16} />
            Add New User
          </Button>
        </div>
        <Table>
          <TableCaption>A list of your recent users</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>User Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <RowSkeleton length={5} />
            <RowSkeleton length={5} />
            <RowSkeleton length={5} />
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
export function TicketsTableSkeleton() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Tickets</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
          <Search placeholder={"Search by event name"} />
        </div>
        <Table>
          <TableCaption>A list of your recent tickets</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Total Ticket</TableHead>
              <TableHead>Proof of Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <RowSkeleton length={7} />
            <RowSkeleton length={7} />
            <RowSkeleton length={7} />
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
