import type { Locale } from 'src/types/locale';

type FormatAmountArgs = {
  amount: number;
  currency: string;
  locale: Locale;
};

function formatAmount({ amount, currency, locale }: FormatAmountArgs) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}

export { formatAmount };
