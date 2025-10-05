import { FormProvider } from 'react-hook-form';

import { useShoppingListPage } from '~shoppingLists/components/shoppingListPage/useShoppingListPage';
import { PageHeader } from 'src/components/pageHeader/pageHeader';
import { ListFields } from '~shoppingLists/components/shoppingListPage/listFields/listFields';
import { ItemsCard } from '~shoppingLists/components/shoppingListPage/itemsCard/itemsCard';
import { Button } from 'src/components/button/button';
import classes from './shoppingListPage.module.scss';

function ShoppingListPage() {
  const { i18nMessages, formCtrl, handleSaveList } = useShoppingListPage();
  const { handleSubmit } = formCtrl;

  return (
    <>
      <PageHeader title="listDetails" back={{ to: '/' }} />

      <FormProvider {...formCtrl}>
        <form className={classes.shoppingListPage} onSubmit={handleSubmit((formData) => handleSaveList(formData))}>
          <ListFields />
          <ItemsCard />

          <div className={classes.shoppingListPage_buttons}>
            <Button variant="primary" type="submit">
              {i18nMessages.save}
            </Button>
            <Button as="link" variant="neutral" to="/">
              {i18nMessages.cancel}
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export { ShoppingListPage };
