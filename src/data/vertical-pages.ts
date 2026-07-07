export type VerticalPage = {
  slug: string;
  product: string;
  industry: string;
  headline: string;
  painPoints: string[];
  solutionCopy: string;
  primaryCta: string;
  heroImage: {
    src: string;
    alt: string;
  };
};

export const verticalPages: Record<string, VerticalPage> = {
  restaurants: {
    slug: "restaurants",
    product: "DineLine",
    industry: "Restaurants",
    headline: "AI that books your reservations by phone. Your host never takes a night off.",
    painPoints: [
      "Missed calls during dinner rush = lost reservations",
      "Staff can't answer phones while serving tables",
      "Online booking systems feel impersonal",
      "No-shows cost restaurants thousands per month",
    ],
    solutionCopy:
      "DineLine answers your restaurant's phone, takes reservation details naturally, confirms via SMS, and updates your booking system - all without human intervention. It sounds like a real person because it IS a real conversation, powered by AI.",
    primaryCta: "Hear DineLine in action",
    heroImage: {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85",
      alt: "Warm, busy restaurant dining room with tables and ambient lighting",
    },
  },
  "law-firms": {
    slug: "law-firms",
    product: "Legal AI Intake",
    industry: "Law Firms",
    headline:
      "AI intake that qualifies clients and schedules consultations. 24/7. No billable hours wasted.",
    painPoints: [
      "After-hours calls go to voicemail - potential clients call the next firm",
      "Paralegals spend hours on intake calls that don't convert",
      "No way to qualify leads before the attorney's time is spent",
      "Missed calls = missed revenue (avg. personal injury case: $50K-$500K+)",
    ],
    solutionCopy:
      "Our AI intake agent answers every call, qualifies the lead against your criteria, collects case details, and books a consultation - before a human ever gets involved. Your attorneys only talk to qualified prospects.",
    primaryCta: "Talk to our legal AI demo",
    heroImage: {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
      alt: "Professional office and conference room for legal client consultations",
    },
  },
  hvac: {
    slug: "hvac",
    product: "Emergency Call AI",
    industry: "HVAC / Plumbing",
    headline:
      "Never miss an after-hours emergency call again. AI dispatching that pays for itself.",
    painPoints: [
      "After-hours emergency calls go to voicemail",
      "Answering services are expensive and often mess up details",
      "Technicians get woken up for non-emergencies",
      "Lost emergency calls = lost $500-$2,000+ jobs",
    ],
    solutionCopy:
      "Our AI answers after-hours calls, determines urgency, collects the customer's info and problem details, and routes true emergencies to your on-call tech - while scheduling non-urgent jobs for the next business day. No more expensive answering services. No more missed calls.",
    primaryCta: "Hear it handle a call",
    heroImage: {
      src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1800&q=85",
      alt: "Skilled technician on a service call with tools and safety gear",
    },
  },
  medical: {
    slug: "medical",
    product: "Patient Scheduling AI",
    industry: "Medical / Dental",
    headline: "AI appointment scheduling that patients actually like. No hold music. No phone tree.",
    painPoints: [
      "Front desk staff overwhelmed with calls",
      "Patients hate hold times and phone trees",
      "No-shows and last-minute cancellations waste provider time",
      "After-hours scheduling requests go unanswered until morning",
    ],
    solutionCopy:
      "Our AI handles appointment scheduling, rescheduling, and cancellations by phone - naturally. Patients get immediate service. Your front desk gets freed up to handle in-office care. Integrates with your existing EHR/scheduling system.",
    primaryCta: "Try our patient scheduling demo",
    heroImage: {
      src: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=1800&q=85",
      alt: "Medical office consultation and patient care environment",
    },
  },
  contractors: {
    slug: "contractors",
    product: "Lead Conversion AI",
    industry: "Contractors",
    headline: "AI that turns website visitors into booked estimates. Every lead followed up. Instantly.",
    painPoints: [
      "Website visitors leave without calling",
      "Leads come in at night/weekends when nobody answers",
      "Follow-up calls fall through the cracks",
      "Competitors who respond first win the job",
    ],
    solutionCopy:
      "Our AI engages every website visitor, qualifies the lead, collects project details, and books an estimate - by phone or chat. It follows up automatically. The first contractor to respond wins 78% of jobs. Our AI makes sure that's you.",
    primaryCta: "See it in action",
    heroImage: {
      src: "https://images.unsplash.com/photo-1646119955125-7ef8819c813a?auto=format&fit=crop&w=1800&q=85",
      alt: "Contractor measuring wood for a residential renovation project",
    },
  },
};

