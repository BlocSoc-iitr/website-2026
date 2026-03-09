export interface Project {
  name: string;
  year: string;
  description: string;
  desca: string;
  descb: string;
  image: string;
  github?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
  devfolio?: string;
  devpost?: string;
  ethereum?: string;
}

export const startups: Project[] = [
  {
    name: 'Privote',
    year: '2024',
    description: 'Privacy-preserving on-chain voting protocol',
    desca: 'Privote is a privacy-preserving voting protocol built on zkMACI. It enables secure, transparent on-chain elections while maintaining voter privacy and preventing collusion through cryptographic proofs.',
    descb: 'Create polls, participate in elections, and make your voice heard without compromising your privacy. Built on zero-knowledge technology to ensure your vote remains confidential while maintaining verifiable integrity on-chain.',
    image: '/startup_images/privote.png',
    github: 'https://github.com/PriVote-Project',
    website: 'https://privote.live/',
    twitter: 'https://x.com/Privoteweb3',
  },
  {
    name: 'BlockFlow',
    year: '2023',
    description: 'A blockchain data platform to build applications faster',
    desca: 'Blockflow is a blockchain data platform that helps you build applications faster. It simplifies data retrieval from blockchains, making it easier for you to access real-time data and build blockchain-powered applications quickly.',
    descb: 'With Blockflow, you can focus on developing the groundbreaking features that set your Web3 application apart, while we handle the intricacies of the backend.',
    image: '/startup_images/blockflow.jpeg',
    github: 'https://github.com/BlockFloww/',
    website: 'https://www.blockflow.network/',
    twitter: 'https://x.com/flow_block/',
    linkedin: 'https://www.linkedin.com/company/blockfloww/',
  },
  {
    name: 'Lucidly Finance',
    year: '2023',
    description: 'Structured Credit for Onchain Working Capital',
    desca: 'Lucidly Finance is a structured credit protocol for onchain working capital. We create indexes of on-chain credit positions including the LP tokens on curve, pendle, morpho, balancer, silo and more.',
    descb: 'A pool-to-peer model is the most straightforward way to bootstrap liquidity on the protocol during its early stages. This is what we call structuring a loan - different allocations require different risk premiums, Lucidly provides a platform the market to negotiate exactly that.',
    image: '/startup_images/lucidly.jpg',
    website: 'https://lucidly.finance/',
    twitter: 'https://x.com/LucidlyFinance',
  },
];

