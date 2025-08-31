import { useShallow } from 'zustand/shallow';

import type { FormatAmountArgs } from 'src/formatters/amount/formatAmountArgs';
import { useSessionStore } from 'src/stores/sessionStore/sessionStore';
import { amountFormatter } from 'src/formatters/amount/amountFormatter';

function FormatAmount({ amount }: Pick<FormatAmountArgs, 'amount'>) {
  const [locale, currency] = useSessionStore(useShallow((state) => [state.locale, state.currency]));
  return amountFormatter.format({ amount, currency, locale });
}

export { FormatAmount };
