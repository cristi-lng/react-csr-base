import { httpClient } from 'src/api/httpClientProvider';
import type { Account } from 'src/types/account';

class AccountApi {
  async getAccount() {
    const { data } = await httpClient.get<Account>('/account');
    return data;
  }

  async patchAccount(payload: Pick<Account, 'locale'>) {
    const { data } = await httpClient.patch<Account>('/account', payload);
    return data;
  }
}

export const accountApi = new AccountApi();
