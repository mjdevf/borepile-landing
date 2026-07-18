export default function SectionDivider({ flip = false }) {
  return (
    <div className={`relative h-16 w-full overflow-hidden bg-surface ${flip ? '' : ''}`}>
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className={`absolute bottom-0 h-16 w-full ${flip ? 'scale-y-[-1]' : ''}`}
        style={{ fill: 'currentColor' }}
      >
        <path
          d="M0,32 C360,64 1080,0 1440,32 L1440,0 L0,0 Z"
          className="text-border-muted"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
