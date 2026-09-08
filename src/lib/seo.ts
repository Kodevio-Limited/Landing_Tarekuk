import type { Metadata } from "next";

const SITE_NAME = "Tarekuk";
const SITE_URL = "https://tarekuk.com";

export function buildMetadata(
  overrides: Partial<Metadata> & { title: string; description: string }
): Metadata {
  const { title, description, ...rest } = overrides;
  return {
    metadataBase: new URL(SITE_URL),
    title: `${title} - ${SITE_NAME}`,
    description,
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
    ...rest,
  };
}
