import { Separator as SeparatorBase } from "@base-ui/react/separator";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils/tailwind-variants";

export type SeparatorProps = ComponentProps<typeof SeparatorBase>;

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <SeparatorBase className={cn("w-px bg-neutral-6", className)} {...props} />
  );
}
