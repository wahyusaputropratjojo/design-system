import { Meter as MeterPrimitive } from "@base-ui/react/meter";
import { cn, tv } from "@/lib/utils/tailwind-variants";

export const meterVariants = tv({
  slots: {
    indicator:
      "select-none rounded-full bg-primary-9 transition-all duration-500",
    label: "text-label-14",
    root: "flex w-full flex-wrap justify-between gap-2",
    track:
      "block h-1.5 w-full select-none overflow-hidden rounded-full bg-neutral-9",
    value: "text-label-14 tabular-nums",
  },
});

export function Meter({
  className,
  children,
  ...props
}: MeterPrimitive.Root.Props) {
  return (
    <MeterPrimitive.Root
      className={cn(meterVariants().root(), className)}
      data-slot="meter"
      {...props}
    >
      {children}
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </MeterPrimitive.Root>
  );
}

export function MeterTrack({
  className,
  ...props
}: MeterPrimitive.Track.Props) {
  return (
    <MeterPrimitive.Track
      className={cn(meterVariants().track(), className)}
      data-slot="meter-track"
      {...props}
    />
  );
}

export function MeterIndicator({
  className,
  ...props
}: MeterPrimitive.Indicator.Props) {
  return (
    <MeterPrimitive.Indicator
      className={cn(meterVariants().indicator(), className)}
      data-slot="meter-indicator"
      {...props}
    />
  );
}

export function MeterValue({
  className,
  ...props
}: MeterPrimitive.Value.Props) {
  return (
    <MeterPrimitive.Value
      className={cn(meterVariants().value(), className)}
      data-slot="meter-value"
      {...props}
    />
  );
}

export function MeterLabel({
  className,
  ...props
}: MeterPrimitive.Label.Props) {
  return (
    <MeterPrimitive.Label
      className={cn(meterVariants().label(), className)}
      data-slot="meter-label"
      {...props}
    />
  );
}
