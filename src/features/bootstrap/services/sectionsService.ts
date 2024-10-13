import { AnyRouteMatch } from '@tanstack/react-router';

import { Section } from '~bootstrap/types/section';

class SectionsService {
  #sections: Section[] = [
    { name: 'shoppingLists', icon: 'icon-list', label: 'shoppingLists', path: '/' },
    { name: 'products', icon: 'icon-fast-food', label: 'products', path: '/products' },
    { name: 'categories', icon: 'icon-tags', label: 'categories', path: '/categories' },
    { name: 'settings', icon: 'icon-cog', label: 'settings', path: '/settings' },
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
