import { RegisteredRouter, RoutePaths } from '@tanstack/react-router';

type SectionName = 'shoppingLists' | 'products' | 'categories' | 'settings';

type Section = {
  name: SectionName;
  icon: string;
  label: string;
  path: RoutePaths<RegisteredRouter['routeTree']>;
};

export { type Section, type SectionName };
