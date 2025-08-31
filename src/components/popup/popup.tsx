import type { ReactNode } from 'react';
import classNames from 'classnames';

import { useAnimatedVisibility } from 'src/hooks/useAnimatedVisibility';
import { useOnClickOutside } from 'src/hooks/useOnClickOutside';
import classes from './popup.module.scss';

type PopupProps = {
  position: 'bottomStart' | 'bottomEnd';
  trigger: () => ReactNode;
  children: ReactNode;
};

function Popup({ position, trigger, children }: PopupProps) {
  const {
    elementState: popupState,
    toggleElement: togglePopup,
    hideElement: hidePopup,
    afterElementAnimation: afterPopupAnimation,
  } = useAnimatedVisibility();

  const popupRef = useOnClickOutside<HTMLDivElement>(hidePopup);

  return (
    <div ref={popupRef} className={classes.popup}>
      <button className={classes.popup_trigger} type="button" onClick={togglePopup}>
        {trigger()}
      </button>

      {popupState != 'hidden' && (
        <div
          className={classNames(classes.popup_panel, classes[position], classes[popupState])}
          onAnimationEnd={afterPopupAnimation}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export { Popup };
