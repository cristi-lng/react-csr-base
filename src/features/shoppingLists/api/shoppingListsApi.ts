import type { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import type { ShoppingListDetails } from '~shoppingLists/types/shoppingListDetails';
import { axios } from 'src/api/axiosProvider';

class ShoppingListsApi {
  async getShoppingLists() {
    const { data } = await axios.get<ShoppingListOverview[]>('/shoppingLists/overview');
    return data;
  }

  async getShoppingList(id: string) {
    const { data } = await axios.get<ShoppingListDetails>(`/shoppingLists/${id}`);
    return data;
  }

  createShoppingList(payload: Omit<ShoppingListDetails, 'id'>) {
    return axios.post('/shoppingLists', payload);
  }

  updateShoppingList(id: string, payload: Omit<ShoppingListDetails, 'id'>) {
    return axios.put(`/shoppingLists/${id}`, payload);
  }

  deleteShoppingList(id: string) {
    return axios.delete(`/shoppingLists/${id}`);
  }
}

export const shoppingListsApi = new ShoppingListsApi();
