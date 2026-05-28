import type { Metadata } from "next";

import { AboutPage } from "@/components/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Lippa Labs, an independent software studio founded by Nicholas Lippa.",
};

export default function Page() {
  return <AboutPage />;
}
