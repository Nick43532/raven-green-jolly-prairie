import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Star, Volume2, VolumeX } from "lucide-react";
import { levelLabel, starsLabel, tx, ui, type Lang } from "@/game/copy";
import { CHAPTERS, getLevel } from "@/game/levels";
import { blip } from "@/game/sound";
import { defaultSave, isOpen, loadSave, nextUncleared, starTotal, writeSave, type Save } from "@/game/storage";
import { starScore } from "@/game/types";
import { StickyMan, type Mood } from "@/components/lab/sticky-man";
import { Puzzle } from "@/components/lab/puzzle";

type Screen = "home" | "map" | "play" | "cert";
type StickyKey = "intro1" | "intro2" | "how" | "hint1" | "hint2" | "wrong" | "right" | "reveal";
type YouKey = "askHow" | "askHint" | "askReveal";
type Msg = { from: "sticky"; key: StickyKey } | { from: "you"; key: YouKey };

function Stars({ n, dim }: { n: number; dim?: boolean }) {
  return (
    <span className="stars" aria-label={String(n)}>
      {[0, 1, 2].map((index) => (
        <Star key={index} size={16} className={index < n ? undefined : "star-off"} fill={index < n && !dim ? "currentColor" : "none"} />
      ))}
    </span>
  );
}

function LangSwitch({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div className="lang" role="group" aria-label="Language">
      <button type="button" aria-pressed={lang === "en"} onClick={() => onChange("en")}>EN</button>
      <button type="button" aria-pressed={lang === "hi"} onClick={() => onChange("hi")}>हिं</button>
    </div>
  );
}

export function GameApp() {
  const [save, setSave] = useState<Save>(defaultSave);
  const [hydrated, setHydrated] = useState(false);
  const [screen, setScreen] = useState<Screen>("home");
  const [levelId, setLevelId] = useState(1);
  const [notice, setNotice] = useState("");
  const [resetArmed, setResetArmed] = useState(false);

  useEffect(() => {
    setSave(loadSave());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeSave(save);
  }, [save, hydrated]);

  useEffect(() => {
    document.documentElement.lang = save.lang === "hi" ? "hi" : "en";
  }, [save.lang]);

  function patch(partial: Partial<Save>) {
    setSave((current) => ({ ...current, ...partial }));
  }

  function openLevel(id: number) {
    if (!isOpen(id, save)) {
      setNotice(tx(ui.locked, save.lang));
      return;
    }
    setNotice("");
    setLevelId(id);
    setScreen("play");
  }

  function clearLevel(id: number, stars: number) {
    setSave((current) => {
      const prev = current.cleared[String(id)] ?? 0;
      return { ...current, cleared: { ...current.cleared, [String(id)]: Math.max(prev, stars) } };
    });
  }

  const lang = save.lang;
  const clearedCount = Object.keys(save.cleared).length;
  const upcoming = nextUncleared(save);

  return (
    <main className="shell">
      {screen === "home" && (
        <Home
          save={save}
          clearedCount={clearedCount}
          upcoming={upcoming}
          onLang={(next) => patch({ lang: next })}
          onSound={() => patch({ sound: !save.sound })}
          onName={(name) => patch({ name })}
          onStart={() => {
            if (upcoming === "done") setScreen("cert");
            else openLevel(upcoming);
          }}
          onMap={() => setScreen("map")}
        />
      )}
      {screen === "map" && (
        <MapScreen
          save={save}
          notice={notice}
          resetArmed={resetArmed}
          onLang={(next) => patch({ lang: next })}
          onSound={() => patch({ sound: !save.sound })}
          onHome={() => setScreen("home")}
          onOpen={openLevel}
          onPreview={() => patch({ previewAll: !save.previewAll })}
          onReset={() => {
            if (!resetArmed) {
              setResetArmed(true);
              return;
            }
            setSave({ ...defaultSave, lang: save.lang, sound: save.sound, name: save.name });
            setResetArmed(false);
            setNotice("");
          }}
          onCert={() => setScreen("cert")}
        />
      )}
      {screen === "play" && (
        <PlayScreen
          save={save}
          levelId={levelId}
          onLang={(next) => patch({ lang: next })}
          onSound={() => patch({ sound: !save.sound })}
          onMap={() => setScreen("map")}
          onClear={(stars) => clearLevel(levelId, stars)}
          onNext={() => {
            if (levelId >= 30) setScreen("cert");
            else openLevel(levelId + 1);
          }}
        />
      )}
      {screen === "cert" && (
        <Certificate
          save={save}
          onName={(name) => patch({ name })}
          onMap={() => setScreen("map")}
          onHome={() => setScreen("home")}
        />
      )}
    </main>
  );
}

