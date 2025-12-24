import type { ClassValue, TVConfig } from "tailwind-variants";
import { cnMerge, createTV } from "tailwind-variants";

const typography = {
  heading: [
    "heading-14",
    "heading-16",
    "heading-18",
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
    "label-10",
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

const colors = {
  black: [
    "black",
  ],
  danger: [
    "danger-1",
    "danger-2",
    "danger-3",
    "danger-4",
    "danger-5",
    "danger-6",
    "danger-7",
    "danger-8",
    "danger-9",
    "danger-10",
    "danger-11",
    "danger-12",
  ],
  dark: [
    "dark",
  ],
  information: [
    "information-1",
    "information-2",
    "information-3",
    "information-4",
    "information-5",
    "information-6",
    "information-7",
    "information-8",
    "information-9",
    "information-10",
    "information-11",
    "information-12",
  ],
  light: [
    "light",
  ],
  neutral: [
    "neutral-1",
    "neutral-2",
    "neutral-3",
    "neutral-4",
    "neutral-5",
    "neutral-6",
    "neutral-7",
    "neutral-8",
    "neutral-9",
    "neutral-10",
    "neutral-11",
    "neutral-12",
  ],
  primary: [
    "primary-1",
    "primary-2",
    "primary-3",
    "primary-4",
    "primary-5",
    "primary-6",
    "primary-7",
    "primary-8",
    "primary-9",
    "primary-10",
    "primary-11",
    "primary-12",
  ],
  success: [
    "success-1",
    "success-2",
    "success-3",
    "success-4",
    "success-5",
    "success-6",
    "success-7",
    "success-8",
    "success-9",
    "success-10",
    "success-11",
    "success-12",
  ],
  warning: [
    "warning-1",
    "warning-2",
    "warning-3",
    "warning-4",
    "warning-5",
    "warning-6",
    "warning-7",
    "warning-8",
    "warning-9",
    "warning-10",
    "warning-11",
    "warning-12",
  ],
  white: [
    "white",
  ],
};

const config: TVConfig = {
  twMerge: true,
  twMergeConfig: {
    extend: {
      theme: {
        color: Object.values(colors).flat(),
        text: Object.values(typography).flat(),
      },
    },
  },
};

export const tv = createTV(config);

export function cn(...classes: ClassValue[]) {
  return cnMerge(...classes)(config);
}
