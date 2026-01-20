import type { ComponentProps } from "react";
import { cn } from "@/lib/utils/tailwind-variants";

type LabelProps = ComponentProps<"label">;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn("text-gray-1000 text-label-14", className)}
      {...props}
    />
  );
}
