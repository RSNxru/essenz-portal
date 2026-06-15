// Marca Essenz: monograma "E" geométrico. Hereda el color via currentColor
// (en el navbar va en blanco sobre el cuadro con degradado teal).
export function EssenzMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="6.5" y="4.5" width="3" height="15" rx="1.5" />
      <rect x="6.5" y="4.5" width="11" height="3" rx="1.5" />
      <rect x="6.5" y="10.5" width="8" height="3" rx="1.5" />
      <rect x="6.5" y="16.5" width="11" height="3" rx="1.5" />
    </svg>
  );
}
