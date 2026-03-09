import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PhotoGrid from '@/components/PhotoGrid';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ProjectBackground from '@/components/ProjectBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ProjectBackground />
      <Navbar />
      <HeroSection />
      <div className="relative z-10 pointer-events-none">
        <PhotoGrid />
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
