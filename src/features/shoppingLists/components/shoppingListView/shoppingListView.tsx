import { FormProvider } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { ShoppingListDetails } from '~shoppingLists/types/shoppingListDetails';
import { useShoppingListView } from '~shoppingLists/components/shoppingListView/useShoppingListView';
import { ListFields } from '~shoppingLists/components/shoppingListView/listFields/listFields';
import { ItemsCard } from '~shoppingLists/components/shoppingListView/itemsCard/itemsCard';
import { Button } from 'src/components/button/button';
import classes from './shoppingListView.module.scss';

function ShoppingListView({ shoppingList }: { shoppingList: ShoppingListDetails | null }) {
  const { formCtrl, handleSaveList } = useShoppingListView({ shoppingList });
  const { handleSubmit } = formCtrl;

  return (
    <FormProvider {...formCtrl}>
      <form className={classes.shoppingListView} onSubmit={handleSubmit((formData) => handleSaveList(formData))}>
        <ListFields />
        <ItemsCard />

        <div className={classes.shoppingListView_buttons}>
          <Button variant="primary" type="submit">
            <FormattedMessage id="save" />
          </Button>
          <Button as="link" variant="neutral" to="/">
            <FormattedMessage id="cancel" />
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export { ShoppingListView };
