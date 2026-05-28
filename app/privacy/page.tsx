import type { Metadata } from "next";

import { LegalPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Review the Lippa Labs privacy policy for early-stage software products and services.",
};

export default function Page() {
  return <LegalPage type="privacy" />;
}
