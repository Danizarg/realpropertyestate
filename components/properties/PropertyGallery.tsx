"use client";

import { useState } from "react";
import Image from "next/image";
import type { PropertyImage } from "@/lib/types";

interface PropertyGalleryProps {
  images: PropertyImage[];
  propertyName: string;
}

export default function PropertyGallery({ images, propertyName }: PropertyGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const sorted = [...images].sort((a, b) => a.sort_order - b.sort_order);
  const cover = sorted.find((i) => i.is_cover) ?? sorted[0];
  const rest = sorted.filter((i) => i.id !== cover?.id).slice(0, 4);

  if (!cover) {
    return (
      <div
        className="w-full bg-[#F5F4F1] flex items-center justify-center"
        style={{ height: 480 }}
      >
        <span className="text-[13px]" style={{ color: "#8A8781" }}>No images available</span>
      </div>
    );
  }

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {/* Cover — spans 2 rows on desktop */}
        <div
          className="relative col-span-2 md:col-span-2 md:row-span-2 cursor-pointer overflow-hidden bg-[#F5F4F1]"
          style={{ aspectRatio: "4/3" }}
          onClick={() => setLightboxIndex(0)}
        >
          <Image
            src={cover.url}
            alt={cover.alt ?? propertyName}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover hover:scale-[1.02] transition-transform duration-700"
          />
        </div>

        {/* Thumbnails */}
        {rest.map((img, idx) => (
          <div
            key={img.id}
            className="relative cursor-pointer overflow-hidden bg-[#F5F4F1]"
            style={{ aspectRatio: "4/3" }}
            onClick={() => setLightboxIndex(idx + 1)}
          >
            <Image
              src={img.url}
              alt={img.alt ?? `${propertyName} ${idx + 2}`}
              fill
              sizes="33vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        ))}

        {/* View all button if more images */}
        {images.length > 5 && (
          <div
            className="relative cursor-pointer overflow-hidden bg-[#2D2C2A] flex items-center justify-center"
            style={{ aspectRatio: "4/3" }}
            onClick={() => setLightboxIndex(5)}
          >
            <span
              className="text-[13px] tracking-[0.08em] uppercase text-white"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              +{images.length - 5} more
            </span>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-[13px] tracking-[0.08em] uppercase"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            onClick={() => setLightboxIndex(null)}
          >
            Close
          </button>

          {lightboxIndex > 0 && (
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-[20px]"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(Math.max(0, lightboxIndex - 1)); }}
            >
              ←
            </button>
          )}

          {lightboxIndex < sorted.length - 1 && (
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-[20px]"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(Math.min(sorted.length - 1, lightboxIndex + 1)); }}
            >
              →
            </button>
          )}

          <div
            className="relative w-full max-w-5xl mx-12"
            style={{ aspectRatio: "16/10" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={sorted[lightboxIndex]?.url ?? cover.url}
              alt={sorted[lightboxIndex]?.alt ?? propertyName}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <p
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-[12px]"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            {lightboxIndex + 1} / {sorted.length}
          </p>
        </div>
      )}
    </>
  );
}
