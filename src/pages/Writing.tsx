import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const articles = [
  {
    title: 'Lessons in Async Rust from Building BraidPool',
    description: 'A deep dive into real-world async programming patterns and Tokio best practices',
    author: 'Abdullah Azeem',
    date: 'Aug 22, 2025',
    url: 'https://abd-aze.github.io/blog/braidpool-async-lessons',
    tag: 'Research',
  },
  {
    title: 'Building Decentralized Peer Discovery with libp2p',
    description: 'How Braidpool leverages libp2p for robust P2P networking',
    author: 'Abdullah Azeem',
    date: 'Jul 03, 2025',
    url: 'https://abd-aze.github.io/blog/libp2p-peer-discovery',
    tag: 'Research',
  },
  {
    title: '3-Slot Finality: The Next Evolution in Ethereum Consensus',
    description: "How a breakthrough in consensus design could reduce Ethereum's finality time from minutes to seconds",
    author: 'Utsav Sharma',
    date: 'Aug 9, 2025',
    url: 'https://0xsenpai.substack.com/p/3-slot-finality-the-next-evolution',
    tag: 'Research',
  },
  {
    title: "Understanding Ethereum's RANDAO Mechanism",
    description: 'Exploring how randomness secures the Beacon Chain and the ongoing efforts to strengthen it',
    author: 'Utsav Sharma',
    date: 'Apr 27, 2025',
    url: 'https://0xsenpai.substack.com/p/understanding-ethereums-randao-mechanism',
    tag: 'Research',
  },
  {
    title: "How Light Clients Track Ethereum's Consensus Layer",
    description: 'Building Selene: Golang light client inspired from Helios',
    author: 'Sambhav Jain',
    date: 'Apr 23, 2025',
    url: 'https://hackmd.io/@JdxQkWkdTHWIIEkki2_axQ/rJDKd-ryxe',
    tag: 'Research',
  },
  {
    title: 'Understanding BLS Signatures in Ethereum',
    description: 'As Ethereum transitioned from PoW to PoS, the consensus protocol faced a critical scalability bottleneck',
    author: 'Veer Chaurasia',
    date: 'Apr 22, 2025',
    url: 'https://0xpsuedo.substack.com/p/understanding-bls-signatures-in-ethereum',
    tag: 'Research',
  },
  {
    title: 'Hash-Based Signatures: A Quantum-Resistant Future?',
    description: 'Beyond RSA & ECDSA: The future of digital signatures in a post-quantum world',
    author: 'Utsav Sharma',
    date: 'Apr 1, 2025',
    url: 'https://0xsenpai.substack.com/p/hash-based-signatures-a-quantum-resistant',
    tag: 'Research',
  },
  {
    title: 'Elliptic Curve Digital Signature Algorithm (ECDSA)',
    description: 'One of the most significant aspects of bitcoin is its use of digital signatures',
    author: 'BlocSoc IITR',
    date: 'Apr 4, 2023',
    url: 'https://medium.com/@blocsoc.acm/ecdsa-26402064fd34',
    tag: 'Research',
  },
  {
    title: 'Gas Optimization in Smart Contracts',
    description: 'As a blockchain scales, scarce resources may become too expensive resulting in reduced decentrality',
    author: 'BlocSoc IITR',
    date: 'Sep 8, 2022',
    url: 'https://medium.com/@blocsoc.acm/gas-optimization-in-smart-contracts-d4bd508dd361',
    tag: 'Research',
  },
  {
    title: 'Unfolding the Terra-Luna Crash',
    description: 'Terra is a proof-of-stake layer 1 blockchain built using the Cosmos SDK',
    author: 'BlocSoc IITR',
    date: 'Jun 17, 2022',
    url: 'https://medium.com/@blocsoc.acm/unfolding-the-terra-luna-crash-b7e81beefab',
    tag: 'News',
  },
];

const Writing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14 max-w-5xl mx-auto px-6 py-16">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-12">
          Writing
        </h1>

        <div className="space-y-0">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-2 border-foreground p-6 -mt-[2px] first:mt-0 hover:bg-foreground hover:text-background transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="font-mono text-[10px] border border-current px-2 py-0.5 mb-2 inline-block">
                    {article.tag}
                  </span>
                  <h2 className="font-display font-bold text-base mb-1">
                    {article.title}
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground group-hover:text-background/70 mb-2">
                    {article.description}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground group-hover:text-background/60">
                    {article.author} · {article.date}
                  </p>
                </div>
                <span className="font-mono text-xs shrink-0 mt-6">→</span>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Writing;
