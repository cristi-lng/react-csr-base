import type { Account } from 'src/types/account';
import { accountApi } from '~bootstrap/api/accountApi';
import { $account, $currency, $locale } from 'src/stores/sessionStore/sessionStore';

/**
 * This service contains the session initialization and management logic
 * - it is pretty basic at the moment, but in a real case scenario it will have much more logic
 * - usually will include:
 *    - checks if the user is logged in or not
 *    - retrieving and processing the user data needed across the app pages
 *    - storing the user data in the session store
 *    - etc.
 */
class SessionService {
  async loadSession() {
    const account = await accountApi.getAccount();
    this.processAccount(account);
    return {};
  }

  processAccount(account: Account) {
    $locale.set(account.locale);
    $currency.set(account.currency);
    $account.set(account);
  }
}

export const sessionService = new SessionService();
