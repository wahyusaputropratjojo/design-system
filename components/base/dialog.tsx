import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import type { VariantProps } from "tailwind-variants";
import { Button, buttonVariants } from "@/components/base/button";
import { ScrollArea } from "@/components/base/scroll-area";
import { tv } from "@/lib/utils/tailwind-variants";

export const dialogVariants = tv({
  slots: {
    backdrop:
      "data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 isolate z-50 bg-black/30 data-closed:animate-out data-open:animate-in supports-backdrop-filter:backdrop-blur-md",
    content: "max-h-96 px-6",
    description:
      "text-neutral-11 text-paragraph-14 *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
    footer: "flex flex-col gap-2 px-6 sm:flex-row sm:justify-end",
    header: "flex flex-col gap-2 px-6",
    popup: [
      "fixed bottom-0 z-50 flex max-h-full w-full translate-y-[calc(100%*var(--nested-dialogs))] flex-col gap-6 rounded-t-3xl bg-neutral-2 py-6 opacity-[calc(1-0.1*var(--nested-dialogs))] transition-[scale,opacity,translate] duration-250 ease-in-out will-change-transform data-nested:data-ending-style:translate-y-full data-nested:data-starting-style:translate-y-full data-nested-dialog-open:origin-top data-ending-style:translate-y-full data-starting-style:translate-y-full",
      "sm:data-starting-style:translate-none sm:data-ending-style:translate-none sm:relative sm:w-120 sm:-translate-y-[calc(0.5rem*var(--nested-dialogs))] sm:data-nested:data-ending-style:translate-y-8 sm:data-nested:data-starting-style:translate-y-8 sm:scale-[calc(1-0.05*var(--nested-dialogs))] sm:rounded-3xl sm:opacity-[calc(1-0.3*var(--nested-dialogs))] sm:duration-100 sm:data-nested-dialog-open:origin-top sm:data-ending-style:opacity-0 sm:data-starting-style:opacity-0",
    ],
    title: "max-w-4/5 text-balance text-heading-18",
    viewport:
      "fixed inset-0 z-50 grid justify-items-center sm:items-center sm:justify-center",
  },
});

export function Dialog(props: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

export function DialogTrigger({
  className,
  size,
  intent,
  status,
  iconOnly,
  fullWidth,
  ...props
}: DialogPrimitive.Trigger.Props &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  }) {
  return (
    <DialogPrimitive.Trigger
      className={buttonVariants({
        className,
        iconOnly,
        intent,
        size,
        status,
      })}
      data-slot="dialog-trigger"
      {...props}
    />
  );
}

function DialogPortal(props: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogBackdrop({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      className={dialogVariants().backdrop()}
      data-slot="dialog-backdrop"
      {...props}
    />
  );
}

function DialogViewport({
  className,
  ...props
}: DialogPrimitive.Viewport.Props) {
  return (
    <DialogPrimitive.Viewport
      className={dialogVariants().viewport()}
      data-slot="dialog-viewport"
      {...props}
    />
  );
}

export function DialogPopup({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props &
  VariantProps<typeof dialogVariants> & {
    showCloseButton?: boolean;
    className?: string;
  }) {
  return (
    <DialogPortal>
      <DialogBackdrop />
      <DialogViewport>
        <DialogPrimitive.Popup
          className={dialogVariants().popup({
            className,
          })}
          data-slot="dialog-popup"
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogClose
              render={
                <Button
                  className="absolute top-2 right-2"
                  iconOnly
                  intent="secondary"
                  size="sm"
                >
                  <XIcon />
                  <span className="sr-only">Close</span>
                </Button>
              }
            />
          )}
        </DialogPrimitive.Popup>
      </DialogViewport>
    </DialogPortal>
  );
}

export function DialogTitle({
  className,
  ...props
}: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      className={dialogVariants().title()}
      data-slot="dialog-title"
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      className={dialogVariants().description()}
      data-slot="dialog-description"
      {...props}
    />
  );
}

export function DialogClose(props: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

export function DialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={dialogVariants().header({
        className,
      })}
      data-slot="dialog-header"
      {...props}
    />
  );
}

export function DialogContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ScrollArea>
      <div
        className={dialogVariants().content({
          className,
        })}
        data-slot="dialog-content"
        {...props}
      />
    </ScrollArea>
  );
}

export function DialogFooter({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={dialogVariants().footer({
        className,
      })}
      data-slot="dialog-footer"
      {...props}
    >
      {children}
    </div>
  );
}
