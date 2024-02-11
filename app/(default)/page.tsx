export const metadata = {
  title: "Home - ToomAi",
  description: "Ai desiner",
};

import Hero from "@/components/hero";
import Pricing from "./pricing-section";
import Cta from "@/components/cta";
import Carousel from "@/components/carousel/carousel";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <Pricing />
      <Cta />
    </>
  );
}
