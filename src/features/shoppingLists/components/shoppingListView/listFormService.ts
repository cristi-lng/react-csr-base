import { ShoppingListDetails } from '~shoppingLists/types/shoppingListDetails';
import { ListFormData, ItemFormData, ItemStats } from '~shoppingLists/components/shoppingListView/listFormData';

class ListFormService {
  computeInitData(shoppingList: ShoppingListDetails | null): ListFormData {
    if (shoppingList) {
      const { name, dueDate, category, items } = shoppingList;
      return { name, dueDate, category, items };
    } else {
      return { name: null, dueDate: null, category: null, items: [] };
    }
  }

  computeItemStats(items: ItemFormData[]) {
    return items.reduce<ItemStats>((stats, item) => {
      if (item.purchased) {
        stats.paidAmount += item.price!;
        stats.paidItems++;
      } else {
        stats.remainingAmount += item.price!;
        stats.remainingItems++;
      }
      stats.totalAmount += item.price!;
      stats.totalItems++;
      return stats;
    }, new ItemStats());
  }
}

export const listFormService = new ListFormService();
