import type { Metadata } from "next";
import { VerticalLandingPage } from "@/components/vertical-landing-page";
import { verticalPages } from "@/data/vertical-pages";
import { createVerticalSeoMetadata } from "@/lib/seo";

const page = verticalPages.restaurants;

export const metadata: Metadata = {
  ...createVerticalSeoMetadata(page),
};

export default function RestaurantsPage() {
  return <VerticalLandingPage page={page} />;
}
