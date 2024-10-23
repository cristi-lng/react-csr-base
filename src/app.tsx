import { QueryProvider } from 'src/api/queryProvider';
import { I18nProvider } from 'src/i18n/i18nProvider';
import { SessionHandler } from '~bootstrap';
import { RouterProvider } from 'src/router/routerProvider';
import 'src/styles/global.scss';

function App() {
  return (
    <QueryProvider>
      <I18nProvider>
        <SessionHandler>
          <RouterProvider />
        </SessionHandler>
      </I18nProvider>
    </QueryProvider>
  );
}

export { App };
