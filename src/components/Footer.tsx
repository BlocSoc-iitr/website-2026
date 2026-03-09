import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const socials = [
  { icon: Mail, href: 'mailto:blocsoc.acm@iitr.ac.in', label: 'Email' },
  { icon: Github, href: 'https://github.com/BlocSoc-IITR', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/BlocSocIITR', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/blockchain-society-iit-roorkee/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/blocsociitr/', label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground">
          © 2025 BlocSoc, IIT Roorkee
        </span>
        <div className="flex items-center gap-0">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              aria-label={label}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
