"use client";

import type { SwitchProps as SwitchPrimitiveProps } from "react-aria-components";
import { Switch as SwitchPrimitive } from "react-aria-components";

type SwitchProps = Omit<SwitchPrimitiveProps, "className" | "children">;

export function Switch({ ...props }: SwitchProps) {
  return (
    <SwitchPrimitive
      className="group relative inline-flex cursor-pointer items-center gap-2 text-label-14 disabled:cursor-not-allowed disabled:brightness-50"
      {...props}
    >
      <span className="relative isolate inline-flex h-6 w-10 items-center rounded-full border border-gray-400 bg-gray-100 outline-0 outline-transparent outline-offset-2 transition-colors group-focus-visible:z-10 group-focus-visible:outline-3 group-focus-visible:outline-gray-1000 group-selected:border-blue-400 group-selected:bg-blue-700">
        <span className="relative size-5 translate-x-px rounded-full bg-gray-1000 transition duration-150 ease-in-out group-selected:translate-x-[17px]" />
      </span>
    </SwitchPrimitive>
  );
}
