import { BoldIcon } from "lucide-react";
import { Toggle } from "@/components/base/toggle";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/components/base/tooltip";

export function ExampleTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Toggle />}>
        <BoldIcon />
      </TooltipTrigger>
      <TooltipPopup>Bold</TooltipPopup>
    </Tooltip>
  );
}
