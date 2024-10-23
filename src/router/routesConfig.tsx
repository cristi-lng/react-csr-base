import { layoutRoute } from '~bootstrap';
import { shoppingListsRoute } from '~shoppingLists';
import { productsRoute } from '~products';
import { categoriesRoute } from '~categories';
import { settingsRoute } from '~settings';

/**
 * Here we create the route tree. It looks like this:
 *  - layout route
 *      - <page route>
 */
const routeTree = layoutRoute.addChildren([shoppingListsRoute, productsRoute, categoriesRoute, settingsRoute]);

export { routeTree };
