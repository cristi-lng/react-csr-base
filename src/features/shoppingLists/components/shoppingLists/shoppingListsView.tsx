import { FormattedMessage } from 'react-intl';

import { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import { ListCard } from '~shoppingLists/components/shoppingLists/listCard/listCard';
import { LinkButton } from 'src/components/button/linkButton';
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
        <LinkButton to="/shoppingLists/$id" params={{ id: 'new' }}>
          <FormattedMessage id="addList" />
        </LinkButton>
      </div>
    </>
  );
}

export { ShoppingListsView };
