import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";
import SenshiLogo from "@/components/senshi-logo";

export default function SideNav() {
  return (
    <div className="flex h-full  flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md bg-slate-200 p-4 md:h-40"
        href="/"
      >
        <div className="w-32  md:w-40">
          <SenshiLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 text-white dark:text-black">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md border md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center text-black dark:text-white   justify-center gap-2 rounded-md border p-3 text-sm font-medium   hover:text-sky-500  hover:dark:text-sky-500 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
