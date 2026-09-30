import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { LOCATIONS } from "@/lib/site";

const d = LOCATIONS.bathurst;

export const metadata: Metadata = {
  title: { absolute: d.title },
  description: d.description,
  alternates: { canonical: "/" + d.slug },
  openGraph: { title: d.title, description: d.description, url: "/" + d.slug },
};

export default function Page() {
  return <LocationPage d={d} />;
}
