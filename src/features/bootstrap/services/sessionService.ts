import { getAccount } from '~bootstrap/api/accountApi';
import type { Account } from 'src/types/account';
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

async function loadSession() {
  const account = await getAccount();
  processAccount(account);
  return {};
}

function processAccount(account: Account) {
  $locale.set(account.locale);
  $currency.set(account.currency);
  $account.set(account);
}

export { loadSession, processAccount };
