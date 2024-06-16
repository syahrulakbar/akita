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
import { useRouter, useSearchParams } from "next/navigation";

const FormSchema = z.object({
  email: z
    .string({
      message: "Email is required",
    })
    .email({
      message: "Email must be a valid email address.",
    }),
  password: z.string({
    message: "Password is required",
  }),
});

export default function LoginForm() {
  const searchParams = useSearchParams();
  const ticketName = searchParams.get("ticketName");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Congratulation! Your ticket has been submitted!",
      description: "We will contact you soon",
    });
    form.reset({
      email: "",
      password: "",
    });

    setSelectedImage(null);

    router.push("/ticket/thanks");
  }

  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg  px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-xl`}>Please log in to continue.</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
            <FormField
              control={form.control}
              name="email"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@johndoe.com" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
