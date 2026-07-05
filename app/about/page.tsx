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

const eyebrowStyle: React.CSSProperties = {
  color: "#8A8781",
  fontFamily: "Inter, system-ui, sans-serif",
};

const headingFont = { fontFamily: "Cormorant Garamond, Georgia, serif" };

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-12 md:gap-y-0">
            {/* Eyebrow */}
            <p
              className="text-[11px] tracking-[0.2em] uppercase md:[grid-column:7/13] md:[grid-row:1] md:self-end"
              style={eyebrowStyle}
            >
              Essence of Marbella
            </p>

            {/* Heading */}
            <h1
              className="font-display text-[40px] md:text-[52px] leading-[1.05] md:[grid-column:7/13] md:[grid-row:2] mt-4 md:mt-4 mb-2"
              style={{ ...headingFont, color: "#111111", fontWeight: 400 }}
            >
              About Real Property Estate
            </h1>

            {/* Massimo image — top-left on desktop, spans the eyebrow/heading/intro rows */}
            <div className="md:[grid-column:1/6] md:[grid-row:1/4] md:self-start">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src="/about/massimo-michelino.png"
                  alt="Massimo Michelino, Founder and CEO of Real Property Estate"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>
              <p className="text-[12px] tracking-[0.05em] mt-4" style={captionStyle}>
                Massimo Michelino, Founder &amp; CEO
              </p>
            </div>

            {/* Intro text (paragraphs 1–3) */}
            <div
              className="space-y-6 text-[15px] leading-[1.8] md:[grid-column:7/13] md:[grid-row:3] mt-2"
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
            </div>

            {/* Divider */}
            <div
              className="md:[grid-column:1/13] md:[grid-row:4] mt-12 md:mt-16"
              style={{ borderTop: "1px solid #E6E3DE" }}
            />

            {/* Middle wide text (paragraphs 4–6) */}
            <div
              className="space-y-6 text-[15px] leading-[1.8] max-w-2xl md:[grid-column:1/10] md:[grid-row:5] mt-10 md:mt-16"
              style={bodyStyle}
            >
              <p>
                It is also one of Europe&rsquo;s most attractive real estate markets. Thanks to its consistent demand, limited supply in prime locations, and remarkable long-term appreciation, investing in Marbella continues to be one of the safest and most rewarding choices for both private buyers and international investors.
              </p>
              <p>
                At Real Property Estate, we offer an exclusive portfolio that includes luxury villas, contemporary apartments, penthouses, beachfront residences, country estates, building plots, commercial properties, hotels, and premium investment opportunities throughout Marbella and the Costa del Sol.
              </p>
              <p>
                What truly distinguishes us is the strength of our multidisciplinary team. Alongside our real estate specialists, we work with highly qualified architects, engineers, developers, builders, lawyers, and notaries, allowing us to provide comprehensive support at every stage of the process—from selecting the perfect property to legal advice, architectural design, construction, renovation, and investment planning.
              </p>
            </div>

            {/* Closing text (paragraphs 7–8 + tagline) */}
            <div
              className="space-y-6 text-[15px] leading-[1.8] max-w-xl md:[grid-column:1/8] md:[grid-row:6] mt-10"
              style={bodyStyle}
            >
              <p>
                Whether you are looking for a permanent residence, a holiday home, a commercial asset, a development opportunity, or a profitable investment, we are committed to understanding your vision and delivering a tailor-made solution with professionalism, transparency, and absolute dedication.
              </p>
              <p>
                At Real Property Estate, we don&rsquo;t simply sell properties—we create opportunities, build lasting relationships, and help turn your dreams into reality.
              </p>
              <p
                className="font-display text-xl md:text-2xl pt-2"
                style={{ ...headingFont, color: "#111111", fontStyle: "italic", fontWeight: 400 }}
              >
                Your vision. Our expertise. Your perfect property in Marbella.
              </p>
            </div>

            {/* Team image — lower-right on desktop */}
            <div className="md:[grid-column:8/13] md:[grid-row:6] md:self-end mt-10 md:mt-0">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
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
          </div>
        </section>

        {/* CTA */}
        <section style={{ borderTop: "1px solid #E6E3DE" }} className="bg-[#F5F4F1]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
            <p
              className="font-display text-3xl md:text-4xl mb-10 max-w-2xl mx-auto"
              style={{ ...headingFont, color: "#111111", fontWeight: 400 }}
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
