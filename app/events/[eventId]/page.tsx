import { getEventById } from '../../../dummy-data';
import {
  EventSummary,
  EventLogistics,
  EventContent,
} from '../../../components/event-detail';

export default function EventDetailPage({
  params,
}: {
  params: { eventId: string };
}) {
  const { eventId } = params;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
