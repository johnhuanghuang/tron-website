export interface EcosystemProduct {
  name: string;
  slug: string;
  category: string;
  description: string;
  fullDescription: string;
  data: string;
  iconName: string;
  tvl?: string;
  users?: string;
  volume24h?: string;
  contracts?: string;
  auditStatus?: string;
  externalUrl?: string;
  contractAddress?: string;
  tutorialSteps?: string[];
  news?: {
    title: string;
    date: string;
    summary: string;
  }[];
}

export const ecosystemProducts: EcosystemProduct[] = [
  {
    name: "JustLend",
    slug: "justlend",
    category: "DeFi",
    description: "Decentralized Lending",
    fullDescription: "JustLend is a decentralized non-custodial liquidity market protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the protocol to earn passive income, while borrowers can borrow in an over-collateralized fashion.",
    data: "TVL $4.2B",
    iconName: 'Wallet',
    tvl: "$4.2B",
    users: "125K+",
    contracts: "0x3fCcdE2c1e7bA2dC4f7a0C4f7a2dC4f7a0C4f7a2",
    auditStatus: "Audited by CertiK",
    externalUrl: "https://justlend.org",
    tutorialSteps: [
      "Connect your TRON wallet",
      "Navigate to JustLend dashboard",
      "Deposit TRX or other supported assets",
      "Start earning interest on your deposits",
    ],
    news: [
      { title: "JustLend Launches New Asset Support", date: "2026-04-18", summary: "JustLend has added support for three new assets to its lending protocol." },
      { title: "JustLend TVL Reaches New High", date: "2026-04-12", summary: "Total value locked in JustLend has exceeded $4 billion for the first time." },
      { title: "JustLend Partners with TRON DAO", date: "2026-04-05", summary: "Strategic partnership announced to boost DeFi adoption." },
    ],
  },
  {
    name: "SunSwap",
    slug: "sunswap",
    category: "DeFi",
    description: "DEX & Staking",
    fullDescription: "SunSwap is a decentralized exchange (DEX) built on TRON that enables users to swap tokens, provide liquidity, and earn rewards through staking. It is the leading DEX on the TRON network with the deepest liquidity.",
    data: "24h Vol $890M",
    iconName: 'Swap',
    tvl: "$520M",
    users: "450K+",
    volume24h: "$890M",
    contracts: "0xD8d9A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7a3",
    auditStatus: "Audited by Trail of Bits",
    externalUrl: "https://sunswap.io",
    tutorialSteps: [
      "Visit SunSwap and connect wallet",
      "Select token pair to swap",
      "Enter amount and confirm transaction",
      "Provide liquidity to earn LP rewards",
    ],
    news: [
      { title: "SunSwap V3 Launched", date: "2026-04-20", summary: "New version brings improved liquidity pools and lower fees." },
      { title: "SunSwap Introduces Protocol Fees", date: "2026-04-15", summary: "Fee structure update to support sustainable protocol growth." },
      { title: "SunSwap X Hot Cross Partnership", date: "2026-04-08", summary: "Cross-chain staking capabilities now available." },
    ],
  },
  {
    name: "BTTC",
    slug: "bittorrent-chain",
    category: "Cross-Chain",
    description: "BitTorrent Chain",
    fullDescription: "BitTorrent Chain (BTTC) is a cross-chain solution that connects TRON, Ethereum, and BNB Chain, enabling seamless asset transfers and cross-chain DeFi operations with high speed and low fees.",
    data: "$2.8B Cross-Chain",
    iconName: 'Bridge',
    tvl: "$2.8B",
    users: "2.5M+",
    volume24h: "$450M",
    contracts: "0xE8d9A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7a4",
    auditStatus: "Multi-chain Audit",
    externalUrl: "https://bt.io",
    tutorialSteps: [
      "Set up BTTC wallet",
      "Bridge assets from other chains",
      "Stake BTT tokens for rewards",
      "Participate in cross-chain activities",
    ],
    news: [
      { title: "BTTC Launches Mainnet", date: "2026-04-10", summary: "Mainnet launch brings full cross-chain functionality." },
      { title: "BTTC Partnership with Polygon", date: "2026-04-06", summary: "Partnership expands cross-chain support to Polygon ecosystem." },
      { title: "BTTC Trading Volume Surges", date: "2026-03-28", summary: "Daily trading volume exceeds $500 million." },
    ],
  },
  {
    name: "WINk",
    slug: "wink",
    category: "Games",
    description: "Gaming Platform",
    fullDescription: "WINk is a comprehensive gaming platform on TRON featuring casino games, sports betting, and lottery options. It has one of the largest user bases in the TRON ecosystem with millions of bets placed daily.",
    data: "MAU 2.1M",
    iconName: 'GameController',
    users: "2.1M MAU",
    volume24h: "$120M",
    contracts: "0xF9d8A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7a5",
    auditStatus: "Audited by Hacken",
    externalUrl: "https://wink.org",
    tutorialSteps: [
      "Register on WINk platform",
      "Deposit TRX to gaming wallet",
      "Choose from casino, lottery, or sports",
      "Start playing and winning",
    ],
    news: [
      { title: "WINk Launches New Lottery Game", date: "2026-04-19", summary: "New progressive jackpot lottery now available." },
      { title: "WINk Partners with Major Sports League", date: "2026-04-14", summary: "Sports betting now available for major leagues." },
      { title: "WINk Reaches 2M Active Users", date: "2026-04-01", summary: "Milestone reached as platform adoption accelerates." },
    ],
  },
  {
    name: "BTFS",
    slug: "btfs",
    category: "Storage",
    description: "Storage Network",
    fullDescription: "BTFS is a decentralized storage network that leverages the BitTorrent protocol and TRON blockchain to provide secure, distributed file storage solutions. Users can rent out their spare storage or store files on the network.",
    data: "Nodes 500K+",
    iconName: 'Cube',
    users: "500K+ Nodes",
    volume24h: "15PB Storage",
    contracts: "0xA0e9A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7a6",
    auditStatus: "Security Audited",
    externalUrl: "https://btfs.io",
    tutorialSteps: [
      "Install BTFS client",
      "Set up storage node or wallet",
      "Configure storage settings",
      "Start hosting or retrieving files",
    ],
    news: [
      { title: "BTFS Network Reaches 500K Nodes", date: "2026-04-17", summary: "Major milestone in decentralized storage adoption." },
      { title: "BTFS V2.0 Released", date: "2026-04-11", summary: "New version brings 50% faster file retrieval." },
      { title: "BTFS Integrates with TronGrid", date: "2026-04-03", summary: "Developer tools now include BTFS storage API." },
    ],
  },
  {
    name: "USDD",
    slug: "usdd",
    category: "Stablecoin",
    description: "Decentralized Stablecoin",
    fullDescription: "USDD is a decentralized stablecoin built on TRON, pegged to the US Dollar. It is governed by the TRON DAO Reserve and maintains over-collateralization through various reserve assets.",
    data: "Supply $730M",
    iconName: 'CurrencyCircleDollar',
    tvl: "$730M",
    users: "3.2M+",
    contracts: "0xB1f0A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7a7",
    auditStatus: "Reserve Audited",
    externalUrl: "https://usdd.io",
    tutorialSteps: [
      "Acquire TRX or other crypto assets",
      "Mint USDD through the portal",
      "Use USDD for DeFi or transfers",
      "Redeem USDD anytime",
    ],
    news: [
      { title: "USDD Minting Cap Increased", date: "2026-04-15", summary: "TRON DAO Reserve expands minting capacity to $5B." },
      { title: "USDD on BTTC Bridge", date: "2026-04-09", summary: "Cross-chain USDD now available via BTTC." },
      { title: "USDD DeFi Integration Expands", date: "2026-04-02", summary: "USDD now supported across 20+ DeFi protocols." },
    ],
  },
  {
    name: "JUST Governance",
    slug: "just-governance",
    category: "Governance",
    description: "DAO Governance",
    fullDescription: "JUST Governance is the decentralized governance system for the TRON ecosystem, allowing token holders to participate in decision-making processes and shape the future of the protocol.",
    data: "Governance",
    iconName: 'ChartBar',
    users: "85K+",
    contracts: "0xC2f1A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7a8",
    auditStatus: "Governance Audited",
    externalUrl: "https://just.gov",
    tutorialSteps: [
      "Stake TRX for voting power",
      "Review active proposals",
      "Cast your vote",
      "Participate in governance discussions",
    ],
    news: [
      { title: "New Governance Proposal Passed", date: "2026-04-21", summary: "Vote approves new TVL incentive program." },
      { title: "Governance Participation Increases", date: "2026-04-16", summary: "Record voter participation in latest proposal." },
      { title: "JUST Governance V2 Launch", date: "2026-04-07", summary: "Improved voting mechanism and proposal system." },
    ],
  },
  {
    name: "TRON DAO Reserve",
    slug: "tron-dao-reserve",
    category: "Reserve",
    description: "Reserve Management",
    fullDescription: "TRON DAO Reserve manages the USDD stablecoin and ensures its stability through over-collateralization and algorithmic mechanisms. It holds various crypto assets as reserves.",
    data: "Reserve",
    iconName: 'Vault',
    users: "1.5M+",
    contracts: "0xD3f2A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7a9",
    auditStatus: "Multi-Audit",
    externalUrl: "https://tron.io/reserve",
    tutorialSteps: [
      "Monitor reserve status",
      "Understand collateralization",
      "Participate in reserve operations",
      "Track USDD stability",
    ],
    news: [
      { title: "Reserve Expands Asset Portfolio", date: "2026-04-22", summary: "Reserve adds new collateral assets for stability." },
      { title: "Quarterly Reserve Report Published", date: "2026-04-14", summary: "Full transparency on reserve holdings and health." },
      { title: "Reserve Partners with CEX", date: "2026-04-08", summary: "Major exchange partnership for USDD liquidity." },
    ],
  },
  {
    name: "Crypto.com",
    slug: "crypto-com",
    category: "Exchange",
    description: "Global Exchange",
    fullDescription: "Crypto.com is a global cryptocurrency exchange and fintech company that has partnered with TRON to bring seamless crypto services to millions of users worldwide.",
    data: "Partner",
    iconName: 'Handshake',
    users: "10M+",
    volume24h: "$2.5B",
    externalUrl: "https://crypto.com",
    auditStatus: "SOC2 Certified",
    news: [
      { title: "Crypto.com Lists TRON", date: "2026-04-12", summary: "TRON trading pairs now available on Crypto.com." },
      { title: "Crypto.com Card Benefits", date: "2026-04-05", summary: "CRO cards now support TRX spending." },
      { title: "Partnership Expansion", date: "2026-03-28", summary: "Joint marketing and ecosystem initiatives announced." },
    ],
  },
  {
    name: "Poloniex",
    slug: "poloniex",
    category: "Exchange",
    description: "Crypto Exchange",
    fullDescription: "Poloniex is a leading cryptocurrency exchange that supports TRON-based tokens and has deep integration with the TRON ecosystem through various trading pairs and services.",
    data: "Partner",
    iconName: 'Buildings',
    users: "3M+",
    volume24h: "$850M",
    externalUrl: "https://poloniex.com",
    auditStatus: "Security Audited",
    news: [
      { title: "Poloniex Launches TRON Trading Competition", date: "2026-04-18", summary: "$100K prize pool for TRON traders." },
      { title: "Poloniex Lists BTT and JST", date: "2026-04-13", summary: "More TRON ecosystem tokens now available." },
      { title: "Platform Upgrade Complete", date: "2026-04-04", summary: "Faster trading engine with better liquidity." },
    ],
  },
  {
    name: "Samsung",
    slug: "samsung",
    category: "Partner",
    description: "Tech Partner",
    fullDescription: "Samsung has integrated TRON into various blockchain initiatives, including Samsung Blockchain Knox and Galaxy S series devices, bringing blockchain technology to mainstream consumers.",
    data: "Partner",
    iconName: 'Star',
    users: "50M+",
    externalUrl: "https://samsung.com/blockchain",
    auditStatus: "Enterprise Certified",
    news: [
      { title: "Samsung Galaxy S26 Supports TRON", date: "2026-04-19", summary: "Native TRON wallet in Samsung devices." },
      { title: "Samsung Blockchain Expansion", date: "2026-04-11", summary: "More Samsung products to integrate TRON." },
      { title: "Joint Developer Program", date: "2026-04-03", summary: "Samsung and TRON launch dApp development initiative." },
    ],
  },
  {
    name: "BitTorrent (BTT)",
    slug: "bittorrent-btt",
    category: "Utility",
    description: "File Sharing Token",
    fullDescription: "BitTorrent (BTT) is a token built on TRON that represents the utility token for the BitTorrent network, enabling file sharing and storage services on a decentralized platform.",
    data: "Utility Token",
    iconName: 'LinkSimple',
    users: "100M+",
    volume24h: "$45M",
    contracts: "0xE4f3A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7aa",
    auditStatus: "Token Audited",
    externalUrl: "https://bt.io/btt",
    tutorialSteps: [
      "Get BTT from exchange",
      "Use BTT for file sharing rewards",
      "Stake BTT for faster downloads",
      "Participate in network governance",
    ],
    news: [
      { title: "BTT Token Migration Complete", date: "2026-04-20", summary: "All BTT tokens migrated to TRON network." },
      { title: "BTT Staking Rewards Increased", date: "2026-04-14", summary: "New staking program offers 15% APY." },
      { title: "BitTorrent Network Growth", date: "2026-04-06", summary: "Network sees 30% growth in active users." },
    ],
  },
];

export const productCategories = ["All", "DeFi", "Storage", "Cross-Chain", "Stablecoin", "Games", "Exchange", "Governance", "Reserve", "Partner", "Utility"];

export function getProductBySlug(slug: string): EcosystemProduct | undefined {
  return ecosystemProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): EcosystemProduct[] {
  if (category === "All") return ecosystemProducts;
  return ecosystemProducts.filter((p) => p.category === category);
}