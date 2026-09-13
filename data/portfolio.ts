export type PortfolioCategory = "all" | "residential" | "commercial" | "hospitality" | "interior" | "outdoor";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: "residential" | "commercial" | "hospitality" | "interior" | "outdoor";
  categoryDisplay: string;
  graniteUsed: string;
  graniteSlug: string;
  location: string;
  completionYear: string;
  scope: string;
  description: string;
  images: {
    hero: string;
    gallery: string[];
  };
  highlights: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "luxury-villa-black-galaxy",
    slug: "luxury-villa",
    title: "Luxury Residential Villa",
    category: "residential",
    categoryDisplay: "Residential Architecture",
    graniteUsed: "Black Galaxy Granite",
    graniteSlug: "black-galaxy",
    location: "Bengaluru, India",
    completionYear: "2024",
    scope: "Over 8,500 sq. ft. of polished flooring, master cantilevered stairs, and kitchen island",
    description:
      "A modern private villa project demanding monolithic stone surfaces with minimal joint lines. High-grade Black Galaxy granite tiles with matched golden specks were precision cut to 800×800mm formats, lending an opulent, reflective aesthetic to the open-plan living galleries and master suites.",
    images: {
      hero: "/images/portfolio/luxury-villa.jpg",
      gallery: [
        "/images/portfolio/luxury-villa.jpg",
        "/images/granite/black-galaxy.jpg",
        "/images/portfolio/kitchen-countertops.jpg",
      ],
    },
    highlights: [
      "Precision calibrated 800×800mm tiles with 1mm laser tolerances",
      "Hand-matched crystalline specks across primary living hall",
      "High-gloss water-shedding finish in entry foyers and grand staircase",
    ],
  },
  {
    id: "commercial-atrium-white-crystal",
    slug: "commercial-building",
    title: "Corporate Headquarters Atrium",
    category: "commercial",
    categoryDisplay: "Commercial Architecture",
    graniteUsed: "White Crystal Granite",
    graniteSlug: "white-crystal",
    location: "Chennai, India",
    completionYear: "2024",
    scope: "15,000 sq. ft. continuous high-traffic lobby flooring and elevator wall cladding",
    description:
      "Engineered for high daily footfalls, this landmark corporate atrium required bright, light-reflective natural stone with remarkable compressive resistance. Calibrated White Crystal granite tiles were selected to enhance natural skylight dispersion while maintaining a pristine, easy-to-clean commercial surface.",
    images: {
      hero: "/images/portfolio/commercial-building.jpg",
      gallery: [
        "/images/portfolio/commercial-building.jpg",
        "/images/granite/white-crystal.jpg",
        "/images/portfolio/office-space.jpg",
      ],
    },
    highlights: [
      "Slip-tested polished surface with anti-stain sealing",
      "Consistent white-grey crystalline matrix across all four levels",
      "Bespoke cut elevator jambs and baseboards",
    ],
  },
  {
    id: "outdoor-plazas-tan-brown",
    slug: "outdoor-flooring",
    title: "Executive Terrace & Outdoor Plaza",
    category: "outdoor",
    categoryDisplay: "Outdoor & Landscape",
    graniteUsed: "Tan Brown (Flamed Finish)",
    graniteSlug: "tan-brown",
    location: "Hyderabad, India",
    completionYear: "2023",
    scope: "Exterior pool deck, pedestrian terrace, and vehicular driveway paving",
    description:
      "This sprawling executive club required an exterior stone that would withstand direct sun exposure, monsoon rains, and thermal fluctuations without fading or becoming slippery. Tan Brown granite with a thermal flamed finish was provided in thick 30mm pavers, delivering organic warmth and dependable grip.",
    images: {
      hero: "/images/portfolio/outdoor-flooring.jpg",
      gallery: [
        "/images/portfolio/outdoor-flooring.jpg",
        "/images/granite/tan-brown.jpg",
        "/images/granite/multicolour-red.jpg",
      ],
    },
    highlights: [
      "Thermal flamed micro-texture for superior wet slip resistance",
      "UV-stable natural mineral coloration",
      "High flexural strength 30mm paver specifications",
    ],
  },
  {
    id: "chef-kitchen-steel-grey",
    slug: "kitchen-countertops",
    title: "Modern Gourmet Kitchen & Island",
    category: "interior",
    categoryDisplay: "Interior & Countertops",
    graniteUsed: "Steel Grey Granite (Leathered)",
    graniteSlug: "steel-grey",
    location: "Coimbatore, India",
    completionYear: "2024",
    scope: "Waterfall center island, preparation counters, and full-height backsplash",
    description:
      "Designed with an industrial-minimalist aesthetic, this gourmet kitchen centers around a 12-foot seamless monolithic island fashioned from Steel Grey granite. The tactile leathered finish dampens harsh reflections while emphasizing the natural stone's tactile crystalline grain.",
    images: {
      hero: "/images/portfolio/kitchen-countertops.jpg",
      gallery: [
        "/images/portfolio/kitchen-countertops.jpg",
        "/images/granite/steel-grey.jpg",
        "/images/portfolio/luxury-villa.jpg",
      ],
    },
    highlights: [
      "Mitered waterfall edge profile with continuous grain wrapping",
      "Tactile leathered surface resistant to fingerprints and scratches",
      "Integrated under-mount sink cutouts with water groove drainboards",
    ],
  },
  {
    id: "hotel-lobby-imperial-red",
    slug: "hotel-lobby",
    title: "Boutique Hotel Grand Reception",
    category: "hospitality",
    categoryDisplay: "Hospitality & Leisure",
    graniteUsed: "Imperial Red & Black Galaxy",
    graniteSlug: "imperial-red",
    location: "Madurai, India",
    completionYear: "2023",
    scope: "Custom waterjet geometric medallion, reception desk facade, and perimeter border",
    description:
      "A grand hotel reception inspired by heritage Indian stone architecture. Deep Imperial Red granite tiles were framed by Black Galaxy border accents, creating a regal and memorable first impression for guests arriving from across the world.",
    images: {
      hero: "/images/portfolio/hotel-lobby.jpg",
      gallery: [
        "/images/portfolio/hotel-lobby.jpg",
        "/images/granite/imperial-red.jpg",
        "/images/granite/black-galaxy.jpg",
      ],
    },
    highlights: [
      "Intricate waterjet medallion with tight 0.5mm joints",
      "Vibrant natural ruby coloration that deepens under accent spotlights",
      "Sealed with high-traffic penetrating sealers",
    ],
  },
  {
    id: "corporate-office-ivory-brown",
    slug: "office-space",
    title: "Executive Suites & Boardrooms",
    category: "interior",
    categoryDisplay: "Interior Architecture",
    graniteUsed: "Ivory Brown Granite",
    graniteSlug: "ivory-brown",
    location: "Kochi, India",
    completionYear: "2024",
    scope: "Executive floors, conference room borders, and executive washroom vanities",
    description:
      "Ivory Brown granite was chosen to create a warm, calm, and dignified atmosphere for a financial consultancy's executive suites. The soft beige tones harmonize with natural walnut wall paneling and acoustic felt baffles.",
    images: {
      hero: "/images/portfolio/office-space.jpg",
      gallery: [
        "/images/portfolio/office-space.jpg",
        "/images/granite/ivory-brown.jpg",
        "/images/portfolio/commercial-building.jpg",
      ],
    },
    highlights: [
      "Gentle earthy warmth complementing natural timber cabinetry",
      "Honed finish for a soft, glare-free optical finish",
      "Bespoke vanity tops with curved edge details",
    ],
  },
];
