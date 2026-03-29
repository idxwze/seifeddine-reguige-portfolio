import { HeroSection } from "@/components/sections/hero";
import { FoundationSection } from "@/components/sections/foundation";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";
import { Section } from "@/components/layout/section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="container-shell">
        <Section id="projects">
          <ProjectsSection />
        </Section>
        <Section id="foundation">
          <FoundationSection />
        </Section>
        <Section id="skills">
          <SkillsSection />
        </Section>
        <Section id="contact">
          <ContactSection />
        </Section>
      </div>
    </>
  );
}
