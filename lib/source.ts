import { docs } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";

export const source = loader({
  baseUrl: "/",
  plugins: [
    lucideIconsPlugin(),
  ],
  source: docs.toFumadocsSource(),
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [
    ...page.slugs,
    "image.png",
  ];
  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}
