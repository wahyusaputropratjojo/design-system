import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tailwind-variants";

const scrollArea = tv({
  slots: {
    root: "size-full",
    scrollbar:
      "group/scrollbar pointer-events-none relative flex rounded-full bg-neutral-3 opacity-0 transition-opacity before:absolute before:content-[''] data-hovering:pointer-events-auto data-scrolling:pointer-events-auto data-[orientation=horizontal]:m-2 data-[orientation=vertical]:m-2 data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1 data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:duration-0 data-[orientation=horizontal]:before:right-0 data-[orientation=horizontal]:before:-bottom-2 data-[orientation=horizontal]:before:left-0 data-[orientation=vertical]:before:left-1/2 data-[orientation=horizontal]:before:h-5 data-[orientation=vertical]:before:h-full data-[orientation=horizontal]:before:w-full data-[orientation=vertical]:before:w-5 data-[orientation=vertical]:before:-translate-x-1/2",
    thumb:
      "w-full rounded-full bg-neutral-9 transition-colors hover:bg-neutral-10 group-data-scrolling/scrollbar:bg-neutral-10",
    viewport:
      "h-full outline-0 outline-transparent outline-offset-2 transition-colors focus-visible:outline-3 focus-visible:outline-primary-8",
  },
  variants: {
    scrollFade: {
      true: {
        viewport:
          "mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))] mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))] mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))] mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))] [--fade-size:1.5rem]",
      },
    },
  },
});

interface ScrollAreaProps
  extends ScrollAreaPrimitive.Root.Props,
    VariantProps<typeof scrollArea> {
  className?: string;
}

export function ScrollArea({
  className,
  scrollFade = true,
  children,
}: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      className={scrollArea().root({
        className,
      })}
      data-slot="scroll-area"
    >
      <ScrollAreaPrimitive.Viewport
        className={scrollArea().viewport({
          scrollFade,
        })}
        data-slot="scroll-area-viewport"
      >
        <ScrollAreaPrimitive.Content data-slot="scroll-area-content">
          {children}
        </ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        className={scrollArea().scrollbar()}
        data-slot="scroll-area-scrollbar"
        orientation="vertical"
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
