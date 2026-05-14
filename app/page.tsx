import { Navbar, Footer } from '@/components/layout';
import { HeroSection, AboutSection, SkillsSection, ExperienceSection, ProjectsSection, ContactSection } from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
