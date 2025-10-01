import { useMemo } from 'react';
import classNames from 'classnames';
import { useStore } from '@nanostores/react';
import { Link, useMatches } from '@tanstack/react-router';

import { $i18nMessages } from 'src/i18n/i18nMessages';
import { sectionsService } from '~bootstrap/services/sectionsService';
import logo from 'src/assets/images/shoppy-logo.svg';
import classes from './navbar.module.scss';

function Navbar({ hideMenu }: { hideMenu?: () => void }) {
  const i18nMessages = useStore($i18nMessages);
  const matchedRoutes = useMatches();

  const sections = sectionsService.getSections();
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
              {...section.link}
              className={classNames(classes.navbar_link, { [classes.active]: section.name == currentSection?.name })}
              onClick={() => hideMenu?.()}
            >
              <span className={section.icon} />
              {i18nMessages[section.label]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Navbar };
