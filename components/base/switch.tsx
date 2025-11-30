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
			lg: "h-[28px] w-[64px]",
			md: "h-[21px] w-[48px]",
			sm: "h-[14px] w-[32px]",
		},
	},
});

export function Switch({ size, ...props }: SwitchProps) {
	return (
		<SwitchPrimitive className={switchVariants({ size })} {...props}>
			<SwitchIndicator size={size} />
		</SwitchPrimitive>
	);
}

const switchIndicatorVariants = tv({
	base: "relative rounded-full bg-white transition duration-150 ease-in-out",
	variants: {
		size: {
			lg: "h-[24px] w-[40px] translate-x-[2px] group-selected:translate-x-[22px]",
			md: "h-[18px] w-[30px] translate-x-[1.5px] group-selected:translate-x-[16.5px]",
			sm: "h-[12px] w-[20px] translate-x-[1px] group-selected:translate-x-[11px]",
		},
	},
});

type SwitchIndicatorProps = VariantProps<typeof switchIndicatorVariants>;

function SwitchIndicator({ size }: SwitchIndicatorProps) {
	return <span className={switchIndicatorVariants({ size })} />;
}
