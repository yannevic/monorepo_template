import { useState, useEffect } from 'react';
import Window from '@components/ui/window';
import { Button } from '@components/ui/button';
import sound from '@/assets/sounds/msn.mp3';
import heroNana from '@/assets/hero.png';
import linkedin from '@/assets/linkedin.png';
import github from '@/assets/github.png';
import whatsapp from '@/assets/whatsapp.png';
import curriculo from '@/assets/curriculo.png';

function HeroSection() {
  const heroWrapperStyles = `
    flex flex-col gap-[95px] min-w-full min-h-[100vh] 
    items-center justify-center flex flex-row
  `;

  const bgStyle = {
    backgroundImage: `url('./src/assets/tile.png'), linear-gradient(to bottom, rgba(130, 170, 222, 1) 60%, rgba(157, 172, 215, 1) 80%)`,
  };

  const som = () => {
    const audio = new Audio(sound);
    audio.volume = 0.2;
    audio.play();
  };

  const socialButtons = [
    { name: 'GitHub', img: github, link: 'https://github.com/yannevic' },
    { name: 'LinkedIn', img: linkedin, link: 'https://www.linkedin.com/in/devnana' },
    {
      name: 'WhatsApp',
      img: whatsapp,
      link: `https://wa.me/5568999303331?text=Ol%C3%A1!%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio,%20podemos%20conversar?`,
    },
    { name: 'Currículo', img: curriculo, link: '' },
  ];
  const [openCurriculum, setOpenCurriculum] = useState<boolean | null>(null);

  const handleOpenModal = () => {
    setOpenCurriculum(true);
  };
  const handleCloseModal = () => {
    setOpenCurriculum(false);
  };

  const yesButton = () => {
    const link = document.createElement('a');
    link.href = '/pdf.pdf';
    link.download = 'Curriculo-Yanne.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleCloseModal();
  };
  const noButton = () => {
    handleCloseModal();
  };

  useEffect(() => {
    if (openCurriculum) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [openCurriculum]);

  return (
    <div id="inicio" style={bgStyle} className={heroWrapperStyles}>
      <Window className="border-none -mt-[4px] " isBaloonChat>
        <div className="w-[664px] px-[50px] pt-[40px] pb-[60px] flex flex-col gap-[45px] ">
          <div className="  text-[#221208]">
            <h1 className="text-[56px]">Oii, eu sou a Nana..</h1>
            <p className="opacity-[65%] text-[24px]">
              Sonhando em trabalhar com Desenvolvimento Web.
            </p>
          </div>
          <div className="flex flex-row gap-[20px]">
            {socialButtons.map((button) => {
              return (
                <Button
                  key={button.name}
                  asChild
                  onClick={() => {
                    if (button.name === 'Currículo') {
                      som();
                      handleOpenModal();
                    } else {
                      window.open(button.link, '_blank');
                    }
                  }}
                  className="hover:cursor-pointer hover:scale-[1.04] transition duration-300 ease-in-out"
                >
                  <div className="flex flex-col gap-[5px] items-center">
                    <img src={button.img} alt="" />
                    <p className="opacity-[65%]">{button.name}</p>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </Window>
      <Window className="mt-[12px]" windowTitle="Nana">
        <div className="w-full h-full p-[25px] flex items-center justify-center ">
          <img src={heroNana} alt="" />
        </div>
      </Window>
      {openCurriculum && (
        <div className="fixed flex items-center justify-center z-50 animate-slideUp ">
          <Window windowTitle="Atenção" showButtons closeButton={handleCloseModal}>
            <div className="flex flex-col items-center justify-center w-[320px] ">
              <div className="w-full py-[24px] text-[24px]">
                <p className="text-center text-wrap">Deseja baixar o Currículo?</p>
              </div>
              <div className="flex flex-row gap-[20px] pb-[10px]">
                <Button
                  asChild={false}
                  onClick={noButton}
                  className="w-[140px] h-[45px] bg-[#F2F2E8] text-[28px] p-[5px] hover:cursor-pointer hover:scale-[1.03] border-[2px] transition duration-300 ease-in-out"
                >
                  Não
                </Button>
                <Button
                  asChild={false}
                  onClick={yesButton}
                  className="w-[140px] h-[45px] bg-[#82AADE] text-[28px] p-[5px] hover:cursor-pointer hover:scale-[1.03] border-[2px] transition duration-300 ease-in-out"
                >
                  Sim
                </Button>
              </div>
            </div>
          </Window>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
