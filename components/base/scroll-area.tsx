import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

const scrollArea = tv({
  slots: {
    content: "p-5",
    root: "size-full",
    scrollbar:
      "group/scrollbar pointer-events-none relative flex rounded-full bg-neutral-3 opacity-0 transition-opacity before:absolute before:content-[''] data-hovering:pointer-events-auto data-scrolling:pointer-events-auto data-[orientation=horizontal]:m-2 data-[orientation=vertical]:m-2 data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1 data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:duration-0 data-[orientation=horizontal]:before:right-0 data-[orientation=horizontal]:before:-bottom-2 data-[orientation=horizontal]:before:left-0 data-[orientation=vertical]:before:left-1/2 data-[orientation=horizontal]:before:h-5 data-[orientation=vertical]:before:h-full data-[orientation=horizontal]:before:w-full data-[orientation=vertical]:before:w-5 data-[orientation=vertical]:before:-translate-x-1/2",
    thumb:
      "w-full rounded-full bg-neutral-9 transition-colors hover:bg-neutral-10 group-data-scrolling/scrollbar:bg-neutral-10",
    viewport:
      "h-full rounded-xl border border-neutral-6 outline-0 outline-transparent outline-offset-2 transition-colors focus-visible:outline-3 focus-visible:outline-primary-8",
  },
});

interface ScrollAreaProps
  extends ScrollAreaPrimitive.Root.Props,
    VariantProps<typeof scrollArea> {
  className?: string;
}

export function ScrollArea({ className, children }: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      className={scrollArea().root({
        className,
      })}
      data-slot="scroll-area"
    >
      <ScrollAreaPrimitive.Viewport
        className={scrollArea().viewport()}
        data-slot="scroll-area-viewport"
      >
        <ScrollAreaPrimitive.Content
          className={scrollArea().content()}
          data-slot="scroll-area-content"
        >
          {children}
        </ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        className={scrollArea().scrollbar()}
        data-slot="scroll-area-scrollbar"
      >
        <ScrollAreaPrimitive.Thumb
          className={scrollArea().thumb()}
          data-slot="scroll-area-thumb"
        />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar
        className={scrollArea().scrollbar()}
        data-slot="scroll-area-scrollbar"
        orientation="horizontal"
      >
        <ScrollAreaPrimitive.Thumb
          className={scrollArea().thumb()}
          data-slot="scroll-area-thumb"
        />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
    </ScrollAreaPrimitive.Root>
  );
}
