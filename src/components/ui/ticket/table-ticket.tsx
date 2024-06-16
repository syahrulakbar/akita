import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil } from "lucide-react";
import { Input } from "../input";
import { Button } from "../button";
import { AlertDialogDelete } from "@/components/alert-delete";

export default function TableTicket() {
  return (
    <div className="flex flex-col gap-2">
      <Input className="w-full lg:w-1/3" placeholder="Search by name, email" />
      <Table>
        <TableCaption>A list of your recent tickets</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ticket ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Whatsapp</TableHead>
            <TableHead>Total Ticket</TableHead>
            <TableHead>Proof of Payment</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>07tav2akbar@gmail.com</TableCell>
            <TableCell>Mochamad Syahrul Akbar</TableCell>
            <TableCell>081548962893</TableCell>
            <TableCell>3</TableCell>
            <TableCell>081548962893</TableCell>
            <TableCell>Success</TableCell>
            <TableCell>
              <div className="flex flex-row items-center justify-center gap-3  ">
                <Button variant={"outline"}>
                  <Pencil size={16} />
                </Button>
                <AlertDialogDelete name="ticket" id="inv" />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
