import { useStore } from '@nanostores/react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { $i18nMessages } from 'src/i18n/i18nMessages';
import { getShoppingListsOptions } from '~shoppingLists/api/shoppingListsQueries';
import { PageHeader } from 'src/components/pageHeader/pageHeader';
import { ListCard } from '~shoppingLists/components/shoppingListsPage/listCard/listCard';
import { Button } from 'src/components/button/button';
import classes from './shoppingListsPage.module.scss';

function ShoppingListsPage() {
  const i18nMessages = useStore($i18nMessages);
  const { data: shoppingLists } = useSuspenseQuery(getShoppingListsOptions());

  return (
    <>
      <PageHeader title="shoppingLists" />

      {shoppingLists.length == 0 ? (
        i18nMessages.noShoppingList
      ) : (
        <div className={classes.shoppingListsPage_lists}>
          {shoppingLists.map((list) => (
            <ListCard key={list.id} list={list} />
          ))}
        </div>
      )}

      <div className={classes.shoppingListsPage_addContainer}>
        <Button as="link" variant="primary" to="/shoppingLists/$id" params={{ id: 'new' }}>
          {i18nMessages.addList}
        </Button>
      </div>
    </>
  );
}

export { ShoppingListsPage };
