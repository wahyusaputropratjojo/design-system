import { cn } from "@/lib/utils/tailwind-variants";

interface PreviewCardProps extends React.ComponentProps<"section"> {}

export function PreviewCard({ className, ...props }: PreviewCardProps) {
  return (
    <section
      className={cn(
        "not-prose flex min-h-100 flex-col items-center justify-center gap-2 rounded-xl border border-fd-accent bg-fd-card p-4 shadow-sm sm:flex-row sm:p-16",
        className,
      )}
      {...props}
    />
  );
}
