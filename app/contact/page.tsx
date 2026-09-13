import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Factory & Sales | Sri Akshaya Granites",
  description:
    "Contact Sri Akshaya Granites factory in Tiruvannamalai, Tamil Nadu. Reach our team for quotes, stone samples, factory visits, and supply inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-[#0D1112] text-white min-h-screen">
      {/* Page Hero Banner */}
      <section className="relative py-16 md:py-20 bg-[#0D1112] border-b border-[#2A3034] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/factory/factory-floor.jpg"
            alt="Sri Akshaya Granites factory operations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1112] via-[#0D1112]/90 to-[#0D1112]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Contact Us" }]}
            theme="dark"
            className="mb-6"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A] block mb-2">
            Factory Direct Communication
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
            Reach out to our stone specialists for quotations, technical specifications, custom sizes, or to schedule a visit to our manufacturing facility.
          </p>
        </div>
      </section>

      {/* Main Content: 2 Columns */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Info & Factory Details (5 cols) */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
