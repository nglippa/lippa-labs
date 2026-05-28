import type { Metadata } from "next";

import { ProductsPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Launch Lippa Labs products including SpendFence for adaptive budgeting and TradersDelight for trading review workflows.",
  openGraph: {
    title: "Lippa Labs Products | SpendFence and TradersDelight",
    description:
      "Launch Lippa Labs products including SpendFence for adaptive budgeting and TradersDelight for trading review workflows."
  }
};

export default function Page() {
  return <ProductsPage />;
}
