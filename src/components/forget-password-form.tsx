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
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { resetPassword } from "@/app/actions/user";

const FormSchema = z.object({
  email: z
    .string({
      message: "Email is required",
    })
    .email({
      message: "Email must be a valid email address.",
    }),
});

export default function ForgetPasswordForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await resetPassword(data);
      router.push("/login");
      toast({
        title: "Token Sent",
        description: "Check your email for the reset link.",
      });
      form.reset({
        email: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again later.",
      });
    }
  }

  return (
    <div className="space-y-3">
      <a href="http://" target="_blank" rel="noopener noreferrer"></a>
      <div className="flex-1 rounded-lg  px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-xl`}>Recover Password</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={!form.formState.isDirty || form.formState.isSubmitting}
              type="submit"
              className="w-full"
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Submit"
              )}
            </Button>
            <div className="flex justify-start text-sm">
              <Link href="/login" className="text-blue-500 hover:underline">
                Back to login
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
