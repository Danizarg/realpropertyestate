import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactForm from "@/components/forms/ContactForm";
import { WHATSAPP_DISPLAY_PHONE, WHATSAPP_GENERAL_URL } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Real Property Estate",
  description: "Get in touch with Real Property Estate in Marbella, Spain.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Left: info */}
            <div className="md:col-span-4">
              <p
                className="text-[11px] tracking-[0.2em] uppercase mb-6"
                style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Get in touch
              </p>
              <h1
                className="font-display text-5xl md:text-6xl mb-12"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400, lineHeight: "1" }}
              >
                Contact
              </h1>

              <div className="space-y-8">
                <div style={{ borderTop: "1px solid #E6E3DE" }} className="pt-6">
                  <p
                    className="text-[11px] tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    Location
                  </p>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "#2D2C2A", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    Marbella, Spain
                    <br />
                    Costa del Sol
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #E6E3DE" }} className="pt-6">
                  <p
                    className="text-[11px] tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@realpropertyestate.online"
                    className="text-[14px] transition-colors hover:text-[#111111]"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    info@realpropertyestate.online
                  </a>
                </div>

                <div style={{ borderTop: "1px solid #E6E3DE" }} className="pt-6">
                  <p
                    className="text-[11px] tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_GENERAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] transition-colors hover:text-[#111111]"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {WHATSAPP_DISPLAY_PHONE}
                  </a>
                </div>

                <div style={{ borderTop: "1px solid #E6E3DE" }} className="pt-6">
                  <p
                    className="text-[11px] tracking-[0.1em] uppercase mb-3"
                    style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    Social
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] transition-colors hover:text-[#111111]"
                      style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      Instagram
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] transition-colors hover:text-[#111111]"
                      style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="md:col-span-7 md:col-start-6">
              <div
                className="p-10"
                style={{ border: "1px solid #E6E3DE", background: "#F5F4F1" }}
              >
                <p
                  className="font-display text-2xl mb-8"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111", fontWeight: 400 }}
                >
                  Send an Enquiry
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
