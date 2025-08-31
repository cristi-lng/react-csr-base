import type { AnyRouteMatch } from '@tanstack/react-router';

import type { Section } from '~bootstrap/types/section';

class SectionsService {
  #sections: Section[] = [
    { name: 'shoppingLists', icon: 'icon-list', label: 'shoppingLists', link: { to: '/' } },
    { name: 'products', icon: 'icon-fast-food', label: 'products', link: { to: '/products' } },
    { name: 'categories', icon: 'icon-tags', label: 'categories', link: { to: '/categories' } },
    { name: 'settings', icon: 'icon-cog', label: 'settings', link: { to: '/settings' } },
  ];

  getSections() {
    return this.#sections;
  }

  findCurrentSection(matchedRoutes: AnyRouteMatch[]) {
    const currentSectionName = matchedRoutes.findLast((route) => route.staticData.underSection)?.staticData
      .underSection;
    return this.#sections.find((section) => section.name == currentSectionName);
  }
}

export const sectionsService = new SectionsService();
