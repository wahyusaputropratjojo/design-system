import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-variants";

export function Accordion({
  className,
  ...props
}: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      className={cn("flex flex-col divide-y divide-neutral-6", className)}
      data-slot="accordion"
      {...props}
    />
  );
}

export function AccordionHeader({
  className,
  ...props
}: AccordionPrimitive.Header.Props) {
  return (
    <AccordionPrimitive.Header
      className={cn("not-prose", className)}
      data-slot="accordion-header"
      {...props}
    />
  );
}

export function AccordionItem({
  className,
  ...props
}: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        "group/item bg-neutral-3 first:rounded-t-2xl last:rounded-b-2xl",
        className,
      )}
      data-slot="accordion-item"
      {...props}
    />
  );
}

export function AccordionPanel({
  className,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      className={cn(
        "overflow-hidden px-3 pt-0 pb-3 text-neutral-11 text-paragraph-14",
        className,
      )}
      data-slot="accordion-panel"
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Trigger
      className={cn(
        "group relative flex w-full cursor-pointer items-center justify-between gap-4 p-3 text-label-14 outline-0 outline-transparent hover:bg-neutral-4 focus-visible:z-1 focus-visible:outline-3 focus-visible:outline-primary-8 group-first/item:rounded-t-2xl group-last/item:rounded-b-2xl data-panel-open:hover:bg-transparent",
        className,
      )}
      data-slot="accordion-trigger"
      {...props}
    >
      {children}
      <ChevronDownIcon className="size-4 shrink-0 stroke-2 transition-all ease-out group-data-panel-open:-rotate-180" />
    </AccordionPrimitive.Trigger>
  );
}
