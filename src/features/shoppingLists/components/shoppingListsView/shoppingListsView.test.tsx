import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { LinkMock } from 'src/testing/linkMock';
import { ShoppingListsView } from '~shoppingLists/components/shoppingListsView/shoppingListsView';
import { ComponentWrapper } from 'src/testing/componentWrapper';
import { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import { shoppingListsApi } from '~shoppingLists/api/shoppingListsApi';

vi.mock('@tanstack/react-router', () => ({
  Link: LinkMock,
}));
vi.mock('~shoppingLists/api/shoppingListsApi', () => ({
  shoppingListsApi: {
    deleteShoppingList: vi.fn(),
  },
}));

describe('shopping lists view component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('a message when there are no shopping lists', async () => {
    render(<ShoppingListsView shoppingLists={[]} />, { wrapper: ComponentWrapper });

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
    render(<ShoppingListsView shoppingLists={lists} />, { wrapper: ComponentWrapper });

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
