import { Locale } from 'src/types/locale';

type AccountRole = 'REGULAR' | 'ADMIN';

type Account = {
  readonly name: string;
  readonly avatar?: string;
  readonly role: AccountRole;
  readonly locale: Locale;
  readonly currency: string;
};

export { type Account, type AccountRole };
