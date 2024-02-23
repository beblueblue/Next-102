import { ReactNode } from 'react';
import classes from './EventContent.module.css';

type EventContentProps = {
  children: ReactNode;
};

function EventContent(props: EventContentProps) {
  return <section className={classes.content}>{props.children}</section>;
}

export { EventContent };
