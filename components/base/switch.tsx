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
			<span className="relative isolate inline-flex h-7 w-16 items-center rounded-full bg-neutral-9 outline-0 outline-transparent outline-offset-2 transition-colors group-focus-visible:z-10 group-focus-visible:outline-3 group-focus-visible:outline-neutral-12 group-selected:border-primary-7 group-selected:bg-primary-9">
				<span className="relative h-6 w-10 translate-x-0.5 rounded-full bg-white transition duration-150 ease-in-out group-selected:translate-x-[22px]" />
			</span>
		</SwitchPrimitive>
	);
}
