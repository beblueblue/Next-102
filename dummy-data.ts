export type Event = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
};

const DUMMY_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description: 'Learn to code in 5 minutes.',
    location: 'Somestreet 25, 12345 San Somehereo',
    date: '2021-05-12',
    image: 'images/code-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description: 'We know: Network is no fun if you are an introvert person.',
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-13',
    image: 'images/introvert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description: 'You probably need to help with networking in general.',
    location: 'My Street 15, 10115 Broke City',
    date: '2021-04-13',
    image: 'images/extrovert-event.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: { year: number; month: number }) {
  const { year, month } = dateFilter;
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
