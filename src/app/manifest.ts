import type { MetadataRoute } from "next";

import { AppData } from "@/data/meta";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: AppData.NAME,
    short_name: AppData.SHORT_NAME,
    description: AppData.DESCRIPTION,
    start_url: AppData.START,
    display: "standalone",
    orientation: "portrait",
    background_color: AppData.BKG_COLOR,
    theme_color: AppData.THEME_COLOR,
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
