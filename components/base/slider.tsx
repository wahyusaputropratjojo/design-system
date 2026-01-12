import type { SliderRootProps } from "@base-ui/react/slider";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";

export type SliderProps = SliderRootProps;

export function Slider(props: SliderProps) {
  return (
    <SliderPrimitive.Root thumbAlignment="edge" {...props}>
      <SliderPrimitive.Control className="flex touch-none select-none items-center">
        <SliderPrimitive.Track className="h-1.5 w-full select-none rounded-full bg-neutral-9">
          <SliderPrimitive.Indicator className="select-none rounded-full bg-primary-9" />
          <SliderPrimitive.Thumb className="h-6 w-10 select-none rounded-full bg-white shadow-black/25 shadow-sm outline-0 outline-transparent transition-colors has-[:focus-visible]:border has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-primary-9 has-[:focus-visible]:outline-offset-2" />
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}
