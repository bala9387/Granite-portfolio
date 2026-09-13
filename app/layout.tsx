import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { companyData } from "@/data/company";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-stone",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sriakshayagranites.com"),
  title: {
    default: "Sri Akshaya Granites | Premium Granite Tiles & Natural Stone",
    template: "%s | Sri Akshaya Granites",
  },
  description:
    "Explore premium granite tiles and natural stone solutions from Sri Akshaya Granites for residential, commercial and architectural spaces.",
  keywords: [
    "Sri Akshaya Granites",
    "Granite tiles factory",
    "Natural stone manufacturer",
    "Black Galaxy granite",
    "White Crystal granite",
    "Tan Brown granite",
    "Steel Grey granite",
    "Architectural granite tiles",
    "Tamil Nadu granite manufacturer",
  ],
  authors: [{ name: "Sri Akshaya Granites" }],
  creator: "Sri Akshaya Granites",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sriakshayagranites.com",
    title: "Sri Akshaya Granites | Premium Granite Tiles & Natural Stone",
    description:
      "Explore premium granite tiles and natural stone solutions from Sri Akshaya Granites for residential, commercial and architectural spaces.",
    siteName: "Sri Akshaya Granites",
    images: [
      {
        url: "/images/hero/hero-granite-mansion.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Akshaya Granites - Nature's Beauty, Crafted for Your Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Akshaya Granites | Premium Granite Tiles",
    description:
      "Nature's Beauty, Crafted for Your Space. Premium granite tiles manufacturer.",
    images: ["/images/hero/hero-granite-mansion.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.name,
    url: "https://sriakshayagranites.com",
    logo: "https://sriakshayagranites.com/images/hero/hero-granite-mansion.jpg",
    description: companyData.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address.line1,
      addressLocality: companyData.address.city,
      addressRegion: companyData.address.state,
      postalCode: companyData.address.postalCode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyData.phone.primary,
      contactType: "sales",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cinzel.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0D1112] text-white selection:bg-[#C99A4A] selection:text-[#0D1112] font-sans antialiased">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
