import { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import { ShoppingListDetails } from '~shoppingLists/types/shoppingListDetails';
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
}

export const shoppingListsApi = new ShoppingListsApi();
