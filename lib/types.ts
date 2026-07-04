export interface Property {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  slug: string;
  short_description: string;
  long_description: string | null;
  price: number | null;
  price_label: string;
  location: string;
  address: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  internal_area: string | null;
  plot_size: string | null;
  outdoor_space: string | null;
  property_type: string | null;
  listing_type: string | null;
  status: string;
  pets: string | null;
  instagram_url: string | null;
  tiktok_url: string | null;
  features: string[] | null;
  published: boolean;
  featured: boolean;
  property_images?: PropertyImage[];
}

export interface PropertyImage {
  id: string;
  property_id: string;
  url: string;
  storage_path: string;
  alt: string | null;
  sort_order: number;
  is_cover: boolean;
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  interest: string | null;
  property_id: string | null;
  message: string;
}

export const PROPERTY_TYPES = [
  "Villa",
  "Apartment",
  "Penthouse",
  "Townhouse",
  "Finca",
  "Plot",
  "Commercial",
] as const;

export const LISTING_TYPES = [
  "For Sale",
  "For Rent",
  "Short-term Rental",
] as const;

export const STATUS_OPTIONS = [
  "Available",
  "Reserved",
  "Sold",
  "Rented",
  "Off-market",
] as const;

export const PETS_OPTIONS = [
  "Allowed",
  "Not allowed",
  "Upon request",
] as const;

export const FEATURES_OPTIONS = [
  "Pool",
  "Sea view",
  "Garage",
  "Garden",
  "Gated community",
  "Gym",
  "Lift",
  "Terrace",
  "Private parking",
  "Fireplace",
  "New renovation",
  "Beachside",
] as const;
