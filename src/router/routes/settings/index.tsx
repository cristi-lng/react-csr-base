import { createFileRoute } from '@tanstack/react-router';

import { SettingsPage } from '~settings';

const Route = createFileRoute('/settings/')({
  staticData: {
    underSection: 'settings',
  },
  component: SettingsPage,
});

export { Route };
