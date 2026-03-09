import { motion } from 'framer-motion';

const bgProjects = [
  { name: 'Privote', url: 'https://blocsoc.eth.limo/project/privote' },
  { name: 'Deimos', url: 'https://blocsoc.eth.limo/project/deimos' },
  { name: 'Nexus', url: 'https://blocsoc.eth.limo/project/nexus' },
  { name: 'Selene', url: 'https://blocsoc.eth.limo/project/selene' },
  { name: 'OpenStylus', url: 'https://blocsoc.eth.limo/project/openstylus' },
  { name: 'BlockFlow', url: 'https://blocsoc.eth.limo/project/blockflow' },
  { name: 'zkMask', url: 'https://blocsoc.eth.limo/project/zkmask' },
  { name: 'Rex', url: 'https://blocsoc.eth.limo/project/rex' },
  { name: 'HorseRiders', url: 'https://blocsoc.eth.limo/project/horseriders' },
  { name: 'EaStore', url: 'https://blocsoc.eth.limo/project/eastore' },
  { name: 'FLockChain', url: 'https://blocsoc.eth.limo/project/flockchain' },
  { name: 'Beskar', url: 'https://blocsoc.eth.limo/project/beskar' },
  { name: 'HyperLand', url: 'https://blocsoc.eth.limo/project/hyperland' },
  { name: 'DappHack', url: 'https://blocsoc.eth.limo/project/dapphack' },
  { name: 'Lucidly', url: 'https://blocsoc.eth.limo/project/lucidly%20finance' },
];

// Repeat enough to fill the entire page
const allProjects = [...bgProjects, ...bgProjects, ...bgProjects, ...bgProjects, ...bgProjects];

const ProjectBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="flex flex-wrap content-start justify-center gap-x-5 gap-y-1 px-4 py-16 w-full h-full">
        {allProjects.map((project, i) => (
          <a
            key={`${project.name}-${i}`}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto font-display font-bold text-2xl md:text-4xl lg:text-5xl text-foreground/[0.035] hover:text-foreground transition-all duration-300 cursor-pointer hover:scale-105 leading-tight"
          >
            {project.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectBackground;
