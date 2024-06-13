import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Index");
  return (
    <section className="mx-auto max-w-7xl bg-akita min-h-[40vh] rounded-none lg:rounded-lg flex flex-col gap-5 items-center justify-center px-5 lg:px-0">
      <div>
        <p className="text-sky-500 bg-sky-100 rounded-full inline-block px-5 py-1">
          {t("contact-us")}
        </p>
      </div>
      <h2 className="font-bold text-center text-2xl lg:text-4xl text-white">{t("whatsapp")}</h2>
      <Button className="bg-green-400 px-10 rounded-full text-white hover:dark:text-black text-lg">
        Whatsapp <Phone className="ml-2 h-4 w-4" />
      </Button>
    </section>
  );
}
