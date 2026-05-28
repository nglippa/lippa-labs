import type { Metadata } from "next";

import { ContactPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Lippa Labs about products, partnerships, support, or business verification.",
};

export default function Page() {
  return <ContactPage />;
}
