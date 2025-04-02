"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ComboboxProps {
    values: { value: string; label: string; shortcut?: string }[];
    prompt: string;
    searchPrompt: string;
    onChange?: (value: string) => void;
    className?: string;
}

export function Combobox({ values, prompt, searchPrompt, className, onChange }: ComboboxProps) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className={cn("w-full justify-between", className)}>
                    {value ? values.find((framework) => framework.value === value)?.label : prompt}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={searchPrompt} />
                    <CommandList>
                        <CommandEmpty>Nothing found.</CommandEmpty>
                        <CommandGroup>
                            {values.map((valueInstance) => (
                                <CommandItem
                                    key={valueInstance.value}
                                    value={valueInstance.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                        onChange && onChange(currentValue);
                                    }}
                                >
                                    <Check className={cn("mr-2 h-4 w-4", value === valueInstance.value ? "opacity-100" : "opacity-0")} />
                                    {valueInstance.label}
                                    {valueInstance.shortcut && <CommandShortcut>{valueInstance.shortcut}</CommandShortcut>}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
