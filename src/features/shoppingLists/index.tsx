import { createRoute } from '@tanstack/react-router';

import { layoutRoute } from '~bootstrap';

const shoppingListsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  component: () => (
    <>
      <span className="icon-th-list" />
      <h1>Shopping lists</h1>
    </>
  ),
});

export { shoppingListsRoute };
