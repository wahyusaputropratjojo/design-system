import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./button.module.css";

export const buttonVariants = cva(styles.base, {
  compoundVariants: [
    {
      className: styles.statusDangerPrimary,
      intent: "primary",
      status: "danger",
    },
    {
      className: styles.statusDangerSecondary,
      intent: "secondary",
      status: "danger",
    },
    {
      className: styles.statusDangerTertiary,
      intent: "tertiary",
      status: "danger",
    },
    {
      className: styles.iconOnlySizeSmall,
      iconOnly: true,
      size: "small",
    },
    {
      className: styles.iconOnlySizeMedium,
      iconOnly: true,
      size: "medium",
    },
    {
      className: styles.iconOnlySizeLarge,
      iconOnly: true,
      size: "large",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
  variants: {
    fullWidth: {
      true: styles.fullWidth,
    },
    iconOnly: {
      true: styles.iconOnly,
    },
    intent: {
      primary: styles.intentPrimary,
      secondary: styles.intentSecondary,
      tertiary: styles.intentTertiary,
    },
    size: {
      large: styles.sizeLarge,
      medium: styles.sizeMedium,
      small: styles.sizeSmall,
    },
    status: {
      danger: styles.statusDanger,
    },
  },
});

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>;

export function Button({
  fullWidth,
  iconOnly,
  intent,
  size,
  status,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={buttonVariants({
        fullWidth,
        iconOnly,
        intent,
        size,
        status,
      })}
      {...props}
    />
  );
}
