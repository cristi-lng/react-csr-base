import { useStore } from '@nanostores/react';

import type { FormatAmountArgs } from 'src/formatters/amount/formatAmountArgs';
import { $currency, $locale } from 'src/stores/sessionStore/sessionStore';
import { amountFormatter } from 'src/formatters/amount/amountFormatter';

function FormatAmount({ amount }: Pick<FormatAmountArgs, 'amount'>) {
  const currency = useStore($currency);
  const locale = useStore($locale);
  return amountFormatter.format({ amount, currency, locale });
}

export { FormatAmount };
