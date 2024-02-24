'use client';

import { useRouter } from 'next/navigation';

import { getAllEvents } from '@/dummy-data';
import { EventList, EventSearch } from '@/components/events';

export default function EventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </>
  );
}
