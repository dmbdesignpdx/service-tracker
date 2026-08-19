import type { MetadataRoute } from "next";

import { Url } from "@/data/meta";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: Url.BASE.origin,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
