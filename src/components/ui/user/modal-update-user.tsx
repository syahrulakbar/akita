"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";

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
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../select";
import { UsersTable } from "@/lib/definitions";
import { updateUserById } from "@/actions/user";

const FormSchema = z.object({
  name: z
    .string({
      message: "Event Name is required",
    })
    .min(3, "Event Name must be at least 3 characters"),
  email: z.string().email({
    message: "Email must be a valid email address.",
  }),
  password: z.string().optional(),
  roleId: z.string({
    message: "role is required",
  }),
});

export function ModalUpdateUser({ user }: { user: UsersTable }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { id, name, email, roleId } = user;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name,
      email,
      password: "",
      roleId: roleId.toString(),
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      if (data.password === "") {
        delete data.password;
      }
      await updateUserById(id, data);
      setOpen(false);
      toast({
        title: "Success Update User",
        description: "Refresh the page to see the changes.",
      });
      form.reset({
        name,
        email,
        password: "",

        roleId: roleId.toString(),
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error Update User",
        description: "Please try again.",
      });
    }
  }
  useEffect(() => {
    if (open) {
      form.reset({
        name,
        email,
        password: "",

        roleId: roleId.toString(),
      });
    }
  }, [open, form]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Pencil size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update User</DialogTitle>
          <DialogDescription>{`Update user here. Click save when you're done.`}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
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
                    <Input type="email" placeholder="johndoe@gmail.com" {...field} />
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
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roleId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role account" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Role Account</SelectLabel>
                        <SelectItem value="1">Admin</SelectItem>
                        <SelectItem value="2">Superadmin</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
