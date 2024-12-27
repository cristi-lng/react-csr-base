import { ReactNode } from 'react';
import classNames from 'classnames';

import { useAnimatedVisibility } from 'src/hooks/useAnimatedVisibility';
import { useOnClickOutside } from 'src/hooks/useOnClickOutside';
import classes from './dropdown.module.scss';

type DropdownProps = {
  mode: 'inline' | 'over';
  position: 'bottom' | 'bottomStart' | 'bottomEnd';
  trigger: ({ isOpen }: { isOpen: boolean }) => ReactNode;
  options: () => ReactNode[];
};

function Dropdown({ mode, position, trigger, options }: DropdownProps) {
  const {
    elementState: dropdownState,
    toggleElement: toggleDropdown,
    hideElement: hideDropdown,
    afterElementAnimation: afterDropdownAnimation,
  } = useAnimatedVisibility();

  const dropdownRef = useOnClickOutside<HTMLDivElement>(hideDropdown);

  return (
    <div ref={dropdownRef} className={classNames(classes.dropdown, classes[position])}>
      <button className={classes.dropdown_trigger} type="button" onClick={toggleDropdown}>
        {trigger({ isOpen: dropdownState != 'hidden' })}
      </button>

      {dropdownState != 'hidden' && (
        <ul className={classNames(classes[mode], classes[dropdownState])} onAnimationEnd={afterDropdownAnimation}>
          {options().map((option, index) => (
            <li key={index}>
              <button className={classes.dropdown_option} onClick={hideDropdown}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { Dropdown };
