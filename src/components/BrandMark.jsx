/** The banyan tree logo mark. `simple` drops the lower canopy for the footer. */
export default function BrandMark({ simple = false }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 44V26" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M24 26C24 26 12 24 10 12"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M24 26C24 26 36 24 38 12"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        {!simple && (
          <>
            <path
              d="M24 33C24 33 15 31 13 22"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M24 33C24 33 33 31 35 22"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </>
        )}
        <circle
          cx="24"
          cy="10"
          r="3.2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        {!simple && (
          <>
            <circle
              cx="10"
              cy="12"
              r="2.4"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle
              cx="38"
              cy="12"
              r="2.4"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </>
        )}
      </svg>
    </span>
  );
}
