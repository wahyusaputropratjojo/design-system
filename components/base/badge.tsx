import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex select-none items-center rounded-full px-2 py-1 text-label-12",
  defaultVariants: {
    intent: "primary",
  },
  variants: {
    intent: {
      primary: "bg-primary-3 text-primary-9",
      secondary: "bg-neutral-3 text-neutral-12",
    },
  },
});

export type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, intent, ...props }: BadgeProps) {
  return (
    <span
      className={badgeVariants({
        className,
        intent,
      })}
      {...props}
    />
  );
}
