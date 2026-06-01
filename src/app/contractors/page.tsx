import type { Metadata } from "next";
import { VerticalLandingPage } from "@/components/vertical-landing-page";
import { verticalPages } from "@/data/vertical-pages";
import { createVerticalSeoMetadata } from "@/lib/seo";

const page = verticalPages.contractors;

export const metadata: Metadata = {
  ...createVerticalSeoMetadata(page),
};

export default function ContractorsPage() {
  return <VerticalLandingPage page={page} />;
}
