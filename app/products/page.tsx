import type { Metadata } from "next";

import { ProductsPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Lippa Labs products including SpendFence for adaptive budgeting and the TradersDelight research preview for trading review workflows.",
  openGraph: {
    title: "Lippa Labs Products | SpendFence and TradersDelight",
    description:
      "Explore Lippa Labs products including SpendFence for adaptive budgeting and the TradersDelight research preview for trading review workflows."
  }
};

export default function Page() {
  return <ProductsPage />;
}
