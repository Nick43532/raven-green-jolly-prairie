import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/game/copy";
import { levelLabel, tx, ui } from "@/game/copy";
import type { Level } from "@/game/types";

const PADS = ["sienna", "teal", "ink", "sand"] as const;

function useParade(tokens: string[], playId: number, active: boolean, onDone: () => void) {
  const [lit, setLit] = useState<string | null>(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;
  const key = tokens.join("|");

  useEffect(() => {
    if (!active || tokens.length === 0) {
      setLit(null);
      return;
    }
    let dead = false;
    const timers: number[] = [];
    const long = tokens.length === 1 && tokens[0].length > 1;
    const step = long ? 2200 : 780;
    const hold = long ? 1800 : 520;
    tokens.forEach((token, index) => {
      timers.push(window.setTimeout(() => { if (!dead) setLit(token); }, index * step));
      timers.push(window.setTimeout(() => { if (!dead) setLit(null); }, index * step + hold));
    });
    timers.push(window.setTimeout(() => { if (!dead) doneRef.current(); }, tokens.length * step + 80));
    return () => {
      dead = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [active, playId, key]);

  return lit;
}

function Glyph({ name }: { name: string }) {
  if (name === "circle") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="5" />
      </svg>
    );
  }
  if (name === "square") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="14" y="14" width="36" height="36" rx="4" fill="none" stroke="currentColor" strokeWidth="5" />
      </svg>
    );
  }
  if (name === "triangle") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 12 L54 52 H10 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "diamond") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 8 L54 32 L32 56 L10 32 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "plus") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 12 V52 M12 32 H52" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <polygon
        points="32,8 50,18 50,40 32,52 14,40 14,18"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Poly({ sides }: { sides: number }) {
  const points = Array.from({ length: sides }, (_, index) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / sides;
    return `${32 + 22 * Math.cos(angle)},${32 + 22 * Math.sin(angle)}`;
  }).join(" ");
  return (
    <svg className="poly" viewBox="0 0 64 64" aria-hidden="true">
      <polygon points={points} fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon({ dir }: { dir: string }) {
  const turn = dir === "e" ? 90 : dir === "s" ? 180 : dir === "w" ? 270 : 0;
  return (
    <svg className="arrow-ico" viewBox="0 0 64 64" aria-hidden="true">
      <g transform={`rotate(${turn} 32 32)`}>
        <path d="M32 50 V16 M32 16 L20 30 M32 16 L44 30" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function Hand({ deg, large }: { deg: number; large?: boolean }) {
  return (
    <svg className={large ? "dial" : "hand"} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="32" y1="32" x2="32" y2="16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" transform={`rotate(${deg} 32 32)`} />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
    </svg>
  );
}

function cellsFor(variant: number) {
  const base: Array<[number, number]> = [[0, 0], [0, 1], [0, 2], [1, 2]];
  if (variant === 1) return base.map(([x, y]) => [2 - x, y] as [number, number]);
  if (variant === 2) return base.map(([x, y]) => [x, 2 - y] as [number, number]);
  if (variant === 3) return base.map(([x, y]) => [2 - x, 2 - y] as [number, number]);
  return base;
}

function LShape({ variant, big }: { variant: number; big?: boolean }) {
  return (
    <svg className={big ? "l-shape l-big" : "l-shape"} viewBox="0 0 3 3" aria-hidden="true">
      <rect width="3" height="3" fill="var(--color-paper-2)" />
      {cellsFor(variant).map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x + 0.12} y={y + 0.12} width="0.76" height="0.76" rx="0.08" fill="currentColor" />
      ))}
    </svg>
  );
}

function DotPile({ rows, square }: { rows: number; square?: boolean }) {
  const dots: Array<[number, number]> = [];
  if (square) {
    for (let y = 0; y < rows; y++) for (let x = 0; x < rows; x++) dots.push([x, y]);
  } else {
    for (let y = 0; y < rows; y++) for (let x = 0; x <= y; x++) dots.push([x, y]);
  }
  const unit = 10;
  const width = (square ? rows : rows) * unit;
  const height = rows * unit;
  return (
    <svg className="pile" viewBox={`-2 -2 ${width + 4} ${height + 4}`} aria-hidden="true">
      {dots.map(([x, y], index) => (
        <circle key={index} cx={x * unit + 4} cy={y * unit + 4} r="2.4" fill="currentColor" />
      ))}
    </svg>
  );
}

