import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';

import { ShoppingListDetails } from '~shoppingLists/types/shoppingListDetails';
import { ListFields } from '~shoppingLists/components/shoppingList/listFields/listFields';
import { Button } from 'src/components/button/button';
import classes from './shoppingListView.module.scss';

function ShoppingListView({ shoppingList }: { shoppingList: ShoppingListDetails | null }) {
  const initFormData = useMemo(() => shoppingList || { items: [{}] }, [shoppingList]);
  const formCtrl = useForm<ShoppingListDetails>({ mode: 'onChange', defaultValues: initFormData });

  return (
    <FormProvider {...formCtrl}>
      <form className={classes.shoppingListView} onSubmit={formCtrl.handleSubmit((d) => console.log(d))}>
        <ListFields></ListFields>

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
