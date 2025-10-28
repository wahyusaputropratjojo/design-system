import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    links: [
      {
        secondary: false,
        text: "Documentation",
        url: "/docs",
      },
    ],
    nav: {
      title: "Design System",
    },
  };
}
