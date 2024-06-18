import { FormTicketSkeleton } from "@/components/skeletons";
import { FormTicket } from "@/components/ui/ticket/form-ticket";
import { Suspense } from "react";

export default function Page({ params }: { params: { ticketId: string } }) {
  return (
    <div className="mx-auto flex flex-col gap-3 items-center min-h-screen max-w-7xl px-5 py-10 mt-10 lg:p-20 justify-center">
      <Suspense fallback={<FormTicketSkeleton />}>
        <FormTicket eventId={params.ticketId} />
      </Suspense>
    </div>
  );
}
