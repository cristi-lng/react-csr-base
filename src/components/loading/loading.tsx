import classes from './loading.module.scss';

function Loading() {
  return (
    <div className={classes.loading}>
      <div className={classes.loading_graphic}></div>
    </div>
  );
}

export { Loading };
