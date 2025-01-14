import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { LinkMock } from 'src/testing/linkMock';
import { ShoppingListDetails, ShoppingListItem } from '~shoppingLists/types/shoppingListDetails';
import { ShoppingListView } from '~shoppingLists/components/shoppingListView/shoppingListView';
import { ComponentWrapper } from 'src/testing/componentWrapper';
import { shoppingListsApi } from '~shoppingLists/api/shoppingListsApi';

vi.mock('@tanstack/react-router', () => ({
  Link: LinkMock,
  useNavigate: vi.fn(),
}));
vi.mock('~shoppingLists/api/shoppingListsApi', () => ({
  shoppingListsApi: {
    createShoppingList: vi.fn(),
    updateShoppingList: vi.fn(),
  },
}));

type ListOnlyFields = Pick<ShoppingListDetails, 'name' | 'dueDate' | 'category'>;

async function addItem(item: ShoppingListItem) {
  const allCheckboxes = screen.getAllByRole('checkbox');
  const allNameInputs = screen.getAllByPlaceholderText(/name/i);
  const itemCheckbox = allCheckboxes[allCheckboxes.length - 1];
  const itemNameInput = allNameInputs[allNameInputs.length - 1];
  const itemQuantityInput = screen.getByPlaceholderText(/quantity/i);
  const itemPriceInput = screen.getByPlaceholderText(/price/i);

  if (item.purchased) {
    await userEvent.click(itemCheckbox);
  }
  await userEvent.type(itemNameInput, item.name);
  await userEvent.type(itemQuantityInput, item.quantity);
  await userEvent.type(itemPriceInput, item.price.toString());

  await userEvent.click(screen.getByRole('button', { name: '+' }));
}

describe('shopping list view component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('create a new shopping list without items', async () => {
    const listFields: ListOnlyFields = { name: 'List1', dueDate: '2025-01-01', category: 'Cat1' };
    render(<ShoppingListView shoppingList={null} />, { wrapper: ComponentWrapper });

    const listNameInput = screen.getAllByPlaceholderText(/name/i)[0];
    const listDueDateInput = screen.getByPlaceholderText(/due date/i);
    const listCategoryInput = screen.getByPlaceholderText(/category/i);

    await userEvent.type(listNameInput, listFields.name);
    await userEvent.type(listDueDateInput, listFields.dueDate!);
    await userEvent.type(listCategoryInput, listFields.category!);

    screen.getByText(/there are no items in this shopping list/i);

    await userEvent.click(screen.getByRole('button', { name: /save/i }));
    expect(shoppingListsApi.createShoppingList).toHaveBeenCalledTimes(1);
    expect(shoppingListsApi.createShoppingList).toHaveBeenCalledWith({ ...listFields, items: [] });
  });

  it('create a new shopping list with items', async () => {
    const listFields: ListOnlyFields = { name: 'List1', dueDate: null, category: null };
    const item: ShoppingListItem = { name: 'Item1', quantity: '1', price: 111, purchased: true };
    render(<ShoppingListView shoppingList={null} />, { wrapper: ComponentWrapper });

    const listNameInput = screen.getAllByPlaceholderText(/name/i)[0];
    await userEvent.type(listNameInput, listFields.name);

    await addItem(item);

    await userEvent.click(screen.getByRole('button', { name: /save/i }));
    expect(shoppingListsApi.createShoppingList).toHaveBeenCalledTimes(1);
    expect(shoppingListsApi.createShoppingList).toHaveBeenCalledWith({ ...listFields, items: [item] });
  });

  it('update a shopping list and add an item', async () => {
    const listFields: ListOnlyFields = { name: 'List1', dueDate: null, category: null };
    const item1: ShoppingListItem = { name: 'Item1', quantity: '1', price: 111, purchased: true };
    const item2: ShoppingListItem = { name: 'Item2', quantity: '1', price: 222, purchased: false };
    render(<ShoppingListView shoppingList={{ id: '1', ...listFields, items: [item1] }} />, {
      wrapper: ComponentWrapper,
    });

    await addItem(item2);
    screen.getByText(/item1/i);
    screen.getByText(/item2/i);

    await userEvent.click(screen.getByRole('button', { name: '⋮' }));
    screen.getAllByText(/222/);
    screen.getAllByText(/111/);
    screen.getAllByText(/333/);
    screen.getAllByText(/1\/2/);

    await userEvent.click(screen.getByRole('button', { name: /save/i }));
    expect(shoppingListsApi.updateShoppingList).toHaveBeenCalledTimes(1);
    expect(shoppingListsApi.updateShoppingList).toHaveBeenCalledWith('1', { ...listFields, items: [item1, item2] });
  });

  it('update a shopping list and remove an item', async () => {
    const listFields: ListOnlyFields = { name: 'List1', dueDate: null, category: null };
    const item: ShoppingListItem = { name: 'Item1', quantity: '1', price: 111, purchased: true };
    render(<ShoppingListView shoppingList={{ id: '1', ...listFields, items: [item] }} />, {
      wrapper: ComponentWrapper,
    });

    await userEvent.click(screen.getByRole('button', { name: /delete item/i }));
    screen.getByText(/there are no items in this shopping list/i);

    await userEvent.click(screen.getByRole('button', { name: /save/i }));
    expect(shoppingListsApi.updateShoppingList).toHaveBeenCalledTimes(1);
    expect(shoppingListsApi.updateShoppingList).toHaveBeenCalledWith('1', { ...listFields, items: [] });
  });
});
