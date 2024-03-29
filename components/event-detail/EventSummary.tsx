import classes from './EventSummary.module.css';

function EventSummary(props: { title: string }) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export { EventSummary };
