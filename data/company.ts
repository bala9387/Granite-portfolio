/**
 * Sri Akshaya Granites - Company Configuration & Content Data
 * 
 * NOTE: All business-specific information is centralized here.
 * Any fields marked as placeholders can be directly replaced with verified real-world data.
 */

export interface CompanyConfig {
  name: string;
  tagline: string;
  supportingMessage: string;
  description: string;
  establishedPlaceholder: string;
  phone: {
    primary: string;
    secondary: string;
    displayPrimary: string;
    displaySecondary: string;
  };
  email: {
    general: string;
    sales: string;
  };
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  whatsapp: {
    number: string;
    defaultMessage: string;
  };
}

export const companyData: CompanyConfig = {
  name: "Sri Akshaya Granites",
  tagline: "Nature's Beauty, Crafted for Your Space",
  supportingMessage:
    "Premium granite tiles crafted with precision, consistency and care for residential, commercial and architectural spaces.",
  description:
    "Sri Akshaya Granites is a dedicated natural stone manufacturer specializing in high-grade granite tiles, cut-to-size architectural slabs, and bespoke stone solutions crafted for timeless projects.",
  establishedPlaceholder: "[Factory Operations Established]",
  phone: {
    primary: "+91 95249 05665",
    secondary: "+91 87886 12345", // Editable placeholder
    displayPrimary: "+91 95249 05665",
    displaySecondary: "+91 87886 12345",
  },
  email: {
    general: "info@sriakshayagranites.com", // Editable placeholder
    sales: "sales@sriakshayagranites.com", // Editable placeholder
  },
  address: {
    line1: "S.F. No. 125/4, Granite Factory Road",
    line2: "Industrial Area",
    city: "Tiruvannamalai",
    state: "Tamil Nadu",
    postalCode: "606601",
    country: "India",
    full: "S.F. No. 125/4, Granite Factory Road, Tiruvannamalai - 606601, Tamil Nadu, India",
  },
  workingHours: {
    weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
    saturday: "Saturday: 8:00 AM – 4:00 PM",
    sunday: "Sunday: Closed",
  },
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
  whatsapp: {
    number: "+919524905665",
    defaultMessage: "Hello Sri Akshaya Granites, I would like to enquire about your granite tiles collection.",
  },
};
