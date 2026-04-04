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
import YouTubeSection from '@/components/YouTubeSection';
import EducationSection from '@/components/EducationSection';
import WorkVault from '@/components/WorkVault';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ThemeToggle />
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
      <YouTubeSection />
      <EducationSection />
      <WorkVault />
      <ContactSection />
      <footer className="relative text-center py-12 md:py-16">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-md h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)',
          }}
        />
        <p
          className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold"
        >
          Crafted with AI Precision{' '}
          <span className="inline-block mx-1" style={{ color: 'hsl(var(--neon-cyan))' }}>✦</span>
          {' '}Md Nasrullah
        </p>
      </footer>
    </div>
  );
};

export default Index;
