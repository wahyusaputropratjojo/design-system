import { createTV } from "tailwind-variants";

export type { VariantProps } from "tailwind-variants";

const fontSize = {
	button: ["button-12", "button-14", "button-16"],
	heading: [
		"heading-14",
		"heading-16",
		"heading-20",
		"heading-24",
		"heading-32",
		"heading-40",
		"heading-48",
		"heading-56",
		"heading-64",
		"heading-72",
	],
	label: [
		"label-12",
		"label-13",
		"label-14",
		"label-16",
		"label-18",
		"label-20",
	],
	paragraph: [
		"paragraph-13",
		"paragraph-14",
		"paragraph-16",
		"paragraph-18",
		"paragraph-20",
		"paragraph-24",
	],
};

export const tv = createTV({
	twMerge: true,
	twMergeConfig: {
		extend: {
			theme: {
				text: Object.values(fontSize).flat(),
			},
		},
	},
});
