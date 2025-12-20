import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdulwaheed Tella",
    short_name: "Tella",
    description:
      "Researcher and data scientist specializing in geospatial analytics, GeoAI, climate change adaptation, and disaster risk reduction.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6a5acd",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
