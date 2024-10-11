import { Outlet } from '@tanstack/react-router';

import classes from './shell.module.scss';

function Shell() {
  return (
    <div className={classes.shell}>
      <Outlet />
    </div>
  );
}

export { Shell };
