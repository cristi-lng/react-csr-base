const LOCALE_OPTIONS = [
  { name: 'en_US', label: 'English' },
  { name: 'fr_FR', label: 'Français' },
] as const;

const DEFAULT_LOCALE = LOCALE_OPTIONS[0].name;

export { LOCALE_OPTIONS, DEFAULT_LOCALE };
