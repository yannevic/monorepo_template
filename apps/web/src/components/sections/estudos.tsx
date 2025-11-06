import Window from '@components/ui/window';
import { useState } from 'react';
import studiesNana from '@/assets/estudos.png';
import book from '@/assets/svgs/book.svg';
import folha from '@/assets//book/folha-right.svg';
import html from '@/assets/book/html.png';
import css from '@/assets/book/css.png';
import js from '@/assets/book/js.png';
import tailwind from '@/assets/book/tailwind.png';
import github from '@/assets/book/github.png';
import python from '@/assets/book/python.png';
import react from '@/assets/book/react.png';
import figma from '@/assets/book/figma.png';
import notion from '@/assets/book/notion.png';
import chatgpt from '@/assets/book/chatgpt.png';
import copilot from '@/assets/book/copilot.png';
import gemini from '@/assets/book/gemini.png';
import arrow from '@/assets/book/arrow.png';

const bookItens = [
  {
    pageNumber: 1,
    category: 'Desenvolvimento',
    page: 'left',
    items: [
      {
        name: 'HTML',
        img: [html],
        description: ['Estrutura de páginas web'],
        color: '#FFCA3A 33%',
      },
      { name: 'CSS', img: [css], description: ['Estilização'], color: '#3AADFF 33%' },
      {
        name: 'JavaScript',
        img: [js],
        description: ['Funcionamento da página'],
        color: '#923AFF 33%',
      },
      {
        name: 'Tailwind',
        img: [tailwind],
        description: ['Estilização rápida'],
        color: '#1518C0 21%',
      },
    ],
  },
  {
    pageNumber: 2,
    category: 'desenvolvimento',
    page: 'right',
    items: [
      {
        name: 'GitHub',
        img: [github],
        description: ['Organização de código', 'Publicação'],
        color: '#414C45 33%',
      },
      { name: 'Python', img: [python], description: ['(Tô estudando!!)'], color: '#3AFF85 33%' },
      {
        name: 'React',
        img: [react],
        description: ['Básico de prototipagem'],
        color: '#F53AFF 33%',
      },
    ],
  },
  {
    pageNumber: 3,
    category: 'Ferramentas do dia',
    page: 'left',
    items: [
      {
        name: 'Figma',
        img: [figma],
        description: ['Mind Map', 'Básico de prototipagem', 'UI Design'],
        color: '#FF3ACE 33%',
      },
      {
        name: 'Notion',
        img: [notion],
        description: ['Organização de projetos', 'Documentação', 'Kanban'],
        color: '#3D1582 33%',
      },
    ],
  },
  {
    pageNumber: 4,
    category: 'Ferramentas do dia',
    page: 'right',
    items: [
      {
        name: 'ChatGPT, Copilot e Gemini',
        img: [chatgpt, copilot, gemini],
        description: ['Desenvolvimento de ideias', 'Consultas', 'Ilustrações das minhas ideias'],
        color: '#FF3A3D 33%',
      },
    ],
  },
];

function StudiesSection() {
  const [currentSpread, setCurrentSpread] = useState(1);

  const aboutWrapperStyles = `
    flex flex-col gap-[120px] min-w-full min-h-[100vh] 
    items-center justify-center flex flex-row
  `;

  const bgStyle = {
    backgroundImage: `url('./src/assets/tile.png'), linear-gradient(to bottom, rgba(157, 172, 215, 1) 60%, rgba(233, 211, 223, 1) 92%`,
  };

  const visiblePages = bookItens.filter((page) =>
    currentSpread === 1
      ? page.pageNumber === 1 || page.pageNumber === 2
      : page.pageNumber === 3 || page.pageNumber === 4
  );

  return (
    <div id="estudos" style={bgStyle} className={aboutWrapperStyles}>
      <Window className="mt-[12px]" windowTitle="Nana">
        <div className="w-full h-full p-[25px] flex items-center justify-center ">
          <img src={studiesNana} alt="" />
        </div>
      </Window>

      <div className="relative">
        <img className="z-0" src={book} alt="Livro aberto" />

        <div className="absolute flex left-[50px] top-0 font-special z-30">
          {visiblePages.map((page) => (
            <div
              key={page.pageNumber}
              className={`w-full md:w-1/2 mt-[35px] flex flex-col items-start ${
                page.pageNumber % 2 === 0 ? 'pl-10 mt-[90px] -skew-y-3 ' : 'skew-y-3 pl-2'
              }`}
            >
              {(page.pageNumber === 1 || page.pageNumber === 3) && (
                <h3 className="text-2xl mb-[40px] text-center w-full mt-[10px] skew-y-1">
                  {page.category}
                </h3>
              )}

              {page.items.map((item) => {
                const [bgColor, opacityStr] = item.color.split(' ');
                const opacity = parseFloat(opacityStr) / 100;

                return (
                  <div key={item.name} className="flex items-start gap-3 mb-[30px] w-full">
                    <div
                      className={`w-[50px] flex flex-col gap-4 ${page.pageNumber === 4 ? '-ml-3' : ''}`}
                    >
                      {page.pageNumber === 4 ? (
                        <>
                          <img src={chatgpt} alt="ChatGPT" />
                          <img src={copilot} alt="Copilot" />
                          <img
                            src={gemini}
                            alt="Gemini"
                            style={{
                              position: 'absolute',
                              top: -5,
                              right: -40,
                            }}
                          />
                        </>
                      ) : (
                        <div className="flex gap-2">
                          {item.img.map((imgSrc) => (
                            <img key={`${item.name}-${imgSrc}`} src={imgSrc} alt={item.name} />
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="relative inline-block mb-1 w-fit px-1">
                        <span
                          className="absolute inset-0 rounded px-1 z-[-1] "
                          style={{ backgroundColor: bgColor, opacity }}
                        />
                        <h4 className="text-lg relative z-10 font-semibold text-nowrap">
                          {item.name}
                        </h4>
                      </div>
                      <ul className="list-disc list-inside text-[17px] ml-5 w-full">
                        {item.description.map((desc) => (
                          <li key={`${item.name}-${desc}`} className="list-outside">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="absolute right-[36.4px] top-0">
          <div
            role="button"
            tabIndex={0}
            onClick={() => currentSpread === 1 && setCurrentSpread(2)}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && currentSpread === 1) {
                setCurrentSpread(2);
              }
            }}
            className={`absolute right-[15px] bottom-[45px] ${
              currentSpread === 1
                ? 'cursor-pointer animate-bounce opacity-100'
                : 'cursor-default opacity-[40%]'
            }`}
            aria-label="Ir para páginas 3 e 4"
          >
            <img src={arrow} alt="" />
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => currentSpread === 2 && setCurrentSpread(1)}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && currentSpread === 2) {
                setCurrentSpread(1);
              }
            }}
            className={`absolute right-[72px] bottom-[39px] scale-x-[-1] -rotate-[12deg] hover:cursor-pointer ${
              currentSpread === 2 ? 'animate-bounce opacity-100' : 'opacity-[40%]'
            }`}
            aria-label="Voltar para páginas 1 e 2"
          >
            <img src={arrow} alt="" />
          </div>

          {/* Folha decorativa */}
          <img className="z-10" src={folha} alt="Folha direita" />
        </div>
      </div>
    </div>
  );
}
export default StudiesSection;
