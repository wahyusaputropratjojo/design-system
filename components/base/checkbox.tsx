"use client";

import { CheckIcon, MinusIcon } from "lucide-react";
import type { CheckboxProps as CheckboxPrimitiveProps } from "react-aria-components";
import { Checkbox as CheckboxPrimitive } from "react-aria-components";

export type CheckboxProps = {
	label?: string;
	description?: string;
} & Omit<CheckboxPrimitiveProps, "className" | "children">;

export function Checkbox({ label, description, ...props }: CheckboxProps) {
	return (
		<CheckboxPrimitive
			className="group relative flex w-fit cursor-pointer gap-3 read-only:cursor-default disabled:cursor-not-allowed disabled:select-none disabled:brightness-50"
			{...props}
		>
			{({ isIndeterminate }) => (
				<>
					<span className="flex size-5 shrink-0 items-center justify-center rounded-sm border-1 border-gray-400 bg-gray-100 group-indeterminate:bg-gray-1000 group-invalid:border-red-400 group-invalid:bg-red-100 group-focus-visible:border-gray-500 group-focus-visible:outline-2 group-focus-visible:outline-gray-1000 group-focus-visible:outline-offset-2 group-focus-visible:group-invalid:border-red-500 group-selected:bg-gray-1000 group-selected:group-invalid:bg-red-800">
						{isIndeterminate ? (
							<MinusIcon
								aria-hidden="true"
								className="text-gray-100 group-selected:group-invalid:text-gray-1000"
							/>
						) : (
							<CheckIcon
								aria-hidden="true"
								className="hidden text-gray-100 group-selected:block group-selected:group-invalid:text-gray-1000"
							/>
						)}
					</span>
					{label || description ? (
						<div className="space-y-1">
							<p className="text-pretty text-label-16">{label}</p>
							<p className="text-pretty text-gray-900 text-label-14">
								{description}
							</p>
						</div>
					) : null}
				</>
			)}
		</CheckboxPrimitive>
	);
}
