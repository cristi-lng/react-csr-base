import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import type { ListFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { listFormService } from '~shoppingLists/components/shoppingListView/listFormService';
import { FormatAmount } from 'src/formatters/amount/formatAmount';
import { ProgressBar } from 'src/components/progressBar/progressBar';
import { Popup } from 'src/components/popup/popup';
import classes from './itemsStatsView.module.scss';

function ItemsStatsView() {
  const { watch } = useFormContext<ListFormData>();
  const items = watch('items');
  const itemsStats = listFormService.computeItemsStats(items!);

  return (
    <div className={classes.itemsStatsView}>
      <div className={classes.itemsStatsView_inlineAmount}>
        <FormatAmount amount={itemsStats.remainingAmount} />
      </div>

      <ProgressBar current={itemsStats.paidItems} max={itemsStats.totalItems} />

      <Popup
        position="bottomEnd"
        trigger={() => <span className={classes.itemsStatsView_detailsTrigger}>&#8942;</span>}
      >
        <div className={classes.itemsStatsView_detailsPanel}>
          <div>
            <FormattedMessage id="remainingAmount" />
          </div>
          <div className={classes.itemsStatsView_highlightedAmount}>
            <FormatAmount amount={itemsStats.remainingAmount} />
          </div>
          <div>
            <FormattedMessage id="paidAmount" />
          </div>
          <div>
            <FormatAmount amount={itemsStats.paidAmount} />
          </div>
          <div>
            <FormattedMessage id="totalAmount" />
          </div>
          <div>
            <FormatAmount amount={itemsStats.totalAmount} />
          </div>
          <div>
            <FormattedMessage id="purchasedItems" />
          </div>
          <div>
            {itemsStats.paidItems}/{itemsStats.totalItems}
          </div>
        </div>
      </Popup>
    </div>
  );
}

export { ItemsStatsView };
