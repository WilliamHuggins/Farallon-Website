export interface Track {
  id: number;
  title: string;
  duration: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type Language = 'en' | 'es' | 'fr' | 'ja' | 'zh';
