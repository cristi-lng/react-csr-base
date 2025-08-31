import type { PropsWithChildren } from 'react';

import { QueryProvider } from 'src/api/queryProvider';
import { I18nProvider } from 'src/i18n/i18nProvider';

/**
 * The minimum wrapper needed to test a component
 */
function ComponentWrapper({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <I18nProvider>{children}</I18nProvider>
    </QueryProvider>
  );
}

export { ComponentWrapper };
