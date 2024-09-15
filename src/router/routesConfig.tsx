import { rootRoute, layoutRoute } from '~bootstrap';
import { shoppingListsRoute } from '~shoppingLists';

/**
 * Here we create the route tree. It looks like this:
 * - root route
 *    - layout route
 *        - <page route>
 */
const routeTree = rootRoute.addChildren([layoutRoute.addChildren([shoppingListsRoute])]);

export { routeTree };
