export type ColorCategory = "all" | "black" | "white" | "brown" | "grey" | "red" | "other";

export interface GraniteProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  colorCategory: "black" | "white" | "brown" | "grey" | "red" | "other";
  colorDisplay: string;
  finishes: string[];
  standardSizes: string[];
  thicknesses: string[];
  applications: string[];
  images: {
    hero: string;
    texture: string;
    application: string;
  };
  characteristics: string[];
  featured: boolean;
}

export const graniteProducts: GraniteProduct[] = [
  {
    id: "black-galaxy",
    slug: "black-galaxy",
    name: "Black Galaxy",
    tagline: "Deep obsidian backdrop illuminated by naturally glittering golden-bronze specks",
    description:
      "Black Galaxy is one of the most recognized and sought-after Indian granites worldwide. Quarried in southern India, it features an ultra-dense, deep black background punctuated by naturally reflective bronze and golden mineral specks. Ideal for high-end flooring, kitchen worktops, and modern architectural cladding.",
    colorCategory: "black",
    colorDisplay: "Deep Obsidian with Gold Flecks",
    finishes: ["Polished", "Honed", "Flamed", "Leathered"],
    standardSizes: ["600 × 600 mm", "600 × 300 mm", "800 × 800 mm", "Custom Cut-to-Size"],
    thicknesses: ["18 mm", "20 mm", "30 mm"],
    applications: ["Flooring", "Wall Cladding", "Kitchen Countertops", "Staircases", "Luxury Bathrooms"],
    images: {
      hero: "/images/granite/black-galaxy-slab.jpg",
      texture: "/images/granite/black-galaxy.jpg",
      application: "/images/portfolio/luxury-villa.jpg",
    },
    characteristics: [
      "Naturally occurring golden bronzite flecks",
      "High compressive strength and low porosity",
      "Mirror-like surface when polished",
      "Exceptional resistance to stains and wear",
    ],
    featured: true,
  },
  {
    id: "white-crystal",
    slug: "white-crystal",
    name: "White Crystal",
    tagline: "Luminous crystalline white matrix with delicate peppered mineral nuances",
    description:
      "White Crystal granite showcases an immaculate, clean off-white field imbued with gentle grey and charcoal crystalline patterns. It lends an aura of airy sophistication and spaciousness, making it a prime choice for expansive commercial atriums, residential living areas, and clean minimalist interiors.",
    colorCategory: "white",
    colorDisplay: "Luminous White & Soft Grey",
    finishes: ["Polished", "Honed", "Satin"],
    standardSizes: ["600 × 600 mm", "800 × 800 mm", "1200 × 600 mm", "Custom Cut-to-Size"],
    thicknesses: ["18 mm", "20 mm", "30 mm"],
    applications: ["Interior Flooring", "Commercial Lobbies", "Feature Walls", "Vanity Tops"],
    images: {
      hero: "/images/granite/white-crystal-slab.jpg",
      texture: "/images/granite/white-crystal.jpg",
      application: "/images/portfolio/commercial-building.jpg",
    },
    characteristics: [
      "Consistent light tonal reflectance",
      "Brightens architectural interiors",
      "Uniform grain structure for seamless tiling",
      "Excellent thermal stability",
    ],
    featured: true,
  },
  {
    id: "tan-brown",
    slug: "tan-brown",
    name: "Tan Brown",
    tagline: "Earthy chocolate undertones enriched with burnt amber and dark garnet crystals",
    description:
      "Tan Brown granite features a rich, dark brown background highlighted with warm tan, copper, and black mineral deposits. Its distinctive floral-like crystalline composition provides organic depth, making it equally suited for warm residential spaces, hotel lobbies, and exterior flooring.",
    colorCategory: "brown",
    colorDisplay: "Rich Chocolate & Copper Amber",
    finishes: ["Polished", "Honed", "Flamed", "Brushed"],
    standardSizes: ["600 × 600 mm", "600 × 300 mm", "800 × 800 mm", "Custom Cut-to-Size"],
    thicknesses: ["18 mm", "20 mm", "30 mm"],
    applications: ["Flooring", "Kitchen Worktops", "Outdoor Paving", "Cladding"],
    images: {
      hero: "/images/granite/tan-brown-slab.jpg",
      texture: "/images/granite/tan-brown.jpg",
      application: "/images/portfolio/outdoor-flooring.jpg",
    },
    characteristics: [
      "Deep earth tones that resist visible dust and staining",
      "Highly durable under foot traffic",
      "Versatile across contemporary and traditional motifs",
      "Distinctive crystalline depth",
    ],
    featured: true,
  },
  {
    id: "steel-grey",
    slug: "steel-grey",
    name: "Steel Grey",
    tagline: "Monolithic architectural charcoal tone with subtle micro-crystalline depth",
    description:
      "Steel Grey granite is a favorite among modern architects and commercial designers. With its disciplined palette of charcoal, graphite, and silver-grey tones, it delivers an industrial, high-end look that complements glass, steel, and timber finishes seamlessly.",
    colorCategory: "grey",
    colorDisplay: "Charcoal & Architectural Graphite",
    finishes: ["Polished", "Honed", "Flamed", "Leathered"],
    standardSizes: ["600 × 600 mm", "800 × 800 mm", "1200 × 600 mm", "Custom Cut-to-Size"],
    thicknesses: ["18 mm", "20 mm", "30 mm"],
    applications: ["Commercial Monolithic Flooring", "Kitchen Islands", "Ventilated Facades", "Elevator Surrounds"],
    images: {
      hero: "/images/granite/steel-grey-slab.jpg",
      texture: "/images/granite/steel-grey.jpg",
      application: "/images/portfolio/kitchen-countertops.jpg",
    },
    characteristics: [
      "Refined monochromatic neutral tone",
      "High flexural strength for large tile formats",
      "Zero degradation under heavy industrial traffic",
      "Low light scattering for subtle gloss or satin feel",
    ],
    featured: true,
  },
  {
    id: "imperial-red",
    slug: "imperial-red",
    name: "Imperial Red",
    tagline: "Bold crimson natural stone with deep garnet and black accents",
    description:
      "Imperial Red is an iconic Indian granite celebrated for its vibrant ruby and crimson field, interwoven with black and grey crystalline swirls. It is often specified for prestigious grand entrances, hotel reception areas, monuments, and bold architectural statements.",
    colorCategory: "red",
    colorDisplay: "Crimson & Garnet Swirls",
    finishes: ["Polished", "Flamed", "Honed"],
    standardSizes: ["600 × 600 mm", "600 × 300 mm", "800 × 800 mm", "Custom Cut-to-Size"],
    thicknesses: ["18 mm", "20 mm", "30 mm"],
    applications: ["Grand Entrance Foyers", "Accent Borders", "Hotel Lobbies", "Exterior Cladding"],
    images: {
      hero: "/images/granite/imperial-red-slab.jpg",
      texture: "/images/granite/imperial-red.jpg",
      application: "/images/portfolio/hotel-lobby.jpg",
    },
    characteristics: [
      "Rich majestic crimson coloration",
      "Excellent weather and UV colorfastness",
      "Striking contrast when paired with dark stones",
      "Time-tested durability",
    ],
    featured: false,
  },
  {
    id: "ivory-brown",
    slug: "ivory-brown",
    name: "Ivory Brown",
    tagline: "Graceful beige and creamy tones woven with soft taupe veining",
    description:
      "Ivory Brown offers a gentle, calming natural aesthetic with warm sandy beige backgrounds and flowing streaks of brown and taupe. It provides a warm, organic ambience perfect for modern luxury residences, bathroom vanity settings, and serene interior flooring.",
    colorCategory: "brown",
    colorDisplay: "Warm Cream, Beige & Soft Taupe",
    finishes: ["Polished", "Honed"],
    standardSizes: ["600 × 600 mm", "800 × 800 mm", "Custom Cut-to-Size"],
    thicknesses: ["18 mm", "20 mm"],
    applications: ["Residential Flooring", "Bathroom Suites", "Wall Panels", "Hallways"],
    images: {
      hero: "/images/granite/ivory-brown-slab.jpg",
      texture: "/images/granite/ivory-brown.jpg",
      application: "/images/portfolio/office-space.jpg",
    },
    characteristics: [
      "Flowing gentle linear veining",
      "Warm neutral tone that complements wood accents",
      "Uniform polish and light dispersion",
      "Pleasant natural variation",
    ],
    featured: false,
  },
  {
    id: "blue-pearl",
    slug: "blue-pearl",
    name: "Blue Pearl",
    tagline: "Iridescent metallic blue and silver crystalline feldspar reflections",
    description:
      "Blue Pearl is a premium larvikite-family natural stone renowned for its distinctive metallic blue sheen (schiller effect) that glistens under directional lighting. It brings an undeniable aura of luxury to executive boardrooms, bar counters, and bespoke feature installations.",
    colorCategory: "other",
    colorDisplay: "Iridescent Midnight Blue & Silver",
    finishes: ["Polished", "Honed"],
    standardSizes: ["600 × 600 mm", "800 × 800 mm", "Custom Cut-to-Size"],
    thicknesses: ["20 mm", "30 mm"],
    applications: ["Executive Boardrooms", "Bar Counters", "Feature Fireplace Surrounds", "Bespoke Bathrooms"],
    images: {
      hero: "/images/granite/blue-pearl-slab.jpg",
      texture: "/images/granite/blue-pearl.jpg",
      application: "/images/portfolio/luxury-villa.jpg",
    },
    characteristics: [
      "Hypnotic optical schiller reflection",
      "Dense feldspar composition",
      "Highly prized for luxury interior focal points",
      "Pristine high-gloss mirror finish",
    ],
    featured: false,
  },
  {
    id: "kashmir-white",
    slug: "kashmir-white",
    name: "Kashmir White",
    tagline: "Crisp white canvas adorned with subtle grey mists and delicate garnet specks",
    description:
      "Kashmir White features a clean, light-colored background accented with soft grey clouding and tiny, scattered berry-garnet minerals. Its subtle, bright pattern makes it popular for contemporary kitchens, modern apartments, and light-filled architectural spaces.",
    colorCategory: "white",
    colorDisplay: "Crisp White, Cloud Grey & Garnet Dots",
    finishes: ["Polished", "Honed", "Leathered"],
    standardSizes: ["600 × 600 mm", "800 × 800 mm", "Custom Cut-to-Size"],
    thicknesses: ["18 mm", "20 mm", "30 mm"],
    applications: ["Kitchen Countertops", "Living Room Flooring", "Accent Wall Cladding"],
    images: {
      hero: "/images/granite/kashmir-white-slab.jpg",
      texture: "/images/granite/kashmir-white.jpg",
      application: "/images/portfolio/commercial-building.jpg",
    },
    characteristics: [
      "Bright, open architectural presence",
      "Fine textured matrix with subtle variation",
      "Complements both light and dark cabinetry",
      "Easy maintenance when sealed",
    ],
    featured: false,
  },
  {
    id: "multicolour-red",
    slug: "multicolour-red",
    name: "Multicolour Red",
    tagline: "Dynamic natural waves of deep red, terracotta, and charcoal swirls",
    description:
      "Multicolour Red granite presents dramatic movement with swirling waves of deep scarlet, rust, and graphite black. Its bold pattern makes it a popular choice for large exterior plazas, dramatic staircases, and prominent facade cladding.",
    colorCategory: "red",
    colorDisplay: "Deep Rust Red & Charcoal Movement",
    finishes: ["Polished", "Flamed", "Honed"],
    standardSizes: ["600 × 600 mm", "600 × 300 mm", "Custom Cut-to-Size"],
    thicknesses: ["18 mm", "20 mm", "30 mm"],
    applications: ["Exterior Cladding", "Landscaping Paving", "Commercial Staircases", "Foyers"],
    images: {
      hero: "/images/granite/multicolour-red-slab.jpg",
      texture: "/images/granite/multicolour-red.jpg",
      application: "/images/portfolio/outdoor-flooring.jpg",
    },
    characteristics: [
      "Organic movement and energetic banding",
      "Thermal flamed finish creates ideal non-slip exterior paving",
      "Exceptional outdoor weather resistance",
      "High density and compressive strength",
    ],
    featured: false,
  },
];
