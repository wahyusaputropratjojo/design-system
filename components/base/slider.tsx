"use client";

import type { ComponentProps, HTMLAttributes } from "react";
import { use } from "react";
import type { SliderProps as SliderPrimitiveProps } from "react-aria-components";
import {
  SliderOutput as SliderOutputPrimitive,
  Slider as SliderPrimitive,
  SliderStateContext,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
} from "react-aria-components";
import { Label } from "@/components/base/label";

type SliderProps = {
  label?: string;
  output?: boolean;
} & Omit<SliderPrimitiveProps, "className">;

export function Slider({ label, output = true, ...props }: SliderProps) {
  return (
    <SliderPrimitive
      className="group relative flex orientation-vertical:h-full orientation-vertical:min-h-fit orientation-horizontal:w-full orientation-vertical:w-1.5 orientation-horizontal:min-w-fit touch-none select-none flex-col orientation-vertical:items-center orientation-horizontal:gap-y-3 orientation-vertical:gap-y-3 disabled:brightness-50"
      data-slot="control"
      {...props}
    >
      <div className="flex items-center justify-between">
        {label && <Label>{label}</Label>}
        {output && <SliderOutput />}
      </div>
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
    </SliderPrimitive>
  );
}

type SliderOutputProps = ComponentProps<typeof SliderOutputPrimitive>;

function SliderOutput({ ...props }: SliderOutputProps) {
  return (
    <SliderOutputPrimitive
      className="justify-end place-self-end self-end justify-self-end text-label-14 tabular-nums"
      {...props}
    />
  );
}

type SliderThumbProps = ComponentProps<typeof SliderThumbPrimitive>;

function SliderThumb({ ...props }: SliderThumbProps) {
  return (
    <SliderThumbPrimitive
      className="top-1/2 left-1/2 rounded-xs border border-gray-400 bg-gray-1000 focus-visible:outline-3 focus-visible:outline-offset-2 group-orientation-horizontal:h-4 group-orientation-vertical:h-1.5 group-orientation-horizontal:w-1.5 group-orientation-vertical:w-4"
      {...props}
    />
  );
}

type SliderFillProps = Omit<HTMLAttributes<HTMLDivElement>, "className">;

function SliderFill({ ...props }: SliderFillProps) {
  const state = use(SliderStateContext);
  const { orientation, values, getThumbValue } = state || {};

  const getFill = () => {
    const thumbValueA = getThumbValue ? getThumbValue(0) : 0;
    const thumbValueB = getThumbValue ? getThumbValue(1) : 0;

    if (values?.length === 1) {
      return orientation === "horizontal"
        ? { width: `${thumbValueA}%` }
        : { height: `${thumbValueA}%` };
    }

    return orientation === "horizontal"
      ? {
          left: `${thumbValueA}%`,
          width: `${Math.abs(thumbValueA - thumbValueB)}%`,
        }
      : {
          bottom: `${thumbValueA}%`,
          height: `${Math.abs(thumbValueA - thumbValueB)}%`,
        };
  };

  return (
    <div
      className="group-orientation-horizontal/top-0 pointer-events-none absolute rounded-full bg-blue-700 group-disabled/track:opacity-60 group-orientation-vertical/track:bottom-0 group-orientation-horizontal/track:h-full group-orientation-vertical/track:w-full"
      style={getFill()}
      {...props}
    />
  );
}

type SliderTrackProps = Omit<
  ComponentProps<typeof SliderTrackPrimitive>,
  "className"
>;

export function SliderTrack({ ...props }: SliderTrackProps) {
  return (
    <SliderTrackPrimitive
      className="group/track relative grow rounded-full bg-gray-100 disabled:opacity-60 group-orientation-horizontal:h-2.5 group-orientation-horizontal:w-full group-orientation-vertical:w-2.5 group-orientation-vertical:flex-1"
      {...props}
    />
  );
}
