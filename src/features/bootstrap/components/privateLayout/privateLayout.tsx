import { useMatchMediaQuery } from 'src/hooks/useMatchMediaQuery';
import cssExports from 'src/styles/preprocessor/exports.module.scss';
import { MediumLayout } from '~bootstrap/components/privateLayout/medium/mediumLayout';
import { LargeLayout } from '~bootstrap/components/privateLayout/large/largeLayout';

function PrivateLayout() {
  const isMediumScreen = !useMatchMediaQuery(cssExports.mediaMdAbove);

  return isMediumScreen ? <MediumLayout /> : <LargeLayout />;
}

export { PrivateLayout };
