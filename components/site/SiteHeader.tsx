"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { InstagramIcon, TikTokIcon } from "./SocialIcons";
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/social";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      style={{ borderBottom: "1px solid #E6E3DE" }}
      className="bg-white sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-base tracking-[0.12em] uppercase text-[#111111] hover:opacity-70 transition-opacity"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontWeight: 500, letterSpacing: "0.14em" }}
        >
          Real Property Estate
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-[#111111]"
              style={{ color: "#8A8781" }}
            >
              <InstagramIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition-colors hover:text-[#111111]"
              style={{ color: "#8A8781" }}
            >
              <TikTokIcon className="w-[18px] h-[18px]" />
            </a>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[13px] tracking-[0.08em] uppercase transition-colors"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: pathname === link.href ? "#111111" : "#8A8781",
                fontWeight: 400,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            style={{ backgroundColor: "#111111" }}
            className={`block w-5 h-px transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            style={{ backgroundColor: "#111111" }}
            className={`block w-5 h-px transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            style={{ backgroundColor: "#111111" }}
            className={`block w-5 h-px transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ borderTop: "1px solid #E6E3DE" }}
          className="md:hidden bg-white"
        >
          <nav className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-[13px] tracking-[0.08em] uppercase"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  color: pathname === link.href ? "#111111" : "#8A8781",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-5 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: "#8A8781" }}
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                style={{ color: "#8A8781" }}
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
