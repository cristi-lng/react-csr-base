import { useMutation } from '@tanstack/react-query';
import { FormattedMessage } from 'react-intl';

import { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import { shoppingListsApi } from '~shoppingLists/api/shoppingListsApi';
import { queryClient } from 'src/api/queryProvider';
import { shoppingListsKeys } from 'src/stores/queryKeys/shoppingListsKeys';
import { Dropdown } from 'src/components/dropdown/dropdown';
import classes from './listActions.module.scss';

function ListActions({ list }: { list: ShoppingListOverview }) {
  const { mutate: handleDeleteList } = useMutation({
    mutationFn: () => shoppingListsApi.deleteShoppingList(list.id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: shoppingListsKeys.all }),
  });

  return (
    <Dropdown
      mode="over"
      position="bottomEnd"
      trigger={() => <span className={classes.listActions_trigger}>&#8942;</span>}
      options={() => [
        <div className={classes.listActions_action} onClick={() => handleDeleteList()}>
          <FormattedMessage id="delete" />
        </div>,
      ]}
    />
  );
}

export { ListActions };
