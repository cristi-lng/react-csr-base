import type { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';

import { specialKeys } from 'src/stores/queryKeys/specialKeys';
import { sessionService } from '~bootstrap/services/sessionService';
import { ErrorBoundary } from 'src/components/errorBoundary/errorBoundary';
import classes from './sessionHandler.module.scss';

/**
 * Here we handle the application session
 * - it is the topmost component that is business specific
 * - we placed it so high because we want to block the rendering until we receive and compute the session info
 * - it is important for this app to know who the user is before rendering the rest of the components
 */
function SessionHandler({ children }: { children: ReactNode }) {
  const { isPending, error } = useQuery({
    queryKey: specialKeys.sessionInfo,
    queryFn: () => sessionService.loadSession(),
  });

  return isPending ? null : (
    <div className={classes.sessionHandler}>{error ? <ErrorBoundary error={error} /> : children}</div>
  );
}

export { SessionHandler };
