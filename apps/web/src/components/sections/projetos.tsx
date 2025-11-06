import { useState, useEffect } from 'react';
import Window from '@components/ui/window';
import folder from '@/assets/folder.png';
import folderEmpty from '@/assets/folder1.png';

const projects = [
  { name: 'Pokedex', img: folder, video: './src/assets/videos/test.mp4' },
  { name: 'Portifólio de artes', img: folder, video: '' },
  { name: 'Lorem IpsumLorem mLorem mLorem', img: folder, video: '' },
  { name: 'Unknow', img: folderEmpty, video: '' },
  { name: 'Unknow', img: folderEmpty, video: '' },
  { name: 'Unknow', img: folderEmpty, video: '' },
  { name: 'Unknow', img: folderEmpty, video: '' },
  { name: 'Unknow', img: folderEmpty, video: '' },
  { name: 'Unknow', img: folderEmpty, video: '' },
  { name: 'Unknow', img: folderEmpty, video: '' },
  { name: 'Unknow', img: folderEmpty, video: '' },
  { name: 'Unknow', img: folderEmpty, video: '' },
];

function MyProjectsSection() {
  const aboutWrapperStyles = `
    flex flex-col gap-[120px] min-w-full min-h-[100vh] 
    items-center justify-center flex flex-row
  `;

  const bgStyle = {
    backgroundImage: `url('./src/assets/tile.png'), linear-gradient(to bottom, rgba(233, 211, 223, 1) 60%, rgba(251, 226, 219, 1) 85%`,
  };

  const [selectedProject, setSelectedProject] = useState<{
    name: string;
    video: string;
  } | null>(null);

  const handleOpenModal = (name: string, video: string) => {
    setSelectedProject({ name, video });
  };
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedProject]);

  return (
    <div id="projetos" style={bgStyle} className={aboutWrapperStyles}>
      <Window className="mt-[12px]" windowTitle="Meus Projetos">
        <div className="grid grid-cols-5 gap-[18px] w-[664px] p-[70px] ">
          {projects.map((project) => (
            <button
              type="button"
              key={project.name}
              className="text-[#221208]  text-center cursor-pointer bg-transparent border-none h-full flex items-center flex-col justify-start w-full overflow-hidden"
              onClick={() => handleOpenModal(project.name, project.video)}
            >
              <img src={project.img} alt="" className="mb-[4px]" />
              <p className="w-[90px] opacity-[65%] text-ellipsis  truncate">{project.name}</p>
            </button>
          ))}
        </div>
      </Window>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Window windowTitle={selectedProject.name} showButtons closeButton={handleCloseModal}>
            <div className="flex flex-col items-center justify-center w-[1080px] ">
              <video
                src="./src/assets/videos/test.mp4"
                controls
                className="w-full aspect-video object-cover rounded"
              >
                <track kind="captions" srcLang="pt" label="Português" default />
              </video>
              <div className="w-full text-wrap px-[15px] py-[5px] text-[18px]">
                <p className="text-wrap ">
                  Attack feet behind the couch destroy couch flop over give attitude hide when
                  guests come over hopped up on goofballs hunt anything that moves intently sniff
                  hand.
                </p>
              </div>
            </div>
          </Window>
        </div>
      )}
    </div>
  );
}

export default MyProjectsSection;
