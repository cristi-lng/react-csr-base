import { describe, expect, it } from 'vitest';

import { listFormService } from '~shoppingLists/components/shoppingListView/listFormService';

describe('shopping list form service', () => {
  it('items stats when there are no items', () => {
    const itemsStats = listFormService.computeItemsStats([]);

    expect(itemsStats.remainingAmount).toEqual(0);
    expect(itemsStats.paidAmount).toEqual(0);
    expect(itemsStats.totalAmount).toEqual(0);
    expect(itemsStats.remainingItems).toEqual(0);
    expect(itemsStats.paidItems).toEqual(0);
    expect(itemsStats.totalItems).toEqual(0);
  });

  it('items stats when there are purchased and un-purchased items', () => {
    const itemsStats = listFormService.computeItemsStats([
      { name: 'item1', quantity: '1 piece', price: 10, purchased: true },
      { name: 'item2', quantity: '1 piece', price: 5, purchased: true },
      { name: 'item3', quantity: '1 piece', price: 1, purchased: false },
      { name: 'item4', quantity: '1 piece', price: 20, purchased: true },
      { name: 'item5', quantity: '1 piece', price: 15, purchased: false },
      { name: 'item6', quantity: '1 piece', price: 7, purchased: true },
    ]);

    expect(itemsStats.remainingAmount).toEqual(16);
    expect(itemsStats.paidAmount).toEqual(42);
    expect(itemsStats.totalAmount).toEqual(58);
    expect(itemsStats.remainingItems).toEqual(2);
    expect(itemsStats.paidItems).toEqual(4);
    expect(itemsStats.totalItems).toEqual(6);
  });
});
