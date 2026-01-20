import { Slider as SliderBase } from "@base-ui/react/slider";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils/tailwind-variants";

export type SliderProps = ComponentProps<typeof SliderBase.Root>;

export function Slider({ className, ...props }: SliderProps) {
  return (
    <SliderBase.Root
      className={cn("flex flex-col gap-4", className)}
      thumbAlignment="edge"
      thumbCollisionBehavior="none"
      {...props}
    />
  );
}

export type SliderValueProps = ComponentProps<typeof SliderBase.Value>;

export function SliderValue({ className, ...props }: SliderValueProps) {
  return (
    <SliderBase.Value
      className={cn("self-end text-label-14 tabular-nums", className)}
      {...props}
    />
  );
}

export type SliderControlProps = ComponentProps<typeof SliderBase.Control>;

export function SliderControl({ className, ...props }: SliderControlProps) {
  return (
    <SliderBase.Control
      className={cn("flex touch-none select-none items-center", className)}
      {...props}
    />
  );
}

export type SliderTrackProps = ComponentProps<typeof SliderBase.Track>;

export function SliderTrack({ className, ...props }: SliderTrackProps) {
  return (
    <SliderBase.Track
      className={cn(
        "h-1.5 w-full select-none rounded-full bg-neutral-9",
        className,
      )}
      {...props}
    />
  );
}

export type SliderIndicatorProps = ComponentProps<typeof SliderBase.Indicator>;

export function SliderIndicator({ className, ...props }: SliderIndicatorProps) {
  return (
    <SliderBase.Indicator
      className={cn("select-none rounded-full bg-primary-9", className)}
      {...props}
    />
  );
}

export type SliderThumbProps = ComponentProps<typeof SliderBase.Thumb>;

export function SliderThumb({ className, ...props }: SliderThumbProps) {
  return (
    <SliderBase.Thumb
      className={cn(
        "h-4.5 w-7.5 select-none rounded-full bg-white shadow-black/50 shadow-xs outline-0 outline-transparent transition-colors has-focus-visible:outline-3 has-focus-visible:outline-primary-8 has-focus-visible:outline-offset-2",
        className,
      )}
      {...props}
    />
  );
}
