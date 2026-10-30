export type Lang = "en" | "hi";
export type L = { en: string; hi: string };

export const tx = (s: L, lang: Lang) => s[lang];

export function levelLabel(id: number, lang: Lang) {
  return lang === "hi" ? `लेवल ${id} / 30` : `Level ${id} / 30`;
}

export function starsLabel(n: number, lang: Lang) {
  if (lang === "hi") return `${n} स्टार`;
  return `${n} star${n === 1 ? "" : "s"}`;
}

export const ui = {
  kicker: { en: "Brain lab", hi: "ब्रेन लैब" },
  title: { en: "Sticky Lab", hi: "स्टिकी लैब" },
  hero: {
    en: "Thirty levels. A stickman who talks you through the trick.",
    hi: "तीस लेवल। एक स्टिकमैन, जो हर सवाल का तरीका बताता है।",
  },
  hello: {
    en: "I'm Sticky. Ask me how before you guess.",
    hi: "मैं स्टिकी हूँ। अंदाज़ा लगाने से पहले मुझसे तरीका पूछो।",
  },
  name: { en: "Name on the certificate", hi: "प्रमाणपत्र पर नाम" },
  namePh: { en: "Your name", hi: "तुम्हारा नाम" },
  enter: { en: "Enter the lab", hi: "लैब में चलो" },
  resume: { en: "Continue", hi: "जारी रखो" },
  browse: { en: "All 30 levels", hi: "सभी 30 लेवल" },
  backHome: { en: "Home", hi: "होम" },
  backMap: { en: "Map", hi: "नक्शा" },
  how: { en: "How do I solve this?", hi: "इसे कैसे सुलझाऊँ?" },
  howFree: { en: "Asking how is free.", hi: "तरीका पूछना फ्री है।" },
  hint: { en: "Nudge me", hi: "हल्का संकेत" },
  hintCost: { en: "A nudge lowers your stars.", hi: "संकेत से स्टार घटते हैं।" },
  reveal: { en: "Show the answer", hi: "उत्तर दिखाओ" },
  watch: { en: "Watch again", hi: "फिर दिखाओ" },
  next: { en: "Next level", hi: "अगला लेवल" },
  finish: { en: "Get the certificate", hi: "प्रमाणपत्र लो" },
  toMap: { en: "Back to map", hi: "नक्शे पर" },
  labNote: { en: "Lab note", hi: "लैब नोट" },
  solveNow: { en: "Stars if you solve it now", hi: "अभी सुलझाओ तो स्टार" },
  cleared: { en: "Cleared", hi: "सुलझ गया" },
  best: { en: "Best", hi: "रिकॉर्ड" },
  locked: {
    en: "Clear the previous level to open this one.",
    hi: "इसे खोलने के लिए पिछला लेवल सुलझाओ।",
  },
  preview: { en: "Preview any level", hi: "कोई भी लेवल खोलो" },
  previewOn: { en: "Preview is on", hi: "सभी लेवल खुले हैं" },
  reset: { en: "Reset progress", hi: "प्रगति मिटाओ" },
  resetSure: { en: "Tap again to reset", hi: "मिटाने के लिए फिर दबाओ" },
  sound: { en: "Sound", hi: "आवाज़" },
  guest: { en: "Student", hi: "विद्यार्थी" },
  askHow: { en: "How do I solve this?", hi: "इसे कैसे सुलझाऊँ?" },
  askHint: { en: "Nudge me.", hi: "हल्का संकेत दो।" },
  askReveal: { en: "Show the answer.", hi: "उत्तर दिखाओ।" },
  certKicker: { en: "School certificate", hi: "स्कूल प्रमाणपत्र" },
  certTitle: { en: "Sticky Lab is clear", hi: "स्टिकी लैब पूरी हुई" },
  certBody: { en: "cleared all 30 levels.", hi: "ने सभी 30 लेवल सुलझाए।" },
  certSticky: {
    en: "You didn't just guess. You learned the trick.",
    hi: "तुमने सिर्फ़ अंदाज़ा नहीं लगाया। तुमने तरीका सीखा।",
  },
  showTeacher: {
    en: "Show this screen for your school project.",
    hi: "स्कूल प्रोजेक्ट में यह स्क्रीन दिखाओ।",
  },
  device: {
    en: "Progress stays on this device.",
    hi: "प्रगति इसी डिवाइस पर रहेगी।",
  },
  yourTurn: { en: "Your turn", hi: "अब तुम्हारी बारी" },
  watching: { en: "Watch closely", hi: "ध्यान से देखो" },
  gridA: { en: "Grid A", hi: "ग्रिड A" },
  gridB: { en: "Grid B", hi: "ग्रिड B" },
  original: { en: "Original", hi: "असली आकृति" },
  undo: { en: "Undo", hi: "वापस" },
  step1: { en: "Open levels in order.", hi: "लेवल क्रम से खोलो।" },
  step2: { en: "Ask Sticky how it works.", hi: "स्टिकी से तरीका पूछो।" },
  step3: {
    en: "Solve it. Fewer misses, more stars.",
    hi: "सुलझाओ। कम गलती, ज़्यादा स्टार।",
  },
  labs: { en: "Six labs", hi: "छह लैब" },
  stickyName: { en: "Sticky", hi: "स्टिकी" },
  you: { en: "You", hi: "तुम" },
  clearedOf: { en: "cleared", hi: "सुलझे" },
  fore: { en: "Next up", hi: "अगला" },
};