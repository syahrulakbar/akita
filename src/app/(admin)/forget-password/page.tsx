import ForgetPasswordForm from "@/components/forget-password-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forget Password",
};

export default function Page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="space-y-2.6 relative mx-auto flex w-full max-w-[400px] flex-col p-4 md:-mt-32">
        <ForgetPasswordForm />
      </div>
    </main>
  );
}
