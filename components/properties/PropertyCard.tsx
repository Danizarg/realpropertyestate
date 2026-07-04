import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const coverImage = property.property_images?.find((img) => img.is_cover) ?? property.property_images?.[0];

  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      {/* Image */}
      <div
        className="relative overflow-hidden bg-[#F5F4F1] mb-4"
        style={{ aspectRatio: "4/5" }}
      >
        {coverImage ? (
          <Image
            src={coverImage.url}
            alt={coverImage.alt ?? property.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 bg-[#E6E3DE] flex items-center justify-center">
            <span
              className="text-[12px] tracking-[0.08em] uppercase"
              style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
            >
              No image
            </span>
          </div>
        )}

        {/* Status badge */}
        {property.status && property.status !== "Available" && (
          <div className="absolute top-4 left-4">
            <span
              className="text-[11px] tracking-[0.08em] uppercase px-3 py-1 bg-white"
              style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#2D2C2A" }}
            >
              {property.status}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3
            className="font-display text-xl leading-tight"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
          >
            {property.name}
          </h3>
        </div>

        <p
          className="text-[13px] mb-2"
          style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {property.location}
          {property.property_type && ` · ${property.property_type}`}
        </p>

        {/* Specs */}
        <div
          className="flex items-center gap-4 text-[12px] mb-3"
          style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {property.bedrooms != null && (
            <span>{property.bedrooms} bed</span>
          )}
          {property.bathrooms != null && (
            <span>{property.bathrooms} bath</span>
          )}
          {property.internal_area && (
            <span>{property.internal_area}</span>
          )}
        </div>

        <p
          className="font-display text-lg"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 500 }}
        >
          {property.price_label}
        </p>
      </div>
    </Link>
  );
}
