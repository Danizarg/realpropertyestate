import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Real Property Estate",
  description: "Real estate presented with restraint, precision and discretion.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero text */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-4">
            <div className="md:col-span-8">
              <p
                className="text-[11px] tracking-[0.2em] uppercase mb-6"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                About us
              </p>
              <h1
                className="font-display text-[56px] md:text-[80px] leading-[0.9] mb-0"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 300 }}
              >
                Essence of
                <br />
                <em style={{ fontStyle: "italic" }}>Marbella</em>
              </h1>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #E6E3DE" }} />

        {/* Main content */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Text column */}
            <div className="md:col-span-6 lg:col-span-5 md:col-start-2">
              <p
                className="font-display text-2xl md:text-3xl leading-snug mb-10"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#2D2C2A", fontWeight: 400 }}
              >
                Real estate presented with restraint, precision and discretion.
              </p>

              <div
                className="space-y-6 text-[15px] leading-relaxed"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                <p>
                  We curate homes for clients who value location, proportion, privacy and architectural quality. Every property we represent is selected for its intrinsic merit — the quality of its construction, the clarity of its site, the coherence of its design.
                </p>
                <p>
                  Marbella has long attracted those who understand that the finest addresses are not simply a matter of price. The Golden Mile, Nueva Andalucía, Sierra Blanca, La Zagaleta — each enclave carries its own character, its own rhythm of light and landscape.
                </p>
                <p>
                  We work with a small number of clients at any given time, ensuring that every search receives our undivided attention. Our relationships with vendors, developers and the wider real estate community across the Costa del Sol allow us to present properties before they reach the public market.
                </p>
                <p>
                  If you are considering buying, selling or leasing a property in Marbella, we would be glad to arrange a private conversation.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 text-[13px] tracking-[0.08em] uppercase text-white transition-opacity hover:opacity-80"
                  style={{ background: "#111111", borderRadius: 4, fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Image column */}
            <div className="md:col-span-5 lg:col-span-5 md:col-start-8">
              <div className="relative overflow-hidden mb-6" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85"
                  alt="Marbella architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <p
                className="text-[12px] tracking-[0.05em]"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Marbella, Costa del Sol, Spain
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ borderTop: "1px solid #E6E3DE" }} className="bg-[#F5F4F1]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <p
              className="text-[11px] tracking-[0.2em] uppercase mb-14"
              style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
            >
              What we stand for
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Restraint",
                  body: "We do not list every property available. We represent only those that meet our standards of quality, location and authenticity.",
                },
                {
                  title: "Precision",
                  body: "Every detail — from the condition of a title deed to the quality of a view — is verified before a property enters our portfolio.",
                },
                {
                  title: "Discretion",
                  body: "Our clients trust us with decisions of significant consequence. That trust is earned through absolute confidentiality.",
                },
              ].map((item) => (
                <div key={item.title} style={{ borderTop: "1px solid #E6E3DE" }} className="pt-8">
                  <h3
                    className="font-display text-2xl mb-4"
                    style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
