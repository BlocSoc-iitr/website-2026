import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
}

const startups: Project[] = [
  { name: 'Privote', description: 'Privacy-preserving on-chain voting protocol', image: 'https://blocsoc.eth.limo/startup_images/privote.png', url: 'https://blocsoc.eth.limo/project/privote' },
  { name: 'BlockFlow', description: 'A blockchain data platform to build applications faster', image: 'https://blocsoc.eth.limo/startup_images/blockflow.jpeg', url: 'https://blocsoc.eth.limo/project/blockflow' },
  { name: 'Lucidly Finance', description: 'Structured Credit for Onchain Working Capital', image: 'https://blocsoc.eth.limo/startup_images/lucidly.jpg', url: 'https://blocsoc.eth.limo/project/lucidly%20finance' },
];

const projects: Project[] = [
  { name: 'Deimos', description: 'Mobile benchmarking suite for ZK proving systems', image: 'https://blocsoc.eth.limo/project_images/deimos.png', url: 'https://blocsoc.eth.limo/project/deimos' },
  { name: 'Nexus', description: 'Model Context Protocol server for blockchain interactions', image: 'https://blocsoc.eth.limo/project_images/nexus.png', url: 'https://blocsoc.eth.limo/project/nexus' },
  { name: 'Selene', description: 'Lightweight Ethereum client written in Golang', image: 'https://blocsoc.eth.limo/project_images/selene.png', url: 'https://blocsoc.eth.limo/project/selene' },
  { name: 'OpenStylus', description: 'Gas Optimised Library for Arbitrum Stylus', image: 'https://blocsoc.eth.limo/project_images/openstylus.webp', url: 'https://blocsoc.eth.limo/project/openstylus' },
  { name: 'HorseRiders', description: 'Complex Math and FFT Library for Huff', image: 'https://blocsoc.eth.limo/project_images/horseriders.png', url: 'https://blocsoc.eth.limo/project/horseriders' },
  { name: 'EaStore', description: 'Decentralized Storage Solution on Filecoin', image: 'https://blocsoc.eth.limo/project_images/eastore.webp', url: 'https://blocsoc.eth.limo/project/eastore' },
  { name: 'FLockChain', description: 'Federated Learning on Proof of Stake', image: 'https://blocsoc.eth.limo/project_images/flockchain.png', url: 'https://blocsoc.eth.limo/project/flockchain' },
  { name: 'zkMask', description: 'ZK Face Recognition for Biometric 2FA', image: 'https://blocsoc.eth.limo/project_images/zkmask_.jpeg', url: 'https://blocsoc.eth.limo/project/zkmask' },
  { name: 'HyperLand', description: 'A 3D sandbox game built on SUI', image: 'https://blocsoc.eth.limo/project_images/hyperland.webp', url: 'https://blocsoc.eth.limo/project/hyperland' },
  { name: 'DappHack', description: 'Web3 Hackathon Portal', image: 'https://blocsoc.eth.limo/project_images/dapphack.jpeg', url: 'https://blocsoc.eth.limo/project/dapphack' },
  { name: 'Beskar', description: 'A mutation testing suite written in Rust', image: 'https://blocsoc.eth.limo/project_images/beskar.png', url: 'https://blocsoc.eth.limo/project/beskar' },
  { name: 'Rex', description: 'Ethereum indexer built using Reth', image: 'https://blocsoc.eth.limo/project_images/rex.png', url: 'https://blocsoc.eth.limo/project/rex' },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
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
  </a>
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
