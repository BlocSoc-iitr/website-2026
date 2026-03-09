const AboutSection = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="border-2 border-foreground p-8 md:p-12 bg-background">
        <h2 className="font-display font-bold text-2xl text-foreground mb-4">
          About
        </h2>
        <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl">
          We are a group of Blockchain enthusiasts aiming to unite the blockchain community of IIT Roorkee, in a highly collaborative environment that is open for all. We are always open to collaborations on fun projects, and quirky discussions on crypto, DeFi, Web3.0 and beyond.
        </p>
        <a
          href="mailto:blocsoc.acm@iitr.ac.in"
          className="font-mono text-xs border-2 border-foreground px-4 py-2 inline-block hover:bg-foreground hover:text-background transition-colors bg-background pointer-events-auto"
        >
          blocsoc.acm@iitr.ac.in →
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
