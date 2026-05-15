import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from '@/components/sections';
import { Navbar, Footer } from '@/components/layout';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
