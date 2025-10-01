import { QueryProvider } from 'src/api/queryProvider';
import { SessionHandler } from '~bootstrap';
import { RouterProvider } from 'src/router/routerProvider';
import 'src/styles/global.scss';

function App() {
  return (
    <QueryProvider>
      <SessionHandler>
        <RouterProvider />
      </SessionHandler>
    </QueryProvider>
  );
}

export { App };
