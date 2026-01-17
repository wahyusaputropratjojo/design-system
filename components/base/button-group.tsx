import type { ComponentProps } from "react";
import { Children, Fragment, isValidElement } from "react";
import { Separator } from "@/components/base/separator";
import { cn } from "@/lib/utils/tailwind-variants";

export type ButtonGroupProps = ComponentProps<"div">;

export function ButtonGroup({
  children,
  className,
  ...props
}: ButtonGroupProps) {
  const items = Children.toArray(children);

  return (
    <div
      className={cn(
        "flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>input]:flex-1",
        className,
      )}
      data-slot="button-group"
      {...props}
    >
      {items.map((child, index) => {
        const isLastItem = index === items.length - 1;
        if (!isValidElement(child)) return child;

        return (
          <Fragment key={child.key ?? index}>
            {child}
            {!isLastItem && <Separator />}
          </Fragment>
        );
      })}
    </div>
  );
}
