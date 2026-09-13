import { MetadataRoute } from "next";
import { graniteProducts } from "@/data/products";
import { portfolioProjects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sriakshayagranites.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/products",
    "/portfolio",
    "/why-us",
    "/contact",
    "/request-quote",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = graniteProducts.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...portfolioRoutes];
}
