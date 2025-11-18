"use client";

import type { ReactNode, Ref } from "react";
import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
} from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { Spinner } from "@/components/base/spinner";
import { tv } from "@/lib/utils/tailwind-variants";

const buttonVariants = tv({
  base: "group relative isolate inline-flex w-fit shrink-0 cursor-pointer pending:cursor-not-allowed select-none items-center justify-center gap-x-(--gap) rounded-lg border px-(--padding) outline-0 outline-transparent outline-offset-2 pending:brightness-50 transition-colors focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-neutral-12 disabled:cursor-not-allowed disabled:brightness-50 has-[>[data-slot='suffix']]:pr-[calc(var(--padding)-calc(var(--gap)/2))] has-[>[data-slot='prefix']]:pl-[calc(var(--padding)-calc(var(--gap)/2))] [&_svg]:shrink-0",
  compoundVariants: [
    {
      className:
        "border-danger-7 pressed:border-danger-8 bg-danger-3 pressed:bg-danger-4 text-neutral-12 hover:border-danger-8 hover:bg-danger-4",
      intent: "secondary",
      status: "danger",
    },
    {
      className: "size-6",
      iconOnly: true,
      size: "xs",
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
      true: "p-0",
    },
    intent: {
      primary:
        "border-primary-7 pressed:border-primary-8 bg-primary-9 pressed:bg-primary-10 text-neutral-12 hover:border-primary-8 hover:bg-primary-10",
      secondary:
        "border-neutral-7 pressed:border-neutral-8 bg-neutral-3 pressed:bg-neutral-4 text-neutral-12 hover:border-neutral-8 hover:bg-neutral-4",
    },
    size: {
      lg: "h-12 text-button-16 [--gap:--spacing(2.5)] [--padding:--spacing(5)] [&_svg]:size-5",
      md: "h-10 text-button-14 [--gap:--spacing(2)] [--padding:--spacing(4)] [&_svg]:size-4",
      sm: "h-8 text-button-14 [--gap:--spacing(1.5)] [--padding:--spacing(3)] [&_svg]:size-4",
      xs: "h-6 text-button-12 [--gap:--spacing(1)] [--padding:--spacing(2)] [&_svg]:size-3.5",
    },
    status: {
      danger:
        "border-danger-7 pressed:border-danger-8 bg-danger-9 pressed:bg-danger-10 text-neutral-12 hover:border-danger-8 hover:bg-danger-10",
    },
  },
});

type ButtonProps = {
  ref?: Ref<HTMLButtonElement>;
  suffix?: ReactNode;
  prefix?: ReactNode;
  children?: ReactNode;
} & Omit<ButtonPrimitiveProps, "className" | "children"> &
  VariantProps<typeof buttonVariants>;

export function Button({
  size,
  ref,
  intent,
  status,
  iconOnly,
  fullWidth,
  suffix,
  prefix,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={buttonVariants({
        fullWidth,
        iconOnly,
        intent,
        size,
        status,
      })}
      ref={ref}
      {...props}
    >
      {({ isPending }) => {
        if (isPending && iconOnly) {
          return <Spinner />;
        }

        if (isPending) {
          return (
            <>
              <span data-slot="prefix">
                <Spinner />
              </span>
              <span data-slot="children">{children}</span>
            </>
          );
        }

        return (
          <>
            {prefix && <span data-slot="prefix">{prefix}</span>}
            <span data-slot="children">{children}</span>
            {suffix && <span data-slot="suffix">{suffix}</span>}
          </>
        );
      }}
    </ButtonPrimitive>
  );
}
