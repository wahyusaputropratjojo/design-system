import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { cn } from "@/lib/utils/tailwind-variants";

export function Slider({ className, ...props }: SliderPrimitive.Root.Props) {
  return (
    <SliderPrimitive.Root
      className={cn("flex flex-col gap-4", className)}
      thumbAlignment="edge"
      thumbCollisionBehavior="none"
      {...props}
    />
  );
}

export function SliderValue({
  className,
  ...props
}: SliderPrimitive.Value.Props) {
  return (
    <SliderPrimitive.Value
      className={cn("self-end text-label-14 tabular-nums", className)}
      {...props}
    />
  );
}

export function SliderControl({
  className,
  ...props
}: SliderPrimitive.Control.Props) {
  return (
    <SliderPrimitive.Control
      className={cn("flex touch-none select-none items-center", className)}
      {...props}
    />
  );
}

export function SliderTrack({
  className,
  ...props
}: SliderPrimitive.Track.Props) {
  return (
    <SliderPrimitive.Track
      className={cn(
        "h-1.5 w-full select-none rounded-full bg-neutral-9",
        className,
      )}
      {...props}
    />
  );
}

export function SliderIndicator({
  className,
  ...props
}: SliderPrimitive.Indicator.Props) {
  return (
    <SliderPrimitive.Indicator
      className={cn("select-none rounded-full bg-primary-9", className)}
      {...props}
    />
  );
}

export function SliderThumb({
  className,
  ...props
}: SliderPrimitive.Thumb.Props) {
  return (
    <SliderPrimitive.Thumb
      className={cn(
        "h-4.5 w-7.5 select-none rounded-full bg-white shadow-black/50 shadow-xs outline-0 outline-transparent transition-colors has-focus-visible:outline-3 has-focus-visible:outline-primary-8",
        className,
      )}
      {...props}
    />
  );
}
