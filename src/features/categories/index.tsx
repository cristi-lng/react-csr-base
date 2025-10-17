import { DisplayError } from 'src/types/displayError';

function categoriesPageLoader() {
  throw new DisplayError({ title: 'specificErrorTitle', details: 'specificErrorDetails' });
}

function CategoriesPage() {
  return <>Not yet implemented</>;
}

export { categoriesPageLoader, CategoriesPage };
