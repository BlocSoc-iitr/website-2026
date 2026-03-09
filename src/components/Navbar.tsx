import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Team', path: '/team' },
  { label: 'Writing', path: '/writing' },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b-2 border-foreground bg-background">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/" className="font-display font-bold text-foreground text-lg tracking-tight">
          BlocSoc
        </Link>

        <div className="hidden md:flex items-center gap-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-1.5 text-xs font-mono border-l-2 border-foreground transition-colors",
                location.pathname === item.path
                  ? "bg-foreground text-background"
                  : "hover:bg-foreground hover:text-background"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-1 border-2 border-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-foreground bg-background">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-6 py-3 text-xs font-mono border-b border-foreground/20",
                location.pathname === item.path
                  ? "bg-foreground text-background"
                  : "hover:bg-foreground hover:text-background"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
