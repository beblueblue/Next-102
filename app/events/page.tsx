import { getAllEvents } from '@/dummy-data';
import { EventList } from '@/components/events/EventList';

export default function EventsPage() {
  const allEvents = getAllEvents();

  return (
    <div>
      <EventList items={allEvents} />
    </div>
  );
}
