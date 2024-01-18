export default function EventDetailPage({
  params,
}: {
  params: { eventId: string };
}) {
  return (
    <>
      <h1>Event Detail Page</h1>
      <h1>Event Id: {params.eventId}</h1>
    </>
  );
}
