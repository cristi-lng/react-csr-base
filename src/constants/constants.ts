const LOCALE_OPTIONS = [
  { name: 'en-US', label: 'English' },
  { name: 'fr-FR', label: 'Français' },
] as const;

const DEFAULT_LOCALE = LOCALE_OPTIONS[0].name;

export { LOCALE_OPTIONS, DEFAULT_LOCALE };
