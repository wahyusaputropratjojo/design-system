import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "tailwind-variants";
import { cn, tv } from "@/lib/utils/tailwind-variants";

const buttonVariants = tv({
  base: "relative isolate inline-flex cursor-pointer select-none items-center justify-center gap-x-(--gap) rounded-full px-(--padding) outline-0 outline-transparent outline-offset-2 transition-colors focus-visible:z-10 focus-visible:outline-3 focus-visible:outline-primary-8 has-[>svg:last-child]:pr-[calc(var(--padding)-calc(var(--gap)/2))] has-[>svg:first-child]:pl-[calc(var(--padding)-calc(var(--gap)/2))] data-disabled:cursor-not-allowed data-disabled:opacity-50 [&_svg]:size-(--icon-size) [&_svg]:shrink-0",
  compoundVariants: [
    {
      className:
        "bg-neutral-3 text-danger-9 not-data-disabled:hover:bg-neutral-4 not-data-disabled:active:bg-neutral-5",
      intent: "secondary",
      status: "danger",
    },
    {
      className:
        "bg-transparent text-danger-9 not-data-disabled:hover:bg-neutral-4 not-data-disabled:active:bg-neutral-5",
      intent: "tertiary",
      status: "danger",
    },
    {
      className: "size-8",
      iconOnly: true,
      size: "sm",
    },
    {
      className: "size-10",
      iconOnly: true,
      size: "md",
    },
    {
      className: "size-12",
      iconOnly: true,
      size: "lg",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
  variants: {
    fullWidth: {
      true: "w-full!",
    },
    iconOnly: {
      true: "p-0!",
    },
    intent: {
      primary:
        "bg-primary-9 text-light not-data-disabled:hover:bg-primary-10 not-data-disabled:active:bg-primary-11",
      secondary:
        "bg-neutral-3 text-neutral-12 not-data-disabled:hover:bg-neutral-4 not-data-disabled:active:bg-neutral-5",
      tertiary:
        "bg-transparent text-neutral-12 not-data-disabled:hover:bg-neutral-4 not-data-disabled:active:bg-neutral-5",
    },
    size: {
      lg: "h-12 text-label-16 [--gap:--spacing(2.5)] [--icon-size:--spacing(5)] [--padding:--spacing(6)]",
      md: "h-10 text-label-14 [--gap:--spacing(2)] [--icon-size:--spacing(4)] [--padding:--spacing(5)]",
      sm: "h-8 text-label-12 [--gap:--spacing(1.5)] [--icon-size:--spacing(4)] [--padding:--spacing(4)]",
    },
    status: {
      danger:
        "bg-danger-9 text-white not-data-disabled:hover:border-danger-8 not-data-disabled:hover:bg-danger-10 focus-visible:outline-danger-8 not-data-disabled:active:bg-danger-11",
    },
  },
});

interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {}

export function Button({
  size,
  intent,
  status,
  iconOnly,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={cn(
        buttonVariants({
          fullWidth,
          iconOnly,
          intent,
          size,
          status,
        }),
        className,
      )}
      {...props}
    />
  );
}
