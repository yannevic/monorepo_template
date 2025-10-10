import Star from '@/components/ui/sparkle/index';
import HeroSection from './components/sections/hero';

function App() {
  const stars = [
    { x: 6, y: 10, size: 60 },
    { x: 75, y: 3, size: 60 },
    { x: 51, y: 16, size: 60 },
    { x: 20, y: 82, size: 60 },
    { x: 55, y: 77, size: 60 },
    { x: 90, y: 66, size: 60 },
    { x: 29, y: 6, size: 40 },
    { x: 88, y: 22, size: 40 },
    { x: 8, y: 66, size: 40 },
  ];

  return (
    <>
      <HeroSection />
      <div className=" min-w-[100vw] min-h-[100vh] pointer-events-none relative ">
        {stars.map((star) => (
          <Star key={`${star.x}-${star.y}-${star.size}`} {...star} />
        ))}
      </div>
    </>
  );
}

export default App;
