import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { companyData } from "@/data/company";
import { graniteProducts } from "@/data/products";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15"/>
    </svg>
  );
}

export function Footer() {
  const featuredGranites = graniteProducts.slice(0, 6);

  return (
    <footer className="bg-[#0D1112] text-white border-t border-[#2A3034] relative z-10">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="dark" size="md" />
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-normal">
              {companyData.description}
            </p>
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C99A4A] block mb-3 font-semibold">
                Connect With Our Team
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={companyData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#171C1E] border border-[#2A3034] flex items-center justify-center text-gray-400 hover:text-[#E2C07A] hover:border-[#C99A4A] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#171C1E] border border-[#2A3034] flex items-center justify-center text-gray-400 hover:text-[#E2C07A] hover:border-[#C99A4A] transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#171C1E] border border-[#2A3034] flex items-center justify-center text-gray-400 hover:text-[#E2C07A] hover:border-[#C99A4A] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyData.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#171C1E] border border-[#2A3034] flex items-center justify-center text-gray-400 hover:text-[#E2C07A] hover:border-[#C99A4A] transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2C07A]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Granite Tiles
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/why-us"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Factory
                </Link>
              </li>
              <li>
                <Link
                  href="/request-quote"
                  className="text-[#E2C07A] hover:underline transition-colors font-medium flex items-center gap-1"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Granite Tiles (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2C07A]">
              Granite Tiles
            </h3>
            <ul className="space-y-2.5 text-sm">
              {featuredGranites.map((granite) => (
                <li key={granite.slug}>
                  <Link
                    href={`/products/${granite.slug}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{granite.name}</span>
                    <span className="text-[11px] text-gray-500 group-hover:text-[#C99A4A]">
                      {granite.standardSizes[0]}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/products"
                  className="text-xs text-[#C99A4A] hover:text-[#E2C07A] flex items-center gap-1 font-medium"
                >
                  <span>View All 9+ Granite Varieties</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2C07A]">
              Factory Location
            </h3>
            <div className="space-y-3.5 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyData.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C99A4A] shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${companyData.phone.primary.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {companyData.phone.primary}
                  </a>
                  <a
                    href={`tel:${companyData.phone.secondary.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors text-gray-500"
                  >
                    {companyData.phone.secondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C99A4A] shrink-0" />
                <a
                  href={`mailto:${companyData.email.general}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.email.general}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <div className="text-[11px] leading-relaxed">
                  <div>{companyData.workingHours.weekdays}</div>
                  <div className="text-gray-500">{companyData.workingHours.sunday}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="mt-14 pt-8 border-t border-[#2A3034]/70 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 {companyData.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Natural Stone Manufacturer</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>Tiruvannamalai, Tamil Nadu</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <Link href="/request-quote" className="text-[#C99A4A] hover:underline">
              B2B Quotations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
