import { ShoppingListItem } from '~shoppingLists/types/shoppingListItem';

type ShoppingListDetails = {
  readonly id: string;
  name: string;
  dueDate?: string;
  category?: string;
  items: ShoppingListItem[];
};

export { type ShoppingListDetails };
