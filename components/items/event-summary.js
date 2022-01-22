export default function EventSummary(props) {
  const { description } = props;

  return (
    <section>
      <h1>{description}</h1>
    </section>
  );
}
