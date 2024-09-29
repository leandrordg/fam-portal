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
import type { Class } from "@prisma/client";
import { ArrowUpDownIcon, CheckIcon } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  classes: Class[] | null;
};

export function ClassCombobox({ value, onChange, disabled, classes }: Props) {
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
            ? classes?.find((individualClass) => individualClass.id === value)
                ?.title
            : "Selecione a turma"}
          <ArrowUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0">
        <Command>
          <CommandInput placeholder="Buscar turma..." />
          <CommandList>
            <CommandEmpty>Nenhuma turma encontrada.</CommandEmpty>
            <CommandGroup>
              {classes?.map((individualClass) => (
                <CommandItem
                  key={individualClass.id}
                  value={individualClass.id}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {individualClass.title}
                  <CheckIcon
                    className={cn(
                      "ml-auto size-4",
                      value === individualClass.id ? "opacity-100" : "opacity-0"
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
