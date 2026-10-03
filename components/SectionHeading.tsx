export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-text-secondary max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}