import { useEffect, useState } from 'react';
import cn from '@utils/cn';
import { Button } from '@components/ui/button';
import TabDefault from '@/assets/svgs/tab-default.svg?react';
import ActiveNavTab from '../ui/activeNavTab';

type NavBarProps = {
  scrollProgress: number;
};

const navItens = [
  { nome: 'Início', id: 'inicio', isActive: true, activeColor: '#82AADE' },
  { nome: 'Meus Estudos', id: 'estudos', isActive: false, activeColor: '#9DACD7' },
  { nome: 'Meus projetos', id: 'projetos', isActive: false, activeColor: '#E9D3DF' },
  { nome: 'Sobre mim', id: 'sobre', isActive: false, activeColor: '#FBE2DB' },
  { nome: 'Contato', id: 'contato', isActive: false, activeColor: '#F2F2E8' },
];

function NavBar({ scrollProgress }: NavBarProps) {
  const [activeSection, setActiveSection] = useState('inicio');

  const totalBoxes = 20;
  const filledBoxes = Math.floor(scrollProgress * totalBoxes);
  const isComplete = scrollProgress === 1;

  const chargeIds = Array.from({ length: totalBoxes }, (_, i) => `charge-${i + 1}`);

  function tabImage(isActive: boolean, activeColor: string) {
    return isActive ? <ActiveNavTab color={activeColor} /> : <TabDefault />;
  }

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.6 }
    );

    navItens.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="border-b-[2px] pt-[40px] pl-[40px] bg-[#F2F2E8] flex flex-row fixed top-0 left-0 w-full z-50">
      <div className="flex flex-row gap-[10px] translate-y-[2px]">
        {navItens.map((item) => {
          const isActive = item.id === activeSection;

          return (
            <Button
              key={item.nome}
              type="button"
              asChild={false}
              onClick={() => scrollTo(item.id)}
              className="relative flex items-center justify-center cursor-pointer transition-colors duration-300"
            >
              {tabImage(isActive, item.activeColor)}
              <span className="absolute text-[#221208] text-[20px]">{item.nome}</span>
            </Button>
          );
        })}
      </div>
      <div className="flex w-full items-middle justify-end text-[20px] text-[#715B7C] py-[4px] mr-[10px]">
        <span>{isComplete ? 'Visualização completa!!!' : 'Visualizando página...'}</span>
        <div className="flex flex-row gap-[5px] border-[1px] items-center px-[4px] bg-[#FDD9BF] ml-2">
          {chargeIds.map((id, index) => (
            <div
              key={id}
              className={cn(
                'w-[9px] h-[28px] gap-[10px] border-[1px] transition-colors duration-300',
                index < filledBoxes ? 'bg-[#9DACD7]' : 'bg-[#E9D3DF]'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
