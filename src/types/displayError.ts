import type { I18nMessageKey } from 'src/i18n/i18nMessages';

/**
 * Error to be displayed by the error boundary
 */
class DisplayError extends Error {
  title: I18nMessageKey;
  details?: I18nMessageKey;

  constructor({ title, details }: { title: I18nMessageKey; details?: I18nMessageKey }) {
    super();
    this.title = title;
    this.details = details;
  }
}

export { DisplayError };
