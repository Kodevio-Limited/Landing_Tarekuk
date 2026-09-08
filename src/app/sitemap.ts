import type { MetadataRoute } from "next";

const SITE_URL = "https://tarekuk.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      priority: 1,
    },
  ];
}
