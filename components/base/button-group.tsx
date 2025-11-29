"use client";

import type { ComponentProps } from "react";
import { ButtonContext } from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

const buttonGroupVariants = tv({
	base: "flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
	defaultVariants: {
		orientation: "horizontal",
	},
	variants: {
		orientation: {
			horizontal:
				"[&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none",
			vertical:
				"[&>*:not(:first-child)]:-mt-px flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none",
		},
	},
});

type ButtonGroupProps = { isDisabled?: boolean } & ComponentProps<"div"> &
	VariantProps<typeof buttonGroupVariants>;

export function ButtonGroup({
	isDisabled,
	orientation,
	children,
	...props
}: ButtonGroupProps) {
	return (
		<div
			className={buttonGroupVariants({ orientation })}
			data-orientation={orientation}
			{...props}
		>
			<ButtonContext.Provider value={{ isDisabled }}>
				{children}
			</ButtonContext.Provider>
		</div>
	);
}
