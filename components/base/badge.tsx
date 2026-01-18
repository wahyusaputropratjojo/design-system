import type { HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex items-center rounded-full px-2 py-1 text-label-12",
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

export type BadgeProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ children, className, intent, ...props }: BadgeProps) {
  return (
    <span
      className={badgeVariants({
        className,
        intent,
      })}
      {...props}
    >
      {children}
    </span>
  );
}
