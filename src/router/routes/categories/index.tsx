import { createFileRoute } from '@tanstack/react-router';

import { categoriesPageLoader, CategoriesPage } from '~categories';

const Route = createFileRoute('/categories/')({
  staticData: {
    underSection: 'categories',
  },
  loader: categoriesPageLoader,
  component: CategoriesPage,
});

export { Route };
