import { create } from 'zustand';

import { Locale } from 'src/types/locale';
import { Account } from 'src/types/account';
import { DEFAULT_LOCALE } from 'src/constants/constants';

type SessionStore = {
  readonly locale: Locale;
  readonly account: Account | undefined;

  readonly setLocale: (locale: Locale) => void;
  readonly setAccount: (account: Account | undefined) => void;
};

const useSessionStore = create<SessionStore>()((set) => ({
  locale: DEFAULT_LOCALE,
  account: undefined,

  setLocale: (locale: Locale) => set({ locale }),
  setAccount: (account: Account | undefined) => set({ account }),
}));

export { useSessionStore };
