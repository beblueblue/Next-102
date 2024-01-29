import Link from 'next/link';
import Image from 'next/image';

import { Event } from '../../dummy-data';
import styles from './EventItem.module.css';

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
    <li className={styles.item}>
      <Image src={'/' + image} alt={title} width="400" height="400" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export { EventItem };