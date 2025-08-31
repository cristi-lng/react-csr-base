import type { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * This is the place to configure tanstack query.
 * It exports the QueryProvider component to be included in the react tree and the queryClient to be used outside react
 */

// here you can configure the default options for the queryClient
const queryClient = new QueryClient();

function QueryProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export { QueryProvider, queryClient };
