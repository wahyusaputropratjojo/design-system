"use client";

import {
  Separator as SeparatorPrimitive,
  type SeparatorProps as SeparatorPrimitiveProps,
} from "react-aria-components";

export type SeparatorProps = Omit<SeparatorPrimitiveProps, "className">;

export function Separator({
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive
      className="h-full"
      orientation={orientation}
      {...props}
    />
  );
}
