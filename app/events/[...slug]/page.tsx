export default function FilteredEventsPage({
  params,
}: {
  params: { slug: string[] };
}) {
  return (
    <>
      <h1>Filtered Events Page</h1>
      <h1>slug: {JSON.stringify(params.slug)}</h1>
    </>
  );
}
