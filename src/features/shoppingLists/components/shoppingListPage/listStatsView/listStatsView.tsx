import { useStore } from '@nanostores/react';
import { useFormContext } from 'react-hook-form';

import { $i18nMessages } from 'src/i18n/i18nMessages';
import type { ListFormData } from '~shoppingLists/components/shoppingListPage/listFormTypes';
import type { ShoppingListItem } from '~shoppingLists/types/shoppingListDetails';
import { computeShoppingListStats } from '~shoppingLists/services/shoppingListStatsService';
import { FormattedAmount } from 'src/formatters/amount/formattedAmount';
import { ProgressBar } from 'src/components/progressBar/progressBar';
import { Popup } from 'src/components/popup/popup';
import classes from './listStatsView.module.scss';

function ListStatsView() {
  const i18nMessages = useStore($i18nMessages);

  const { watch } = useFormContext<ListFormData>();
  // we are sure at this point that the two data types are compatible
  const items = watch('items') as ShoppingListItem[];
  const stats = computeShoppingListStats(items);

  return (
    <div className={classes.listStatsView}>
      <div className={classes.listStatsView_inlineAmount}>
        <FormattedAmount amount={stats.remainingAmount} />
      </div>

      <ProgressBar current={stats.paidItems} max={stats.totalItems} />

      <Popup position="bottomEnd" trigger={() => <span className={classes.listStatsView_detailsTrigger}>&#8942;</span>}>
        <div className={classes.listStatsView_detailsPanel}>
          <div>{i18nMessages.remainingAmount}</div>
          <div className={classes.listStatsView_highlightedAmount}>
            <FormattedAmount amount={stats.remainingAmount} />
          </div>
          <div>{i18nMessages.paidAmount}</div>
          <div>
            <FormattedAmount amount={stats.paidAmount} />
          </div>
          <div>{i18nMessages.totalAmount}</div>
          <div>
            <FormattedAmount amount={stats.totalAmount} />
          </div>
          <div>{i18nMessages.purchasedItems}</div>
          <div>
            {stats.paidItems}/{stats.totalItems}
          </div>
        </div>
      </Popup>
    </div>
  );
}

export { ListStatsView };
