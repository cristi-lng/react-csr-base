import { QueryProvider } from 'src/api/queryProvider';
import { I18nProvider } from 'src/i18n/i18nProvider';
import { RouterProvider } from 'src/router/routerProvider';

function App() {
  return (
    <QueryProvider>
      <I18nProvider>
        <RouterProvider />
      </I18nProvider>
    </QueryProvider>
  );
}

export { App };
