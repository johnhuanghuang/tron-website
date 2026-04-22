export interface Source {
  title: string;
  url: string;
  type: "doc" | "product" | "news" | "data";
}

export interface TronAssistantConfig {
  systemPrompt: string;
  contextData: {
    ecosystemProducts: Array<{
      name: string;
      category: string;
      description: string;
      data: string;
    }>;
    news: Array<{
      title: string;
      date: string;
      category: string;
    }>;
    chainData: {
      tvl: string;
      tps: string;
      blockHeight: string;
      accounts: string;
      dailyActiveUsers: string;
    };
  };
}

const ecosystemProducts = [
  { name: "JustLend", category: "DeFi", description: "Decentralized Lending", data: "TVL $4.2B" },
  { name: "SunSwap", category: "DeFi", description: "DEX & Staking", data: "24h Vol $890M" },
  { name: "BTTC", category: "Cross-Chain", description: "BitTorrent Chain", data: "$2.8B Cross-Chain" },
  { name: "WINk", category: "Games", description: "Gaming Platform", data: "MAU 2.1M" },
  { name: "BTFS", category: "Storage", description: "Storage Network", data: "Nodes 500K+" },
  { name: "USDD", category: "Stablecoin", description: "Decentralized Stablecoin", data: "Supply $730M" },
  { name: "JUST Governance", category: "Governance", description: "DAO Governance", data: "Governance" },
  { name: "TRON DAO Reserve", category: "Reserve", description: "Reserve Management", data: "Reserve" },
  { name: "Crypto.com", category: "Partnership", description: "Global Exchange", data: "Partner" },
  { name: "Poloniex", category: "Partnership", description: "Crypto Exchange", data: "Partner" },
  { name: "Samsung", category: "Partnership", description: "Tech Partner", data: "Partner" },
  { name: "BitTorrent (BTT)", category: "Utility", description: "File Sharing Token", data: "Utility Token" },
];

const news = [
  { title: "TRON DAO Reserve Expands USDD Minting Cap to $5B", date: "2026-04-20", category: "Governance" },
  { title: "TRON Network Achieves 12M Active Users Milestone", date: "2026-04-18", category: "Network" },
  { title: "SunSwap V3 Launch Brings $500M TVL Growth", date: "2026-04-15", category: "DeFi" },
  { title: "BTTC Bridge Reaches $10B Total Volume", date: "2026-04-12", category: "Cross-Chain" },
  { title: "TRON Developer Grants Program Announces New Winners", date: "2026-04-10", category: "Ecosystem" },
  { title: "JustLend Launches New Lending Pool for Institutional Users", date: "2026-04-08", category: "DeFi" },
];

const chainData = {
  tvl: "$8.5B",
  tps: "15,000+",
  blockHeight: "125M+",
  accounts: "280M+",
  dailyActiveUsers: "2.5M+",
};

function buildSystemPrompt(): string {
  const productsList = ecosystemProducts
    .map(p => `- ${p.name}: ${p.description} (${p.data})`)
    .join("\n");

  const newsList = news
    .map(n => `- ${n.title} (${n.date})`)
    .join("\n");

  return `You are TRON AI Assistant, an intelligent helper for the TRON blockchain ecosystem.

Your responsibilities:
1. Answer questions about TRON blockchain data (TVL, TPS, Gas, nodes, blocks)
2. Help with ecosystem products usage and troubleshooting
3. Guide developers to relevant documentation
4. Recommend ecosystem products based on user needs
5. Share latest TRON news and updates

Current Data:
- TVL: ${chainData.tvl}
- TPS: ${chainData.tps}
- Block Height: ${chainData.blockHeight}
- Total Accounts: ${chainData.accounts}
- Daily Active Users: ${chainData.dailyActiveUsers}

Ecosystem Products:
${productsList}

Latest News:
${newsList}

Important URLs:
- Official Website: https://tron.network
- Developer Documentation: https://developers.tron.network
- JustLend: https://justlend.org
- SunSwap: https://sunswap.com
- BTTC Bridge: https://bttc.io
- USDD: https://usdd.io

Guidelines:
- Use Markdown formatting for responses
- Use bullet points and tables for structured information
- Always provide clickable links when referencing docs or products
- If you cannot answer a question, guide users to relevant resources
- Keep responses concise but informative
- For technical questions, provide step-by-step guidance
- When recommending products, briefly explain why they fit the user's needs`;
}

export function getTronAssistantConfig(): TronAssistantConfig {
  return {
    systemPrompt: buildSystemPrompt(),
    contextData: {
      ecosystemProducts,
      news,
      chainData,
    },
  };
}

export function getSourcesFromResponse(response: string): Source[] {
  const sources: Source[] = [];

  // Extract doc sources
  const docMatches = response.match(/docs?:\s*\[([^\]]+)\]/gi);
  if (docMatches) {
    docMatches.forEach(match => {
      const titleMatches = match.match(/['"]([^'"]+)['"]/g);
      if (titleMatches) {
        titleMatches.forEach(title => {
          sources.push({
            title: title.replace(/['"]/g, ""),
            url: "https://developers.tron.network",
            type: "doc",
          });
        });
      }
    });
  }

  return sources;
}