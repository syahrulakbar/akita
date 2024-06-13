import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Index");
  return (
    <div id="home" className="w-full h-screen flex justify-center items-center ">
      <h1>{t("title")}</h1>
    </div>
  );
}
