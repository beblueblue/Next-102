import { getFeaturedEvents } from '@/dummy-data';
import { EventList } from '@/components/events';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return <EventList items={featuredEvents} />;
}