function Home({
  save,
  clearedCount,
  upcoming,
  onLang,
  onSound,
  onName,
  onStart,
  onMap,
}: {
  save: Save;
  clearedCount: number;
  upcoming: number | "done";
  onLang: (lang: Lang) => void;
  onSound: () => void;
  onName: (name: string) => void;
  onStart: () => void;
  onMap: () => void;
}) {
  const lang = save.lang;
  const startLabel =
    upcoming === "done" ? tx(ui.finish, lang) : clearedCount > 0 ? `${tx(ui.resume, lang)} · ${upcoming}` : tx(ui.enter, lang);
  return (
    <>
      <header className="topbar">
        <div className="brand">
          <p className="kicker">{tx(ui.kicker, lang)}</p>
          <strong>{tx(ui.labs, lang)}</strong>
        </div>
        <div className="spread">
          <LangSwitch lang={lang} onChange={onLang} />
          <SoundButton on={save.sound} lang={lang} onClick={onSound} />
        </div>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <h1 className="display">{tx(ui.title, lang)}</h1>
          <p className="lede">{tx(ui.hero, lang)}</p>
          <p className="hello">{tx(ui.hello, lang)}</p>
          <ol className="steps">
            <li><b>1</b>{tx(ui.step1, lang)}</li>
            <li><b>2</b>{tx(ui.step2, lang)}</li>
            <li><b>3</b>{tx(ui.step3, lang)}</li>
          </ol>
          <form
            className="stack"
            onSubmit={(event) => {
              event.preventDefault();
              onStart();
            }}
          >
            <label className="field">
              <span>{tx(ui.name, lang)}</span>
              <input
                value={save.name}
                placeholder={tx(ui.namePh, lang)}
                maxLength={40}
                onChange={(event) => onName(event.target.value)}
              />
            </label>
            <button type="submit" className="btn btn-primary btn-block">{startLabel}</button>
          </form>
          <button type="button" className="btn btn-ink btn-block" onClick={onMap}>{tx(ui.browse, lang)}</button>
          {clearedCount > 0 && (
            <p className="paper-muted">
              {clearedCount}/30 {tx(ui.clearedOf, lang)} · {starsLabel(starTotal(save), lang)}
            </p>
          )}
        </div>
        <div className="hero-figure">
          <StickyMan mood="talk" />
          <strong>{tx(ui.stickyName, lang)}</strong>
        </div>
      </section>
      <section className="chapter-list" aria-label={tx(ui.labs, lang)}>
        {CHAPTERS.map((chapter) => (
          <article key={chapter.id} className="chapter-row">
            <span className="idx">0{chapter.id}</span>
            <div>
              <strong>{chapter.title[lang]}</strong>
              <p className="ink-note">{chapter.blurb[lang]}</p>
            </div>
          </article>
        ))}
      </section>
      <p className="ink-note">{tx(ui.device, lang)}</p>
    </>
  );
}

function MapScreen({
  save,
  notice,
  resetArmed,
  onLang,
  onSound,
  onHome,
  onOpen,
  onPreview,
  onReset,
  onCert,
}: {
  save: Save;
  notice: string;
  resetArmed: boolean;
  onLang: (lang: Lang) => void;
  onSound: () => void;
  onHome: () => void;
  onOpen: (id: number) => void;
  onPreview: () => void;
  onReset: () => void;
  onCert: () => void;
}) {
  const lang = save.lang;
  const clearedCount = Object.keys(save.cleared).length;
  const upcoming = nextUncleared(save);
  return (
    <>
      <header className="topbar">
        <button type="button" className="btn btn-ghost" onClick={onHome}>
          <ArrowLeft size={18} />
          {tx(ui.backHome, lang)}
        </button>
        <LangSwitch lang={lang} onChange={onLang} />
        <SoundButton on={save.sound} lang={lang} onClick={onSound} />
      </header>
      <div className="spread">
        <h1 className="display page-title">{tx(ui.browse, lang)}</h1>
      </div>
      <div className="bar" aria-hidden="true"><span style={{ width: `${(clearedCount / 30) * 100}%` }} /></div>
      <p className="ink-note">{clearedCount}/30 · {starsLabel(starTotal(save), lang)}</p>
      {notice && <p className="ink-note">{notice}</p>}
      {CHAPTERS.map((chapter) => (
        <section key={chapter.id} className="map-block">
          <p className="kicker">0{chapter.id}</p>
          <h2 className="display">{chapter.title[lang]}</h2>
          <p className="ink-note">{chapter.blurb[lang]}</p>
          <div className="nodes">
            {Array.from({ length: 5 }, (_, index) => {
              const id = (chapter.id - 1) * 5 + index + 1;
              const open = isOpen(id, save);
              const stars = save.cleared[String(id)] ?? 0;
              const now = upcoming === id;
              return (
                <button
                  key={id}
                  type="button"
                  className={`node ${stars ? "is-done" : ""} ${now ? "is-now" : ""} ${open && !stars && !now ? "is-open" : ""}`}
                  disabled={!open}
                  onClick={() => onOpen(id)}
                  aria-label={levelLabel(id, lang)}
                >
                  {id}
                  {stars > 0 && <span className="badge">{stars}</span>}
                </button>
              );
            })}
          </div>
        </section>
      ))}
      <div className="stack" style={{ marginTop: "1.2rem" }}>
        {clearedCount === 30 && (
          <button type="button" className="btn btn-primary btn-block" onClick={onCert}>{tx(ui.finish, lang)}</button>
        )}
        <button type="button" className="btn btn-ghost btn-block" onClick={onPreview}>
          {save.previewAll ? tx(ui.previewOn, lang) : tx(ui.preview, lang)}
        </button>
        <button type="button" className="linkish" onClick={onReset}>
          {resetArmed ? tx(ui.resetSure, lang) : tx(ui.reset, lang)}
        </button>
      </div>
    </>
  );
}

