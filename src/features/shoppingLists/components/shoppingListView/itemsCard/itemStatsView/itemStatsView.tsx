import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { ListFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { listFormService } from '~shoppingLists/components/shoppingListView/listFormService';
import { FormatAmount } from 'src/formatters/amount/formatAmount';
import { ProgressBar } from 'src/components/progressBar/progressBar';
import { Popup } from 'src/components/popup/popup';
import classes from './itemStatsView.module.scss';

function ItemStatsView() {
  const { watch } = useFormContext<ListFormData>();
  const items = watch('items');
  const itemStats = listFormService.computeItemStats(items!);

  return (
    <div className={classes.itemStatsView}>
      <div className={classes.itemStatsView_inlineAmount}>
        <FormatAmount amount={itemStats.remainingAmount} />
      </div>

      <ProgressBar current={itemStats.paidItems} max={itemStats.totalItems} />

      <Popup position="bottomEnd" trigger={() => <span className={classes.itemStatsView_detailsTrigger}>&#8942;</span>}>
        <div className={classes.itemStatsView_detailsPanel}>
          <div>
            <FormattedMessage id="remainingAmount" />
          </div>
          <div className={classes.itemStatsView_highlightedAmount}>
            <FormatAmount amount={itemStats.remainingAmount} />
          </div>
          <div>
            <FormattedMessage id="paidAmount" />
          </div>
          <div>
            <FormatAmount amount={itemStats.paidAmount} />
          </div>
          <div>
            <FormattedMessage id="totalAmount" />
          </div>
          <div>
            <FormatAmount amount={itemStats.totalAmount} />
          </div>
          <div>
            <FormattedMessage id="purchasedItems" />
          </div>
          <div>
            {itemStats.paidItems}/{itemStats.totalItems}
          </div>
        </div>
      </Popup>
    </div>
  );
}

export { ItemStatsView };
