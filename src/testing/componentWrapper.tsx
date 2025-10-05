import type { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * Create the minimum wrapper needed to test a component
 */
function createComponentWrapper() {
  const queryClient = new QueryClient();

  function ComponentWrapper({ children }: PropsWithChildren) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  }

  return ComponentWrapper;
}

export { createComponentWrapper };