function VisualView({ level, lang }: { level: Level; lang: Lang }) {
  const visual = level.visual;
  if (visual.type === "sequence") {
    return (
      <div className="tiles">
        {visual.items.map((item, index) => (
          <div key={`${item}-${index}`} className="tile">{item}</div>
        ))}
        <div className="tile-q pulse">?</div>
      </div>
    );
  }
  if (visual.type === "squares" || visual.type === "tri") {
    const square = visual.type === "squares";
    return (
      <div className="piles">
        {Array.from({ length: visual.upTo }, (_, index) => {
          const rows = index + 1;
          const count = square ? rows * rows : (rows * (rows + 1)) / 2;
          return (
            <div key={rows} className="pile-card">
              <DotPile rows={rows} square={square} />
              <span>{count}</span>
            </div>
          );
        })}
        <div className="pile-card">
          <div className="tile-q pulse">?</div>
        </div>
      </div>
    );
  }
  if (visual.type === "arrows") {
    return (
      <div className="frames">
        {visual.dirs.map((dir, index) => (
          <div key={`${dir}-${index}`} className="frame-card">
            <ArrowIcon dir={dir} />
            <span>{index + 1}</span>
          </div>
        ))}
        <div className="frame-card">
          <div className="tile-q pulse">?</div>
        </div>
      </div>
    );
  }
  if (visual.type === "hands") {
    return (
      <div className="frames">
        {visual.degrees.map((deg, index) => (
          <div key={`${deg}-${index}`} className="frame-card">
            <Hand deg={deg} large />
            <span>{deg}°</span>
          </div>
        ))}
        <div className="frame-card">
          <div className="tile-q pulse">?</div>
        </div>
      </div>
    );
  }
  if (visual.type === "mirror") {
    return (
      <div>
        <p className="stage-label">{tx(ui.original, lang)}</p>
        <LShape variant={0} big />
      </div>
    );
  }
  if (visual.type === "pair") {
    return (
      <div className="pair">
        <div><b>{visual.left[0][lang]}</b><span>→</span><b>{visual.left[1][lang]}</b></div>
        <div><b>{visual.right[0][lang]}</b><span>→</span><b>{visual.right[1][lang]}</b></div>
      </div>
    );
  }
  if (visual.type === "statements") {
    return (
      <ol className="statements">
        {visual.lines.map((line) => (
          <li key={line.en}>{line[lang]}</li>
        ))}
      </ol>
    );
  }
  if (visual.type === "chairs") {
    return (
      <div className="chairs" aria-hidden="true">
        <div className="chair" />
        <div className="chair" />
        <div className="chair" />
      </div>
    );
  }
  if (visual.type === "clock") {
    return (
      <svg className="clock" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="60" cy="60" r="3" fill="currentColor" />
        <line x1="60" y1="60" x2="60" y2="22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="60" x2="92" y2="60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        {[0, 90, 180, 270].map((deg) => (
          <line key={deg} x1="60" y1="14" x2="60" y2="22" stroke="currentColor" strokeWidth="3" transform={`rotate(${deg} 60 60)`} />
        ))}
      </svg>
    );
  }
  if (visual.type === "scale") {
    return (
      <div>
        <svg className="scale" viewBox="0 0 320 150" aria-hidden="true">
          <text x="160" y="18" textAnchor="middle" fill="var(--color-sienna)" fontSize="18">?</text>
          <line x1="160" y1="28" x2="160" y2="132" stroke="currentColor" strokeWidth="4" />
          <line x1="28" y1="42" x2="292" y2="42" stroke="currentColor" strokeWidth="4" />
          <line x1="78" y1="42" x2="52" y2="72" stroke="currentColor" strokeWidth="3" />
          <line x1="78" y1="42" x2="104" y2="72" stroke="currentColor" strokeWidth="3" />
          <rect x="46" y="72" width="72" height="40" rx="8" fill="var(--color-paper-2)" stroke="currentColor" strokeWidth="3" />
          <rect x="56" y="84" width="14" height="14" fill="currentColor" />
          <rect x="74" y="84" width="14" height="14" fill="currentColor" />
          <circle cx="104" cy="91" r="7" fill="currentColor" />
          <line x1="242" y1="42" x2="214" y2="72" stroke="currentColor" strokeWidth="3" />
          <line x1="242" y1="42" x2="270" y2="72" stroke="currentColor" strokeWidth="3" />
          <rect x="200" y="72" width="92" height="40" rx="8" fill="var(--color-paper-2)" stroke="currentColor" strokeWidth="3" />
          <circle cx="220" cy="86" r="6" fill="currentColor" />
          <circle cx="238" cy="86" r="6" fill="currentColor" />
          <circle cx="256" cy="86" r="6" fill="currentColor" />
          <circle cx="274" cy="86" r="6" fill="currentColor" />
          <circle cx="247" cy="102" r="6" fill="currentColor" />
        </svg>
        <p className="stage-label">{visual.note[lang]}</p>
      </div>
    );
  }
  if (visual.type === "grid") {
    const n = 3;
    const pad = 10;
    const size = 220;
    const cell = (size - pad * 2) / n;
    const lines = [];
    for (let i = 0; i <= n; i++) {
      const p = pad + i * cell;
      lines.push(<line key={`h${i}`} x1={pad} y1={p} x2={size - pad} y2={p} stroke="currentColor" strokeWidth="4" />);
      lines.push(<line key={`v${i}`} x1={p} y1={pad} x2={p} y2={size - pad} stroke="currentColor" strokeWidth="4" />);
    }
    return (
      <svg className="square-grid" viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        {lines}
      </svg>
    );
  }
  return null;
}

