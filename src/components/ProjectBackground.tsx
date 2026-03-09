import { Link } from 'react-router-dom';
import { projects, startups } from '@/constants/projects';

const bgProjects = [...startups, ...projects].map(p => ({
  name: p.name,
  slug: p.name.toLowerCase().replace(/\s+/g, '-'),
}));

// Repeat enough to fill the entire page
const allProjects = [...bgProjects, ...bgProjects, ...bgProjects, ...bgProjects, ...bgProjects];

const ProjectBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="flex flex-wrap content-start justify-center gap-x-5 gap-y-1 px-4 py-16 w-full h-full">
        {allProjects.map((project, i) => (
          <Link
            key={`${project.name}-${i}`}
            to={`/project/${project.slug}`}
            className="pointer-events-auto font-display font-bold text-2xl md:text-4xl lg:text-5xl text-foreground/[0.035] hover:text-foreground transition-all duration-300 cursor-pointer hover:scale-105 leading-tight"
          >
            {project.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectBackground;
