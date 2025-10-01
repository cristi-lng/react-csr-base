import type { RegisteredRouter, ValidateLinkOptions } from '@tanstack/react-router';

import type { I18nMessageKey } from 'src/i18n/i18nMessages';

type SectionName = 'shoppingLists' | 'products' | 'categories' | 'settings';

type Section<TRouter extends RegisteredRouter = RegisteredRouter, TOptions = unknown> = {
  name: SectionName;
  icon: string;
  label: I18nMessageKey;
  link: ValidateLinkOptions<TRouter, TOptions>;
};

export { type Section, type SectionName };
