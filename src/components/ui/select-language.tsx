"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export function SelectLanguage() {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const onChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`, { scroll: false });
    });
  };
  return (
    <Select onValueChange={onChange} disabled={isPending}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="id">Indonesia</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
