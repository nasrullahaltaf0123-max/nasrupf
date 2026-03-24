import GradientMesh from '@/components/GradientMesh';
import Particles from '@/components/Particles';
import CursorGlow from '@/components/CursorGlow';
import HeroSection from '@/components/HeroSection';
import PortalSlider from '@/components/PortalSlider';
import YouTubeSection from '@/components/YouTubeSection';
import EducationSection from '@/components/EducationSection';
import WorkVault from '@/components/WorkVault';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <GradientMesh />
      <Particles />
      <CursorGlow />
      <HeroSection />
      <PortalSlider />
      <YouTubeSection />
      <EducationSection />
      <WorkVault />
      <ContactSection />
      <footer className="text-center py-6 text-muted-foreground text-xs tracking-widest uppercase">
        Built with AI ✦ Md Nasrullah
      </footer>
    </div>
  );
};

export default Index;
