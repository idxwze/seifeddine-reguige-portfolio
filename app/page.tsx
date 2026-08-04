import { HeroSection }    from "@/components/sections/hero";
import { AboutSection }   from "@/components/sections/about";
import { WorkSection }    from "@/components/sections/work";
import { JourneySection } from "@/components/sections/journey";
import { StackSection }   from "@/components/sections/stack";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <JourneySection />
      <StackSection />
      <ContactSection />
    </>
  );
}
