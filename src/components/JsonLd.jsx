// Renders a JSON-LD structured-data script. Data is developer-controlled
// (never user input), so dangerouslySetInnerHTML is safe here.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
