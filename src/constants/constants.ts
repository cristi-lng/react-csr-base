import type { Section } from 'src/types/section';

const LOCALE_OPTIONS = [
  { name: 'en-US', label: 'English' },
  { name: 'fr-FR', label: 'Français' },
] as const;

const DEFAULT_LOCALE = LOCALE_OPTIONS[0].name;

const SECTIONS = [
  { name: 'shoppingLists', icon: 'icon-list', label: 'shoppingLists', link: { to: '/' } },
  { name: 'products', icon: 'icon-fast-food', label: 'products', link: { to: '/products' } },
  { name: 'categories', icon: 'icon-tags', label: 'categories', link: { to: '/categories' } },
  { name: 'settings', icon: 'icon-cog', label: 'settings', link: { to: '/settings' } },
] as const satisfies Section[];

export { LOCALE_OPTIONS, DEFAULT_LOCALE, SECTIONS };
