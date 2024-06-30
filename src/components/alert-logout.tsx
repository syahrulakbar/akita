"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { toast } from "./ui/use-toast";
import { signOut } from "@/app/actions/user";

export function AlertDialogLogout() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/login");
      toast({
        title: "Logout",
        description: "You have successfully logged out.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to logout.",
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex h-[48px] md:w-full w-max grow items-center text-black dark:text-white   justify-center gap-2 rounded-md border p-3 text-sm font-medium   hover:text-sky-500  hover:dark:text-sky-500 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to logout?</AlertDialogTitle>
          <AlertDialogDescription>
            You must login again to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
