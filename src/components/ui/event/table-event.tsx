import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "../input";
import { ModalAddEvent } from "./modal-add-event";
import { AlertDialogDelete } from "../../alert-delete";
import { EventsTable } from "@/lib/definitions";
import moment from "moment";
import { ModalUpdateEvent } from "./modal-update-event";
import Search from "../../search";

export default function TableEvent({ events }: { events: EventsTable[] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
        <Search placeholder={"Search by event name"} />
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
          {events &&
            events.length > 0 &&
            events.map((event, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{event.id}</TableCell>
                <TableCell>{event.event_name}</TableCell>
                <TableCell>{event.price}</TableCell>
                <TableCell>{moment(event.start_date).format("Do MMM YY")}</TableCell>
                <TableCell>{moment(event.end_date).format("Do MMM YY")}</TableCell>
                <TableCell>
                  <div className="flex flex-row items-center justify-center gap-3  ">
                    <ModalUpdateEvent event={event} />
                    <AlertDialogDelete eventId={event.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
