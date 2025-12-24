import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/wahyusaputropratjojo/design-system",
    nav: {
      title: "Design System",
    },
    themeSwitch: {
      mode: "light-dark-system",
    },
  };
}