function PlayScreen({
  save,
  levelId,
  onLang,
  onSound,
  onMap,
  onClear,
  onNext,
}: {
  save: Save;
  levelId: number;
  onLang: (lang: Lang) => void;
  onSound: () => void;
  onMap: () => void;
  onClear: (stars: number) => void;
  onNext: () => void;
}) {
  const level = getLevel(levelId);
  const lang = save.lang;
  const [chat, setChat] = useState<Msg[]>([
    { from: "sticky", key: "intro1" },
    { from: "sticky", key: "intro2" },
  ]);
  const [mood, setMood] = useState<Mood>("talk");
  const [hints, setHints] = useState(0);
  const [misses, setMisses] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [solved, setSolved] = useState(false);
  const [earned, setEarned] = useState(0);
  const reported = useRef(false);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChat([
      { from: "sticky", key: "intro1" },
      { from: "sticky", key: "intro2" },
    ]);
    setMood("talk");
    setHints(0);
    setMisses(0);
    setRevealed(false);
    setSolved(false);
    setEarned(0);
    reported.current = false;
    window.scrollTo(0, 0);
  }, [levelId]);

  useEffect(() => {
    if (mood === "happy") return;
    const timer = window.setTimeout(() => setMood("idle"), 1700);
    return () => window.clearTimeout(timer);
  }, [mood, chat.length]);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [chat.length, lang]);

  function push(extra: Msg[], nextMood: Mood) {
    setChat((current) => [...current, ...extra].slice(-8));
    setMood(nextMood);
  }

  function askHow() {
    const last = chat[chat.length - 1];
    if (last?.from === "sticky" && last.key === "how") return;
    blip("tap", save.sound);
    push([{ from: "you", key: "askHow" }, { from: "sticky", key: "how" }], "talk");
  }

  function askHint() {
    if (solved || revealed) return;
    blip("tap", save.sound);
    if (hints === 0) {
      setHints(1);
      push([{ from: "you", key: "askHint" }, { from: "sticky", key: "hint1" }], "think");
      return;
    }
    if (hints === 1) {
      setHints(2);
      push([{ from: "you", key: "askHint" }, { from: "sticky", key: "hint2" }], "think");
      return;
    }
    setRevealed(true);
    push([{ from: "you", key: "askReveal" }, { from: "sticky", key: "reveal" }], "think");
  }

  function onAttempt(correct: boolean) {
    if (solved) return;
    if (correct) {
      const stars = starScore(misses, hints, revealed);
      setEarned(stars);
      setSolved(true);
      setMood("happy");
      blip("ok", save.sound);
      push([{ from: "sticky", key: "right" }], "happy");
      if (!reported.current) {
        reported.current = true;
        onClear(stars);
      }
      return;
    }
    setMisses((count) => count + 1);
    setMood("oops");
    blip("bad", save.sound);
    setChat((current): Msg[] => {
      const last = current[current.length - 1];
      if (last?.from === "sticky" && last.key === "wrong") return current;
      const next: Msg = { from: "sticky", key: "wrong" };
      return [...current, next].slice(-8);
    });
  }

  const forecast = solved ? earned : starScore(misses, hints, revealed);
  const best = Math.max(save.cleared[String(levelId)] ?? 0, solved ? earned : 0);
  const chapter = CHAPTERS[level.chapter - 1];

  function textOf(msg: Msg) {
    if (msg.from === "you") return tx(ui[msg.key], lang);
    return level[msg.key][lang];
  }

  return (
    <>
      <header className="topbar">
        <button type="button" className="btn btn-ghost" onClick={onMap}>
          <ArrowLeft size={18} />
          {tx(ui.backMap, lang)}
        </button>
        <div>
          <p className="kicker">{chapter?.title[lang]}</p>
          <Stars n={forecast} />
        </div>
        <div className="spread">
          <LangSwitch lang={lang} onChange={onLang} />
          <SoundButton on={save.sound} lang={lang} onClick={onSound} />
        </div>
      </header>
      <div className="play-grid">
        <Puzzle
          key={level.id}
          level={level}
          lang={lang}
          solved={solved}
          revealed={revealed}
          earned={earned}
          best={best}
          onAttempt={onAttempt}
          onNext={onNext}
          onMap={onMap}
        />
        <aside className="chat-dock">
          <div className="chat-card">
            <div className="chat-id">
              <button type="button" className="sticky-hit" onClick={askHow} aria-label={tx(ui.how, lang)}>
                <StickyMan mood={mood} />
              </button>
              <div>
                <strong>{tx(ui.stickyName, lang)}</strong>
                <p className="fine">{tx(ui.solveNow, lang)}</p>
                <Stars n={forecast} />
              </div>
            </div>
            <div className="log" ref={logRef} aria-live="polite">
              {chat.map((msg, index) => (
                <p key={`${msg.from}-${msg.key}-${index}`} className={msg.from === "you" ? "bubble-you" : "bubble"}>
                  <span className="who">{msg.from === "you" ? tx(ui.you, lang) : tx(ui.stickyName, lang)}</span>
                  {textOf(msg)}
                </p>
              ))}
            </div>
            <p className="fine">{tx(ui.howFree, lang)} {tx(ui.hintCost, lang)}</p>
            <button type="button" className="btn btn-ink btn-block" onClick={askHow}>{tx(ui.how, lang)}</button>
            <button type="button" className="btn btn-soft btn-block" onClick={askHint} disabled={solved || revealed}>
              {hints >= 2 ? tx(ui.reveal, lang) : tx(ui.hint, lang)}
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}

