import type { HomepageCoverSettings } from "./types";

export const HOMEPAGE_COVER_KEY = "homepage_cover";

// Matches the hardcoded hero that existed before this setting was added —
// used whenever no row exists yet in site_settings, so the homepage never
// breaks.
export const DEFAULT_HOMEPAGE_COVER: HomepageCoverSettings = {
  mediaType: "image",
  mediaUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=85",
  storagePath: null,
  title: "Essence of Marbella",
  subtitle:
    "Curated homes, villas and apartments across Marbella's most desirable addresses.",
  buttonText: "View Properties",
  buttonLink: "/properties",
};
