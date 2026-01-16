import type { ButtonProps as ButtonBaseProps } from "@base-ui/react/button";
import { Button as ButtonBase } from "@base-ui/react/button";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

const buttonVariants = tv({
  base: "relative isolate inline-flex cursor-pointer select-none items-center justify-center gap-x-(--gap) rounded-full px-(--padding) outline-0 outline-transparent outline-offset-2 transition-colors focus-visible:z-10 focus-visible:outline-3 focus-visible:outline-primary-9 has-[>svg:last-child]:pr-[calc(var(--padding)-calc(var(--gap)/2))] has-[>svg:first-child]:pl-[calc(var(--padding)-calc(var(--gap)/2))] data-disabled:cursor-not-allowed data-disabled:opacity-50 [&_svg]:size-(--icon-size) [&_svg]:shrink-0",
  compoundVariants: [
    {
      className:
        "bg-danger-3 text-danger-9 not-data-disabled:hover:bg-danger-4",
      intent: "secondary",
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
      primary: "bg-primary-9 text-light not-data-disabled:hover:bg-primary-10",
      secondary:
        "bg-neutral-3 text-primary-9 not-data-disabled:hover:bg-neutral-4",
      tertiary:
        "bg-neutral-3 text-neutral-12 not-data-disabled:hover:bg-neutral-4",
    },
    size: {
      lg: "h-12 text-label-16 [--gap:--spacing(2.5)] [--icon-size:--spacing(5)] [--padding:--spacing(6)]",
      md: "h-10 text-label-14 [--gap:--spacing(2)] [--icon-size:--spacing(4)] [--padding:--spacing(5)]",
      sm: "h-8 text-label-12 [--gap:--spacing(1.5)] [--icon-size:--spacing(4)] [--padding:--spacing(4)]",
    },
    status: {
      danger:
        "border-danger-7 bg-danger-9 text-white not-data-disabled:hover:border-danger-8 not-data-disabled:hover:bg-danger-10",
    },
  },
});

type ButtonProps = {
  className?: string;
} & Omit<ButtonBaseProps, "className"> &
  VariantProps<typeof buttonVariants>;

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
    <ButtonBase
      className={buttonVariants({
        className,
        fullWidth,
        iconOnly,
        intent,
        size,
        status,
      })}
      {...props}
    />
  );
}
