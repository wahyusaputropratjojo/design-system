import { Select as SelectBase } from "@base-ui/react/select";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils/tailwind-variants";

export type SelectProps = ComponentProps<typeof SelectBase.Root>;

export function Select(props: SelectProps) {
  return <SelectBase.Root {...props} />;
}

export type SelectTriggerProps = ComponentProps<typeof SelectBase.Trigger>;

export function SelectTrigger({ className, ...props }: SelectTriggerProps) {
  return (
    <SelectBase.Trigger
      className={cn(
        "flex h-10 min-w-40 select-none items-center justify-between rounded-xl bg-neutral-3 px-3 text-paragraph-14 outline-transparent transition-colors hover:bg-neutral-4 focus-visible:outline-3 focus-visible:outline-primary-8 focus-visible:outline-offset-2 data-disabled:cursor-not-allowed data-popup-open:bg-neutral-5 data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export type SelectValueProps = ComponentProps<typeof SelectBase.Value>;

export function SelectValue({ className, ...props }: SelectValueProps) {
  return (
    <SelectBase.Value
      className={cn(
        "text-neutral-12 data-placeholder:text-neutral-11",
        className,
      )}
      {...props}
    />
  );
}

export type SelectIconProps = ComponentProps<typeof SelectBase.Icon>;

export function SelectIcon({ className, ...props }: SelectIconProps) {
  return (
    <SelectBase.Icon className={cn("", className)} {...props}>
      <svg
        className="size-3.5"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Chevron Up Down Icon</title>
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
      </svg>
    </SelectBase.Icon>
  );
}

export type SelectPortalProps = ComponentProps<typeof SelectBase.Portal>;

export function SelectPortal(props: SelectProps) {
  return <SelectBase.Portal {...props} />;
}

export type SelectPositionerProps = ComponentProps<
  typeof SelectBase.Positioner
>;

export function SelectPositioner({
  className,
  ...props
}: SelectPositionerProps) {
  return (
    <SelectBase.Positioner
      className={cn("", className)}
      sideOffset={8}
      {...props}
    />
  );
}

export type SelectPopupProps = ComponentProps<typeof SelectBase.Popup>;

export function SelectPopup({ className, ...props }: SelectPopupProps) {
  return (
    <SelectBase.Popup
      className={cn(
        "min-w-(--anchor-width) rounded-xl bg-neutral-3",
        className,
      )}
      {...props}
    />
  );
}

export type SelectListProps = ComponentProps<typeof SelectBase.List>;

export function SelectList({ className, ...props }: SelectListProps) {
  return (
    <SelectBase.List
      className={cn(
        "relative max-h-60 overflow-clip overflow-y-auto rounded-xl outline-0",
        className,
      )}
      {...props}
    />
  );
}

export type SelectScrollUpArrowProps = ComponentProps<
  typeof SelectBase.ScrollUpArrow
>;

export function SelectScrollUpArrow({
  className,
  ...props
}: SelectScrollUpArrowProps) {
  return (
    <SelectBase.ScrollUpArrow
      className={cn(
        "top-0 z-1 flex h-5 w-full items-center justify-center rounded-t-xl bg-neutral-5 text-neutral-12",
        className,
      )}
      {...props}
    >
      <svg
        className="size-3.5 shrink-0"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Chevron Up Icon</title>
        <path d="m18 15-6-6-6 6" />
      </svg>
    </SelectBase.ScrollUpArrow>
  );
}

export type SelectScrollDownArrowProps = ComponentProps<
  typeof SelectBase.ScrollDownArrow
>;

export function SelectScrollDownArrow({
  className,
  ...props
}: SelectScrollDownArrowProps) {
  return (
    <SelectBase.ScrollDownArrow
      className={cn(
        "bottom-0 z-1 flex h-5 w-full items-center justify-center rounded-b-xl bg-neutral-5 text-neutral-12",
        className,
      )}
      {...props}
    >
      <svg
        className="size-3.5 shrink-0"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Chevron Down Icon</title>
        <path d="m6 9 6 6 6-6" />
      </svg>
    </SelectBase.ScrollDownArrow>
  );
}

export type SelectBackdropProps = ComponentProps<typeof SelectBase.Backdrop>;

export function SelectBackdrop({ className, ...props }: SelectBackdropProps) {
  return <SelectBase.Backdrop className={cn("", className)} {...props} />;
}

export type SelectItemProps = ComponentProps<typeof SelectBase.Item>;

export function SelectItem({ className, ...props }: SelectItemProps) {
  return (
    <SelectBase.Item
      className={cn(
        "flex h-10 items-center justify-between px-3 text-neutral-11 outline-0 first:rounded-t-xl last:rounded-b-xl data-highlighted:bg-neutral-4 data-selected:bg-primary-5 data-selected:text-primary-12",
        className,
      )}
      {...props}
    />
  );
}

export type SelectItemTextProps = ComponentProps<typeof SelectBase.ItemText>;

export function SelectItemText({ className, ...props }: SelectItemTextProps) {
  return (
    <SelectBase.ItemText
      className={cn("select-none text-paragraph-14", className)}
      {...props}
    />
  );
}

export type SelectItemIndicatorProps = ComponentProps<
  typeof SelectBase.ItemIndicator
>;

export function SelectItemIndicator({
  className,
  ...props
}: SelectItemIndicatorProps) {
  return (
    <SelectBase.ItemIndicator className={cn("", className)} {...props}>
      <svg
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Check Icon</title>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </SelectBase.ItemIndicator>
  );
}

export type SelectSeparatorProps = ComponentProps<typeof SelectBase.Separator>;

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return <SelectBase.Separator className={cn("", className)} {...props} />;
}

export type SelectGroupProps = ComponentProps<typeof SelectBase.Group>;

export function SelectGroup({ className, ...props }: SelectGroupProps) {
  return <SelectBase.Group className={cn("", className)} {...props} />;
}

export type SelectGroupLabelProps = ComponentProps<
  typeof SelectBase.GroupLabel
>;

export function SelectGroupLabel({
  className,
  ...props
}: SelectGroupLabelProps) {
  return <SelectBase.GroupLabel className={cn("", className)} {...props} />;
}
