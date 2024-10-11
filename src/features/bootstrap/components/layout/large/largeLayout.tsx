import { Outlet } from '@tanstack/react-router';

import { Navbar } from '~bootstrap/components/layout/navbar/navbar';
import { Toolbar } from '~bootstrap/components/layout/toolbar/toolbar';
import classes from './largeLayout.module.scss';

function LargeLayout() {
  return (
    <div className={classes.largeLayout}>
      <div className={classes.largeLayout_navbarPanel}>
        <Navbar />
      </div>

      <div className={classes.largeLayout_body}>
        <div className={classes.largeLayout_toolbarPanel}>
          <Toolbar />
        </div>
        <div className={classes.largeLayout_main}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { LargeLayout };
