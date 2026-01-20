import { Accordion as AccordionBase } from "@base-ui/react/accordion";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils/tailwind-variants";

export type AccordionProps = ComponentProps<typeof AccordionBase.Root>;

export function Accordion({ className, ...props }: AccordionProps) {
  return (
    <AccordionBase.Root
      className={cn("flex flex-col divide-y divide-neutral-6", className)}
      {...props}
    />
  );
}

export type AccordionItemProps = ComponentProps<typeof AccordionBase.Item>;

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionBase.Item
      className={cn(
        "group/item bg-neutral-3 first:rounded-t-2xl last:rounded-b-2xl",
        className,
      )}
      {...props}
    />
  );
}

export type AccordionHeaderProps = ComponentProps<typeof AccordionBase.Header>;

export function AccordionHeader({ className, ...props }: AccordionHeaderProps) {
  return (
    <AccordionBase.Header className={cn("not-prose", className)} {...props} />
  );
}

export type AccordionTriggerProps = ComponentProps<
  typeof AccordionBase.Trigger
>;

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionBase.Trigger
      className={cn(
        "group relative flex w-full cursor-pointer items-center justify-between gap-4 p-3 text-label-14 outline-0 outline-transparent hover:bg-neutral-4 focus-visible:z-1 focus-visible:outline-3 focus-visible:outline-primary-8 focus-visible:outline-offset-2 group-first/item:rounded-t-2xl group-last/item:rounded-b-2xl data-panel-open:hover:bg-transparent",
        className,
      )}
      {...props}
    >
      {children}
      <svg
        className="size-4 shrink-0 stroke-2 transition-all ease-out group-data-panel-open:-rotate-180"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Chevron Down Icon</title>
        <path d="m6 9 6 6 6-6" />
      </svg>
    </AccordionBase.Trigger>
  );
}

export type AccordionPanelProps = ComponentProps<typeof AccordionBase.Panel>;

export function AccordionPanel({ className, ...props }: AccordionPanelProps) {
  return (
    <AccordionBase.Panel
      className={cn(
        "overflow-hidden px-3 pt-0 pb-3 text-neutral-11 text-paragraph-14",
        className,
      )}
      {...props}
    />
  );
}
