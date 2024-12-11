import { ShoppingListOverview } from '~shoppingLists/types/shoppingListOverview';
import { axios } from 'src/api/axiosProvider';

class ShoppingListsApi {
  async getShoppingLists() {
    const { data } = await axios.get<ShoppingListOverview[]>('/shoppingLists/overview');
    return data;
  }
}

export const shoppingListsApi = new ShoppingListsApi();
