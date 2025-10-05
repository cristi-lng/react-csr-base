import { describe, expect, it } from 'vitest';

import { computeShoppingListStats } from '~shoppingLists/services/shoppingListStatsService';

describe('shopping list stats service', () => {
  it('stats when there are no items', () => {
    const itemsStats = computeShoppingListStats([]);

    expect(itemsStats.remainingAmount).toEqual(0);
    expect(itemsStats.remainingItems).toEqual(0);
    expect(itemsStats.paidAmount).toEqual(0);
    expect(itemsStats.paidItems).toEqual(0);
    expect(itemsStats.totalAmount).toEqual(0);
    expect(itemsStats.totalItems).toEqual(0);
  });

  it('stats when there are purchased and un-purchased items', () => {
    const itemsStats = computeShoppingListStats([
      { name: 'item1', quantity: '1 piece', price: 10, purchased: true },
      { name: 'item2', quantity: '1 piece', price: 5, purchased: true },
      { name: 'item3', quantity: '1 piece', price: 1, purchased: false },
      { name: 'item4', quantity: '1 piece', price: 20, purchased: true },
      { name: 'item5', quantity: '1 piece', price: 15, purchased: false },
      { name: 'item6', quantity: '1 piece', price: 7, purchased: true },
    ]);

    expect(itemsStats.remainingAmount).toEqual(16);
    expect(itemsStats.remainingItems).toEqual(2);
    expect(itemsStats.paidAmount).toEqual(42);
    expect(itemsStats.paidItems).toEqual(4);
    expect(itemsStats.totalAmount).toEqual(58);
    expect(itemsStats.totalItems).toEqual(6);
  });
});
