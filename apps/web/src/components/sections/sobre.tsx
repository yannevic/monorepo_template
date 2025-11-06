import Window from '@components/ui/window';
import aboutNana from '@/assets/sobre.png';
import cn from '@/utils/cn';

function AboutMeSection() {
  const aboutWrapperStyles = `
    flex flex-col gap-[120px] min-w-full min-h-[100vh] 
    items-center justify-center flex flex-row
     
    
  `;

  const bgStyle = {
    backgroundImage: `url('./src/assets/tile.png'), linear-gradient(to bottom, rgba(251, 226, 219, 1) 60%, rgba(242, 242, 232, 1) 85%`,
  };
  const titleClasses =
    'text-[40px] bg-gradient-to-r from-[#E54F90] from-0% via-[#7BAA41] via-15% to-[#F29A4E] to-40% bg-clip-text text-transparent ';

  return (
    <div id="sobre" style={bgStyle} className={aboutWrapperStyles}>
      <Window className="mt-[12px]" windowTitle="Nana">
        <div className="w-full h-full p-[25px] flex items-center justify-center ">
          <img src={aboutNana} alt="" />
        </div>
      </Window>
      <div className="w-[570px] px-[50px] pt-[40px] pb-[60px] flex flex-col font-special text-[#221208]">
        <h2 className={titleClasses}>Olá!</h2>
        <p className=" text-[24px]">
          Meu nome é Yanne, tenho 27 anos, amo minha cachorrinha Pérola e adoro programação.
        </p>
        <h2 className={cn('mt-9', titleClasses)}>Aspirações</h2>
        <p className=" text-[24px]">
          Quero desenvolver sites, aplicativos e sistemas que facilitem a vida de todos ao meu redor
          .
        </p>
        <h2 className={cn('mt-9', titleClasses)}>Hobbies</h2>
        <p className=" text-[24px]">
          Gosto caminhar, viajar e jogar (se tiver um joguinho de tabuleiro to dentro).
        </p>
      </div>
    </div>
  );
}

export default AboutMeSection;
