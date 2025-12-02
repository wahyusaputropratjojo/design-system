"use client";

import type { CheckboxProps as CheckboxPrimitiveProps } from "react-aria-components";
import { Checkbox as CheckboxPrimitive } from "react-aria-components";

export type CheckboxProps = Omit<CheckboxPrimitiveProps, "className">;

export function Checkbox({ children, ...props }: CheckboxProps) {
	return (
		<CheckboxPrimitive
			className="group relative flex w-fit cursor-pointer items-center gap-2 text-label-14 read-only:cursor-default disabled:cursor-not-allowed disabled:select-none disabled:brightness-50"
			{...props}
		>
			{({ isIndeterminate }) => (
				<>
					<div className="flex size-4.5 shrink-0 items-center justify-center rounded-md border border-neutral-7 bg-neutral-3 outline-neutral-12 transition-colors group-indeterminate:border-primary-7 group-indeterminate:bg-primary-9 group-invalid:border-danger-7 group-invalid:bg-danger-3 group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-selected:border-primary-7 group-selected:bg-primary-9 group-selected:group-invalid:border-danger-7 group-selected:group-invalid:bg-danger-9">
						<svg
							aria-hidden="true"
							className="size-3.5 shrink-0 text-white"
							fill="none"
							role="graphics-symbol"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							{isIndeterminate ? (
								<path d="M5 12h14" />
							) : (
								<path
									className="opacity-0 transition ease-in-out group-selected:opacity-100"
									d="M20 6 9 17l-5-5"
								/>
							)}
						</svg>
					</div>
					{children}
				</>
			)}
		</CheckboxPrimitive>
	);
}
