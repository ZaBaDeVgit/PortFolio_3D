export default function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span className="accent">{number} /</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
