"use client";

import type { ReactNode } from "react";
import type { CheckboxGroupProps as CheckboxGroupPrimitiveProps } from "react-aria-components";
import { CheckboxGroup as CheckboxGroupPrimitive } from "react-aria-components";

export type CheckboxGroupProps = {
	children?: ReactNode;
	label?: string;
	description?: string;
} & Omit<CheckboxGroupPrimitiveProps, "className" | "children">;

export function CheckboxGroup({
	children,
	description,
	label,
	...props
}: CheckboxGroupProps) {
	return (
		<CheckboxGroupPrimitive
			className="space-y-3 has-[[slot=description]]:space-y-6"
			{...props}
		>
			{label || description ? (
				<div className="space-y-1">
					{label && (
						<p className="text-gray-1000 text-label-16" slot="label">
							{label}
						</p>
					)}
					{description && (
						<p className="text-gray-900 text-label-14" slot="description">
							{description}
						</p>
					)}
				</div>
			) : null}
			{children}
		</CheckboxGroupPrimitive>
	);
}
