import type { HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex items-center border px-1.5 py-0.5 text-label-12",
  defaultVariants: {
    intent: "primary",
    shape: "circle",
  },
  variants: {
    intent: {
      primary: "border-gray-900 bg-gray-1000 text-gray-100",
      secondary: "border-gray-400 bg-gray-100 text-gray-1000",
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-md",
    },
  },
});

export type BadgeProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ children, intent, shape, ...props }: BadgeProps) {
  return (
    <span className={badgeVariants({ intent, shape })} {...props}>
      {children}
    </span>
  );
}
