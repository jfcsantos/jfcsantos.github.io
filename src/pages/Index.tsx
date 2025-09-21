import { HeroSection } from '@/components/HeroSection';
import { ProjectGrid } from '@/components/ProjectGrid';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 lg:px-8">
        <HeroSection />
        <ProjectGrid />
        <AboutSection />
        <ContactSection />
        
        <footer className="py-12 border-t border-border">
          <p className="caption text-center">© 2024 João Santos</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;