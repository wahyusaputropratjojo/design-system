import { Select as SelectPrimitive } from "@base-ui/react/select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { cn } from "@/lib/utils/tailwind-variants";

interface SelectPopupProps
  extends SelectPrimitive.Popup.Props,
    Pick<
      SelectPrimitive.Positioner.Props,
      "alignItemWithTrigger" | "sideOffset"
    > {}

export function Select<Value, Multiple extends boolean | undefined = false>(
  props: SelectPrimitive.Root.Props<Value, Multiple>,
) {
  return <SelectPrimitive.Root {...props} />;
}

export function SelectTrigger({
  children,
  className,
  ...props
}: SelectPrimitive.Trigger.Props) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "flex h-10 min-w-60 cursor-pointer select-none items-center justify-between rounded-xl bg-neutral-3 px-3 text-paragraph-14 outline-transparent transition-colors hover:not-disabled:bg-neutral-4 focus-visible:outline-3 focus-visible:outline-primary-8 focus-visible:outline-offset-2 data-disabled:cursor-not-allowed data-popup-open:bg-neutral-5 data-disabled:opacity-50",
        className,
      )}
      data-slot="select-trigger"
      {...props}
    >
      {children}
      <SelectPrimitive.Icon data-slot="select-icon">
        <ChevronsUpDownIcon className="size-3.5 shrink-0" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectValue({
  className,
  ...props
}: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      className={cn(
        "text-neutral-12 data-placeholder:text-neutral-11",
        className,
      )}
      data-slot="select-value"
      {...props}
    />
  );
}

export function SelectPopup({
  children,
  alignItemWithTrigger = true,
  sideOffset = 8,
  className,
  ...props
}: SelectPopupProps) {
  return (
    <SelectPrimitive.Portal data-slot="select-portal">
      <SelectPrimitive.Positioner
        alignItemWithTrigger={alignItemWithTrigger}
        data-slot="select-positioner"
        sideOffset={sideOffset}
      >
        <SelectPrimitive.ScrollUpArrow
          className="top-0 z-1 flex h-3.5 w-full items-center justify-center rounded-t-lg bg-neutral-5 text-neutral-12"
          data-slot="select-scroll-up-arrow"
        >
          <ChevronUpIcon className="size-3 shrink-0" />
        </SelectPrimitive.ScrollUpArrow>
        <SelectPrimitive.Popup
          className={cn(
            "min-w-(--anchor-width) origin-(--transform-origin) cursor-pointer rounded-xl bg-neutral-3 p-1 outline-0",
            className,
          )}
          {...props}
        >
          <SelectPrimitive.List
            className="flex max-h-60 flex-col gap-1 overflow-y-auto"
            data-slot="select-list"
          >
            {children}
          </SelectPrimitive.List>
        </SelectPrimitive.Popup>
        <SelectPrimitive.ScrollDownArrow
          className="bottom-0 z-1 flex h-3.5 w-full items-center justify-center rounded-b-xl bg-neutral-5 text-neutral-12"
          data-slot="select-scroll-down-arrow"
        >
          <ChevronDownIcon className="size-3 shrink-0" />
        </SelectPrimitive.ScrollDownArrow>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem({
  children,
  className,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "flex h-8 cursor-pointer items-center justify-between rounded-lg px-2 text-neutral-11 outline-0 data-highlighted:bg-neutral-4 data-selected:bg-primary-5 data-selected:text-primary-12",
        className,
      )}
      data-slot="select-item"
      {...props}
    >
      <SelectPrimitive.ItemText
        className="select-none text-paragraph-14"
        data-slot="select-item-text"
      >
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator data-slot="select-item-indicator">
        <CheckIcon className="size-3.5 shrink-0" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

export function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      className={cn("my-1.5 h-px shrink-0 bg-neutral-6", className)}
      data-slot="select-separator"
      {...props}
    />
  );
}

export function SelectGroup({
  className,
  ...props
}: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      className={cn("flex flex-col gap-1", className)}
      data-slot="select-group"
      {...props}
    />
  );
}

export function SelectGroupLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      className={cn(
        "rounded-full px-2 pt-2 pb-1 text-label-10 text-neutral-12",
        className,
      )}
      data-slot="select-group-label"
      {...props}
    />
  );
}
