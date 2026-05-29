import type { Metadata } from "next";

import { ProductsPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Lippa Labs products including SpendFence, GigWise for independent worker finance, and the TradersDelight research preview.",
  openGraph: {
    title: "Lippa Labs Products | SpendFence, GigWise, and TradersDelight",
    description:
      "Explore Lippa Labs products including SpendFence, GigWise for independent worker finance, and the TradersDelight research preview."
  }
};

export default function Page() {
  return <ProductsPage />;
}
