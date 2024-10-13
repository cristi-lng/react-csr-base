import { queryOptions } from '@tanstack/react-query';

import { accountKeys } from 'src/stores/queryKeys/accountKeys';
import { accountApi } from '~bootstrap/api/accountApi';

class AccountQueries {
  getAccountOptions() {
    return queryOptions({
      queryKey: accountKeys.account,
      queryFn: () => accountApi.getAccount(),
    });
  }
}

export const accountQueries = new AccountQueries();
