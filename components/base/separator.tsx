import { Separator as SeparatorBase } from "@base-ui/react/separator";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils/tailwind-variants";

export type SeparatorProps = ComponentProps<typeof SeparatorBase>;

export function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <SeparatorBase
      className={cn(
        "shrink-0 bg-neutral-6 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch",
        className,
      )}
      orientation={orientation}
      {...props}
    />
  );
}
