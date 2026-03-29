import GradientMesh from '@/components/GradientMesh';
import Particles from '@/components/Particles';
import CursorGlow from '@/components/CursorGlow';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhatIDoSection from '@/components/WhatIDoSection';
import PortalSlider from '@/components/PortalSlider';
import ProjectsSection from '@/components/ProjectsSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseMeSection from '@/components/WhyChooseMeSection';
import MyProcessSection from '@/components/MyProcessSection';
import TestimonialSection from '@/components/TestimonialSection';
import ToolStrip from '@/components/ToolStrip';
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
      <AboutSection />
      <WhatIDoSection />
      <PortalSlider />
      <ProjectsSection />
      <StatsSection />
      <WhyChooseMeSection />
      <MyProcessSection />
      <TestimonialSection />
      <ToolStrip />
      <YouTubeSection />
      <EducationSection />
      <WorkVault />
      <ContactSection />
      <footer className="relative text-center py-6 text-xs tracking-widest uppercase">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--neon-cyan) / 0.3), hsl(var(--neon-purple) / 0.3), transparent)',
          }}
        />
        <p className="text-muted-foreground" style={{ textShadow: '0 0 8px hsl(var(--neon-purple) / 0.25)' }}>
          Built with AI ✦ Md Nasrullah
        </p>
      </footer>
    </div>
  );
};

export default Index;
