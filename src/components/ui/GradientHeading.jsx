export default function GradientHeading({
  label,
  title,
  desc,
  light = false,
  center = true,
  className = '',
}) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''} ${className}`}>
      {label && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.05em] text-secondary">
          {label}
        </span>
      )}
      <h2
        className={`text-4xl font-bold tracking-tight sm:text-5xl ${
          light ? 'text-on-primary' : 'text-primary'
        }`}
        style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}
      >
        {light ? (
          title
        ) : (
          <span>{title}</span>
        )}
      </h2>
      {desc && (
        <p
          className={`mx-auto mt-4 max-w-xl text-base leading-relaxed ${
            light ? 'text-secondary' : 'text-secondary'
          }`}
        >
          {desc}
        </p>
      )}
      <div
        className={`mt-5 h-0.5 w-16 rounded-full bg-primary/10 ${
          center ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
