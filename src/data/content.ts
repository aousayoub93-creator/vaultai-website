export const navLinks = [
  { label: "The problem", href: "#why" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Security", href: "#security" },
];

export const footerNavLinks = [
  { label: "The problem", href: "#why" },
  { label: "Compare", href: "#compare" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Security", href: "#security" },
];

export const threatCards = [
  {
    number: "01",
    title: "Your prompts leave the building",
    body: "Every prompt typed into ChatGPT, Copilot, or Gemini is sent to servers you do not control.",
  },
  {
    number: "02",
    title: "Policies can change without notice",
    body: "Retention and training policies can shift. Once data is sent, you cannot verify what happens next.",
  },
  {
    number: "03",
    title: "A leaked prompt cannot be recalled",
    body: "Client contracts, financial records, strategy, and personal data can escape in a single request.",
  },
  {
    number: "04",
    title: "Compliance exposure is real",
    body: "Finance and healthcare teams may not be able to prove where sensitive data went or who accessed it.",
  },
  {
    number: "05",
    title: "Usage costs keep moving",
    body: "Per-token billing grows with adoption. There is no fixed number to plan around.",
  },
];

export interface NewsArticle {
  id: string;
  title: string;
  /** Display date exactly as sourced (day-level for the original 6, month-level for the VaultAI.us set) */
  date: string;
  /** ISO date used for sorting/grouping only (day defaults to the 1st when the source only gave month + year) */
  sortDate: string;
  category: string;
  description: string;
  sourceName: string;
  sourceUrl: string;
  articleUrl: string;
  image: string;
  alt: string;
  featured?: boolean;
}

// Originally reproduced from the captured Blink AI export (page 1 of the "Your Privacy Is Under Siege" desk).
const originalArticles: NewsArticle[] = [
  {
    id: "chatgpt-computer-history",
    title: "ChatGPT's new feature could give infostealers a map of your Mac activity",
    date: "August 19, 2026",
    sortDate: "2026-08-19",
    category: "AI privacy",
    description:
      "Help Net Security examines privacy questions around ChatGPT's Computer History feature, which records recent activity for use in memories.",
    sourceName: "Help Net Security",
    sourceUrl: "https://www.helpnetsecurity.com",
    articleUrl: "https://www.helpnetsecurity.com/2026/08/19/openai-computer-history-privacy-risks/",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for ChatGPT's new feature could give infostealers a map of your Mac activity",
  },
  {
    id: "chatgpt-hidden-reasoning-leak",
    title:
      "“But marinade” and leaked passwords are what researchers found in ChatGPT's hidden reasoning",
    date: "August 11, 2026",
    sortDate: "2026-08-11",
    category: "Data exposure",
    description:
      "The Decoder reports on research into exposed reasoning-model sessions, including credentials that appeared in publicly shared conversations.",
    sourceName: "The Decoder",
    sourceUrl: "https://the-decoder.com",
    articleUrl:
      "https://the-decoder.com/but-marinade-and-leaked-passwords-are-what-researchers-found-in-chatgpts-hidden-reasoning/",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for “But marinade” and leaked passwords are what researchers found in ChatGPT's hidden reasoning",
  },
  {
    id: "recall-style-keylogging",
    title: "OpenAI ditches Recall-style screenshot surveillance for friendly keylogging",
    date: "August 14, 2026",
    sortDate: "2026-08-14",
    category: "Surveillance",
    description:
      "The Register looks at the privacy implications of a feature that records computer interactions across apps and websites to build ChatGPT memories.",
    sourceName: "The Register",
    sourceUrl: "https://www.theregister.com",
    articleUrl:
      "https://www.theregister.com/ai-and-ml/2026/08/14/openai-ditches-recall-style-screenshot-surveillance-for-friendly-keylogging/5287618/",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for OpenAI ditches Recall-style screenshot surveillance for friendly keylogging",
  },
  {
    id: "chatgpt-link-rogue-agent",
    title: "One ChatGPT link could smuggle a rogue AI agent into your company",
    date: "July 23, 2026",
    sortDate: "2026-07-23",
    category: "Enterprise security",
    description:
      "The Register reports on research describing how a malicious link could place an attacker-controlled agent inside a company workspace.",
    sourceName: "The Register",
    sourceUrl: "https://www.theregister.com",
    articleUrl:
      "https://www.theregister.com/security/2026/07/23/one-chatgpt-link-could-smuggle-a-rogue-ai-agent-into-your-company/5275116",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for One ChatGPT link could smuggle a rogue AI agent into your company",
  },
  {
    id: "poisoned-document-secret-leak",
    title: "A Single Poisoned Document Could Leak ‘Secret’ Data Via ChatGPT",
    date: "August 6, 2025",
    sortDate: "2025-08-06",
    category: "Prompt injection",
    description:
      "WIRED describes research into prompt injection through connected documents and the possibility of extracting information from linked cloud storage.",
    sourceName: "WIRED",
    sourceUrl: "https://www.wired.com",
    articleUrl: "https://www.wired.com/story/poisoned-document-could-leak-secret-data-chatgpt/",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for A Single Poisoned Document Could Leak ‘Secret’ Data Via ChatGPT",
  },
  {
    id: "stanford-chatbot-privacy-study",
    title: "Study exposes privacy risks of AI chatbot conversations",
    date: "October 15, 2025",
    sortDate: "2025-10-15",
    category: "Privacy research",
    description:
      "Stanford researchers examine how leading AI companies handle user inputs and why people should treat chatbot conversations as sensitive.",
    sourceName: "Stanford Report",
    sourceUrl: "https://news.stanford.edu",
    articleUrl: "https://news.stanford.edu/stories/2025/10/ai-chatbot-privacy-concerns-risks-research",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for Study exposes privacy risks of AI chatbot conversations",
  },
];

// Added from vaultai.us "Your Privacy Is Under Siege" desk. vaultai.us itself was unreachable from this
// environment (blocked by network egress policy), so each articleUrl below was independently verified
// against the original publisher instead. "Reddit Sues Anthropic" is AP wire copy mirrored on PBS
// NewsHour — apnews.com could not be reached directly to confirm a apnews.com-hosted URL.
const vaultAiUsArticles: NewsArticle[] = [
  {
    id: "big-four-ai-apps-leaking-chats",
    title: "The Big Four AI Apps Are Quietly Leaking Your Chats to Meta, Google & TikTok",
    date: "May 2026",
    sortDate: "2026-05-01",
    category: "AI privacy",
    description:
      "A 2026 study found ChatGPT, Claude, Grok and Perplexity all share user data with advertising and analytics networks.",
    sourceName: "Decrypt",
    sourceUrl: "https://decrypt.co",
    articleUrl: "https://decrypt.co/367164/your-ai-chatbot-leaking-chats-meta-tiktok-google",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for The Big Four AI Apps Are Quietly Leaking Your Chats to Meta, Google & TikTok",
  },
  {
    id: "hidden-channel-chatgpt-leak",
    title: "A Hidden Channel Turned ChatGPT Chats Into a Silent Data Leak",
    date: "March 2026",
    sortDate: "2026-03-01",
    category: "Data leak",
    description:
      "Researchers found a covert path that could smuggle your messages, files and summaries out of ChatGPT — no warning, no consent.",
    sourceName: "Check Point Research",
    sourceUrl: "https://research.checkpoint.com",
    articleUrl:
      "https://research.checkpoint.com/2026/chatgpt-data-leakage-via-a-hidden-outbound-channel-in-the-code-execution-runtime/",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for A Hidden Channel Turned ChatGPT Chats Into a Silent Data Leak",
  },
  {
    id: "ai-chat-app-300-million-leak",
    title: "AI Chat App Leak Exposes 300 Million Private Messages",
    date: "February 2026",
    sortDate: "2026-02-01",
    category: "Data exposure",
    description:
      "An exposed database spilled 300 million messages from 25 million users of a popular AI chat app.",
    sourceName: "Malwarebytes",
    sourceUrl: "https://www.malwarebytes.com",
    articleUrl:
      "https://www.malwarebytes.com/blog/news/2026/02/ai-chat-app-leak-exposes-300-million-messages-tied-to-25-million-users",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for AI Chat App Leak Exposes 300 Million Private Messages",
  },
  {
    id: "cyber-chief-official-use-only",
    title: "US Cyber Chief Fed “Official Use Only” Files Into Public ChatGPT",
    date: "February 2026",
    sortDate: "2026-02-02",
    category: "Enterprise security",
    description:
      "The acting head of America's top cyber agency uploaded sensitive government documents into a public AI tool.",
    sourceName: "The Small Business Cybersecurity Guy",
    sourceUrl: "https://thesmallbusinesscybersecurityguy.co.uk",
    articleUrl:
      "https://thesmallbusinesscybersecurityguy.co.uk/blog/cisa-acting-director-chatgpt-government-data-breach-2026/",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for US Cyber Chief Fed Official Use Only Files Into Public ChatGPT",
  },
  {
    id: "openai-scanning-reporting-police",
    title: "OpenAI Says It's Scanning Users' ChatGPT Conversations and Reporting Content to the Police",
    date: "September 2025",
    sortDate: "2025-09-01",
    category: "Surveillance",
    description: "OpenAI scans ChatGPT chats and reports violent threats to police.",
    sourceName: "Futurism",
    sourceUrl: "https://futurism.com",
    articleUrl: "https://futurism.com/openai-scanning-conversations-police",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for OpenAI Says It's Scanning Users' ChatGPT Conversations and Reporting Content to the Police",
  },
  {
    id: "judge-orders-preserve-deleted-chats",
    title: "Goodbye To Confidentiality – A Federal Judge Ordered OpenAI to Stop Deleting Data.",
    date: "May 2025",
    sortDate: "2025-05-13",
    category: "Privacy",
    description:
      "Millions of deleted conversations were ordered to be preserved, raising major questions about user privacy and data retention.",
    sourceName: "Adweek",
    sourceUrl: "https://www.adweek.com",
    articleUrl:
      "https://www.adweek.com/media/a-federal-judge-ordered-openai-to-stop-deleting-data-heres-how-that-could-impact-users-privacy/",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for Goodbye To Confidentiality – A Federal Judge Ordered OpenAI to Stop Deleting Data",
  },
  {
    id: "google-privacy-fine",
    title: "Google Hit with $1.4 Billion in Privacy Violation Fines",
    date: "May 2025",
    sortDate: "2025-05-09",
    category: "Privacy & compliance",
    description:
      "Massive penalties for privacy violations and antitrust breaches highlight ongoing compliance issues.",
    sourceName: "Texas Attorney General",
    sourceUrl: "https://www.texasattorneygeneral.gov",
    articleUrl:
      "https://www.texasattorneygeneral.gov/news/releases/attorney-general-ken-paxton-secures-historic-1375-billion-settlement-google-related-texans-data",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for Google Hit with $1.4 Billion in Privacy Violation Fines",
  },
  {
    id: "reddit-sues-anthropic",
    title: "Reddit Sues Anthropic for Scraping 100,000+ User Posts",
    date: "June 2025",
    sortDate: "2025-06-04",
    category: "Data privacy",
    description:
      "The lawsuit alleges unauthorized data collection despite public commitments to ethical AI practices.",
    sourceName: "Associated Press",
    sourceUrl: "https://apnews.com",
    articleUrl:
      "https://www.pbs.org/newshour/nation/reddit-sues-ai-company-over-alleged-industrial-scale-scraping-of-its-users-comments",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for Reddit Sues Anthropic for Scraping 100,000+ User Posts",
  },
  {
    id: "altman-no-legal-confidentiality",
    title: "Altman: “No Legal Confidentiality” for AI Therapy Sessions",
    date: "July 2025",
    sortDate: "2025-07-25",
    category: "AI privacy",
    description:
      "CEO comments raised concerns about the lack of legal confidentiality protections for sensitive AI conversations.",
    sourceName: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    articleUrl:
      "https://techcrunch.com/2025/07/25/sam-altman-warns-theres-no-legal-confidentiality-when-using-chatgpt-as-a-therapist",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for Altman: No Legal Confidentiality for AI Therapy Sessions",
  },
  {
    id: "gemini-phone-messages-access",
    title: "Gemini to Access Phone & Messages Regardless of Privacy Settings",
    date: "July 2025",
    sortDate: "2025-07-07",
    category: "Surveillance",
    description:
      "A new integration raised concerns about access to communication apps and user privacy controls.",
    sourceName: "Android Headlines",
    sourceUrl: "https://www.androidheadlines.com",
    articleUrl: "https://www.androidheadlines.com/2025/06/google-gemini-ai-data-access-privacy-issues.html",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for Gemini to Access Phone & Messages Regardless of Privacy Settings",
  },
];

export const newsArticles: NewsArticle[] = [...originalArticles, ...vaultAiUsArticles].sort(
  (a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime(),
);

export interface ComparisonRow {
  dimension: string;
  cloud: string;
  vault: string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    dimension: "Where data is processed",
    cloud: "Third-party servers, unknown location",
    vault: "Your own hardware, your own building",
  },
  {
    dimension: "Who can access your data",
    cloud: "The AI provider, potentially subprocessors",
    vault: "Only your own employees",
  },
  {
    dimension: "Pricing",
    cloud: "Per-token, grows unpredictably with usage",
    vault: "Fixed hardware cost, no per-query billing",
  },
  {
    dimension: "Data leaves your network",
    cloud: "Yes, every single prompt",
    vault: "Never",
  },
  {
    dimension: "Works if internet is down",
    cloud: "No",
    vault: "Yes — fully local",
  },
  {
    dimension: "Knowledge source",
    cloud: "Generic internet-trained knowledge",
    vault: "Your actual company documents",
  },
  {
    dimension: "Compliance for regulated data",
    cloud: "Difficult to prove and control",
    vault: "Data locality by design",
  },
  {
    dimension: "Who owns the AI",
    cloud: "The cloud provider",
    vault: "You do, entirely",
  },
];

export const systemSteps = [
  {
    number: "01",
    title: "Connect",
    body: "Policies, files, permitted conversations, and company knowledge enter your own controlled environment.",
  },
  {
    number: "02",
    title: "Ground",
    body: "Vault AI retrieves the most relevant source material before it answers — and shows where the answer came from.",
  },
  {
    number: "03",
    title: "Assist",
    body: "Employees get focused help for their actual work: onboarding, coding, writing, and industry workflows.",
  },
  {
    number: "04",
    title: "Govern",
    body: "Admins set modes, models, access, retention, and audit controls without seeing private employee conversations.",
  },
];

export interface CapabilityCard {
  icon: "database" | "sparkles" | "fingerprint" | "network" | "shield" | "server";
  title: string;
  body: string;
  items: string[];
}

export const capabilityCards: CapabilityCard[] = [
  {
    icon: "database",
    title: "RAG & Knowledge",
    body: "Answers grounded in your real information, with a source citation on every answer.",
    items: [
      "Document Q&A with precise retrieval",
      "Plainly says when it cannot find an answer",
      "Company policies, files, and past conversations",
    ],
  },
  {
    icon: "sparkles",
    title: "Specialized AI Modes",
    body: "Focused assistants with behavior and models chosen for the work at hand.",
    items: [
      "General Chat, Onboarding, Code Assistant",
      "Industry-specific assistants",
      "Dedicated, visibly separated live Web Search mode",
    ],
  },
  {
    icon: "fingerprint",
    title: "Identity & Access",
    body: "Enterprise identity without adding another password to your stack.",
    items: [
      "Microsoft Entra ID or Google Workspace SSO",
      "Domain-restricted login",
      "Role-based access enforced at every level",
    ],
  },
  {
    icon: "network",
    title: "Personal Connectors",
    body: "Private, explicit, employee-controlled access to personal work context.",
    items: [
      "OneDrive, SharePoint, Google Drive, Gmail",
      "Per-conversation opt-in search toggle",
      "Never a silent, standing capability",
    ],
  },
  {
    icon: "shield",
    title: "Administration",
    body: "The controls and records your security team expects from infrastructure.",
    items: [
      "Branding, users, shared documents",
      "Audit logs with automatic monthly archiving",
      "Configurable data retention policies",
    ],
  },
  {
    icon: "server",
    title: "Reliability",
    body: "A service designed to stay useful without depending on public connectivity.",
    items: [
      "Self-healing background service",
      "Automatic restart if interrupted",
      "HTTPS encrypted connections end to end",
    ],
  },
];

export const securityItems = [
  {
    title: "Morocco’s Law 09-08",
    body: "Vault AI is built with Morocco’s data protection law in mind. On-premise deployment avoids cross-border data transfer questions because your data never leaves the country.",
  },
  {
    title: "Relevant to regulated finance",
    body: "For Bank Al-Maghrib-regulated institutions, keeping the system on your infrastructure avoids the “outsourcing a core activity” approval requirement that cloud vendors can trigger.",
  },
];

export const deploymentOptions = [
  {
    badge: "Available now",
    title: "On-premise",
    body: "Vault AI runs on your hardware, in your building, under your network and security controls. Fully local, including when the internet is down.",
    icon: "server" as const,
    highlighted: true,
    cta: { label: "Discuss your environment", href: "#assessment" },
  },
  {
    badge: "Coming soon",
    title: "Hosted",
    body: "A managed deployment option is in development for teams that want Vault AI’s privacy model with less infrastructure to operate.",
    icon: "network" as const,
    highlighted: false,
  },
];

export const faqItems = [
  {
    question: "Is Vault AI just a chatbot over documents?",
    answer:
      "No. Vault AI is a private knowledge layer that grows more useful as you connect internal policies, files, and permitted conversations. Every answer is grounded in retrieved sources and cites them. It also handles everyday business writing entirely on your infrastructure.",
  },
  {
    question: "Does any data ever leave our network?",
    answer:
      "Vault AI is designed for fully local operation. The dedicated Web Search mode is the explicit exception: it is visibly separated and only reaches the public internet when selected for that conversation.",
  },
  {
    question: "Can employees connect their own files and email?",
    answer:
      "Yes, with explicit, individual employee permission. OneDrive, SharePoint, Google Drive, and Gmail connectors remain private to that employee, and live search is an opt-in toggle for a single conversation.",
  },
  {
    question: "Is Vault AI certified for compliance?",
    answer:
      "We do not claim formal certification. Vault AI is designed around Morocco’s Law 09-08 and is relevant for Bank Al-Maghrib-regulated institutions because on-premise deployment avoids cross-border data transfer questions.",
  },
  {
    question: "What happens when the internet is down?",
    answer:
      "The core Vault AI experience keeps working because it runs fully locally on your own hardware. Only the clearly labeled Web Search mode needs public internet access.",
  },
];
