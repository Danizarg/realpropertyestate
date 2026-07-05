import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PropertyGallery from "@/components/properties/PropertyGallery";
import PropertyDetailsGrid from "@/components/properties/PropertyDetailsGrid";
import SocialVideoLinks from "@/components/properties/SocialVideoLinks";
import PropertyCard from "@/components/properties/PropertyCard";
import ContactForm from "@/components/forms/ContactForm";
import { buildPropertyWhatsAppUrl } from "@/lib/whatsapp";
import { SEED_PROPERTIES } from "@/lib/seed";
import type { Property } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getProperty(slug: string): Promise<Property | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return SEED_PROPERTIES.find((p) => p.slug === slug) ?? null;
  }

  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data } = await supabase
      .from("properties")
      .select("*, property_images(*)")
      .eq("slug", slug)
      .eq("published", true)
      .single();
    return (data as Property) ?? null;
  } catch {
    return SEED_PROPERTIES.find((p) => p.slug === slug) ?? null;
  }
}

async function getRelatedProperties(property: Property): Promise<Property[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return SEED_PROPERTIES
      .filter((p) => p.slug !== property.slug && (p.location === property.location || p.property_type === property.property_type))
      .slice(0, 3);
  }

  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data } = await supabase
      .from("properties")
      .select("*, property_images(*)")
      .eq("published", true)
      .neq("slug", property.slug)
      .or(`location.eq.${property.location},property_type.eq.${property.property_type}`)
      .limit(3);
    return (data as Property[]) ?? [];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getProperty(slug);
  if (!property) return { title: "Property Not Found" };
  return {
    title: `${property.name} — Real Property Estate`,
    description: property.short_description,
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = await getProperty(slug);
  if (!property) notFound();

  const related = await getRelatedProperties(property);
  const images = property.property_images ?? [];

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Gallery */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-8">
          <PropertyGallery images={images} propertyName={property.name} />
        </section>

        {/* Main content */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: details */}
            <div className="lg:col-span-7">
              {/* Header */}
              <div style={{ borderBottom: "1px solid #E6E3DE" }} className="pb-8 mb-8">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p
                    className="text-[11px] tracking-[0.12em] uppercase"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {property.location}
                    {property.property_type && ` · ${property.property_type}`}
                    {property.listing_type && ` · ${property.listing_type}`}
                  </p>
                  {property.status && property.status !== "Available" && (
                    <span
                      className="text-[11px] tracking-[0.08em] uppercase px-3 py-1"
                      style={{ border: "1px solid #E6E3DE", fontFamily: "Inter, system-ui, sans-serif", color: "#2D2C2A", borderRadius: 2, whiteSpace: "nowrap" }}
                    >
                      {property.status}
                    </span>
                  )}
                </div>
                <h1
                  className="font-display text-4xl md:text-5xl mb-4"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400, lineHeight: "1.05" }}
                >
                  {property.name}
                </h1>
                <p
                  className="font-display text-2xl"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#2D2C2A", fontWeight: 500 }}
                >
                  {property.price_label}
                </p>
              </div>

              {/* Short description */}
              <p
                className="text-[15px] leading-relaxed mb-8"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {property.short_description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-12">
                <a
                  href={buildPropertyWhatsAppUrl(property.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-[13px] tracking-[0.06em] uppercase text-white transition-opacity hover:opacity-80"
                  style={{ background: "#111111", borderRadius: 4, fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Request Private Viewing
                </a>
                <a
                  href={buildPropertyWhatsAppUrl(property.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-[13px] tracking-[0.06em] uppercase transition-colors hover:bg-[#F5F4F1]"
                  style={{ border: "1px solid #E6E3DE", borderRadius: 4, fontFamily: "Inter, system-ui, sans-serif", color: "#2D2C2A" }}
                >
                  Request Brochure
                </a>
              </div>

              {/* Details grid */}
              <div style={{ borderTop: "1px solid #E6E3DE" }} className="mb-12">
                <PropertyDetailsGrid property={property} />
              </div>

              {/* Long description */}
              {property.long_description && (
                <div style={{ borderTop: "1px solid #E6E3DE" }} className="pt-8 mb-12">
                  <p
                    className="text-[11px] tracking-[0.1em] uppercase mb-6"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    Description
                  </p>
                  <div
                    className="text-[15px] leading-relaxed whitespace-pre-line"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {property.long_description}
                  </div>
                </div>
              )}

              {/* Features */}
              {property.features && property.features.length > 0 && (
                <div style={{ borderTop: "1px solid #E6E3DE" }} className="pt-8 mb-12">
                  <p
                    className="text-[11px] tracking-[0.1em] uppercase mb-6"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    Features & Amenities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feat) => (
                      <span
                        key={feat}
                        className="px-4 py-2 text-[13px]"
                        style={{ border: "1px solid #E6E3DE", fontFamily: "Inter, system-ui, sans-serif", color: "#2D2C2A", borderRadius: 2 }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Social links */}
              <SocialVideoLinks
                instagramUrl={property.instagram_url}
                tiktokUrl={property.tiktok_url}
              />
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-5">
              <div
                id="enquiry"
                className="sticky top-24 p-8"
                style={{ border: "1px solid #E6E3DE", background: "#F5F4F1" }}
              >
                <p
                  className="font-display text-2xl mb-6"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
                >
                  Enquire about this property
                </p>
                <ContactForm
                  propertyId={property.id}
                  propertyName={property.name}
                  defaultInterest="private_viewing"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related properties */}
        {related.length > 0 && (
          <section style={{ borderTop: "1px solid #E6E3DE" }} className="bg-[#F5F4F1]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
              <p
                className="text-[11px] tracking-[0.2em] uppercase mb-10"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                You may also like
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {related.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
