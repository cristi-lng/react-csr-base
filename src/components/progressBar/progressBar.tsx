import classes from './progressBar.module.scss';

type ProgressBarProps = {
  current: number;
  max: number;
};

function ProgressBar({ current, max }: ProgressBarProps) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.progressBar_completed} style={{ height: `${(current / max) * 100}%` }}></div>
    </div>
  );
}

export { ProgressBar };
