import { createRootRoute } from '@tanstack/react-router';

import { PrivateLayout } from '~bootstrap/components/privateLayout/privateLayout';
import { SessionHandler } from '~bootstrap/components/sessionHandler/sessionHandler';
import { SectionName } from '~bootstrap/types/section';

const layoutRoute = createRootRoute({
  component: PrivateLayout,
});

export { SessionHandler, layoutRoute, type SectionName };
