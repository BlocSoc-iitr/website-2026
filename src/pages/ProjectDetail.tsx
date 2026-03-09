import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects, startups } from '@/constants/projects';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const all = [...startups, ...projects];
  const project = all.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-14 max-w-5xl mx-auto px-6 py-16">
          <p className="font-mono text-sm text-muted-foreground">Project not found.</p>
          <Link to="/projects" className="font-mono text-sm underline mt-4 inline-block">
            ← Back to Projects
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14 max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/projects"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors mb-10 inline-block"
        >
          ← Back to Projects
        </Link>

        <img
          src={project.image}
          alt={project.name}
          className="w-48 h-48 object-cover border-2 border-foreground mb-6"
        />

        <p className="font-mono text-xs text-muted-foreground mb-2">{project.year}</p>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
          {project.name}
        </h1>
        <p className="font-mono text-sm text-muted-foreground mb-8">{project.description}</p>

        <div className="space-y-4 font-mono text-sm text-foreground mb-10">
          {project.desca && <p>{project.desca}</p>}
          {project.descb && <p>{project.descb}</p>}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground px-4 py-1.5 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
            >
              Website
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground px-4 py-1.5 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
            >
              GitHub
            </a>
          )}
          {project.devfolio && (
            <a
              href={project.devfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground px-4 py-1.5 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
            >
              Devfolio
            </a>
          )}
          {project.ethereum && (
            <a
              href={project.ethereum}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground px-4 py-1.5 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
            >
              ETH Global
            </a>
          )}
          {project.devpost && (
            <a
              href={project.devpost}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground px-4 py-1.5 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
            >
              Devpost
            </a>
          )}
          {project.twitter && (
            <a
              href={project.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground px-4 py-1.5 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
            >
              Twitter
            </a>
          )}
          {project.linkedin && (
            <a
              href={project.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground px-4 py-1.5 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
