import { useStore } from '@nanostores/react';

import type { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import { $i18nMessages } from 'src/i18n/i18nMessages';
import { ListCard } from '~shoppingLists/components/shoppingListsView/listCard/listCard';
import { Button } from 'src/components/button/button';
import classes from './shoppingListsView.module.scss';

function ShoppingListsView({ shoppingLists }: { shoppingLists: ShoppingListOverview[] }) {
  const i18nMessages = useStore($i18nMessages);

  return (
    <>
      {shoppingLists.length == 0 ? (
        i18nMessages.noShoppingList
      ) : (
        <div className={classes.shoppingListsView_lists}>
          {shoppingLists.map((list) => (
            <ListCard key={list.id} list={list} />
          ))}
        </div>
      )}
      <div className={classes.shoppingListsView_addContainer}>
        <Button as="link" variant="primary" to="/shoppingLists/$id" params={{ id: 'new' }}>
          {i18nMessages.addList}
        </Button>
      </div>
    </>
  );
}

export { ShoppingListsView };
