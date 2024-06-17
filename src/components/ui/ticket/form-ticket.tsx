"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { addTicket } from "@/actions/ticket";

const MAX_FILE_SIZE = 1024 * 1024 * 3;
const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
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
  proof_of_payment: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, "File size should be less than 3MB")
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    ),
});

export function FormTicket({ eventId }: { eventId: string }) {
  const searchParams = useSearchParams();
  const ticketName = searchParams.get("ticketName");
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      total_ticket: 1,
      proof_of_payment: selectedImage,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await addTicket({ ...data, eventId });
      toast({
        title: "Congratulation! Your ticket has been submitted!",
        description: "We will contact you soon",
      });
      form.reset({
        name: "",
        email: "",
        total_ticket: 1,
        proof_of_payment: selectedImage,
      });

      setSelectedImage(undefined);

      router.push("/ticket/thanks");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later.",
      });
    }
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col text-center">
        <h2 className="font-bold text-xl  md:text-2xl lg:text-3xl">
          Formulir Pembelian {ticketName}
        </h2>
        <p className="text-sm font-light">
          Pastikan teman-teman mengisi data diri dengan benar dan teliti
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:w-2/3 space-y-6">
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
                  <Input placeholder="johndoe@johndoe.com" {...field} />
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

          <FormField
            control={form.control}
            name="proof_of_payment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proof of Payment</FormLabel>
                <div className="flex relative h-[300px] items-center justify-center border rounded-md">
                  {selectedImage ? (
                    <Image
                      alt={"image preview"}
                      src={URL.createObjectURL(selectedImage)}
                      fill
                      objectFit="contain"
                      className="rounded-md "
                    />
                  ) : (
                    <ImagePlus />
                  )}
                  <FormControl>
                    <Input
                      id="picture"
                      type="file"
                      placeholder="Upload Photo"
                      accept="image/*"
                      onBlur={field.onBlur}
                      name={field.name}
                      onChange={(e) => {
                        field.onChange(e.target.files);
                        if (e.target.files && e.target.files.length > 0) {
                          setSelectedImage(e.target.files[0]);
                        }
                      }}
                      ref={field.ref}
                      className=" absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </FormControl>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
