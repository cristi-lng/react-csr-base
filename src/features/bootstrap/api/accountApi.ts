import { Account } from 'src/types/account';
import { axios } from 'src/api/axiosProvider';

class AccountApi {
  async getAccount() {
    const { data } = await axios.get<Account>('/account');
    return data;
  }

  async patchAccount(payload: Pick<Account, 'locale'>) {
    const { data } = await axios.patch<Account>('/account', payload);
    return data;
  }
}

export const accountApi = new AccountApi();
