import type { Lang } from "@/game/copy";

export type Save = {
  version: 1;
  cleared: Record<string, number>;
  name: string;
  lang: Lang;
  sound: boolean;
  previewAll: boolean;
};

export const defaultSave: Save = {
  version: 1,
  cleared: {},
  name: "",
  lang: "en",
  sound: true,
  previewAll: false,
};

const KEY = "sticky-lab-v1";

export function loadSave(): Save {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...defaultSave, cleared: {} };
    const parsed = JSON.parse(raw) as Partial<Save>;
    if (parsed.version !== 1) return { ...defaultSave, cleared: {} };
    const lang = parsed.lang === "hi" ? "hi" : "en";
    return {
      version: 1,
      cleared: parsed.cleared && typeof parsed.cleared === "object" ? parsed.cleared : {},
      name: typeof parsed.name === "string" ? parsed.name.slice(0, 40) : "",
      lang,
      sound: parsed.sound !== false,
      previewAll: parsed.previewAll === true,
    };
  } catch {
    return { ...defaultSave, cleared: {} };
  }
}

export function writeSave(save: Save) {
  localStorage.setItem(KEY, JSON.stringify(save));
}

export function isOpen(id: number, save: Save) {
  return save.previewAll || id === 1 || Boolean(save.cleared[String(id - 1)]);
}

export function nextUncleared(save: Save): number | "done" {
  for (let i = 1; i <= 30; i++) if (!save.cleared[String(i)]) return i;
  return "done";
}

export function starTotal(save: Save) {
  return Object.values(save.cleared).reduce((sum, n) => sum + n, 0);
}
