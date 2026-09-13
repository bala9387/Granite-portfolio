import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { companyData } from "@/data/company";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-5 h-[1.5px] bg-[#C99A4A]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A]">
            Direct Communication
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-3">
          Get in Touch
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed font-normal max-w-md">
          We&apos;re here to help with your granite tile requirements. Reach out directly for factory visits, architectural specifications, material samples, and orders.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="space-y-4">
        {/* Address */}
        <div className="p-5 rounded-xl bg-[#171C1E] border border-[#2A3034] hover:border-[#C99A4A]/50 transition-colors flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#0D1112] border border-[#2A3034] flex items-center justify-center text-[#C99A4A] shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E2C07A] mb-1">
              Factory & Quarry Works
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              {companyData.address.full}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="p-5 rounded-xl bg-[#171C1E] border border-[#2A3034] hover:border-[#C99A4A]/50 transition-colors flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#0D1112] border border-[#2A3034] flex items-center justify-center text-[#C99A4A] shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E2C07A] mb-1">
              Direct Phone Lines
            </h3>
            <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-300">
              <a
                href={`tel:${companyData.phone.primary.replace(/\s+/g, "")}`}
                className="hover:text-white transition-colors"
              >
                {companyData.phone.primary}
              </a>
              <a
                href={`tel:${companyData.phone.secondary.replace(/\s+/g, "")}`}
                className="hover:text-white transition-colors text-gray-400"
              >
                {companyData.phone.secondary}
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="p-5 rounded-xl bg-[#171C1E] border border-[#2A3034] hover:border-[#C99A4A]/50 transition-colors flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#0D1112] border border-[#2A3034] flex items-center justify-center text-[#C99A4A] shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E2C07A] mb-1">
              Electronic Mail
            </h3>
            <div className="flex flex-col text-sm text-gray-300">
              <a
                href={`mailto:${companyData.email.general}`}
                className="hover:text-white transition-colors"
              >
                {companyData.email.general}
              </a>
              <a
                href={`mailto:${companyData.email.sales}`}
                className="hover:text-white transition-colors text-gray-400 text-xs mt-0.5"
              >
                {companyData.email.sales} (Sales & Quotes)
              </a>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="p-5 rounded-xl bg-[#171C1E] border border-[#2A3034] hover:border-[#C99A4A]/50 transition-colors flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#0D1112] border border-[#2A3034] flex items-center justify-center text-[#C99A4A] shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E2C07A] mb-1">
              Factory Operating Hours
            </h3>
            <p className="text-sm text-gray-300 font-normal">
              {companyData.workingHours.weekdays}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {companyData.workingHours.saturday} • {companyData.workingHours.sunday}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Factory Visit Card */}
      <div className="relative rounded-2xl overflow-hidden border border-[#2A3034] p-6 group">
        <Image
          src="/images/factory/factory-floor.jpg"
          alt="Sri Akshaya Granites factory visit"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-50"
        />
        <div className="relative z-10">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E2C07A]">
            Factory Inspection
          </span>
          <h4 className="font-serif text-xl font-medium text-white mt-1 mb-2">
            Schedule a Stone Inspection Visit
          </h4>
          <p className="text-xs text-gray-300 max-w-sm mb-4 leading-relaxed font-normal">
            Experience our raw stone stockyard, diamond cutting saws, and automated surface polishers in person.
          </p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E2C07A] hover:text-white transition-colors"
          >
            <span>View Factory Map Location</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
