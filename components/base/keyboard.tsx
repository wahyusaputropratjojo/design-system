"use client";

import type { ComponentProps } from "react";
import { Keyboard as KeyboardPrimitive } from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

const keyboardVariants = tv({
  base: "inline-flex select-none items-center border border-gray-400 bg-gray-100 px-1.5 py-0.5 font-sans text-gray-1000 text-label-12",
  defaultVariants: {
    intent: "primary",
    shape: "square",
  },
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-md",
    },
  },
});

type KeyboardProps = Omit<
  ComponentProps<typeof KeyboardPrimitive>,
  "className"
> &
  VariantProps<typeof keyboardVariants>;

export function Keyboard({ shape, ...props }: KeyboardProps) {
  return (
    <KeyboardPrimitive
      className={keyboardVariants({
        shape,
      })}
      data-slot="keyboard"
      {...props}
    />
  );
}
