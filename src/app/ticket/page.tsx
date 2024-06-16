import { FormTicket } from "@/components/form-ticket";

export default function Page() {
  return (
    <div className="mx-auto flex flex-col gap-3 items-center min-h-screen max-w-7xl px-5 py-10 mt-5 lg:p-20 justify-center">
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-bold text-3xl">Formulir Pembelian Ticket</h2>
        <p className="text-sm font-light">
          Pastikan teman-teman mengisi data diri dengan benar dan teliti
        </p>
      </div>
      <FormTicket />
    </div>
  );
}
