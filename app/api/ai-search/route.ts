import { NextRequest, NextResponse } from "next/server";
import { getTronAssistantConfig } from "@/lib/prompts/tron-assistant";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  message: string;
  history?: Message[];
}

const MINIMAX_API_URL = "https://api.minimax.chat/v1/text/chatcompletion_v2";
const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const config = getTronAssistantConfig();

    // Build messages array with system prompt and history
    const messages: Array<{ role: string; content: string }> = [
      { role: "system", content: config.systemPrompt },
    ];

    // Add conversation history
    history.forEach((msg) => {
      messages.push({
        role: msg.role,
        content: msg.content,
      });
    });

    // Add current user message
    messages.push({
      role: "user",
      content: message,
    });

    if (!MINIMAX_API_KEY) {
      // Return mock response if no API key configured
      return NextResponse.json({
        reply: getMockResponse(message),
        sources: [
          { title: "TRON Developer Docs", url: "https://developers.tron.network", type: "doc" },
          { title: "JustLend Protocol", url: "https://justlend.org", type: "product" },
        ],
      });
    }

    // Call MiniMax M2.7 API
    const response = await fetch(MINIMAX_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MINIMAX_API_KEY}`,
      },
      body: JSON.stringify({
        model: "MiniMax-M2.7",
        messages,
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("MiniMax API error:", response.status, errorData);
      return NextResponse.json(
        { error: "AI service temporarily unavailable" },
        { status: 503 }
      );
    }

    const data = await response.json();

    // Extract assistant's reply
    const reply = data.choices?.[0]?.message?.content || "";

    // Extract sources from the response (simple heuristic)
    const sources = extractSources(reply);

    return NextResponse.json({
      reply,
      sources,
    });
  } catch (error) {
    console.error("AI Search API error:", error);
    return NextResponse.json(
      { error: "Request timeout, please try again" },
      { status: 504 }
    );
  }
}

function extractSources(text: string) {
  const sources: Array<{ title: string; url: string; type: string }> = [];

  // Extract URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = text.match(urlRegex) || [];

  urls.forEach((url) => {
    if (url.includes("developers")) {
      sources.push({ title: "TRON Developer Docs", url, type: "doc" });
    } else if (url.includes("justlend")) {
      sources.push({ title: "JustLend", url, type: "product" });
    } else if (url.includes("sunswap")) {
      sources.push({ title: "SunSwap", url, type: "product" });
    } else if (url.includes("bttc")) {
      sources.push({ title: "BTTC Bridge", url, type: "product" });
    } else if (url.includes("tron.network")) {
      sources.push({ title: "TRON Network", url, type: "doc" });
    }
  });

  // Remove duplicates
  const uniqueSources = sources.filter(
    (source, index, self) =>
      index === self.findIndex((s) => s.url === source.url)
  );

  return uniqueSources.slice(0, 5);
}

function getMockResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("tvl") || lowerMessage.includes("total value")) {
    return `## TRON TVL Overview

The current Total Value Locked (TVL) on TRON is **$8.5B**, making it one of the largest blockchain networks.

### TVL Breakdown by Category:
| Category | TVL | Share |
|----------|-----|-------|
| DeFi | $5.2B | 61% |
| Stablecoin | $2.8B | 33% |
| Other | $0.5B | 6% |

### Top DeFi Protocols:
- **JustLend**: $4.2B TVL
- **SunSwap**: $890M 24h Volume

Would you like more details about any specific protocol?`;
  }

  if (lowerMessage.includes("tps") || lowerMessage.includes("transaction")) {
    return `## TRON Network Performance

TRON currently handles **15,000+ TPS** with an average block time of 3 seconds.

### Network Stats:
- **Block Height**: 125M+
- **Total Accounts**: 280M+
- **Daily Active Users**: 2.5M+

### Transaction Types:
- Transfers
- Smart contract calls
- Staking operations
- Token swaps

For developer documentation on transactions, check [TRON Developer Docs](https://developers.tron.network).`;
  }

  if (lowerMessage.includes("lend") || lowerMessage.includes("borrow")) {
    return `## JustLend Protocol

JustLend is TRON's primary decentralized lending protocol with **$4.2B TVL**.

### Key Features:
- Supply and borrow assets
- Earn interest on deposits
- Collateral management
- Governance participation

### Supported Assets:
- USDT, USDC, TRX, WBTC, ETH

Visit [JustLend](https://justlend.org) to start lending or borrowing.`;
  }

  if (lowerMessage.includes("swap") || lowerMessage.includes("dex")) {
    return `## SunSwap DEX

SunSwap is TRON's leading decentralized exchange with **$890M daily volume**.

### Features:
- Token swaps with low fees
- Liquidity provision
- Staking rewards
- Cross-chain swaps via BTTC

Visit [SunSwap](https://sunswap.com) to trade tokens.`;
  }

  if (lowerMessage.includes("developer") || lowerMessage.includes("docs") || lowerMessage.includes("build")) {
    return `## TRON Developer Resources

Welcome to TRON development! Here's what you need to know:

### Getting Started:
1. Read the [Developer Documentation](https://developers.tron.network)
2. Set up your development environment
3. Deploy your first smart contract

### Key Tools:
- **TRON Box**: Development framework
- **TronWeb**: JavaScript SDK
- **Nile Testnet**: For testing

### Popular Contracts:
- TRC20 tokens
- Staking contracts
- NFT contracts

Need help with a specific aspect of development?`;
  }

  if (lowerMessage.includes("news") || lowerMessage.includes("update") || lowerMessage.includes("recent")) {
    return `## Latest TRON News

### Recent Updates:

1. **TRON DAO Reserve Expands USDD Minting Cap to $5B** (2026-04-20)
   - Significant step for decentralized stablecoin

2. **TRON Network Achieves 12M Active Users** (2026-04-18)
   - Network continues to grow

3. **SunSwap V3 Launches with $500M TVL** (2026-04-15)
   - Major upgrade for the DEX

4. **BTTC Bridge Reaches $10B Total Volume** (2026-04-12)
   - Cross-chain activity increasing

For more news, visit the [TRON News Section](https://tron.network/news).`;
  }

  // Default response
  return `## TRON AI Assistant

Hello! I'm here to help you with anything related to TRON blockchain.

### How I Can Help:
- **Chain Data**: TVL, TPS, block stats, account numbers
- **Ecosystem Products**: JustLend, SunSwap, BTTC, and more
- **Developer Docs**: Documentation, tools, and guides
- **News & Updates**: Latest TRON developments

### Quick Links:
- [Official Website](https://tron.network)
- [Developer Documentation](https://developers.tron.network)
- [JustLend](https://justlend.org)
- [SunSwap](https://sunswap.com)

What would you like to know?`;
}