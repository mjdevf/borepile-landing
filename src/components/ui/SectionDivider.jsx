export default function SectionDivider({ flip = false }) {
  return (
    <div className={`relative h-24 w-full overflow-hidden bg-inherit ${flip ? '' : ''}`}>
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className={`absolute bottom-0 h-24 w-full ${flip ? 'scale-y-[-1]' : ''}`}
        style={{ fill: 'currentColor' }}
      >
        <path
          d="M0,48 C360,96 1080,0 1440,48 L1440,0 L0,0 Z"
          className="text-beton-950"
          fill="currentColor"
        />
        <path
          d="M0,64 C360,112 1080,16 1440,64 L1440,0 L0,0 Z"
          className="text-emas-600/10"
          fill="currentColor"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
