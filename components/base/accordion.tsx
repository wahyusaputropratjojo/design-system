import type {
  AccordionHeaderProps as AccordionHeaderBaseProps,
  AccordionItemProps as AccordionItemBaseProps,
  AccordionPanelProps as AccordionPanelBaseProps,
  AccordionRootProps as AccordionRootBaseProps,
  AccordionTriggerProps as AccordionTriggerBaseProps,
} from "@base-ui/react/accordion";
import { Accordion as AccordionBase } from "@base-ui/react/accordion";

type AccordionProps = AccordionRootBaseProps;

export function Accordion(props: AccordionProps) {
  return (
    <AccordionBase.Root
      className="flex w-96 max-w-[calc(100vw-8rem)] flex-col divide-y divide-neutral-6"
      {...props}
    />
  );
}

type AccordionItemProps = AccordionItemBaseProps;

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return <AccordionBase.Item {...props} />;
}

type AccordionHeaderProps = AccordionHeaderBaseProps;

export function AccordionHeader(props: AccordionHeaderProps) {
  return <AccordionBase.Header className="m-0!" {...props} />;
}

type AccordionTriggerProps = AccordionTriggerBaseProps;

export function AccordionTrigger({
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionBase.Trigger
      className="group relative flex w-full cursor-pointer items-center justify-between gap-4 p-3 text-label-14 outline-0 outline-transparent transition-color transition-colors hover:bg-neutral-4 focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-primary-9 focus-visible:outline-offset-2"
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

type AccordionPanelProps = AccordionPanelBaseProps;

export function AccordionPanel(props: AccordionPanelProps) {
  return (
    <AccordionBase.Panel
      className="p-3 text-neutral-11 text-paragraph-14"
      {...props}
    />
  );
}
