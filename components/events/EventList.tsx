import { Event } from '../../dummy-data';

import { EventItem } from './EventItem';
import styles from './EventList.module.css';

type EventListProps = {
  items: Event[];
};

function EventList(props: EventListProps) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export { EventList };
