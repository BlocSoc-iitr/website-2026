import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { startups, projects, type Project } from '@/constants/projects';

const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

const ProjectCard = ({ project }: { project: Project }) => (
  <Link
    to={`/project/${toSlug(project.name)}`}
    className="border-2 border-foreground overflow-hidden hover:bg-foreground hover:text-background transition-colors group block"
  >
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
    />
    <div className="p-4">
      <h3 className="font-display font-bold text-sm mb-1">{project.name}</h3>
      <p className="font-mono text-xs text-muted-foreground group-hover:text-background/70">
        {project.description}
      </p>
    </div>
  </Link>
);

const ProjectSection = ({ title, items }: { title: string; items: Project[] }) => (
  <div className="mb-12">
    <h2 className="font-display font-bold text-lg text-foreground border-b-2 border-foreground pb-1 mb-6 inline-block">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
      {items.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14 max-w-5xl mx-auto px-6 py-16">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-12">
          Projects
        </h1>
        <ProjectSection title="Start-ups" items={startups} />
        <ProjectSection title="Projects" items={projects} />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
