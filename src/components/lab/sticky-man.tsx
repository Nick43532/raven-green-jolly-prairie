export type Mood = "idle" | "talk" | "think" | "happy" | "oops";

export function StickyMan({ mood }: { mood: Mood }) {
  return (
    <svg className={`sticky-svg mood-${mood}`} viewBox="0 0 160 210" aria-hidden="true">
      <ellipse cx="80" cy="198" rx="34" ry="6" className="shadow" />
      <g className="legs">
        <line x1="80" y1="128" x2="52" y2="176" />
        <line x1="80" y1="128" x2="108" y2="176" />
        <circle cx="50" cy="178" r="5" />
        <circle cx="110" cy="178" r="5" />
      </g>
      <line x1="80" y1="78" x2="80" y2="128" />
      <g className="arms-normal">
        <line x1="80" y1="92" x2="44" y2="124" />
        <circle cx="42" cy="126" r="4.5" />
        <g className="arm-r">
          <line x1="80" y1="92" x2="118" y2="108" />
          <circle cx="120" cy="109" r="4.5" />
        </g>
      </g>
      <g className="arms-think">
        <line x1="80" y1="92" x2="46" y2="122" />
        <circle cx="44" cy="124" r="4.5" />
        <line x1="80" y1="92" x2="102" y2="70" />
        <circle cx="104" cy="66" r="4.5" />
      </g>
      <g className="arms-up">
        <line x1="80" y1="92" x2="48" y2="60" />
        <line x1="80" y1="92" x2="112" y2="60" />
        <circle cx="46" cy="57" r="4.5" />
        <circle cx="114" cy="57" r="4.5" />
      </g>
      <path className="scarf" d="M66 74h28l8 16H58z" />
      <g className="head">
        <circle cx="80" cy="46" r="28" />
        <g className="eyes">
          <circle cx="70" cy="44" r="3.1" />
          <circle cx="90" cy="44" r="3.1" />
        </g>
        <path className="mouth m-smile" d="M70 56c4 6 16 6 20 0" />
        <ellipse className="mouth m-oh" cx="80" cy="58" rx="5" ry="6" />
        <path className="mouth m-happy" d="M66 54c6 12 22 12 28 0" />
        <path className="mouth m-flat" d="M70 58h20" />
      </g>
    </svg>
  );
}
