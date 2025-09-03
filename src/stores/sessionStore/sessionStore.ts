import { atom } from 'nanostores';

import type { Locale } from 'src/types/locale';
import type { Account } from 'src/types/account';
import { DEFAULT_LOCALE } from 'src/constants/constants';

const $locale = atom<Locale>(DEFAULT_LOCALE);
const $currency = atom<string>('USD');
const $account = atom<Account | undefined>(undefined);

export { $locale, $currency, $account };
