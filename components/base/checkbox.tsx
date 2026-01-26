import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-variants";

export function Checkbox({
  className,
  ...props
}: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "flex size-5 cursor-pointer items-center justify-center rounded-md bg-neutral-3 focus-visible:outline-3 focus-visible:outline-primary-8 focus-visible:outline-offset-2 data-disabled:cursor-not-allowed data-readonly:cursor-default data-disabled:select-none data-checked:bg-primary-9 data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <CheckIcon className="size-3.5 shrink-0 stroke-2 text-white" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
