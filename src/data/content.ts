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
  tag: string;
  image: string;
  alt: string;
  date: string;
  title: string;
  description: string;
  source: string;
  url: string;
}

export const newsArticlesPage1: NewsArticle[] = [
  {
    tag: "AI privacy",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for ChatGPT's new feature could give infostealers a map of your Mac activity",
    date: "August 19, 2026",
    title:
      "ChatGPT's new feature could give infostealers a map of your Mac activity",
    description:
      "Help Net Security examines privacy questions around ChatGPT's Computer History feature, which records recent activity for use in memories.",
    source: "Help Net Security",
    url: "https://www.helpnetsecurity.com/2026/08/19/openai-computer-history-privacy-risks/",
  },
  {
    tag: "Data exposure",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for “But marinade” and leaked passwords are what researchers found in ChatGPT's hidden reasoning",
    date: "August 11, 2026",
    title:
      "“But marinade” and leaked passwords are what researchers found in ChatGPT's hidden reasoning",
    description:
      "The Decoder reports on research into exposed reasoning-model sessions, including credentials that appeared in publicly shared conversations.",
    source: "The Decoder",
    url: "https://the-decoder.com/but-marinade-and-leaked-passwords-are-what-researchers-found-in-chatgpts-hidden-reasoning/",
  },
  {
    tag: "Surveillance",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for OpenAI ditches Recall-style screenshot surveillance for friendly keylogging",
    date: "August 14, 2026",
    title:
      "OpenAI ditches Recall-style screenshot surveillance for friendly keylogging",
    description:
      "The Register looks at the privacy implications of a feature that records computer interactions across apps and websites to build ChatGPT memories.",
    source: "The Register",
    url: "https://www.theregister.com/ai-and-ml/2026/08/14/openai-ditches-recall-style-screenshot-surveillance-for-friendly-keylogging/5287618/",
  },
  {
    tag: "Enterprise security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for One ChatGPT link could smuggle a rogue AI agent into your company",
    date: "July 23, 2026",
    title: "One ChatGPT link could smuggle a rogue AI agent into your company",
    description:
      "The Register reports on research describing how a malicious link could place an attacker-controlled agent inside a company workspace.",
    source: "The Register",
    url: "https://www.theregister.com/security/2026/07/23/one-chatgpt-link-could-smuggle-a-rogue-ai-agent-into-your-company/5275116",
  },
  {
    tag: "Prompt injection",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for A Single Poisoned Document Could Leak ‘Secret’ Data Via ChatGPT",
    date: "August 6, 2025",
    title: "A Single Poisoned Document Could Leak ‘Secret’ Data Via ChatGPT",
    description:
      "WIRED describes research into prompt injection through connected documents and the possibility of extracting information from linked cloud storage.",
    source: "WIRED",
    url: "https://www.wired.com/story/poisoned-document-could-leak-secret-data-chatgpt/",
  },
  {
    tag: "Privacy research",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=60",
    alt: "Illustration for Study exposes privacy risks of AI chatbot conversations",
    date: "October 15, 2025",
    title: "Study exposes privacy risks of AI chatbot conversations",
    description:
      "Stanford researchers examine how leading AI companies handle user inputs and why people should treat chatbot conversations as sensitive.",
    source: "Stanford Report",
    url: "https://news.stanford.edu/stories/2025/10/ai-chatbot-privacy-concerns-risks-research",
  },
];

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
