export default function SaveIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="receiptGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8f9fa" />
          <stop offset="100%" stopColor="#e9ecef" />
        </linearGradient>
      </defs>

      <path
        d="M5 2c0-0.552 0.448-1 1-1h12c0.552 0 1 0.448 1 1v16.5c0 0.186-0.065 0.366-0.186 0.506c-0.13 0.152-0.318 0.245-0.514 0.245c-0.15 0-0.3-0.047-0.425-0.144L16 18l-1.876 1.107c-0.247 0.145-0.552 0.145-0.799 0L11.5 18l-1.875 1.107c-0.247 0.145-0.552 0.145-0.799 0L7 18l-1.876 1.107c-0.124 0.097-0.274 0.144-0.424 0.144c-0.196 0-0.384-0.093-0.514-0.245C4.066 18.866 4 18.686 4 18.5V2c0-0.552 0.448-1 1-1z"
        fill="url(#receiptGradient)"
        stroke="#5a6268"
        strokeWidth="0.7"
      />

      <line x1="7" y1="6" x2="17" y2="6" stroke="#5a6268" strokeWidth="0.7" />
      <line x1="7" y1="9" x2="17" y2="9" stroke="#5a6268" strokeWidth="0.7" />
      <line x1="7" y1="12" x2="12" y2="12" stroke="#5a6268" strokeWidth="0.7" />

      <circle
        cx="17"
        cy="17"
        r="5"
        fill="#4dabf7"
        stroke="#339af0"
        strokeWidth="0.7"
      />
      <path
        d="M17 14.5v5M14.5 17h5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
