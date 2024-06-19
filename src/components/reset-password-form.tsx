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
import { notFound, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { changePassword, verifyToken } from "@/actions/user";

const FormSchema = z.object({
  password: z
    .string({
      message: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
});

export default function ResetPasswordForm({ token }: { token: string }) {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await changePassword({ ...data, token });
      toast({
        title: "Reset Password",
        description: "Successfully reset your password. Please login.",
      });
      form.reset({
        password: "",
      });
      router.push("/login");
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again later.",
      });
    }
  }

  const verifyTokenResetPassword = async (token: string) => {
    try {
      setIsLoading(true);
      await verifyToken(token);
      setIsVerified(true);
      setIsLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again later.",
      });
      setIsVerified(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    verifyTokenResetPassword(token);
  }, [token]);

  if (isLoading) {
    return (
      <div className="space-y-3">
        <div className="flex-1 rounded-lg  px-6 pb-4 pt-8 text-center">
          <h1 className={`mb-3 text-xl`}>Verifying Token</h1>
          <div className="flex justify-center">
            <Loader2 className="h-10 w-10 animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {isVerified ? (
        <div className="space-y-3">
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          <div className="flex-1 rounded-lg  px-6 pb-4 pt-8">
            <h1 className={`mb-3 text-xl`}>Reset your Password</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input placeholder="******" type="password" {...field} />
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
              </form>
            </Form>
          </div>
        </div>
      ) : (
        notFound()
      )}
    </>
  );
}
