import { httpClient } from 'src/api/httpClientProvider';
import type { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import type { ShoppingListDetails } from '~shoppingLists/types/shoppingListDetails';

async function getShoppingLists() {
  const { data } = await httpClient.get<ShoppingListOverview[]>('/shoppingLists/overview');
  return data;
}

async function getShoppingList(id: string) {
  const { data } = await httpClient.get<ShoppingListDetails>(`/shoppingLists/${id}`);
  return data;
}

function createShoppingList(payload: Omit<ShoppingListDetails, 'id'>) {
  return httpClient.post('/shoppingLists', payload);
}

function updateShoppingList(id: string, payload: Omit<ShoppingListDetails, 'id'>) {
  return httpClient.put(`/shoppingLists/${id}`, payload);
}

function deleteShoppingList(id: string) {
  return httpClient.delete(`/shoppingLists/${id}`);
}

export { getShoppingLists, getShoppingList, createShoppingList, updateShoppingList, deleteShoppingList };
