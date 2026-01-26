import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "@/lib/utils/tailwind-variants";

export function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      className={cn(
        "flex flex-col gap-2 data-[orientation=vertical]:flex-row",
        className,
      )}
      data-slot="tabs"
      {...props}
    />
  );
}

export function TabsList({
  className,
  children,
  ...props
}: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      className={cn(
        "relative z-0 grid h-12 w-fit auto-cols-min grid-flow-col items-center justify-center rounded-full bg-neutral-3 p-1 data-[orientation=vertical]:h-full data-[orientation=vertical]:grid-flow-row data-[orientation=vertical]:rounded-3xl",
        className,
      )}
      data-slot="tabs-list"
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator
        className="absolute bottom-0 left-0 -z-1 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-(--active-tab-bottom) rounded-full bg-neutral-5 transition-[width,translate] ease-in-out"
        data-slot="tab-indicator"
        renderBeforeHydration
      />
    </TabsPrimitive.List>
  );
}

export function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      className={cn(
        "relative h-10 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 text-label-14 text-neutral-11 outline-0 outline-offset-2 transition-[color,background-color] focus-visible:outline-2 focus-visible:outline-primary-8 data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-active:text-neutral-12 data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4.5 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
        className,
      )}
      data-slot="tabs-tab"
      {...props}
    />
  );
}

export function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      className={cn("flex-1 outline-none", className)}
      data-slot="tabs-panel"
      {...props}
    />
  );
}
