import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://senaakat.com.tr",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://senaakat.com.tr/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://senaakat.com.tr/projects",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://senaakat.com.tr/experience",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://senaakat.com.tr/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ]
}