import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { cn, tv } from "@/lib/utils/tailwind-variants";

const switchVariants = tv({
  base: "group relative isolate inline-flex cursor-pointer items-center gap-2 rounded-full bg-neutral-9 text-label-14 outline-0 outline-transparent outline-offset-2 transition-colors focus-visible:outline-3 focus-visible:outline-primary-8 data-disabled:cursor-not-allowed data-checked:bg-primary-9 data-disabled:opacity-50",
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: "h-7 w-16 [--indicator-end:22px] [--indicator-height:24px] [--indicator-start:2px] [--indicator-width:40px]",
      md: "h-5.25 w-12 [--indicator-end:16.5px] [--indicator-height:18px] [--indicator-start:1.5px] [--indicator-width:30px]",
      sm: "h-3.5 w-8 [--indicator-end:11px] [--indicator-height:12px] [--indicator-start:1px] [--indicator-width:20px]",
    },
  },
});

type SwitchProps = ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>;

export function Switch({ size, className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        switchVariants({
          size,
        }),
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="relative h-(--indicator-height) w-(--indicator-width) translate-x-(--indicator-start) rounded-full bg-white transition duration-100 ease-linear data-checked:translate-x-(--indicator-end)" />
    </SwitchPrimitive.Root>
  );
}
