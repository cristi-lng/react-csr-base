import { createFileRoute } from '@tanstack/react-router';

import { ProductsPage } from '~products';

const Route = createFileRoute('/products/')({
  staticData: {
    underSection: 'products',
  },
  component: ProductsPage,
});

export { Route };
