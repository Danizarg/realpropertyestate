import type { Property } from "@/lib/types";

interface PropertyDetailsGridProps {
  property: Property;
}

function DetailItem({ label, value }: { label: string; value: string | number | null | undefined }) {
  if (value == null || value === "") return null;
  return (
    <div style={{ borderBottom: "1px solid #E6E3DE" }} className="py-4">
      <p
        className="text-[11px] tracking-[0.1em] uppercase mb-1"
        style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {label}
      </p>
      <p
        className="text-[15px]"
        style={{ color: "#2D2C2A", fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {value}
      </p>
    </div>
  );
}

export default function PropertyDetailsGrid({ property }: PropertyDetailsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
      <DetailItem label="Bedrooms" value={property.bedrooms} />
      <DetailItem label="Bathrooms" value={property.bathrooms} />
      <DetailItem label="Internal Area" value={property.internal_area} />
      <DetailItem label="Plot Size" value={property.plot_size} />
      <DetailItem label="Outdoor Space" value={property.outdoor_space} />
      <DetailItem label="Property Type" value={property.property_type} />
      <DetailItem label="Listing Type" value={property.listing_type} />
      <DetailItem label="Status" value={property.status} />
      <DetailItem label="Pets" value={property.pets} />
    </div>
  );
}
