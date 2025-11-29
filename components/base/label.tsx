"use client";

import {
	Label as LabelPrimitive,
	type LabelProps as LabelPrimitiveProps,
} from "react-aria-components";

type LabelProps = Omit<LabelPrimitiveProps, "className">;

export function Label({ ...props }: LabelProps) {
	return (
		<LabelPrimitive
			className="text-gray-1000 text-label-14"
			data-slot="label"
			{...props}
		/>
	);
}
