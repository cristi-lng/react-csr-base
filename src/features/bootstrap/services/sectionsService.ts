import type { AnyRouteMatch } from '@tanstack/react-router';

import { SECTIONS } from 'src/constants/constants';

function findCurrentSection(matchedRoutes: AnyRouteMatch[]) {
  const currentSectionName = matchedRoutes.findLast((route) => route.staticData.underSection)?.staticData.underSection;
  return SECTIONS.find((section) => section.name == currentSectionName);
}

export { findCurrentSection };
