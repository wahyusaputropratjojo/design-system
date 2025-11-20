import type { HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex items-center rounded-md border px-1.5 py-0.5 text-label-12",
  defaultVariants: {
    intent: "primary",
  },
  variants: {
    intent: {
      primary: "border-primary-7 bg-primary-3 text-neutral-12",
      secondary: "border-neutral-7 bg-neutral-3 text-neutral-12",
    },
  },
});

export type BadgeProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ children, intent, ...props }: BadgeProps) {
  return (
    <span className={badgeVariants({ intent })} {...props}>
      {children}
    </span>
  );
}
