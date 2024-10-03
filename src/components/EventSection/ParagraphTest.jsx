const content = [
  <p>This is a normal paragraph.</p>,
  <p>
    <strong>This text has bold</strong> formatting.
  </p>,
  <p>
    <em>This is italic and</em> <strong>bold text.</strong>
  </p>,
];

// A component that renders the content
const ContentComponent = () => {
  return (
    <div>
      {content.map((paragraph, index) => (
        <div key={index}>{paragraph}</div>
      ))}
    </div>
  );
};

export default ContentComponent;
