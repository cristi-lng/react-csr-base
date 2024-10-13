import { createRoute } from '@tanstack/react-router';

import { layoutRoute } from '~bootstrap';

const productsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/products',
  staticData: {
    underSection: 'products',
  },
  component: () => <>Not yet implemented</>,
});

export { productsRoute };
