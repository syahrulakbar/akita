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
import { useRouter } from "next/navigation";
import { signIn } from "@/actions/user";

const FormSchema = z.object({
  email: z
    .string({
      message: "Email is required",
    })
    .email({
      message: "Email must be a valid email address.",
    }),
  password: z
    .string({
      message: "Password is required",
    })
    .min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await signIn(data);
      toast({
        title: "Success Login",
        description: "You have successfully logged in.",
      });
      form.reset({
        email: "",
        password: "",
      });

      router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again later.",
      });
    }
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" type="email" {...field} />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*******" type="password" {...field} />
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
