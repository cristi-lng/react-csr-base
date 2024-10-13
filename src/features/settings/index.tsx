import { createRoute } from '@tanstack/react-router';

import { layoutRoute } from '~bootstrap';

const settingsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/settings',
  staticData: {
    underSection: 'settings',
  },
  component: () => <>Not yet implemented</>,
});

export { settingsRoute };
