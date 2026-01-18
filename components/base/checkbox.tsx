import type { CheckboxRootProps as CheckboxRootBaseProps } from "@base-ui/react/checkbox";
import { Checkbox as CheckboxBase } from "@base-ui/react/checkbox";
import { cn } from "@/lib/utils/tailwind-variants";

export type CheckboxProps = {
  className: string;
} & Omit<CheckboxRootBaseProps, "className">;

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxBase.Root
      className={cn(
        "flex size-5 cursor-pointer items-center justify-center rounded-md bg-neutral-3 focus-visible:outline-3 focus-visible:outline-primary-8 focus-visible:outline-offset-2 data-disabled:cursor-not-allowed data-readonly:cursor-default data-disabled:select-none data-checked:bg-primary-9 data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxBase.Indicator>
        <svg
          aria-hidden="true"
          className="size-3.5 shrink-0 stroke-2 text-white"
          fill="none"
          role="graphics-symbol"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </CheckboxBase.Indicator>
    </CheckboxBase.Root>
  );
}
