import { httpClient } from 'src/api/httpClientProvider';
import type { Account } from 'src/types/account';

async function getAccount() {
  const { data } = await httpClient.get<Account>('/account');
  return data;
}

async function patchAccount(payload: Pick<Account, 'locale'>) {
  const { data } = await httpClient.patch<Account>('/account', payload);
  return data;
}

export { getAccount, patchAccount };
