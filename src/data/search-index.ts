export type SearchSource = 'landing'

export interface SearchEntry {
  id: string
  title: string
  keywords: string
  category: string
  url: string
  source: SearchSource
}

const featureEntries: SearchEntry[] = [
  {
    id: 'f1',
    title: 'Instant Provider Switching',
    keywords: 'switch providers ccd ccc cco aliases 3 characters instant fast quick',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'f2',
    title: '25+ Models Available',
    keywords: 'models claude gpt gemini opus sonnet haiku devstral granite',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'f3',
    title: 'MCP Profiles System',
    keywords: 'mcp profiles compatibility gpt strict json schema validation',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'f4',
    title: 'Model Identity Injection',
    keywords: 'identity system prompt gpt gemini claude correct identification',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'f5',
    title: 'Health Checks & Fail-Fast',
    keywords: 'health check status fail fast error validation copilot-api ollama',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'f6',
    title: 'Session Logging',
    keywords: 'logging log session audit trail provider model duration',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
]

const providerEntries: SearchEntry[] = [
  {
    id: 'p1',
    title: 'Anthropic Direct (ccd)',
    keywords: 'anthropic direct api official production quality paid token',
    category: 'Providers',
    url: '/#providers',
    source: 'landing',
  },
  {
    id: 'p2',
    title: 'GitHub Copilot (ccc)',
    keywords: 'github copilot subscription premium requests quota copilot-api',
    category: 'Providers',
    url: '/#providers',
    source: 'landing',
  },
  {
    id: 'p3',
    title: 'Ollama Local (cco)',
    keywords: 'ollama local offline private proprietary code free self-hosted',
    category: 'Providers',
    url: '/#providers',
    source: 'landing',
  },
]

const faqEntries: SearchEntry[] = [
  {
    id: 'q1',
    title: 'Is this legal to use?',
    keywords: 'legal tos terms service risk copilot-api violation',
    category: 'FAQ',
    url: '/#faq',
    source: 'landing',
  },
  {
    id: 'q2',
    title: 'How much does it cost?',
    keywords: 'cost price pricing free paid subscription token quota',
    category: 'FAQ',
    url: '/#faq',
    source: 'landing',
  },
  {
    id: 'q3',
    title: 'Why is GPT-4.1 free on Copilot?',
    keywords: 'gpt free multiplier 0x unlimited quota premium requests',
    category: 'FAQ',
    url: '/#faq',
    source: 'landing',
  },
  {
    id: 'q4',
    title: 'Does Ollama work offline?',
    keywords: 'ollama offline local private air-gapped no internet',
    category: 'FAQ',
    url: '/#faq',
    source: 'landing',
  },
  {
    id: 'q5',
    title: 'What is copilot-api?',
    keywords: 'copilot-api reverse engineer proxy bridge github',
    category: 'FAQ',
    url: '/#faq',
    source: 'landing',
  },
  {
    id: 'q6',
    title: 'Which models are available?',
    keywords: 'models available claude opus sonnet haiku gpt gemini devstral granite',
    category: 'FAQ',
    url: '/#faq',
    source: 'landing',
  },
]

const docEntries: SearchEntry[] = [
  {
    id: 'd1',
    title: 'Quick Start Installation',
    keywords: 'install setup quick start curl bash zshrc bashrc homebrew brew',
    category: 'Install',
    url: '/#install',
    source: 'landing',
  },
  {
    id: 'd2',
    title: 'Risk Disclosure',
    keywords: 'risk disclosure tos terms service warning legal suspension',
    category: 'Docs',
    url: '/#risk-disclosure',
    source: 'landing',
  },
  {
    id: 'd3',
    title: 'Pricing & Quotas',
    keywords: 'pricing limits plans copilot pro business enterprise multiplier quota',
    category: 'Docs',
    url: '/#pricing',
    source: 'landing',
  },
  {
    id: 'd4',
    title: 'Architecture Diagram',
    keywords: 'architecture diagram how it works routing provider bridge',
    category: 'Docs',
    url: '/#architecture',
    source: 'landing',
  },
]

export const SEARCH_INDEX: SearchEntry[] = [
  ...featureEntries,
  ...providerEntries,
  ...faqEntries,
  ...docEntries,
]
