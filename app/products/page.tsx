import type { Metadata } from "next";

import { ProductsPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Lippa Labs products including SpendFence, GigLedger for independent worker finance, and the TradersDelight research preview.",
  openGraph: {
    title: "Lippa Labs Products | SpendFence, GigLedger, and TradersDelight",
    description:
      "Explore Lippa Labs products including SpendFence, GigLedger for independent worker finance, and the TradersDelight research preview."
  }
};

export default function Page() {
  return <ProductsPage />;
}
