import { FormattedMessage } from 'react-intl';

import { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import { ListCard } from '~shoppingLists/components/shoppingListsView/listCard/listCard';
import { Button } from 'src/components/button/button';
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
      <div className={classes.shoppingListsView_addContainer}>
        <Button as="link" variant="primary" to="/shoppingLists/$id" params={{ id: 'new' }}>
          <FormattedMessage id="addList" />
        </Button>
      </div>
    </>
  );
}

export { ShoppingListsView };
