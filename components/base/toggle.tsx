import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cn } from "@/lib/utils/tailwind-variants";

export function Toggle({ className, ...props }: TogglePrimitive.Props) {
  return (
    <TogglePrimitive
      className={cn(
        "relative isolate inline-flex size-10 cursor-pointer select-none items-center justify-center rounded-full bg-neutral-3 px-6 text-label-14 text-neutral-12 outline-0 outline-transparent transition-colors hover:bg-neutral-4 focus-visible:z-10 focus-visible:outline-3 focus-visible:outline-primary-8 data-disabled:cursor-not-allowed data-pressed:bg-neutral-5 data-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}
