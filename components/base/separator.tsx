import type { SeparatorProps as SeparatorBaseProps } from "@base-ui/react/separator";
import { Separator as SeparatorBase } from "@base-ui/react/separator";
import { cn } from "@/lib/utils/tailwind-variants";

export type SeparatorProps = {
  className?: string;
} & Omit<SeparatorBaseProps, "className">;

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <SeparatorBase className={cn("w-px bg-neutral-6", className)} {...props} />
  );
}
