import type { ComponentProps } from "react";

type PreviewCard = ComponentProps<"section">;

export function PreviewCard({ ...props }: PreviewCard) {
	return (
		<section
			className="flex min-h-80 flex-col items-center justify-center gap-2 rounded-lg border bg-fd-card sm:flex-row"
			{...props}
		/>
	);
}
