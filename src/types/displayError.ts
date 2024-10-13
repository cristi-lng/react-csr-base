/**
 * Error to be displayed by the error boundary
 *
 * @param title - i18n key or message
 * @param details - i18n key or message
 */
class DisplayError extends Error {
  title: string;
  details?: string;

  constructor({ title, details }: { title: string; details?: string }) {
    super();
    this.title = title;
    this.details = details;
  }
}

export { DisplayError };
