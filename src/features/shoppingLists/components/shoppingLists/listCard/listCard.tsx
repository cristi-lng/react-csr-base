import { Link } from '@tanstack/react-router';

import { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import { FormatDate } from 'src/formatters/date/formatDate';
import { ProgressBar } from 'src/components/progressBar/progressBar';
import { FormatAmount } from 'src/formatters/amount/formatAmount';
import { ListActions } from '~shoppingLists/components/shoppingLists/listCard/listActions';
import classes from './listCard.module.scss';

function ListCard({ list }: { list: ShoppingListOverview }) {
  return (
    <Link className={classes.listCard} to="/shoppingLists/$id" params={{ id: list.id }}>
      <div className={classes.listCard_info}>
        <div className={classes.listCard_name}>{list.name}</div>
        {list.dueDate && (
          <div className={classes.listCard_dueDate}>
            <FormatDate date={list.dueDate} />
          </div>
        )}
        {list.category && <div className={classes.listCard_category}>{list.category}</div>}
      </div>

      <div className={classes.listCard_stats}>
        <ProgressBar current={list.stats.totalItems - list.stats.remainingItems} max={list.stats.totalItems} />
        <div className={classes.listCard_remainingCost}>
          <FormatAmount amount={list.stats.remainingCost} />
        </div>
      </div>

      <ListActions />
    </Link>
  );
}

export { ListCard };
