export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] as Locale;
  
  if (locales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}
