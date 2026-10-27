import { site } from "@/data/content";

export const dynamic = "force-static";

export default function sitemap() {
  return [{ url: `${site.url}/`, changeFrequency: "monthly", priority: 1 }];
}
