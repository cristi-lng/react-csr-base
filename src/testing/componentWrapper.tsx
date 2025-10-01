import type { PropsWithChildren } from 'react';

import { QueryProvider } from 'src/api/queryProvider';

/**
 * The minimum wrapper needed to test a component
 */
function ComponentWrapper({ children }: PropsWithChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}

export { ComponentWrapper };
