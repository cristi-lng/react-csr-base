import type { Locale } from 'src/types/locale';

type FormatAmountArgs = {
  amount: number;
  currency: string;
  locale: Locale;
};

export { type FormatAmountArgs };
