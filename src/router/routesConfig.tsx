import { rootRoute, layoutRoute } from '~bootstrap';

/**
 * Create route tree. It looks like this:
 * - root route
 *    - layout route
 *        - <page route>
 */
const routeTree = rootRoute.addChildren([layoutRoute]);

export { routeTree };
