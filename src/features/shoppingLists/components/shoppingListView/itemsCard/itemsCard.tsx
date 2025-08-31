import { useFieldArray } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import type { ListFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { ItemsStatsView } from '~shoppingLists/components/shoppingListView/itemsCard/itemsStatsView/itemsStatsView';
import { ItemView } from '~shoppingLists/components/shoppingListView/itemsCard/itemView/itemView';
import { AddItemForm } from '~shoppingLists/components/shoppingListView/itemsCard/addItemForm/addItemForm';
import classes from './itemsCard.module.scss';

function ItemsCard() {
  const { fields: itemsDefaults, remove: deleteItem, append: addItem } = useFieldArray<ListFormData>({ name: 'items' });

  return (
    <div className={classes.itemsCard}>
      <div className={classes.itemsCard_header}>
        <FormattedMessage id="items" />
        <ItemsStatsView />
      </div>

      <div className={classes.itemsCard_items}>
        {itemsDefaults.length == 0 ? (
          <FormattedMessage id="noListItems" />
        ) : (
          itemsDefaults.map((itemDefaults, itemIndex) => (
            <ItemView key={itemDefaults.id} itemIndex={itemIndex} deleteItem={deleteItem} />
          ))
        )}
      </div>

      <div className={classes.itemsCard_addContainer}>
        <AddItemForm addItem={addItem} />
      </div>
    </div>
  );
}

export { ItemsCard };
