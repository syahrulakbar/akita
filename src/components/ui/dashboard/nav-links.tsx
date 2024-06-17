"use client";

import { UserGroupIcon, HomeIcon, TicketIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Tickets",
    href: "/dashboard/tickets",
    icon: TicketIcon,
  },

  { name: "Events", href: "/dashboard/events", icon: CalendarDaysIcon },
  { name: "Users", href: "/dashboard/users", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow  items-center justify-center gap-2 rounded-md border p-3 text-sm font-medium  hover:text-sky-500 hover:dark:text-sky-500 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "text-sky-500 dark:text-sky-500 border-sky-500 dark:border-sky-500":
                  pathname === link.href,
                "text-black dark:text-white ": pathname !== link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
