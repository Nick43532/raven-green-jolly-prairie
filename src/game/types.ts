import type { L } from "@/game/copy";

export type Mode = "choice" | "memory" | "digits" | "spot" | "letters";
export type ChoiceKind = "text" | "poly" | "arrow" | "hand" | "mirror";

export type Visual =
  | { type: "none" }
  | { type: "sequence"; items: string[] }
  | { type: "squares"; upTo: number }
  | { type: "tri"; upTo: number }
  | { type: "arrows"; dirs: string[] }
  | { type: "hands"; degrees: number[] }
  | { type: "mirror" }
  | { type: "pair"; left: [L, L]; right: [L, L] }
  | { type: "statements"; lines: L[] }
  | { type: "chairs" }
  | { type: "clock" }
  | { type: "scale"; note: L }
  | { type: "symbolWatch"; shown: string[] }
  | { type: "grid" }
  | { type: "spot"; left: number[]; right: number[] }
  | { type: "letters"; tiles: string[] };

export type Level = {
  id: number;
  chapter: number;
  title: L;
  mode: Mode;
  visual: Visual;
  prompt: L;
  choices?: L[];
  choiceKind?: ChoiceKind;
  choiceData?: string[];
  answer: string;
  intro1: L;
  intro2: L;
  how: L;
  hint1: L;
  hint2: L;
  wrong: L;
  right: L;
  reveal: L;
  explain: L;
};

export function starScore(misses: number, hints: number, revealed: boolean) {
  if (revealed) return 1;
  const cost = misses + hints;
  if (cost <= 0) return 3;
  if (cost === 1) return 2;
  return 1;
}
