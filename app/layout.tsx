import { RootProvider } from "fumadocs-ui/provider/next";
import "./style.css";
import type { Metadata } from "next";
import { geistMono, geistSans } from "@/styles/fonts/geist";

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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
