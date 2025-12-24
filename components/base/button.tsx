"use client";

import type { Ref } from "react";
import type { ButtonProps as ButtonPrimitiveProps } from "react-aria-components";
import {
  Button as ButtonPrimitive,
  composeRenderProps,
} from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { Spinner } from "@/components/base/spinner";
import { tv } from "@/lib/utils/tailwind-variants";

const buttonVariants = tv({
  base: "relative isolate inline-flex cursor-pointer pending:cursor-not-allowed select-none items-center justify-center gap-x-(--gap) rounded-full px-(--padding) pending:opacity-50 outline-0 outline-transparent outline-offset-2 transition-colors focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-neutral-12 disabled:cursor-not-allowed disabled:opacity-50 has-[>svg:last-child]:pr-[calc(var(--padding)-calc(var(--gap)/2))] has-[>svg:first-child]:pl-[calc(var(--padding)-calc(var(--gap)/2))] [&_svg]:size-(--icon-size) [&_svg]:shrink-0",
  compoundVariants: [
    {
      className:
        "bg-danger-3 pressed:bg-danger-4 text-danger-9 hover:bg-danger-4",
      intent: "secondary",
      status: "danger",
    },
    {
      className: "size-8",
      isIconOnly: true,
      size: "sm",
    },
    {
      className: "size-10",
      isIconOnly: true,
      size: "md",
    },
    {
      className: "size-12",
      isIconOnly: true,
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
    intent: {
      primary:
        "bg-primary-9 pressed:bg-primary-10 text-light hover:bg-primary-10",
      secondary:
        "bg-neutral-3 pressed:bg-neutral-4 text-primary-9 hover:bg-neutral-4",
      tertiary:
        "bg-neutral-3 pressed:bg-neutral-4 text-neutral-12 hover:bg-neutral-4",
    },
    isIconOnly: {
      true: "p-0!",
    },
    size: {
      lg: "h-12 text-label-16 [--gap:--spacing(2.5)] [--icon-size:--spacing(5)] [--padding:--spacing(6)]",
      md: "h-10 text-label-14 [--gap:--spacing(2)] [--icon-size:--spacing(4)] [--padding:--spacing(5)]",
      sm: "h-8 text-label-12 [--gap:--spacing(1.5)] [--icon-size:--spacing(4)] [--padding:--spacing(4)]",
    },
    status: {
      danger:
        "border-danger-7 pressed:border-danger-8 bg-danger-9 pressed:bg-danger-10 text-white hover:border-danger-8 hover:bg-danger-10",
    },
  },
});

type ButtonProps = {
  ref?: Ref<HTMLButtonElement>;
  className?: string;
} & Omit<ButtonPrimitiveProps, "className"> &
  VariantProps<typeof buttonVariants>;

export function Button({
  size,
  ref,
  intent,
  status,
  isIconOnly,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={buttonVariants({
        className,
        fullWidth,
        intent,
        isIconOnly,
        size,
        status,
      })}
      ref={ref}
      {...props}
    >
      {composeRenderProps(props.children, (children, { isPending }) => (
        <>
          {isPending && <Spinner />}
          {children}
        </>
      ))}
    </ButtonPrimitive>
  );
}
