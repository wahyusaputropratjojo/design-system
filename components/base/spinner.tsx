import { LoaderCircleIcon } from "lucide-react";
import type { ComponentProps } from "react";

type SpinnerProps = ComponentProps<"svg">;

export function Spinner({ ...props }: SpinnerProps) {
  return (
    <LoaderCircleIcon
      aria-label="Loading"
      className="animate-spin"
      role="status"
      {...props}
    />
  );
}
