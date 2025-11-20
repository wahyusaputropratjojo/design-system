import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import SearchDialog from "@/components/search";
import { geistMono, geistSans } from "@/styles/fonts/geist";
import "./style.css";

export const metadata: Metadata = {
  description: "Made for building consistent and delightful web experiences.",
  title: "Design System",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans">
        <RootProvider
          search={{
            SearchDialog,
          }}
          theme={{
            attribute: "class",
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
