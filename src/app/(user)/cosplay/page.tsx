import ContributorsPage from "@/components/ui/cosplay/contributors";
import { CosplayForm } from "@/components/ui/cosplay/cosplay-form";

export default function CosplayPage() {
  return (
    <div className="mx-auto flex flex-col gap-10 justify-start min-h-screen max-w-7xl px-5 py-10 mt-10 lg:p-20">
      <div className=" flex flex-col gap-3 items-center justify-center">
        <h2 className="font-bold text-4xl text-center">Rekomendasi Cosplay</h2>
        <p className="text-center">{"This feature still on progress"}</p>
      </div>
      <CosplayForm />
      <ContributorsPage />
    </div>
  );
}
