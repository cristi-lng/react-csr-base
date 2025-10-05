import { useStore } from '@nanostores/react';
import { useFieldArray } from 'react-hook-form';

import { $i18nMessages } from 'src/i18n/i18nMessages';
import type { ListFormData } from '~shoppingLists/components/shoppingListPage/listFormTypes';
import { ListStatsView } from '~shoppingLists/components/shoppingListPage/listStatsView/listStatsView';
import { ItemView } from '~shoppingLists/components/shoppingListPage/itemView/itemView';
import { AddItemForm } from '~shoppingLists/components/shoppingListPage/addItemForm/addItemForm';
import classes from './itemsCard.module.scss';

function ItemsCard() {
  const i18nMessages = useStore($i18nMessages);
  const { fields: itemsDefaults, remove: deleteItem, append: addItem } = useFieldArray<ListFormData>({ name: 'items' });

  return (
    <div className={classes.itemsCard}>
      <div className={classes.itemsCard_header}>
        {i18nMessages.items}
        <ListStatsView />
      </div>

      <div className={classes.itemsCard_items}>
        {itemsDefaults.length == 0
          ? i18nMessages.noListItems
          : itemsDefaults.map((itemDefaults, itemIndex) => (
              <ItemView key={itemDefaults.id} itemIndex={itemIndex} deleteItem={deleteItem} />
            ))}
      </div>

      <div className={classes.itemsCard_addContainer}>
        <AddItemForm addItem={addItem} />
      </div>
    </div>
  );
}

export { ItemsCard };
