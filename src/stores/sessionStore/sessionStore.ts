import { create } from 'zustand';

import { Locale } from 'src/types/locale';
import { Account } from 'src/types/account';
import { DEFAULT_LOCALE } from 'src/constants/constants';

type SessionStore = {
  readonly locale: Locale;
  readonly currency: string;
  readonly account: Account | undefined;

  readonly setLocale: (locale: Locale) => void;
  readonly setCurrency: (currency: string) => void;
  readonly setAccount: (account: Account | undefined) => void;
};

const useSessionStore = create<SessionStore>()((set) => ({
  locale: DEFAULT_LOCALE,
  currency: 'USD',
  account: undefined,

  setLocale: (locale: Locale) => set({ locale }),
  setCurrency: (currency: string) => set({ currency }),
  setAccount: (account: Account | undefined) => set({ account }),
}));

export { useSessionStore };
