import { FormattedMessage } from 'react-intl';

import { Dropdown } from 'src/components/dropdown/dropdown';
import classes from './listActions.module.scss';

function ListActions() {
  return (
    <Dropdown
      mode="over"
      position="bottomEnd"
      trigger={() => <span className={classes.listActions_trigger}>&#8942;</span>}
      options={() => [
        <div className={classes.listActions_action}>
          <FormattedMessage id="delete" />
        </div>,
      ]}
    />
  );
}

export { ListActions };
