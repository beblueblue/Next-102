import Link from 'next/link';
import Image from 'next/image';

import { Event } from '../../dummy-data';

type EventItemProps = Event;

function EventItem(props: EventItemProps) {
  const { id, title, date, location, image, description } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <Image src={'/' + image} alt={title} width="400" height="400" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export { EventItem };
