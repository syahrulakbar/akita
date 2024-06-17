"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertDialogDelete } from "@/components/alert-delete";
import { toast } from "../use-toast";
import { useRouter } from "next/navigation";
import Search from "@/components/search";
import { ModalAddUser } from "./modal-add-user";
import { UsersTable } from "@/lib/definitions";
import { ModalUpdateUser } from "./modal-update-user";
import { deleteUserById } from "@/actions/user";

export default function TableUser({ users }: { users: UsersTable[] }) {
  const router = useRouter();
  const handleDelete = async (id: string) => {
    try {
      await deleteUserById(id);
      toast({
        title: "Success Delete User",
        description: "Refresh the page to see the changes.",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error Delete User",
        description: "Please try again.",
      });
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
        <Search placeholder={"Search by name, email"} />
        <ModalAddUser />
      </div>
      <Table>
        <TableCaption>A list of your recent users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users &&
            users.length > 0 &&
            users.map((user, index) => {
              const { id, name, email, role } = user;

              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell className="capitalize">{role.role}</TableCell>
                  <TableCell>
                    <div className="flex flex-row items-center justify-center gap-3  ">
                      <ModalUpdateUser user={user} />
                      <AlertDialogDelete name="user" handleDelete={() => handleDelete(id)} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
