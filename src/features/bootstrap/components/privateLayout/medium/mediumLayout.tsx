import { useMemo } from 'react';
import classNames from 'classnames';
import { useStore } from '@nanostores/react';
import { Outlet, useMatches } from '@tanstack/react-router';

import { $i18nMessages } from 'src/i18n/i18nMessages';
import { useAnimatedVisibility } from 'src/hooks/useAnimatedVisibility';
import { sectionsService } from '~bootstrap/services/sectionsService';
import { Navbar } from '~bootstrap/components/privateLayout/navbar/navbar';
import { Toolbar } from '~bootstrap/components/privateLayout/toolbar/toolbar';
import classes from './mediumLayout.module.scss';

function MediumLayout() {
  const i18nMessages = useStore($i18nMessages);
  const matchedRoutes = useMatches();
  const {
    elementState: menuState,
    toggleElement: toggleMenu,
    hideElement: hideMenu,
    afterElementAnimation: afterMenuAnimation,
  } = useAnimatedVisibility();

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
            <Navbar hideMenu={hideMenu} />
            <Toolbar />
          </div>
        )}
      </div>

      <div className={classes.mediumLayout_menuBar}>
        {currentSection && (
          <div className={classes.mediumLayout_currentSection}>
            <span className={currentSection.icon} />
            {i18nMessages[currentSection.label]}
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
