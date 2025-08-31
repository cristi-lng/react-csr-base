import type { FormatAmountArgs } from 'src/formatters/amount/formatAmountArgs';

class AmountFormatter {
  format({ amount, currency, locale }: FormatAmountArgs) {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  }
}

export const amountFormatter = new AmountFormatter();
