import { useStore } from '@nanostores/react';

import { $currency, $locale } from 'src/stores/sessionStore/sessionStore';
import { formatAmount } from 'src/formatters/amount/formatAmount';

function FormattedAmount({ amount }: { amount: number }) {
  const currency = useStore($currency);
  const locale = useStore($locale);
  return formatAmount({ amount, currency, locale });
}

export { FormattedAmount };
