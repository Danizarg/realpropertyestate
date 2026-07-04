import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PropertyCard from "@/components/properties/PropertyCard";
import { SEED_PROPERTIES } from "@/lib/seed";
import type { Property } from "@/lib/types";

async function getFeaturedProperties(): Promise<Property[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return SEED_PROPERTIES.filter((p) => p.featured);
  }

  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data } = await supabase
      .from("properties")
      .select("*, property_images(*)")
      .eq("published", true)
      .eq("featured", true)
      .limit(3);
    return (data as Property[]) ?? SEED_PROPERTIES.filter((p) => p.featured);
  } catch {
    return SEED_PROPERTIES.filter((p) => p.featured);
  }
}

export default async function HomePage() {
  const featured = await getFeaturedProperties();

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-end bg-[#111111] overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=85"
              alt="Luxury villa in Marbella"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-32 w-full">
            <div className="max-w-2xl">
              <p
                className="text-[11px] tracking-[0.2em] uppercase mb-6"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Marbella, Spain
              </p>
              <h1
                className="font-display text-[72px] md:text-[96px] leading-[0.9] mb-8 text-white"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontWeight: 300 }}
              >
                Essence of
                <br />
                <em style={{ fontStyle: "italic" }}>Marbella</em>
              </h1>
              <p
                className="text-[15px] leading-relaxed mb-10 max-w-lg"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Curated homes, villas and apartments across Marbella&apos;s most desirable addresses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/properties"
                  className="px-8 py-4 text-[13px] tracking-[0.08em] uppercase text-white transition-opacity hover:opacity-80"
                  style={{ background: "#111111", borderRadius: 4, fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  View Properties
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 text-[13px] tracking-[0.08em] uppercase transition-colors hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.3)", color: "white", borderRadius: 4, fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Private Enquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured properties */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p
                className="text-[11px] tracking-[0.2em] uppercase mb-3"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Selected residences
              </p>
              <h2
                className="font-display text-5xl md:text-6xl"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
              >
                Featured Properties
              </h2>
            </div>
            <Link
              href="/properties"
              className="hidden md:block text-[13px] tracking-[0.05em] transition-colors hover:text-[#111111]"
              style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link
              href="/properties"
              className="text-[13px] tracking-[0.05em]"
              style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
            >
              View all properties →
            </Link>
          </div>
        </section>

        {/* Positioning statement */}
        <section style={{ borderTop: "1px solid #E6E3DE", borderBottom: "1px solid #E6E3DE" }} className="bg-[#F5F4F1]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <p
                  className="text-[11px] tracking-[0.2em] uppercase mb-6"
                  style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Our approach
                </p>
                <h2
                  className="font-display text-4xl md:text-5xl leading-tight mb-8"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
                >
                  Real estate presented with restraint, precision and discretion.
                </h2>
                <p
                  className="text-[15px] leading-relaxed mb-8"
                  style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  We curate homes for clients who value location, proportion, privacy and architectural quality. Every property we represent is selected for its intrinsic merit, not simply its market value.
                </p>
                <Link
                  href="/about"
                  className="text-[13px] tracking-[0.08em] uppercase"
                  style={{ color: "#2D2C2A", fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  About us →
                </Link>
              </div>
              <div className="md:col-span-5">
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85"
                    alt="Luxury interior"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Begin your search
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
          >
            Find your place in Marbella
          </h2>
          <p
            className="text-[15px] mb-10 max-w-xl mx-auto"
            style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Whether you are searching for a primary residence, a second home, or a private investment — we are here to guide you with complete discretion.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 text-[13px] tracking-[0.08em] uppercase text-white transition-opacity hover:opacity-80"
            style={{ background: "#111111", borderRadius: 4, fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Make an Enquiry
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
