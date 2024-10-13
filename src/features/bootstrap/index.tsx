import { createRootRoute, createRoute } from '@tanstack/react-router';

import { sessionService } from '~bootstrap/services/sessionService';
import { Shell } from '~bootstrap/components/shell/shell';
import { Layout } from '~bootstrap/components/layout/layout';
import { SectionName } from '~bootstrap/types/section';

/**
 * Routes that are used across the app and wrap every page
 * - shellRoute
 *    - renders the static shell of the page (page boundaries, main menu if static, copyright, other links, etc.)
 *    - it shouldn't have business logic or depend on server data, because we want it to be the ultimate place
 *        for rendering error boundaries and pending components
 * - layoutRoute
 *    - renders the page layout, including dynamic parts
 */
const shellRoute = createRootRoute({
  component: Shell,
});

const layoutRoute = createRoute({
  getParentRoute: () => shellRoute,
  id: 'layout',
  beforeLoad: () => sessionService.beforePageLoad(),
  component: Layout,
});

export { shellRoute, layoutRoute };
export { type SectionName };
