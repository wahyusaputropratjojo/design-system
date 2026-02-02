import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./badge.module.css";

export const badgeVariants = cva(styles.base, {
  defaultVariants: {
    intent: "primary",
  },
  variants: {
    intent: {
      primary: styles.intentPrimary,
      secondary: styles.intentSecondary,
    },
  },
});

interface BadgeProps
  extends useRender.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, intent, render, ...props }: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: badgeVariants({
          className,
          intent,
        }),
      },
      props,
    ),
    render,
    state: {
      intent,
      slot: "badge",
    },
  });
}
