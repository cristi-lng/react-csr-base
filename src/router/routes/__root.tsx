import { createRootRoute } from '@tanstack/react-router';

import { PrivateLayout } from '~bootstrap';

const Route = createRootRoute({
  component: PrivateLayout,
});

export { Route };
