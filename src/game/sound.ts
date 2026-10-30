let ctx: AudioContext | null = null;

function ac() {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext;
  if (!Ctor) return null;
  if (!ctx) ctx = new Ctor();
  return ctx;
}

export function blip(kind: "ok" | "bad" | "tap", on: boolean) {
  if (!on) return;
  const context = ac();
  if (!context) return;
  if (context.state === "suspended") void context.resume();
  const now = context.currentTime;
  const notes = kind === "ok" ? [523, 659, 784] : kind === "bad" ? [220, 174] : [680];
  notes.forEach((freq, i) => {
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    const start = now + i * 0.07;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(kind === "tap" ? 0.035 : 0.06, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.2);
    osc.connect(gain);
    gain.connect(context.destination);
    osc.start(start);
    osc.stop(start + 0.22);
  });
}
