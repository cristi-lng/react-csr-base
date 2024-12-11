import { FormattedMessage } from 'react-intl';

import { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import { ListCard } from '~shoppingLists/components/shoppingLists/listCard/listCard';
import classes from './shoppingListsView.module.scss';

function ShoppingListsView({ shoppingLists }: { shoppingLists: ShoppingListOverview[] }) {
  return (
    <>
      {shoppingLists.length == 0 ? (
        <FormattedMessage id="noShoppingList" />
      ) : (
        <div className={classes.shoppingListsView_lists}>
          {shoppingLists.map((list) => (
            <ListCard key={list.id} list={list} />
          ))}
        </div>
      )}
    </>
  );
}

export { ShoppingListsView };
