"use client";

import type { SwitchProps as SwitchPrimitiveProps } from "react-aria-components";
import { Switch as SwitchPrimitive } from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

type SwitchProps = Omit<SwitchPrimitiveProps, "className" | "children"> &
	VariantProps<typeof switchVariants>;

const switchVariants = tv({
	base: "group relative isolate inline-flex cursor-pointer items-center gap-2 rounded-full bg-neutral-9 selected:bg-primary-9 text-label-14 outline-0 outline-transparent outline-offset-2 transition-colors focus-visible:z-10 focus-visible:outline-3 focus-visible:outline-neutral-12 disabled:cursor-not-allowed disabled:brightness-50",
	defaultVariants: {
		size: "md",
	},
	variants: {
		size: {
			lg: "h-7 w-16 [--indicator-end:22px] [--indicator-height:24px] [--indicator-start:2px] [--indicator-width:40px]",
			md: "h-5.25 w-12 [--indicator-end:16.5px] [--indicator-height:18px] [--indicator-start:1.5px] [--indicator-width:30px]",
			sm: "h-3.5 w-8 [--indicator-end:11px] [--indicator-height:12px] [--indicator-start:1px] [--indicator-width:20px]",
		},
	},
});

export function Switch({ size, ...props }: SwitchProps) {
	return (
		<SwitchPrimitive className={switchVariants({ size })} {...props}>
			<div className="relative h-(--indicator-height) w-(--indicator-width) translate-x-(--indicator-start) rounded-full bg-white transition duration-100 ease-linear group-selected:translate-x-(--indicator-end)" />
		</SwitchPrimitive>
	);
}
