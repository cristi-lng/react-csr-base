import type { ShoppingListItem, ShoppingListStats } from '~shoppingLists/types/shoppingListDetails';

function computeShoppingListStats(items: ShoppingListItem[]) {
  return items.reduce<ShoppingListStats>(
    (stats, item) => {
      if (item.purchased) {
        stats.paidAmount += item.price;
        stats.paidItems++;
      } else {
        stats.remainingAmount += item.price;
        stats.remainingItems++;
      }
      stats.totalAmount += item.price;
      stats.totalItems++;
      return stats;
    },
    { remainingAmount: 0, remainingItems: 0, paidAmount: 0, paidItems: 0, totalAmount: 0, totalItems: 0 },
  );
}

export { computeShoppingListStats };
