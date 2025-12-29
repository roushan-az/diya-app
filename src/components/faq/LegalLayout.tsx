export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">{title}</h1>
        <div className="legal-divider" />
        <div className="legal-content">{children}</div>
      </div>
    </section>
  );
}
