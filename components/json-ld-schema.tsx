/**
 * JSON-LD Structured Data for SoftwareApplication
 * Helps search engines understand ERNIE Image as a web application
 * 
 * Note: This is a server component to avoid hydration issues
 */
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/config/site';

export async function SoftwareApplicationSchema({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'metadata' });

    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": `${siteConfig.name} - ${t('title')}`,
        "description": t('description'),
        "applicationCategory": ["DesignApplication", "AITool"],
        "operatingSystem": "Web Browser",
        "alternateName": ["ERNIE Image Generator", "Baidu ERNIE Image", "AI Image Generator"],
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "3 free generations for new users"
        },
        "featureList": [
            "ERNIE Image Text to Image Generation",
            "Multiple aspect ratios (1:1, 16:9, 9:16)",
            "5 style presets (Photorealistic, Digital Art, Anime, Cinematic)",
            "No queue, instant generation",
            "Multi-language support (English, Chinese)",
            "High resolution output"
        ],
        "screenshot": `${siteConfig.url}/og-image.png`
        // Note: aggregateRating removed - only add when backed by real user review data
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
