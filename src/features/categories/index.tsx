import { createRoute } from '@tanstack/react-router';

import { layoutRoute } from '~bootstrap';
import { DisplayError } from 'src/types/displayError';

const categoriesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/categories',
  staticData: {
    underSection: 'categories',
  },
  loader: () => {
    throw new DisplayError({ title: 'specificError.title', details: 'specificError.details' });
  },
  component: () => <>Not yet implemented</>,
});

export { categoriesRoute };
