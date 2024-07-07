import LoginForm from "@/components/login-form";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="space-y-2.6 relative mx-auto flex w-full max-w-[400px] flex-col p-4 md:-mt-32">
        <div className="flex items-center justify-center relative h-20 w-full  rounded-lg bg-slate-100 p-3 md:h-36">
          <Image alt="logo" src={"/images/akita.png"} fill className="object-contain" />
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
