import { Event } from '../../dummy-data';

import { EventItem } from './EventItem';

type EventListProps = {
  items: Event[];
};

function EventList(props: EventListProps) {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export { EventList };
