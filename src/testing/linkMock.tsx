import { ReactNode } from 'react';

type LinkMockProps = {
  to: string;
  params?: Record<string, unknown>;
  children: ReactNode;
};

/**
 * A basic way to mock a router link so that we can test it
 */
function LinkMock({ to, params, children }: LinkMockProps) {
  const url = params
    ? Object.keys(params).reduce((url, param) => url.replaceAll(`$${param}`, String(params[param])), to)
    : to;

  return <a href={url}>{children}</a>;
}

export { LinkMock };
