import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import styles from "./accordion.module.css";

export function Accordion({
  className,
  ...props
}: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      className={styles.root}
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
      className={styles.header}
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
      className={styles.item}
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
      className={styles.panel}
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
      className={styles.trigger}
      data-slot="accordion-trigger"
      {...props}
    >
      {children}
      <ChevronDownIcon />
    </AccordionPrimitive.Trigger>
  );
}
