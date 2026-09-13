"use client";

import { MessageSquare } from "lucide-react";
import { companyData } from "@/data/company";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.number.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(companyData.whatsapp.defaultMessage)}`;

  return (
    <aside aria-label="Quick WhatsApp enquiry" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#171C1E]/95 hover:bg-[#222729] text-white pl-4 pr-5 py-3 rounded-full border border-[#C99A4A]/40 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#C99A4A] group"
        aria-label="Enquire on WhatsApp with Sri Akshaya Granites"
      >
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm">
          <MessageSquare className="w-4 h-4 fill-white" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#E2C07A] leading-tight">
            Factory Direct
          </span>
          <span className="text-xs font-medium text-gray-200 group-hover:text-white leading-tight">
            WhatsApp Inquiry
          </span>
        </div>
      </a>
    </aside>
  );
}
