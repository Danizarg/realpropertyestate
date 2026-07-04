"use client";

import { useState, useEffect } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PropertyCard from "@/components/properties/PropertyCard";
import FilterBar, { type Filters } from "@/components/properties/FilterBar";
import { SEED_PROPERTIES } from "@/lib/seed";
import type { Property } from "@/lib/types";

const DEFAULT_FILTERS: Filters = {
  location: "",
  minPrice: "",
  maxPrice: "",
  bedrooms: "",
  propertyType: "",
  listingType: "",
  pets: "",
  status: "",
  sort: "newest",
};

export default function PropertiesPage() {
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
          setAllProperties(SEED_PROPERTIES);
          return;
        }
        const { createClient } = await import("@/lib/supabase/client");
        const supabase = createClient();
        const { data } = await supabase
          .from("properties")
          .select("*, property_images(*)")
          .eq("published", true)
          .order("created_at", { ascending: false });
        setAllProperties((data as Property[]) ?? SEED_PROPERTIES);
      } catch {
        setAllProperties(SEED_PROPERTIES);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = allProperties
    .filter((p) => {
      if (filters.location && !p.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
      if (filters.minPrice && p.price != null && p.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && p.price != null && p.price > Number(filters.maxPrice)) return false;
      if (filters.bedrooms && (p.bedrooms == null || p.bedrooms < Number(filters.bedrooms))) return false;
      if (filters.propertyType && p.property_type !== filters.propertyType) return false;
      if (filters.pets && p.pets !== filters.pets) return false;
      return true;
    })
    .sort((a, b) => {
      if (filters.sort === "price_desc") return (b.price ?? 0) - (a.price ?? 0);
      if (filters.sort === "price_asc") return (a.price ?? 0) - (b.price ?? 0);
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Header */}
        <div style={{ borderBottom: "1px solid #E6E3DE" }} className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <p
              className="text-[11px] tracking-[0.2em] uppercase mb-3"
              style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
            >
              All residences
            </p>
            <h1
              className="font-display text-5xl md:text-6xl"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
            >
              Properties
            </h1>
          </div>
        </div>

        {/* Filters */}
        <FilterBar filters={filters} onChange={setFilters} />

        {/* Results */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-[14px]" style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}>
                Loading properties...
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p
                className="font-display text-3xl mb-3"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111" }}
              >
                No properties found
              </p>
              <p className="text-[14px]" style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}>
                Try adjusting your filters.
              </p>
            </div>
          ) : (
            <>
              <p
                className="text-[13px] mb-10"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {filtered.length} {filtered.length === 1 ? "property" : "properties"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filtered.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
