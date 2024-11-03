const SUPPORT_EMAIL = 'support@shoppy.com';

const LOCALE_OPTIONS = [
  { name: 'en-US', label: 'English' },
  { name: 'fr-FR', label: 'Français' },
] as const;

const DEFAULT_LOCALE = LOCALE_OPTIONS[0].name;

export { SUPPORT_EMAIL, LOCALE_OPTIONS, DEFAULT_LOCALE };
