import { useMemo } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Link, useMatches } from '@tanstack/react-router';

import { sectionsService } from '~bootstrap/services/sectionsService';
import logo from 'src/assets/images/shoppy-logo.svg';
import classes from './navbar.module.scss';

function Navbar({ hideMenu }: { hideMenu?: () => void }) {
  const sections = sectionsService.getSections();

  const matchedRoutes = useMatches();
  const currentSection = useMemo(() => sectionsService.findCurrentSection(matchedRoutes), [matchedRoutes]);

  return (
    <div className={classes.navbar}>
      <Link className={classes.navbar_home} to="/">
        <img className={classes.navbar_logo} src={logo} />
        <span className={classNames(classes.navbar_brand, 'icon-brand')} />
      </Link>

      <ul>
        {sections.map((section) => (
          <li key={section.name}>
            <Link
              className={classNames(classes.navbar_link, { [classes.active]: section.name == currentSection?.name })}
              to={section.path}
              onClick={() => hideMenu?.()}
            >
              <span className={section.icon} />
              <FormattedMessage id={section.label} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Navbar };
