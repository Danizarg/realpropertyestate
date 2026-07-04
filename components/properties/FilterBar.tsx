"use client";

import { PROPERTY_TYPES, LISTING_TYPES, PETS_OPTIONS } from "@/lib/types";

export interface Filters {
  location: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  propertyType: string;
  listingType: string;
  pets: string;
  status: string;
  sort: string;
}

interface FilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

const selectStyle: React.CSSProperties = {
  fontFamily: "Inter, system-ui, sans-serif",
  fontSize: 13,
  color: "#2D2C2A",
  border: "1px solid #E6E3DE",
  background: "white",
  borderRadius: 2,
  padding: "8px 12px",
  width: "100%",
  appearance: "none",
  WebkitAppearance: "none",
  outline: "none",
};

const inputStyle: React.CSSProperties = {
  ...selectStyle,
};

const labelStyle: React.CSSProperties = {
  fontFamily: "Inter, system-ui, sans-serif",
  fontSize: 11,
  color: "#8A8781",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  display: "block",
  marginBottom: 4,
};

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  const update = (key: keyof Filters, value: string) =>
    onChange({ ...filters, [key]: value });

  return (
    <div
      style={{ borderBottom: "1px solid #E6E3DE", background: "#F5F4F1" }}
      className="py-6 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div>
            <label style={labelStyle}>Location</label>
            <input
              type="text"
              placeholder="Any location"
              value={filters.location}
              onChange={(e) => update("location", e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Min price</label>
            <input
              type="number"
              placeholder="No min"
              value={filters.minPrice}
              onChange={(e) => update("minPrice", e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Max price</label>
            <input
              type="number"
              placeholder="No max"
              value={filters.maxPrice}
              onChange={(e) => update("maxPrice", e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Bedrooms</label>
            <select
              value={filters.bedrooms}
              onChange={(e) => update("bedrooms", e.target.value)}
              style={selectStyle}
            >
              <option value="">Any</option>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n}+</option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Type</label>
            <select
              value={filters.propertyType}
              onChange={(e) => update("propertyType", e.target.value)}
              style={selectStyle}
            >
              <option value="">All types</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Pets</label>
            <select
              value={filters.pets}
              onChange={(e) => update("pets", e.target.value)}
              style={selectStyle}
            >
              <option value="">Any</option>
              {PETS_OPTIONS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Sort</label>
            <select
              value={filters.sort}
              onChange={(e) => update("sort", e.target.value)}
              style={selectStyle}
            >
              <option value="newest">Newest</option>
              <option value="price_desc">Price: high to low</option>
              <option value="price_asc">Price: low to high</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
