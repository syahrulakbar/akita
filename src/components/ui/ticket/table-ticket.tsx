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
import { AlertDialogDelete } from "@/components/alert-delete";
import { TicketsTable } from "@/lib/definitions";
import { toast } from "../use-toast";
import { useRouter } from "next/navigation";
import { deleteTicketById } from "@/actions/ticket";
import { ModalUpdateTicket } from "./modal-update-ticket";
import Search from "@/components/search";
import { DialogViewTicket } from "./dialog-view-ticket";

export default function TableTicket({ ticket }: { ticket: TicketsTable[] }) {
  const router = useRouter();
  const handleDelete = async (id: string) => {
    try {
      await deleteTicketById(id);
      toast({
        title: "Success Delete Ticket",
        description: "Refresh the page to see the changes.",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error Delete Event",
        description: "Please try again.",
      });
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <Search placeholder="Search by name" />
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
          {ticket &&
            ticket.length > 0 &&
            ticket.map((ticket, index) => {
              const { id, name, email, total_ticket, proof_of_payment, status } = ticket;

              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{id}</TableCell>
                  <TableCell className="font-medium">121212</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{total_ticket}</TableCell>
                  <TableCell>
                    <DialogViewTicket imageUrl={proof_of_payment} />
                  </TableCell>
                  <TableCell className="capitalize">{status}</TableCell>
                  <TableCell>
                    <div className="flex flex-row items-center justify-center gap-3  ">
                      <ModalUpdateTicket ticket={ticket} />
                      <AlertDialogDelete name="ticket" handleDelete={() => handleDelete(id)} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
