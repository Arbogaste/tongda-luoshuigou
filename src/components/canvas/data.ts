export type EntryType = 'h1' | 'h2' | 'body' | 'dim' | 'bullet' | 'gap' | 'rule';

export interface Entry {
  t: EntryType;
  text?: string;
  label?: string;
  color?: string;
  size?: number;
  italic?: boolean;
  href?: string;
}

const R = '#c0392b';
const G = '#d4a843';
const L = '#e0e0e0';
const D = '#444';

export const SECTIONS: Entry[] = [
  { t:'h1',   text:'痛打落水狗',                        color: R,  size: 38 },
  { t:'dim',  text:'questo testo non è copiabile',      color: D,  size: 12, italic: true },
  { t:'gap',  size: 10 },
  { t:'body', text:'Dashboard per sviluppatori che costruiscono', color: L, size: 16 },
  { t:'body', text:'business fuori dalle piattaforme dollarizzate.', color: L, size: 16 },
  { t:'gap',  size: 28 },
  { t:'rule' },

  { t:'h2', text:'⬡  Exchange & Crypto Rails', color: G, size: 19 },
  { t:'gap', size: 4 },
  { t:'bullet', label:'Binance',        text:'exchange globale — referral: commissioni ridotte',  href:'https://accounts.binance.com/register?ref=172625725' },
  { t:'bullet', label:'KuCoin',         text:'altcoin, futures, P2P — meno KYC',                 href:'https://www.kucoin.com/r/rf/PLACEHOLDER_KUCOIN' },
  { t:'bullet', label:'Bisq',           text:'DEX P2P non-custodial, zero KYC',                  href:'https://bisq.network' },
  { t:'bullet', label:'Monero (XMR)',   text:'privacy-first, niente tracciabilità on-chain',     href:'https://www.getmonero.org' },
  { t:'bullet', label:'Lightning ⚡',   text:'micropagamenti Bitcoin istantanei, zero fee',      href:'https://lightning.network' },
  { t:'gap', size: 20 },
  { t:'rule' },

  { t:'h2', text:'⬡  Payment Rails Alternativi', color: G, size: 19 },
  { t:'gap', size: 4 },
  { t:'bullet', label:'x402',           text:'pay-per-call HTTP nativo su crypto (EIP-4361)',    href:'https://x402.org' },
  { t:'bullet', label:'BRICS Pay',      text:'corridoio interbancario non-SWIFT per BRICS+',     href:'https://brics-pay.org' },
  { t:'bullet', label:'BTCPay Server',  text:'self-hosted, zero commissioni piattaforma',        href:'https://btcpayserver.org' },
  { t:'bullet', label:'OpenNode',       text:'gateway Bitcoin/Lightning per merchant',           href:'https://www.opennode.com' },
  { t:'gap', size: 20 },
  { t:'rule' },

  { t:'h2', text:'⬡  AI Tools — Alternative ai Big Tech', color: G, size: 19 },
  { t:'gap', size: 4 },
  { t:'bullet', label:'Ollama',         text:'LLM locali (Llama3, Mistral) — zero API cost',    href:'https://ollama.com' },
  { t:'bullet', label:'LM Studio',      text:'GUI per modelli locali GGUF, no cloud',            href:'https://lmstudio.ai' },
  { t:'bullet', label:'Jan.ai',         text:'alternative a ChatGPT, 100% offline',             href:'https://jan.ai' },
  { t:'bullet', label:'Mistral API',    text:'LLM EU-based, GDPR, pricing aggressivo',          href:'https://mistral.ai' },
  { t:'bullet', label:'Groq',           text:'inferenza velocissima, API key gratuita',          href:'https://groq.com' },
  { t:'bullet', label:'Together AI',    text:'open models su cloud, costo basso',               href:'https://www.together.ai' },
  { t:'bullet', label:'Perplexity',     text:'search AI senza tracciamento Google',             href:'https://www.perplexity.ai' },
  { t:'gap', size: 20 },
  { t:'rule' },

  { t:'h2', text:'⬡  Infrastruttura Decentralizzata', color: G, size: 19 },
  { t:'gap', size: 4 },
  { t:'bullet', label:'Cloudflare R2',  text:'object storage zero egress — alternativa S3',     href:'https://www.cloudflare.com/developer-platform/r2' },
  { t:'bullet', label:'Fly.io',         text:'deploy container globale, prezzi fissi',           href:'https://fly.io' },
  { t:'bullet', label:'Railway',        text:'deploy semplice, DB incluso',                     href:'https://railway.app' },
  { t:'bullet', label:'IPFS+Filecoin',  text:'storage permanente decentralizzato',              href:'https://web3.storage' },
  { t:'bullet', label:'Arweave',        text:'archivio permanente pay-once',                    href:'https://www.arweave.org' },
  { t:'bullet', label:'Hetzner',        text:'VPS EU economici, non americani',                 href:'https://www.hetzner.com' },
  { t:'gap', size: 20 },
  { t:'rule' },

  { t:'h2', text:'⬡  Comunicazione Anti-Censura', color: G, size: 19 },
  { t:'gap', size: 4 },
  { t:'bullet', label:'Matrix/Element', text:'chat E2E federata, self-hostable',                href:'https://element.io' },
  { t:'bullet', label:'Signal',         text:'messaggistica cifrata — standard de facto',       href:'https://signal.org' },
  { t:'bullet', label:'SimpleX',        text:'no user ID, anonimato massimo',                   href:'https://simplex.chat' },
  { t:'bullet', label:'Nostr',          text:'social decentralizzato, chiave privata = identità', href:'https://nostr.com' },
  { t:'bullet', label:'Briar',          text:'P2P senza server, funziona via Tor/BT',           href:'https://briarproject.org' },
  { t:'gap', size: 20 },
  { t:'rule' },

  { t:'h2', text:'⬡  OSINT & Market Intelligence', color: G, size: 19 },
  { t:'gap', size: 4 },
  { t:'bullet', label:'ACLED',          text:'dati conflitti armati globali in tempo reale',    href:'https://acleddata.com' },
  { t:'bullet', label:'GDELT',          text:'sentiment media globale, eventi geopolitici',     href:'https://www.gdeltproject.org' },
  { t:'bullet', label:'SpiderFoot',     text:'OSINT automatizzato su target aziendali',         href:'https://www.spiderfoot.net' },
  { t:'bullet', label:'Recon-ng',       text:'framework ricognizione modulare',                 href:'https://github.com/lanmaster53/recon-ng' },
  { t:'gap', size: 28 },
  { t:'dim', text:'tongda-luoshuigou — strumenti per sviluppatori indipendenti', color: D, size: 11, italic: true },
  { t:'gap', size: 16 },
];
