import type { Metadata } from "next";

import { ProductsPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Lippa Labs products for adaptive budgeting, trading review, and practical AI-assisted workflows.",
};

export default function Page() {
  return <ProductsPage />;
}