function Certificate({
  save,
  onName,
  onMap,
  onHome,
}: {
  save: Save;
  onName: (name: string) => void;
  onMap: () => void;
  onHome: () => void;
}) {
  const lang = save.lang;
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "long", year: "numeric" }));
  }, [lang]);
  const done = Object.keys(save.cleared).length === 30;
  return (
    <>
      <header className="topbar">
        <button type="button" className="btn btn-ghost" onClick={onHome}>{tx(ui.backHome, lang)}</button>
      </header>
      <article className="cert">
        <p className="kicker">{tx(ui.certKicker, lang)}</p>
        <div className="cert-man"><StickyMan mood={done ? "happy" : "talk"} /></div>
        <h2 className="display">{tx(ui.certTitle, lang)}</h2>
        <label className="field">
          <span>{tx(ui.name, lang)}</span>
          <input value={save.name} placeholder={tx(ui.guest, lang)} maxLength={40} onChange={(event) => onName(event.target.value)} />
        </label>
        <p className="lede">
          {done ? (
            <>
              <strong>{save.name.trim() || tx(ui.guest, lang)}</strong> {tx(ui.certBody, lang)}
            </>
          ) : (
            <>{Object.keys(save.cleared).length}/30 {tx(ui.clearedOf, lang)}</>
          )}
        </p>
        <p>{starsLabel(starTotal(save), lang)} / 90</p>
        <p className="paper-muted">{date}</p>
        <p>{tx(ui.certSticky, lang)}</p>
        <p className="paper-muted">{done ? tx(ui.showTeacher, lang) : tx(ui.locked, lang)}</p>
        <button type="button" className="btn btn-primary" onClick={onMap}>{tx(ui.toMap, lang)}</button>
      </article>
    </>
  );
}

function SoundButton({ on, lang, onClick }: { on: boolean; lang: Lang; onClick: () => void }) {
  return (
    <button type="button" className="btn btn-ghost" onClick={onClick} aria-pressed={on} aria-label={tx(ui.sound, lang)}>
      {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}
