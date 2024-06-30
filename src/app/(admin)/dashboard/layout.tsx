"use client";

import { checkUser } from "@/app/actions/user";
import SideNav from "@/components/ui/dashboard/sidenav";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  async function checkAuth() {
    setIsLoading(true);
    try {
      await checkUser();
      setIsAuth(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsAuth(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="flex w-full h-screen items-center justify-center z-20">
        <PuffLoader color="#0ea5e9" loading={true} size={60} speedMultiplier={1} />
      </div>
    );
  }
  return isAuth ? (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  ) : (
    router.push("/login")
  );
}
