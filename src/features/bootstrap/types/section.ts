import type { RegisteredRouter, ValidateLinkOptions } from '@tanstack/react-router';

type SectionName = 'shoppingLists' | 'products' | 'categories' | 'settings';

type Section<TRouter extends RegisteredRouter = RegisteredRouter, TOptions = unknown> = {
  name: SectionName;
  icon: string;
  label: string;
  link: ValidateLinkOptions<TRouter, TOptions>;
};

export { type Section, type SectionName };
