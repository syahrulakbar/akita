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

export function RowSkeleton({ length, action = true }: { length: number; action?: boolean }) {
  return (
    <TableRow>
      {Array.from({ length }).map((_, index) => (
        <TableCell key={index}>
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </TableCell>
      ))}
      {action && (
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
      )}
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
export function DashboardTableSkeleton() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
          <Search placeholder={"Search by event name"} />
        </div>
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
            <RowSkeleton length={5} action={false} />
            <RowSkeleton length={5} action={false} />
            <RowSkeleton length={5} action={false} />
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

export function FormTicketSkeleton() {
  return (
    <div className="flex items-center justify-center flex-col text-center">
      <h2 className="font-bold text-xl  md:text-2xl lg:text-3xl">Formulir Pembelian Ticket</h2>
      <p className="text-sm font-light">
        Pastikan teman-teman mengisi data diri dengan benar dan teliti
      </p>
      <div className="flex flex-col gap-2">
        <Skeleton className="w-[100px] h-[100px] rounded-md" />
        <Skeleton className="w-[100px] h-[100px] rounded-md" />
        <Skeleton className="w-[100px] h-[100px] rounded-md" />
        <Skeleton className="w-[100px] h-[500px] rounded-md" />
      </div>
    </div>
  );
}
