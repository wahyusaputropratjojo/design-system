import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/">) {
  const { nav, ...base } = baseOptions();

  return (
    <DocsLayout
      nav={{
        ...nav,
        mode: "top",
      }}
      sidebar={{
        collapsible: false,
      }}
      tree={source.pageTree}
      {...base}
    >
      {children}
    </DocsLayout>
  );
}
