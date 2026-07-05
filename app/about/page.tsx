import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { WHATSAPP_GENERAL_URL } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Real Property Estate",
  description:
    "Massimo Michelino, Founder and CEO of Real Property Estate, on two decades connecting discerning clients to Marbella's finest addresses.",
};

const bodyStyle: React.CSSProperties = {
  color: "#2D2C2A",
  fontFamily: "Inter, system-ui, sans-serif",
};

const captionStyle: React.CSSProperties = {
  color: "#8A8781",
  fontFamily: "Inter, system-ui, sans-serif",
};

function MassimoImage({ priority }: { priority?: boolean }) {
  return (
    <div>
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "4/5", border: "1px solid #E6E3DE" }}
      >
        <Image
          src="/about/massimo-michelino.png"
          alt="Massimo Michelino, Founder and CEO of Real Property Estate"
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 38vw"
          className="object-cover"
          style={{ objectPosition: "center 15%" }}
        />
      </div>
      <p className="text-[12px] tracking-[0.05em] mt-4" style={captionStyle}>
        Massimo Michelino, Founder &amp; CEO
      </p>
    </div>
  );
}

function TeamImage() {
  return (
    <div>
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "4/5", border: "1px solid #E6E3DE" }}
      >
        <Image
          src="/about/real-property-estate-team.png"
          alt="Real Property Estate team member in Marbella"
          fill
          sizes="(max-width: 768px) 100vw, 32vw"
          className="object-cover"
          style={{ objectPosition: "center 10%" }}
        />
      </div>
      <p className="text-[12px] tracking-[0.05em] mt-4" style={captionStyle}>
        A trusted team for Marbella real estate
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Eyebrow + heading */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-4">
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-6"
            style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Essence of Marbella
          </p>
          <h1
            className="font-display text-[40px] md:text-[64px] leading-[1.05] max-w-3xl"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
          >
            About Real Property Estate
          </h1>
        </section>

        {/* Mobile-only: Massimo image right after heading */}
        <section className="md:hidden max-w-7xl mx-auto px-6 pt-10">
          <MassimoImage priority />
        </section>

        {/* Main editorial layout */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-16">
            {/* Left: text */}
            <div className="md:col-span-7">
              <div
                className="space-y-6 text-[15px] leading-[1.8] max-w-[560px]"
                style={bodyStyle}
              >
                <p>
                  My name is Massimo Michelino, Founder and CEO of Real Property Estate. Born in Italy and inspired by the exceptional lifestyle of Marbella, I have dedicated my career to connecting discerning clients with some of the finest real estate opportunities on the Costa del Sol.
                </p>
                <p>
                  For more than two decades, together with my trusted team of experienced professionals, we have built a strong reputation based on integrity, expertise, discretion, and exceptional service. Our mission is simple: to transform every real estate transaction into a seamless and rewarding experience.
                </p>
                <p>
                  Marbella is far more than a destination—it is a way of life. With its year-round Mediterranean climate, outstanding security, world-class infrastructure, prestigious international community, renowned golf courses, luxury marinas, fine dining, and breathtaking coastline, it offers one of the highest standards of living anywhere in the world.
                </p>
                <p>
                  It is also one of Europe&rsquo;s most attractive real estate markets. Thanks to its consistent demand, limited supply in prime locations, and remarkable long-term appreciation, investing in Marbella continues to be one of the safest and most rewarding choices for both private buyers and international investors.
                </p>
                <p>
                  At Real Property Estate, we offer an exclusive portfolio that includes luxury villas, contemporary apartments, penthouses, beachfront residences, country estates, building plots, commercial properties, hotels, and premium investment opportunities throughout Marbella and the Costa del Sol.
                </p>
                <p>
                  What truly distinguishes us is the strength of our multidisciplinary team. Alongside our real estate specialists, we work with highly qualified architects, engineers, developers, builders, lawyers, and notaries, allowing us to provide comprehensive support at every stage of the process—from selecting the perfect property to legal advice, architectural design, construction, renovation, and investment planning.
                </p>
                <p>
                  Whether you are looking for a permanent residence, a holiday home, a commercial asset, a development opportunity, or a profitable investment, we are committed to understanding your vision and delivering a tailor-made solution with professionalism, transparency, and absolute dedication.
                </p>
                <p>
                  At Real Property Estate, we don&rsquo;t simply sell properties—we create opportunities, build lasting relationships, and help turn your dreams into reality.
                </p>
                <p
                  className="font-display text-xl md:text-2xl pt-2"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontStyle: "italic", fontWeight: 400 }}
                >
                  Your vision. Our expertise. Your perfect property in Marbella.
                </p>
              </div>
            </div>

            {/* Right: layered images (desktop only) */}
            <div className="hidden md:block md:col-span-5">
              <div className="relative">
                <div className="ml-auto" style={{ width: "82%" }}>
                  <MassimoImage priority />
                </div>
                <div className="mr-auto -mt-10 lg:-mt-16" style={{ width: "68%" }}>
                  <TeamImage />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-only: team image before CTA */}
        <section className="md:hidden max-w-7xl mx-auto px-6 pb-4">
          <TeamImage />
        </section>

        {/* CTA */}
        <section style={{ borderTop: "1px solid #E6E3DE" }} className="bg-[#F5F4F1]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
            <p
              className="font-display text-3xl md:text-4xl mb-10 max-w-2xl mx-auto"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
            >
              Begin a private conversation about your property search in Marbella.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-[13px] tracking-[0.08em] uppercase text-white transition-opacity hover:opacity-80"
                style={{ background: "#111111", borderRadius: 4, fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Contact via WhatsApp
              </a>
              <Link
                href="/properties"
                className="px-8 py-4 text-[13px] tracking-[0.08em] uppercase transition-colors hover:bg-white"
                style={{ border: "1px solid #E6E3DE", borderRadius: 4, fontFamily: "Inter, system-ui, sans-serif", color: "#2D2C2A" }}
              >
                View Properties
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
