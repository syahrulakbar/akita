import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { Pencil, Trash2 } from "lucide-react";
import { ModalAddEvent } from "./modal-add-event";
import { AlertDialogDelete } from "./alert-delete";
import { Button } from "./ui/button";

export default function TableEvent() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
        <Input className="w-full lg:w-1/3" placeholder="Search by event name" />
        <ModalAddEvent />
      </div>
      <Table>
        <TableCaption>A list of your recent events</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Event ID</TableHead>
            <TableHead>Event Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">EVNT01</TableCell>
            <TableCell>Presale 1 (10 August)</TableCell>
            <TableCell>25000</TableCell>
            <TableCell>10 August</TableCell>
            <TableCell>12 August</TableCell>
            <TableCell>
              <div className="flex flex-row items-center justify-center gap-3  ">
                <Button variant={"outline"}>
                  <Pencil size={16} />
                </Button>
                <AlertDialogDelete />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
