import ResetPasswordForm from "@/components/reset-password-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
};

export default function Page({ params: { token } }: { params: { token: string } }) {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="space-y-2.6 relative mx-auto flex w-full max-w-[400px] flex-col p-4 md:-mt-32">
        <ResetPasswordForm token={token} />
      </div>
    </main>
  );
}
