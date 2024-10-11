import { useMatchMediaQuery } from 'src/hooks/useMatchMediaQuery';
import cssExports from 'src/styles/preprocessor/exports.module.scss';
import { MediumLayout } from '~bootstrap/components/layout/medium/mediumLayout';
import { LargeLayout } from '~bootstrap/components/layout/large/largeLayout';

function Layout() {
  const isMediumScreen = !useMatchMediaQuery(cssExports.mediaMdAbove);

  return isMediumScreen ? <MediumLayout /> : <LargeLayout />;
}

export { Layout };
