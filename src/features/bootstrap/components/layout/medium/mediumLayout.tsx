import { useMemo } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Outlet, useMatches } from '@tanstack/react-router';

import { sectionsService } from '~bootstrap/services/sectionsService';
import { useAnimatedVisibility } from 'src/hooks/useAnimatedVisibility';
import { Navbar } from '~bootstrap/components/layout/navbar/navbar';
import { Toolbar } from '~bootstrap/components/layout/toolbar/toolbar';
import classes from './mediumLayout.module.scss';

function MediumLayout() {
  const {
    elementState: menuState,
    toggleElement: toggleMenu,
    afterElementAnimation: afterMenuAnimation,
  } = useAnimatedVisibility();

  const matchedRoutes = useMatches();
  const currentSection = useMemo(() => sectionsService.findCurrentSection(matchedRoutes), [matchedRoutes]);

  return (
    <div className={classes.mediumLayout}>
      <div className={classes.mediumLayout_body}>
        <div className={classes.mediumLayout_main}>
          <Outlet />
        </div>
        {menuState != 'hidden' && (
          <div
            className={classNames(classes.mediumLayout_menuPanel, classes[menuState])}
            onAnimationEnd={afterMenuAnimation}
          >
            <Navbar />
            <Toolbar />
          </div>
        )}
      </div>

      <div className={classes.mediumLayout_menuBar}>
        {currentSection && (
          <div className={classes.mediumLayout_currentSection}>
            <span className={currentSection.icon} />
            <FormattedMessage id={currentSection.label} />
          </div>
        )}
        <button className={classes.mediumLayout_menuToggle} type="button" onClick={toggleMenu}>
          <span className={menuState == 'hidden' ? 'icon-menu' : 'icon-close'} />
        </button>
      </div>
    </div>
  );
}

export { MediumLayout };