function ChoiceFace({ level, index, lang }: { level: Level; index: number; lang: Lang }) {
  const kind = level.choiceKind ?? "text";
  const label = level.choices?.[index]?.[lang] ?? "";
  if (kind === "poly") return (<><Poly sides={Number(level.choiceData?.[index] ?? 4)} /><span>{label}</span></>);
  if (kind === "arrow") return (<><ArrowIcon dir={level.choiceData?.[index] ?? "n"} /><span>{label}</span></>);
  if (kind === "hand") return (<><Hand deg={Number(level.choiceData?.[index] ?? 0)} /><span>{label}</span></>);
  if (kind === "mirror") return (<><LShape variant={Number(level.choiceData?.[index] ?? 0)} /><span>{label}</span></>);
  return <>{label}</>;
}

export function Puzzle({
  level,
  lang,
  solved,
  revealed,
  earned,
  best,
  onAttempt,
  onNext,
  onMap,
}: {
  level: Level;
  lang: Lang;
  solved: boolean;
  revealed: boolean;
  earned: number;
  best: number;
  onAttempt: (correct: boolean) => void;
  onNext: () => void;
  onMap: () => void;
}) {
  const needsWatch = level.mode === "memory" || level.mode === "digits" || level.visual.type === "symbolWatch";
  const [ready, setReady] = useState(!needsWatch);
  const [playId, setPlayId] = useState(0);
  const [buffer, setBuffer] = useState<string[]>([]);
  const [picked, setPicked] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number[]>([]);
  const [shake, setShake] = useState(false);
  const busy = useRef(false);

  const parade =
    level.mode === "memory"
      ? level.answer.split(",")
      : level.mode === "digits"
        ? [level.answer]
        : level.visual.type === "symbolWatch"
          ? level.visual.shown
          : [];

  const lit = useParade(parade, playId, needsWatch && !ready, () => setReady(true));
  const picture = level.choiceKind && level.choiceKind !== "text";

  function miss() {
    setShake(true);
    window.setTimeout(() => setShake(false), 420);
  }

  function choose(index: number) {
    if (solved || !ready || wrong.includes(index) || busy.current) return;
    const ok = String(index) === level.answer;
    if (!ok) {
      setWrong((list) => [...list, index]);
      miss();
    }
    onAttempt(ok);
  }

  function pushColor(color: string) {
    if (!ready || solved || busy.current) return;
    const next = [...buffer, color];
    const target = level.answer.split(",").length;
    if (next.length < target) {
      setBuffer(next);
      return;
    }
    const ok = next.join(",") === level.answer;
    setBuffer(next);
    if (!ok) {
      busy.current = true;
      miss();
      window.setTimeout(() => {
        setBuffer([]);
        busy.current = false;
      }, 450);
    }
    onAttempt(ok);
  }

  function pushDigit(digit: string) {
    if (!ready || solved || busy.current) return;
    const next = [...buffer, digit].slice(0, level.answer.length);
    setBuffer(next);
    if (next.length < level.answer.length) return;
    const ok = next.join("") === level.answer;
    if (!ok) {
      busy.current = true;
      miss();
      window.setTimeout(() => {
        setBuffer([]);
        busy.current = false;
      }, 450);
    }
    onAttempt(ok);
  }

  function pushTile(index: number) {
    if (solved || picked.includes(index) || busy.current) return;
    if (level.visual.type !== "letters") return;
    const next = [...picked, index];
    setPicked(next);
    if (next.length < level.answer.length) return;
    const word = next.map((tile) => (level.visual.type === "letters" ? level.visual.tiles[tile] : "")).join("");
    const ok = word === level.answer;
    if (!ok) {
      busy.current = true;
      miss();
      window.setTimeout(() => {
        setPicked([]);
        busy.current = false;
      }, 500);
    }
    onAttempt(ok);
  }

  function tapSpot(index: number) {
    if (solved || busy.current || wrong.includes(index)) return;
    const ok = String(index) === level.answer;
    if (!ok) {
      setWrong((list) => [...list, index]);
      miss();
    }
    onAttempt(ok);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (level.mode !== "choice" || !ready || solved) return;
      if (event.target instanceof HTMLInputElement) return;
      const n = Number(event.key);
      if (n >= 1 && level.choices && n <= level.choices.length) choose(n - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <section className={`plate ${shake ? "shake" : ""}`}>
      <span className="tick tick-tl" />
      <span className="tick tick-tr" />
      <span className="tick tick-bl" />
      <span className="tick tick-br" />
      <header className="plate-head">
        <p className="kicker">{levelLabel(level.id, lang)}</p>
        <h2 className="display">{level.title[lang]}</h2>
      </header>
      <VisualView level={level} lang={lang} />
      <p className={level.visual.type === "none" && level.mode === "choice" ? "hero-q" : "prompt"}>
        {level.prompt[lang]}
      </p>

      {needsWatch && (
        <p className="status-line">{ready ? tx(ui.yourTurn, lang) : tx(ui.watching, lang)}</p>
      )}

      {level.visual.type === "symbolWatch" && (
        <div className="glyph-stage" aria-hidden="true">
          {lit ? <Glyph name={lit} /> : null}
        </div>
      )}

      {level.mode === "choice" && (
        <div className="choice-grid">
          {level.choices?.map((choice, index) => {
            const right = solved && String(index) === level.answer;
            const show = revealed && String(index) === level.answer;
            const bad = wrong.includes(index);
            return (
              <button
                key={choice.en}
                type="button"
                className={`choice ${picture ? "is-picture" : ""} ${bad ? "is-wrong" : ""} ${right ? "is-right" : ""} ${show && !right ? "is-reveal" : ""}`}
                onClick={() => choose(index)}
                disabled={solved || !ready || bad}
              >
                <ChoiceFace level={level} index={index} lang={lang} />
              </button>
            );
          })}
        </div>
      )}

      {level.mode === "memory" && (
        <>
          <div className="pads">
            {PADS.map((color) => (
              <button
                key={color}
                type="button"
                className={`pad pad-${color} ${lit === color ? "is-lit" : ""}`}
                onClick={() => pushColor(color)}
                disabled={!ready || solved}
                aria-label={color}
              >
                <Glyph name={color === "sienna" ? "circle" : color === "teal" ? "square" : color === "ink" ? "triangle" : "diamond"} />
              </button>
            ))}
          </div>
          <div className="slots" aria-hidden="true">
            {buffer.map((color, index) => (
              <span key={`${color}-${index}`} className={`slot pad-${color}`} />
            ))}
          </div>
        </>
      )}

      {level.mode === "digits" && (
        <>
          {!ready && lit ? <p className="digit-hero">{lit}</p> : null}
          <div className="slots" aria-label={buffer.join("")}>
            {Array.from({ length: level.answer.length }, (_, index) => (
              <span key={index} className={`slot ${shake ? "is-bad" : ""}`}>{buffer[index] ?? ""}</span>
            ))}
          </div>
          <div className="numpad">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "undo", "0"].map((key) =>
              key === "undo" ? (
                <button key={key} type="button" className="btn btn-soft" onClick={() => setBuffer((items) => items.slice(0, -1))} disabled={!ready || solved}>
                  {tx(ui.undo, lang)}
                </button>
              ) : (
                <button key={key} type="button" className="btn btn-ink" onClick={() => pushDigit(key)} disabled={!ready || solved}>
                  {key}
                </button>
              ),
            )}
          </div>
        </>
      )}

      {level.mode === "letters" && level.visual.type === "letters" && (
        <>
          <div className="slots">
            {Array.from({ length: level.answer.length }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`slot ${shake ? "is-bad" : ""}`}
                onClick={() => setPicked((items) => items.slice(0, index))}
              >
                {level.visual.type === "letters" ? level.visual.tiles[picked[index]] ?? "" : ""}
              </button>
            ))}
          </div>
          <div className="letter-row">
            {level.visual.tiles.map((tile, index) => (
              <button key={`${tile}-${index}`} type="button" className="letter" disabled={picked.includes(index) || solved} onClick={() => pushTile(index)}>
                {tile}
              </button>
            ))}
          </div>
        </>
      )}

      {level.mode === "spot" && level.visual.type === "spot" && (
        <div className="spot-wrap">
          <div>
            <p className="stage-label">{tx(ui.gridA, lang)}</p>
            <div className="mini-grid">
              {level.visual.left.map((cell, index) => (
                <div key={index} className={`cell ${cell ? "is-on" : ""}`} />
              ))}
            </div>
          </div>
          <div>
            <p className="stage-label">{tx(ui.gridB, lang)}</p>
            <div className="mini-grid">
              {level.visual.right.map((cell, index) => (
                <button
                  key={index}
                  type="button"
                  className={`cell ${cell ? "is-on" : ""} ${wrong.includes(index) ? "is-bad" : ""} ${solved && String(index) === level.answer ? "is-found" : ""}`}
                  aria-label={`${tx(ui.gridB, lang)} ${index + 1}`}
                  onClick={() => tapSpot(index)}
                  disabled={solved}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {needsWatch && !solved && (
        <div className="row-actions">
          <button
            type="button"
            className="btn btn-soft"
            onClick={() => {
              setReady(false);
              setPlayId((value) => value + 1);
              setBuffer([]);
            }}
          >
            {tx(ui.watch, lang)}
          </button>
        </div>
      )}

      {solved && (
        <div className="note">
          <strong>{tx(ui.labNote, lang)}</strong>
          <p>{level.explain[lang]}</p>
          <p className="fine">
            {tx(ui.cleared, lang)} · {earned} · {tx(ui.best, lang)} {best}
          </p>
          <div className="row-actions">
            <button type="button" className="btn btn-primary" onClick={onNext}>
              {level.id === 30 ? tx(ui.finish, lang) : tx(ui.next, lang)}
            </button>
            <button type="button" className="btn btn-soft" onClick={onMap}>
              {tx(ui.toMap, lang)}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
