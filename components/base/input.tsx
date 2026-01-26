import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "@/lib/utils/tailwind-variants";

export function Input({ className, ...props }: InputPrimitive.Props) {
  return (
    <InputPrimitive
      className={cn(
        "h-10 rounded-xl border border-neutral-6 bg-neutral-3 p-3 text-paragraph-14 outline-0 outline-transparent outline-offset-2 transition-colors focus:outline-3 focus:outline-primary-8",
        className,
      )}
      {...props}
    />
  );
}
