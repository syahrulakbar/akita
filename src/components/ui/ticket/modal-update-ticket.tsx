"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ImagePlus, Pencil } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TicketsTable } from "@/lib/definitions";
import Image from "next/image";
import { updateTicketById } from "@/actions/ticket";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../select";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  status: z.string().min(2, {
    message: "Status must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be a valid email address.",
  }),
  total_ticket: z.coerce
    .number({
      required_error: "Total ticket is required",
      invalid_type_error: "Total ticket must be a number",
    })
    .int()
    .positive()
    .min(1, { message: "Total ticket should be at least 1" }),
});

export function ModalUpdateTicket({ ticket }: { ticket: TicketsTable }) {
  const { id, name, email, proof_of_payment, status, total_ticket } = ticket;

  const router = useRouter();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      status,
      name,
      email,
      total_ticket,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await updateTicketById(id, data);
      setOpen(false);
      toast({
        title: "Success Update Event",
        description: "Refresh the page if not see the changes.",
      });
      form.reset({
        status,
        name,
        email,
        total_ticket,
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error Update Event",
        description: "Please try again.",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Pencil size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]   overflow-y-scroll max-h-full md:max-w-screen-lg p-5 lg:p-10">
        <DialogHeader>
          <DialogTitle>Update Ticket</DialogTitle>
          <DialogDescription>{`Update ticket here. Click save when you're done.`}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 o">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status ticket" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="total_ticket"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Ticket</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min={1} max={20} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex relative h-[500px] items-center justify-center border rounded-md">
              {proof_of_payment ? (
                <Image
                  alt={"image preview"}
                  src={proof_of_payment}
                  fill
                  objectFit="contain"
                  className="rounded-md "
                />
              ) : (
                <ImagePlus />
              )}
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
