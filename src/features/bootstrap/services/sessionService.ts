import { queryClient } from 'src/api/queryProvider';
import { useSessionStore } from 'src/stores/sessionStore/sessionStore';
import { accountQueries } from '~bootstrap/api/accountQueries';

/**
 * This is the first point of business logic from the app
 * It should contain session initialization and management logic
 *    - checks if the user is logged in or not
 *    - retrieves and processes the user data needed across the app pages
 *    - stores user data
 */
class SessionService {
  #isFirstRun: boolean = true;

  async beforePageLoad() {
    if (this.#isFirstRun) {
      try {
        await this.#initSession();
      } finally {
        this.#isFirstRun = false;
      }
    }
  }

  async #initSession() {
    const getAccountOptions = accountQueries.getAccountOptions();
    const account = await queryClient.fetchQuery(getAccountOptions);

    const { setLocale, setAccount } = useSessionStore.getState();
    setLocale(account.locale);
    setAccount(account);
  }
}

export const sessionService = new SessionService();
