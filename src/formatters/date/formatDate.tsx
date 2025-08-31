import type { FormatDateArgs } from 'src/formatters/date/formatDateArgs';
import { useSessionStore } from 'src/stores/sessionStore/sessionStore';
import { dateFormatter } from 'src/formatters/date/dateFormatter';

function FormatDate({ date }: Pick<FormatDateArgs, 'date'>) {
  const locale = useSessionStore((state) => state.locale);
  return dateFormatter.format({ date, locale });
}

export { FormatDate };
