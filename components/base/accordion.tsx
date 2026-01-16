import type {
  AccordionHeaderProps as AccordionHeaderBaseProps,
  AccordionItemProps as AccordionItemBaseProps,
  AccordionPanelProps as AccordionPanelBaseProps,
  AccordionRootProps as AccordionRootBaseProps,
  AccordionTriggerProps as AccordionTriggerBaseProps,
} from "@base-ui/react/accordion";
import { Accordion as AccordionBase } from "@base-ui/react/accordion";
import { cn } from "@/lib/utils/tailwind-variants";

type AccordionProps = {
  className: string;
} & Omit<AccordionRootBaseProps, "className">;

export function Accordion({ className, ...props }: AccordionProps) {
  return (
    <AccordionBase.Root
      className={cn("flex flex-col divide-y divide-neutral-6", className)}
      {...props}
    />
  );
}

type AccordionItemProps = {
  className: string;
} & Omit<AccordionItemBaseProps, "className">;

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

type AccordionHeaderProps = {
  className: string;
} & Omit<AccordionHeaderBaseProps, "className">;

export function AccordionHeader({ className, ...props }: AccordionHeaderProps) {
  return (
    <AccordionBase.Header className={cn("not-prose", className)} {...props} />
  );
}

type AccordionTriggerProps = {
  className: string;
} & Omit<AccordionTriggerBaseProps, "className">;

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionBase.Trigger
      className={cn(
        "group relative flex w-full cursor-pointer items-center justify-between gap-4 p-3 text-label-14 outline-0 outline-transparent hover:bg-neutral-4 focus-visible:z-1 focus-visible:outline-3 focus-visible:outline-primary-9 focus-visible:outline-offset-2 group-first/item:rounded-t-2xl group-last/item:rounded-b-2xl data-panel-open:hover:bg-transparent",
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

type AccordionPanelProps = {
  className: string;
} & Omit<AccordionPanelBaseProps, "className">;

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
