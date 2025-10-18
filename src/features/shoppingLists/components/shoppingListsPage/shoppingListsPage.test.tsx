import { screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import * as shoppingListsApi from '~shoppingLists/api/shoppingListsApi';
import { renderTestApp } from 'src/testing/renderTestApp';
import type { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';

vi.mock('~shoppingLists/api/shoppingListsApi');

describe('shopping lists page component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('a message when there are no shopping lists', async () => {
    vi.mocked(shoppingListsApi).getShoppingLists.mockResolvedValue([]);
    renderTestApp({ initialLocation: '/' });

    await screen.findByRole('heading', { name: /shopping lists/i });

    screen.getByText(/you don't have any shopping list/i);

    const addListLink = screen.getByRole('link');
    expect(addListLink).toHaveTextContent(/add list/i);
    expect(addListLink).toHaveAttribute('href', '/shoppingLists/new');
  });

  it('a link for every shopping list', async () => {
    const lists: ShoppingListOverview[] = [
      { id: '1', name: 'List1', stats: { remainingAmount: 111, remainingItems: 3, totalItems: 5 } },
      { id: '2', name: 'List2', stats: { remainingAmount: 0, remainingItems: 0, totalItems: 6 } },
    ];
    vi.mocked(shoppingListsApi).getShoppingLists.mockResolvedValue(lists);
    renderTestApp({ initialLocation: '/' });

    await screen.findByRole('heading', { name: /shopping lists/i });

    for (const [index, list] of lists.entries()) {
      const listLink = screen.getByRole('link', { name: new RegExp(list.name) });
      expect(listLink).toHaveAttribute('href', `/shoppingLists/${list.id}`);
      expect(listLink).toHaveTextContent(new RegExp(list.stats.remainingAmount.toString()));

      await userEvent.click(within(listLink).getByRole('button'));
      await userEvent.click(within(listLink).getByText(/delete/i));
      expect(shoppingListsApi.deleteShoppingList).toHaveBeenCalledTimes(index + 1);
    }
  });
});
