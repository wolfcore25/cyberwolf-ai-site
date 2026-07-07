export function createBusinessSchema() {
  const organization = {
    "@type": "Organization",
    "@id": "https://cyberwolfaisystems.com/#organization",
    name: "CyberWolf AI Systems",
    url: "https://cyberwolfaisystems.com",
    email: "gregs@cyberwolfaisystems.com",
    logo: "https://cyberwolfaisystems.com/logo-main.png",
    description:
      "CyberWolf AI Systems builds production voice AI agents, phone automation, AI-ready websites, and multi-agent systems for real business workflows.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "gregs@cyberwolfaisystems.com",
        availableLanguage: "English",
      },
    ],
    sameAs: ["https://cyberwolfaisystems.com"],
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": "https://cyberwolfaisystems.com/#professional-service",
    name: "CyberWolf AI Systems",
    url: "https://cyberwolfaisystems.com",
    email: "gregs@cyberwolfaisystems.com",
    image: "https://cyberwolfaisystems.com/cyberwolf-og.png",
    description:
      "AI agent development, voice AI phone automation, AI-ready websites, workflow automation, and multi-agent system architecture.",
    provider: {
      "@id": "https://cyberwolfaisystems.com/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Voice AI agent development",
      "Phone automation",
      "AI-ready website development",
      "Workflow automation",
      "Multi-agent architecture",
      "AI consulting and training",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CyberWolf AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Voice AI & Phone Automation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "AI Agent Development" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "AI-Ready Websites" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Workflow Automation" },
        },
      ],
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, professionalService],
  };
}
