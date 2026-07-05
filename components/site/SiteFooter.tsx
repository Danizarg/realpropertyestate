import Link from "next/link";
import { WHATSAPP_DISPLAY_PHONE, WHATSAPP_GENERAL_URL } from "@/lib/whatsapp";

export default function SiteFooter() {
  return (
    <footer
      style={{ borderTop: "1px solid #E6E3DE" }}
      className="bg-white mt-auto"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p
              className="font-display text-base tracking-[0.12em] uppercase text-[#111111] mb-3"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontWeight: 500 }}
            >
              Real Property Estate
            </p>
            <p
              className="text-[13px] leading-relaxed mb-3"
              style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Marbella, Spain
              <br />
              Costa del Sol
            </p>
            <a
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] transition-colors hover:text-[#111111]"
              style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
            >
              {WHATSAPP_DISPLAY_PHONE}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[11px] tracking-[0.1em] uppercase mb-4"
              style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/properties", label: "Properties" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] transition-colors hover:text-[#111111]"
                  style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-[11px] tracking-[0.1em] uppercase mb-4"
              style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Social
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] transition-colors hover:text-[#111111]"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] transition-colors hover:text-[#111111]"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{ borderTop: "1px solid #E6E3DE" }}
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
        >
          <p
            className="text-[12px]"
            style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
          >
            © {new Date().getFullYear()} Real Property Estate. All rights reserved.
          </p>
          <Link
            href="/login"
            className="text-[12px] transition-colors hover:text-[#111111]"
            style={{ color: "#E6E3DE", fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Owner access
          </Link>
        </div>
      </div>
    </footer>
  );
}
