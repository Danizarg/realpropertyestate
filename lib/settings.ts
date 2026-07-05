import type { HomepageCoverSettings } from "./types";
import { HOMEPAGE_COVER_KEY, DEFAULT_HOMEPAGE_COVER } from "./settings-constants";

export { HOMEPAGE_COVER_KEY, DEFAULT_HOMEPAGE_COVER };

export async function getHomepageCoverSettings(): Promise<HomepageCoverSettings> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return DEFAULT_HOMEPAGE_COVER;
  }

  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", HOMEPAGE_COVER_KEY)
      .single();

    if (!data?.value) return DEFAULT_HOMEPAGE_COVER;
    return { ...DEFAULT_HOMEPAGE_COVER, ...(data.value as Partial<HomepageCoverSettings>) };
  } catch {
    return DEFAULT_HOMEPAGE_COVER;
  }
}
