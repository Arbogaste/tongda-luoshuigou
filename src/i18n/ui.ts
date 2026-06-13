export const languages = {
  en: 'English',
  it: 'Italiano',
  es: 'Español',
  'pt-br': 'Português (BR)',
  fr: 'Français',
  ar: 'العربية',
  ru: 'Русский',
  hi: 'हिन्दी',
  zh: '中文',
  tr: 'Türkçe',
  id: 'Bahasa Indonesia',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'site.title': 'Tongda Luoshuigou - ResiHub',
    'site.description': 'The self-mirroring resilience + open-rails hub for creators & SME in BRICS+/emerging markets',
    'nav.home': 'Home',
    'nav.docs': 'Docs',
    'nav.tools': 'Tools',
  },
  it: {
    'site.title': 'Tongda Luoshuigou - ResiHub',
    'site.description': 'L\'hub di resilienza auto-replicante e reti aperte per creatori e PMI nei BRICS+/mercati emergenti',
    'nav.home': 'Home',
    'nav.docs': 'Documentazione',
    'nav.tools': 'Strumenti',
  },
  // We will populate others, fallback to English for now
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang]?.[key] || ui[defaultLang][key];
  }
}
