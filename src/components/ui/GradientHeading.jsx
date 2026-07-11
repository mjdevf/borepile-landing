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
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-emas-600">
          {label}
        </span>
      )}
      <h2
        className={`text-4xl font-black tracking-tight sm:text-5xl ${
          light ? 'text-white' : 'text-tanah-900'
        }`}
      >
        {light ? (
          title
        ) : (
          <span className="text-gradient">{title}</span>
        )}
      </h2>
      {desc && (
        <p
          className={`mx-auto mt-4 max-w-xl text-lg leading-relaxed ${
            light ? 'text-beton-200' : 'text-beton-700'
          }`}
        >
          {desc}
        </p>
      )}
      {/* underline decoration */}
      <div
        className={`mx-auto mt-5 h-0.5 w-16 rounded-full bg-gradient-to-r from-emas-600 to-emas-400 ${
          center ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
