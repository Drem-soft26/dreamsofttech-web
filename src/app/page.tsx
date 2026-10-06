import { AboutPreview } from "@/components/home/AboutPreview";
import { Capabilities } from "@/components/home/Capabilities";
import { ContactCta } from "@/components/home/ContactCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pricing } from "@/components/home/Pricing";
import { Solutions } from "@/components/home/Solutions";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Capabilities />
      <Pricing />
      <WhyChooseUs />
      <HowItWorks />
      <AboutPreview />
      <ContactCta />
    </>
  );
}


