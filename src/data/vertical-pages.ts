export type VerticalPage = {
  slug: string;
  product: string;
  industry: string;
  headline: string;
  painPoints: string[];
  solutionCopy: string;
  primaryCta: string;
};

export const verticalPages: Record<string, VerticalPage> = {
  restaurants: {
    slug: "restaurants",
    product: "DineLine",
    industry: "Restaurants",
    headline: "AI that books your reservations by phone. Your hostess never takes a night off.",
    painPoints: [
      "Missed calls during dinner rush = lost reservations",
      "Staff can't answer phones while serving tables",
      "Online booking systems feel impersonal",
      "No-shows cost restaurants thousands per month",
    ],
    solutionCopy:
      "DineLine answers your restaurant's phone, takes reservation details naturally, confirms via SMS, and updates your booking system - all without human intervention. It sounds like a real person because it IS a real conversation, powered by AI.",
    primaryCta: "Hear DineLine in action",
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
  },
};

