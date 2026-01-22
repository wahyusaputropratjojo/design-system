import { Separator } from "@/components/base/separator";

export function ExampleSeparator() {
  return (
    <div className="max-w-72">
      <div className="space-y-1">
        <p className="text-muted-foreground text-sm">
          Build consistent, high-quality UIs with our reusable components and
          standards.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex items-center gap-4 text-sm">
        <div>Colors</div>
        <Separator orientation="vertical" />
        <div>Components</div>
        <Separator orientation="vertical" />
        <div>Typography</div>
      </div>
    </div>
  );
}
