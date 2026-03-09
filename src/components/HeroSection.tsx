import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center pt-14 relative z-10 pointer-events-none">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground leading-none mb-6">
            Blockchain
            <br />
            Society
          </h1>
        </motion.div>

        <motion.p
          className="font-mono text-sm text-muted-foreground mb-8 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          IIT Roorkee — An open community for blockchain enthusiasts, bitcoin-dev builders, and Web3.0 advocates.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {['Crypto', 'DeFi', 'Web3.0', 'Bitcoin', 'Ethereum'].map((tag) => (
            <span
              key={tag}
              className="border-2 border-foreground px-3 py-1 text-xs font-mono hover:bg-foreground hover:text-background transition-colors bg-background pointer-events-auto"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
