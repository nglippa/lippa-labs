import type { Metadata } from "next";

import { LegalPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Lippa Labs terms of service for software products, websites, and services.",
};

export default function Page() {
  return <LegalPage type="terms" />;
}
