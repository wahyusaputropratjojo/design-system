import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

const badge = tv({
  base: "inline-flex h-6 select-none items-center gap-1 rounded-full px-2 text-label-12 no-underline transition-colors [&>svg]:size-3!",
  defaultVariants: {
    intent: "primary",
  },
  variants: {
    intent: {
      primary: "bg-primary-3 text-primary-12",
      secondary: "bg-neutral-3 text-neutral-12",
    },
  },
});

interface BadgeProps
  extends useRender.ComponentProps<"span">,
    VariantProps<typeof badge> {}

export function Badge({ className, intent, render, ...props }: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: badge({
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
