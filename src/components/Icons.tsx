import type { BlockIcon, PrIcon } from '../content.ts'

// Hand-drawn style line icons from the design. Strokes with className="accent" use the accent color.

export function ProgramIcon({ name }: { name: BlockIcon }) {
  return (
    <svg
      viewBox="0 0 120 60"
      width="120"
      height="60"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === 'assess' && (
        <>
          <circle cx="18" cy="42" r="9" />
          <path d="M52 12l14 14M66 12L52 26" />
          <path d="M92 36l14 14M106 36L92 50" />
        </>
      )}
      {name === 'build' && (
        <>
          <circle cx="16" cy="44" r="9" />
          <path d="M28 38 C 50 20, 70 46, 96 16" stroke="var(--accent)" />
          <path d="M84 14l13 1-2 13" stroke="var(--accent)" />
        </>
      )}
      {name === 'peak' && (
        <>
          <circle cx="18" cy="30" r="9" />
          <circle cx="60" cy="30" r="9" />
          <circle cx="102" cy="30" r="9" />
          <path d="M30 30h18M72 30h18" stroke="var(--accent)" />
        </>
      )}
    </svg>
  )
}

const accentStroke = { stroke: 'var(--accent)', strokeWidth: 2.5 }

export function PrBoardIcon({ name }: { name: PrIcon }) {
  return (
    <svg
      viewBox="0 0 120 84"
      width="120"
      height="84"
      fill="none"
      stroke="var(--sketch)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === 'portfolio' && (
        <>
          <rect x="16" y="16" width="22" height="52" rx="4" />
          <rect x="49" y="16" width="22" height="52" rx="4" />
          <rect x="82" y="16" width="22" height="52" rx="4" />
          <path d="M21 26h12M54 26h12M87 26h12" />
          <ellipse cx="60" cy="42" rx="55" ry="37" transform="rotate(-4 60 42)" {...accentStroke} />
        </>
      )}
      {name === 'growth' && (
        <>
          <rect x="34" y="10" width="34" height="64" rx="5" />
          <path d="M43 62V50M51 62V40M59 62V30" />
          <path d="M78 58L100 26" {...accentStroke} />
          <path d="M89 26h11v11" {...accentStroke} />
        </>
      )}
      {name === 'heartrate' && (
        <>
          <rect x="38" y="8" width="40" height="68" rx="5" />
          <path d="M53 15h10" />
          <path d="M43 30h7l3-7 4 13 3-9 3 3h10" />
          <text
            x="58"
            y="59"
            textAnchor="middle"
            fill="var(--sketch)"
            stroke="none"
            fontFamily="var(--font-display)"
            fontWeight="800"
            fontSize="17"
          >
            92
          </text>
          <ellipse cx="58" cy="53" rx="16" ry="12" transform="rotate(-6 58 53)" {...accentStroke} />
        </>
      )}
      {name === 'scan' && (
        <>
          <rect x="10" y="14" width="56" height="56" rx="5" />
          <circle cx="38" cy="30" r="5" />
          <path d="M38 35v16M28 42h20M38 51l-8 12M38 51l8 12" />
          <rect x="92" y="24" width="18" height="36" rx="4" />
          <path d="M70 42h18" {...accentStroke} />
          <path d="M82 36l6 6-6 6" {...accentStroke} />
        </>
      )}
      {name === 'hardware' && (
        <>
          <path d="M20 42h28" />
          <rect x="10" y="30" width="10" height="24" rx="2" />
          <rect x="48" y="30" width="10" height="24" rx="2" />
          <rect x="88" y="14" width="22" height="56" rx="4" />
          <path d="M93 24h12" />
          <path d="M64 42h18" {...accentStroke} />
          <path d="M76 36l6 6-6 6" {...accentStroke} />
        </>
      )}
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}
