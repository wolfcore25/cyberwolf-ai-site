import { businessInfo } from "@/lib/seo";

export function createBusinessSchema() {
  const organizationId = `${businessInfo.url}/#organization`;
  const professionalServiceId = `${businessInfo.url}/#professional-service`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: businessInfo.name,
      url: businessInfo.url,
      logo: `${businessInfo.url}/logo-main.png`,
      email: businessInfo.email,
      description: businessInfo.description,
      areaServed: {
        "@type": "Country",
        name: businessInfo.areaServed,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales and support",
          email: businessInfo.email,
          availableLanguage: ["English"],
        },
      ],
      sameAs: [businessInfo.url],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": professionalServiceId,
      name: businessInfo.name,
      url: businessInfo.url,
      email: businessInfo.email,
      description: businessInfo.description,
      parentOrganization: {
        "@id": organizationId,
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: businessInfo.address.addressCountry,
      },
      areaServed: {
        "@type": "Country",
        name: businessInfo.areaServed,
      },
      serviceType: businessInfo.services,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CyberWolf AI Systems Services",
        itemListElement: businessInfo.services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
          },
        })),
      },
    },
  ];
}
