import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { render } from '@testing-library/react';

import { routeTree } from 'src/router/routeTree.gen';
import { SessionHandler } from '~bootstrap';

/**
 * Render the app in a complete test environment with a query client, routing, and session,
 * so pages can be tested the same way they run in production
 */

vi.mock('~bootstrap/api/accountApi', () => ({
  getAccount: () => ({ name: 'Test', role: 'ADMIN', locale: 'en-US', currency: 'USD' }),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

function renderTestApp({ initialLocation }: { initialLocation: string }) {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    defaultPendingMs: 0,
    defaultPreloadStaleTime: 0,
    history: createMemoryHistory({ initialEntries: [initialLocation] }),
  });

  render(
    <QueryClientProvider client={queryClient}>
      <SessionHandler>
        <RouterProvider router={router} />
      </SessionHandler>
    </QueryClientProvider>,
  );
}

export { renderTestApp };
