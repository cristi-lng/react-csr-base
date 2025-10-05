import { createRootRoute } from '@tanstack/react-router';

import { SessionHandler } from '~bootstrap/components/sessionHandler/sessionHandler';
import { PrivateLayout } from '~bootstrap/components/privateLayout/privateLayout';

const layoutRoute = createRootRoute({
  component: PrivateLayout,
});

export { SessionHandler, layoutRoute };
