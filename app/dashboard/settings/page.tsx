import OwnerGuard from "@/components/dashboard/OwnerGuard";
import DashboardShell from "@/components/dashboard/DashboardShell";
import HomepageCoverForm from "@/components/dashboard/HomepageCoverForm";
import { getHomepageCoverSettings } from "@/lib/settings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage Cover — Real Property Estate",
};

export default async function DashboardSettingsPage() {
  const cover = await getHomepageCoverSettings();

  return (
    <OwnerGuard>
      <DashboardShell>
        <div className="mb-10">
          <h1
            className="font-display text-4xl"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
          >
            Homepage Cover
          </h1>
          <p className="mt-2 text-[14px]" style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}>
            Control the image or video shown at the top of the homepage.
          </p>
        </div>
        <HomepageCoverForm initial={cover} />
      </DashboardShell>
    </OwnerGuard>
  );
}
