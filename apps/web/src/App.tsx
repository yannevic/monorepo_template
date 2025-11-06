import Star from '@/components/ui/sparkle/index';
import TimerWindow from './components/ui/timer';
import NavBar from './components/sections/navbar';
import HeroSection from './components/sections/hero';
import StudiesSection from './components/sections/estudos';
import MyProjectsSection from './components/sections/projetos';
import AboutMeSection from './components/sections/sobre';
import ContactSection from './components/sections/contato';
import FooterSection from './components/sections/footer';
import ScrollPage from './utils/ScrollPage';

function App() {
  const stars = [
    { x: 6, y: 10, size: 60 },
    { x: 75, y: 3, size: 60 },
    { x: 51, y: 16, size: 60 },
    { x: 20, y: 82, size: 60 },
    { x: 55, y: 77, size: 60 },
    { x: 90, y: 66, size: 60 },
    { x: 29, y: 6, size: 40 },
    { x: 85, y: 22, size: 40 },
    { x: 8, y: 66, size: 40 },
  ];

  return (
    <div className="relative">
      <NavBar scrollProgress={ScrollPage()} />
      <HeroSection />
      <StudiesSection />
      <MyProjectsSection />
      <AboutMeSection />
      <ContactSection />
      <FooterSection />
      <TimerWindow />
      <div className=" min-w-[100vw] pointer-events-none relative ">
        {stars.map((star) => (
          <Star key={`${star.x}-${star.y}-${star.size}`} {...star} />
        ))}
      </div>
    </div>
  );
}

export default App;
