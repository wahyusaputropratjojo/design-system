import type { ComponentProps } from "react";

type SpinnerProps = ComponentProps<"svg">;

export function Spinner({ ...props }: SpinnerProps) {
	return (
		<svg
			className="animate-spin"
			fill="none"
			height="24"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Spinner Icon</title>
			<g>
				<circle cx="12" cy="12" r="9" strokeOpacity="0.5" />
				<path d="M3,12c0,-4.967 4.033,-9 9,-9" />
			</g>
		</svg>
	);
}