export const projects: Project[] = [
  {
    name: 'Deimos',
    year: '2025',
    description: 'Mobile benchmarking suite for ZK proving systems',
    desca: 'Deimos is a comprehensive benchmarking suite for zero-knowledge virtual machines and cryptographic primitives on mobile hardware. It provides unified performance metrics across Android and iOS platforms, enabling developers to evaluate ZK frameworks in real-world mobile environments.',
    descb: 'Compare proving and verification times, memory footprint, and proof sizes across different ZK frameworks. Make informed decisions about which proving systems work best for your mobile applications.',
    image: '/project_images/deimos.png',
    github: 'https://github.com/BlocSoc-iitr/Deimos',
    website: 'https://deimos-werw.vercel.app/',
  },
  {
    name: 'Nexus',
    year: '2025',
    description: 'Model Context Protocol server for blockchain interactions',
    desca: 'Nexus is a Model Context Protocol (MCP) server that bridges AI agents with blockchain functionality on the Hyperliquid EVM chain. It provides a standardized interface for blockchain operations, enabling seamless integration between AI systems and on-chain activities.',
    descb: 'Empower AI agents to safely query blockchain state and execute on-chain transactions through validated tool calls. Built with security and reliability at its core, Nexus makes blockchain interactions accessible to the next generation of AI applications.',
    image: '/project_images/nexus.png',
    github: 'https://github.com/BlocSoc-iitr/Nexus',
  },
  {
    name: 'Selene',
    year: '2024',
    description: 'Lightweight Ethereum client written in Golang',
    desca: 'Selene is a fast, secure, and portable light client for Ethereum built with Golang. It enables trustless verification of Ethereum state without running a full node, making blockchain access more efficient and accessible for resource-constrained environments.',
    descb: 'Inspired by Helios, Selene brings the power of light client technology to the Go ecosystem. Perfect for applications that need Ethereum data verification without the overhead of maintaining full node infrastructure.',
    image: '/project_images/selene.png',
    github: 'https://github.com/BlocSoc-iitr/selene',
  },
  {
    name: 'OpenStylus',
    year: '2023',
    description: 'Gas Optimised Library for Arbitrum Stylus',
    desca: 'A comprehensive Rust-based Ethereum smart contract library for Arbitrum Stylus. It incorporates various token standards such as ERC20, ERC721, ERC1155, ERC4626, and ERC6909, along with advanced functionalities like WETH and ERC4337 meta transactions.',
    descb: 'The project includes implementing a Fast Fourier Transform (FFT) algorithm for efficient signal processing and the ABDK Math library for precise fixed-point arithmetic.',
    image: '/project_images/openstylus.webp',
    github: 'https://github.com/Prabhat1308/OpenStylus/',
    devfolio: 'https://devfolio.co/projects/open-stylus-0f80/',
    ethereum: 'https://ethglobal.com/showcase/open-stylus-azocr/',
  },
  {
    name: 'HorseRiders',
    year: '2023',
    description: 'Complex Math and FFT Library for Huff',
    desca: 'HorseRiders is a complex math and Fast Fourier Transform (FFT) library written in Huff. It offers a range of operations for complex numbers, including basic arithmetic, coordinate conversions, and advanced functions like natural logarithms and square roots.',
    descb: 'The library also implements PRBMath for precise and gas-efficient arithmetic operations.',
    image: '/project_images/horseriders.png',
    github: 'https://github.com/BlocSoc-iitr/HorseRiders',
  },
  {
    name: 'EaStore',
    year: '2023',
    description: 'Decentralized Storage Solution on Filecoin',
    desca: 'Eastore is a completely on-chain decentralized solution on Filecoin that stores your files directly to the Filecoin network using smart contracts. This is a nominal testnet version of Eastore.',
    descb: 'Say goodbye to traditional storage methods and embrace the decentralized future with Eastore.',
    image: '/project_images/eastore.webp',
    github: 'https://github.com/Eastore-project/',
    website: 'https://www.eastore.xyz/',
    twitter: 'https://x.com/EastoreWeb3',
  },
  {
    name: 'FLockChain',
    year: '2023',
    description: 'Federated Learning on Proof of Stake',
    desca: 'Flockchain is a Federated Learning protocol built on Proof of Stake to establish Economic Security in the network. It aims to eliminate the problem of malicious actors trying to sabotage model accuracy by identifying them using algorithms like Mid-Krum.',
    descb: 'The architecture is built on top of micro-rollups to provide verifiable off-chain computation for state management and providing slashing conditions.',
    image: '/project_images/flockchain.png',
    github: 'https://github.com/BlocSoc-iitr/FLockChain/',
    devfolio: 'https://devfolio.co/projects/flockchain-88eb/',
    ethereum: 'https://ethglobal.com/showcase/flockchain-855yg/',
  },
  {
    name: 'zkMask',
    year: '2023',
    description: 'ZK Face Recognition for Biometric 2FA',
    desca: 'ZKMask is the ultimate 2 Factor Authentication app needed to secure all transactions through Face Recognition and proving the identity by Zero Knowledge Proofs eliminating any centralization and privacy risks.',
    descb: "The architecture of the project makes it different from traditional 2 factor authentication apps - biometric or secret code based. The project leverages decentralization, AI, ZKP to its best to prevent users from one of the most common and devastating risks.",
    image: '/project_images/zkmask_.jpeg',
    github: 'https://github.com/zkMask/',
    ethereum: 'https://ethglobal.com/showcase/zkmask-0x1z4',
  },
  {
    name: 'HyperLand',
    year: '2023',
    description: 'A 3D sandbox game built on SUI',
    desca: "Hyperland is an open world where anyone can build their own space which is minted as an NFT on Sui devnet and users can purchase items from the marketplace to customize their land. Soon after our ZkLogin Integration Web2 users won't even know they are on Web3.",
    descb: '',
    image: '/project_images/hyperland.webp',
    github: 'https://github.com/0xClint/Hyperland',
    website: 'https://hyperland-pi.vercel.app/',
    devfolio: 'https://devfolio.co/projects/hyperland-da6b',
  },
  {
    name: 'DappHack',
    year: '2023',
    description: 'Web3 Hackathon Portal',
    desca: 'DappHack is a Web3 Hackathon Portal. It is a platform for hosting hackathons and events related to web3.',
    descb: 'Builders can stake in any of the supported tokens, and similarly for the sponsors, they can pay the prize in of those tokens. Builders also get on-chain proofs of their projects as NFTs.',
    image: '/project_images/dapphack.jpeg',
    github: 'https://github.com/BlocSoc-iitr/DappHack',
    ethereum: 'https://ethglobal.com/showcase/dapphack-4tjefv',
  },
  {
    name: 'Beskar',
    year: '2023',
    description: 'A mutation testing suite written in Rust',
    desca: 'Beskar is a tool which uses gambit, a mutant generation tool from Certora to perform mutation testing on foundry projects.',
    descb: 'It allows developers to perform analysis of their tests and improve the test coverage by giving a smooth overview of results of testing on each mutant.',
    image: '/project_images/beskar.png',
    github: 'https://github.com/BlocSoc-iitr/Beskar',
  },
  {
    name: 'Rex',
    year: '2024',
    description: 'Ethereum indexer built using Reth',
    desca: 'Rex is designed to efficiently index and store specific events from the Ethereum Sepolia blockchain.',
    descb: 'Rex utilizes Reths blazing fast Execution Client to create a high-performance, real-time indexing solution.',
    image: '/project_images/rex.png',
    github: 'https://github.com/BlocSoc-iitr/Beskar',
    website: 'https://rex-frontend-one.vercel.app/',
  },
];
