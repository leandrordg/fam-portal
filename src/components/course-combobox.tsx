"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { Course } from "@prisma/client";
import { ArrowUpDownIcon, CheckIcon } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  courses: Course[] | null;
};

export function CourseCombobox({ disabled, courses, value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-10"
          disabled={disabled}
        >
          {value
            ? courses?.find((course) => course.id === value)?.title
            : "Selecione o curso"}
          <ArrowUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0">
        <Command>
          <CommandInput placeholder="Buscar curso..." />
          <CommandList>
            <CommandEmpty>Nenhum curso encontrado.</CommandEmpty>
            <CommandGroup>
              {courses?.map((course) => (
                <CommandItem
                  key={course.id}
                  value={course.id}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {course.title}
                  <CheckIcon
                    className={cn(
                      "ml-auto size-4",
                      value === course.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
