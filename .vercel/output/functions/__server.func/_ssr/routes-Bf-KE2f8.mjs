import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowLeft, i as Star, n as Volume2, t as VolumeX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bf-KE2f8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tx = (s, lang) => s[lang];
function levelLabel(id, lang) {
	return lang === "hi" ? `लेवल ${id} / 30` : `Level ${id} / 30`;
}
function starsLabel(n, lang) {
	if (lang === "hi") return `${n} स्टार`;
	return `${n} star${n === 1 ? "" : "s"}`;
}
var ui = {
	kicker: {
		en: "Brain lab",
		hi: "ब्रेन लैब"
	},
	title: {
		en: "Sticky Lab",
		hi: "स्टिकी लैब"
	},
	hero: {
		en: "Thirty levels. A stickman who talks you through the trick.",
		hi: "तीस लेवल। एक स्टिकमैन, जो हर सवाल का तरीका बताता है।"
	},
	hello: {
		en: "I'm Sticky. Ask me how before you guess.",
		hi: "मैं स्टिकी हूँ। अंदाज़ा लगाने से पहले मुझसे तरीका पूछो।"
	},
	name: {
		en: "Name on the certificate",
		hi: "प्रमाणपत्र पर नाम"
	},
	namePh: {
		en: "Your name",
		hi: "तुम्हारा नाम"
	},
	enter: {
		en: "Enter the lab",
		hi: "लैब में चलो"
	},
	resume: {
		en: "Continue",
		hi: "जारी रखो"
	},
	browse: {
		en: "All 30 levels",
		hi: "सभी 30 लेवल"
	},
	backHome: {
		en: "Home",
		hi: "होम"
	},
	backMap: {
		en: "Map",
		hi: "नक्शा"
	},
	how: {
		en: "How do I solve this?",
		hi: "इसे कैसे सुलझाऊँ?"
	},
	howFree: {
		en: "Asking how is free.",
		hi: "तरीका पूछना फ्री है।"
	},
	hint: {
		en: "Nudge me",
		hi: "हल्का संकेत"
	},
	hintCost: {
		en: "A nudge lowers your stars.",
		hi: "संकेत से स्टार घटते हैं।"
	},
	reveal: {
		en: "Show the answer",
		hi: "उत्तर दिखाओ"
	},
	watch: {
		en: "Watch again",
		hi: "फिर दिखाओ"
	},
	next: {
		en: "Next level",
		hi: "अगला लेवल"
	},
	finish: {
		en: "Get the certificate",
		hi: "प्रमाणपत्र लो"
	},
	toMap: {
		en: "Back to map",
		hi: "नक्शे पर"
	},
	labNote: {
		en: "Lab note",
		hi: "लैब नोट"
	},
	solveNow: {
		en: "Stars if you solve it now",
		hi: "अभी सुलझाओ तो स्टार"
	},
	cleared: {
		en: "Cleared",
		hi: "सुलझ गया"
	},
	best: {
		en: "Best",
		hi: "रिकॉर्ड"
	},
	locked: {
		en: "Clear the previous level to open this one.",
		hi: "इसे खोलने के लिए पिछला लेवल सुलझाओ।"
	},
	preview: {
		en: "Preview any level",
		hi: "कोई भी लेवल खोलो"
	},
	previewOn: {
		en: "Preview is on",
		hi: "सभी लेवल खुले हैं"
	},
	reset: {
		en: "Reset progress",
		hi: "प्रगति मिटाओ"
	},
	resetSure: {
		en: "Tap again to reset",
		hi: "मिटाने के लिए फिर दबाओ"
	},
	sound: {
		en: "Sound",
		hi: "आवाज़"
	},
	guest: {
		en: "Student",
		hi: "विद्यार्थी"
	},
	askHow: {
		en: "How do I solve this?",
		hi: "इसे कैसे सुलझाऊँ?"
	},
	askHint: {
		en: "Nudge me.",
		hi: "हल्का संकेत दो।"
	},
	askReveal: {
		en: "Show the answer.",
		hi: "उत्तर दिखाओ।"
	},
	certKicker: {
		en: "School certificate",
		hi: "स्कूल प्रमाणपत्र"
	},
	certTitle: {
		en: "Sticky Lab is clear",
		hi: "स्टिकी लैब पूरी हुई"
	},
	certBody: {
		en: "cleared all 30 levels.",
		hi: "ने सभी 30 लेवल सुलझाए।"
	},
	certSticky: {
		en: "You didn't just guess. You learned the trick.",
		hi: "तुमने सिर्फ़ अंदाज़ा नहीं लगाया। तुमने तरीका सीखा।"
	},
	showTeacher: {
		en: "Show this screen for your school project.",
		hi: "स्कूल प्रोजेक्ट में यह स्क्रीन दिखाओ।"
	},
	device: {
		en: "Progress stays on this device.",
		hi: "प्रगति इसी डिवाइस पर रहेगी।"
	},
	yourTurn: {
		en: "Your turn",
		hi: "अब तुम्हारी बारी"
	},
	watching: {
		en: "Watch closely",
		hi: "ध्यान से देखो"
	},
	gridA: {
		en: "Grid A",
		hi: "ग्रिड A"
	},
	gridB: {
		en: "Grid B",
		hi: "ग्रिड B"
	},
	original: {
		en: "Original",
		hi: "असली आकृति"
	},
	undo: {
		en: "Undo",
		hi: "वापस"
	},
	step1: {
		en: "Open levels in order.",
		hi: "लेवल क्रम से खोलो।"
	},
	step2: {
		en: "Ask Sticky how it works.",
		hi: "स्टिकी से तरीका पूछो।"
	},
	step3: {
		en: "Solve it. Fewer misses, more stars.",
		hi: "सुलझाओ। कम गलती, ज़्यादा स्टार।"
	},
	labs: {
		en: "Six labs",
		hi: "छह लैब"
	},
	stickyName: {
		en: "Sticky",
		hi: "स्टिकी"
	},
	you: {
		en: "You",
		hi: "तुम"
	},
	clearedOf: {
		en: "cleared",
		hi: "सुलझे"
	},
	fore: {
		en: "Next up",
		hi: "अगला"
	}
};
var L = (en, hi) => ({
	en,
	hi
});
var CHAPTERS = [
	{
		id: 1,
		title: L("Number Tracks", "नंबर ट्रैक"),
		blurb: L("Gaps, multiples, and two lanes at once.", "फासले, गुणा, और एक साथ दो लेन।")
	},
	{
		id: 2,
		title: L("Pattern Eye", "पैटर्न आँख"),
		blurb: L("Sides, turns, piles, and mirrors.", "भुजाएँ, मोड़, ढेर, और दर्पण।")
	},
	{
		id: 3,
		title: L("Word Bench", "शब्द बेंच"),
		blurb: L("Pairs, odd words, and a scrambled sign.", "जोड़े, अलग शब्द, और उलझे अक्षर।")
	},
	{
		id: 4,
		title: L("Logic Lane", "लॉजिक लेन"),
		blurb: L("Proofs, a clock, chairs, and a balance.", "प्रमाण, घड़ी, कुर्सियाँ, और तराजू।")
	},
	{
		id: 5,
		title: L("Focus Drill", "फोकस ड्रिल"),
		blurb: L("Watch once, then answer from a careful look.", "एक बार देखो, फिर ध्यान से जवाब दो।")
	},
	{
		id: 6,
		title: L("Trick Desk", "ट्रिक डेस्क"),
		blurb: L("Fast guesses fail. Slow reading wins.", "जल्दी का अंदाज़ा हारता है। धीमे पढ़ो।")
	}
];
var talk = { wrong: L("Not that one. Use the method, not a wild guess.", "यह नहीं। तरीका लगाओ, अंदाज़ा नहीं।") };
var LEVELS = [
	{
		id: 1,
		chapter: 1,
		title: L("Growing gaps", "बढ़ते फासले"),
		mode: "choice",
		visual: {
			type: "sequence",
			items: [
				"2",
				"6",
				"12",
				"20",
				"30"
			]
		},
		prompt: L("What number comes next?", "अगला नंबर क्या है?"),
		choices: [
			L("40", "40"),
			L("42", "42"),
			L("44", "44"),
			L("36", "36")
		],
		answer: "1",
		intro1: L("A trail of numbers with a hole at the end.", "नंबरों का रास्ता है, आखिर में एक छेद।"),
		intro2: L("Don't multiply yet. Look at the gaps.", "अभी गुणा मत करो। फासले देखो।"),
		how: L("Subtract each pair. Those gaps grow by 2. Add the next gap to 30.", "हर जोड़े को घटाओ। फासला हर बार 2 बढ़ता है। 30 में अगला फासला जोड़ो।"),
		hint1: L("From 2 to 6 is +4. From 6 to 12 is +6.", "2 से 6 तक +4। 6 से 12 तक +6।"),
		hint2: L("The gaps are +4, +6, +8, +10. Next gap is +12.", "फासले +4, +6, +8, +10 हैं। अगला +12 है।"),
		wrong: talk.wrong,
		right: L("The trail lands on 42.", "रास्ता 42 पर खत्म होता है।"),
		reveal: L("30 + 12 = 42. That is the next tile.", "30 + 12 = 42। यही अगली टाइल है।"),
		explain: L("2+4=6, 6+6=12, 12+8=20, 20+10=30, 30+12=42. The gaps grow by 2.", "2+4=6, 6+6=12, 12+8=20, 20+10=30, 30+12=42। फासला हर बार 2 बढ़ता है।")
	},
	{
		id: 2,
		chapter: 1,
		title: L("Triple steps", "तिगुने कदम"),
		mode: "choice",
		visual: {
			type: "sequence",
			items: [
				"3",
				"9",
				"27",
				"81"
			]
		},
		prompt: L("What number comes next?", "अगला नंबर क्या है?"),
		choices: [
			L("162", "162"),
			L("324", "324"),
			L("243", "243"),
			L("108", "108")
		],
		answer: "2",
		intro1: L("This trail is too steep for adding.", "यह रास्ता जोड़ के लिए बहुत तेज़ है।"),
		intro2: L("Check what you multiply by each time.", "देखो हर बार किससे गुणा हो रहा है।"),
		how: L("Divide a term by the one before it. The same multiplier shows up.", "किसी नंबर को पिछले से बाँटो। वही गुणक बार-बार मिलेगा।"),
		hint1: L("9 ÷ 3 = 3. 27 ÷ 9 = 3. Same jump.", "9 ÷ 3 = 3। 27 ÷ 9 = 3। हर छलांग एक जैसी है।"),
		hint2: L("Multiply the last tile by 3.", "आखिरी टाइल को 3 से गुणा करो।"),
		wrong: talk.wrong,
		right: L("81 times 3 is 243.", "81 गुणा 3 बराबर 243।"),
		reveal: L("Each step is ×3. 81 × 3 = 243.", "हर कदम ×3 है। 81 × 3 = 243।"),
		explain: L("3×3=9, 9×3=27, 27×3=81, 81×3=243.", "3×3=9, 9×3=27, 27×3=81, 81×3=243।")
	},
	{
		id: 3,
		chapter: 1,
		title: L("Adding neighbors", "पड़ोसी जोड़"),
		mode: "choice",
		visual: {
			type: "sequence",
			items: [
				"1",
				"1",
				"2",
				"3",
				"5",
				"8"
			]
		},
		prompt: L("What number comes next?", "अगला नंबर क्या है?"),
		choices: [
			L("11", "11"),
			L("13", "13"),
			L("15", "15"),
			L("21", "21")
		],
		answer: "1",
		intro1: L("Two 1s open the trail. That is a clue.", "शुरुआत में दो 1 हैं। यही संकेत है।"),
		intro2: L("Each new number is built from the two behind it.", "हर नया नंबर अपने पीछे के दो से बनता है।"),
		how: L("Add the last two tiles. That sum is the next tile.", "आखिरी दो टाइल जोड़ो। वही योग अगली टाइल है।"),
		hint1: L("2+3=5 and 3+5=8. Keep that habit.", "2+3=5 और 3+5=8। यही आदत जारी रखो।"),
		hint2: L("The last two tiles are 5 and 8.", "आखिरी दो टाइल 5 और 8 हैं।"),
		wrong: talk.wrong,
		right: L("5+8 makes 13. Classic neighbor sum.", "5+8 = 13। यही पड़ोसी जोड़ है।"),
		reveal: L("5+8=13. The next number is 13.", "5+8=13। अगला नंबर 13 है।"),
		explain: L("This is the Fibonacci trail: 1, 1, 2, 3, 5, 8, 13. Each term is the sum of the two before it.", "यह फिबोनाची क्रम है: 1, 1, 2, 3, 5, 8, 13। हर नंबर अपने पहले दो का योग है।")
	},
	{
		id: 4,
		chapter: 1,
		title: L("Two lanes", "दो लेन"),
		mode: "choice",
		visual: {
			type: "sequence",
			items: [
				"7",
				"10",
				"8",
				"11",
				"9",
				"12"
			]
		},
		prompt: L("What number comes next?", "अगला नंबर क्या है?"),
		choices: [
			L("13", "13"),
			L("15", "15"),
			L("11", "11"),
			L("10", "10")
		],
		answer: "3",
		intro1: L("One rule on the whole line feels messy.", "पूरी लाइन पर एक नियम अजीब लगता है।"),
		intro2: L("Split it into odd places and even places.", "इसे विषम जगहों और सम जगहों में बाँटो।"),
		how: L("Read 1st, 3rd, 5th as one lane, and 2nd, 4th, 6th as another. The question mark is in the first lane.", "1st, 3rd, 5th एक लेन है। 2nd, 4th, 6th दूसरी। सवाल पहली लेन में है।"),
		hint1: L("Lane one: 7, 8, 9. Lane two: 10, 11, 12.", "पहली लेन: 7, 8, 9। दूसरी: 10, 11, 12।"),
		hint2: L("Lane one goes up by 1. After 9 comes 10.", "पहली लेन 1-1 बढ़ती है। 9 के बाद 10।"),
		wrong: talk.wrong,
		right: L("The hidden lane steps to 10.", "छिपी लेन 10 पर पहुँचती है।"),
		reveal: L("Places 1, 3, 5, 7 are 7, 8, 9, 10.", "जगह 1, 3, 5, 7 पर 7, 8, 9, 10 हैं।"),
		explain: L("Odd places climb 7, 8, 9, 10. Even places climb 10, 11, 12. The 7th term is 10.", "विषम जगहें: 7, 8, 9, 10। सम जगहें: 10, 11, 12। सातवाँ नंबर 10 है।")
	},
	{
		id: 5,
		chapter: 1,
		title: L("Square piles", "वर्गों के ढेर"),
		mode: "choice",
		visual: {
			type: "squares",
			upTo: 4
		},
		prompt: L("How many dots are in the next square?", "अगले वर्ग में कितने बिंदु हैं?"),
		choices: [
			L("20", "20"),
			L("36", "36"),
			L("25", "25"),
			L("32", "32")
		],
		answer: "2",
		intro1: L("These piles are squares, not random dots.", "ये ढेर वर्ग हैं, बेतरतीब बिंदु नहीं।"),
		intro2: L("Count the side, then the side times itself.", "भुजा गिनो, फिर भुजा को भुजा से गुणा करो।"),
		how: L("The piles are 1×1, 2×2, 3×3, 4×4. Build the next square the same way.", "ढेर हैं 1×1, 2×2, 3×3, 4×4। अगला वर्ग वैसे ही बनाओ।"),
		hint1: L("The counts are 1, 4, 9, 16. Those are square numbers.", "गिनती है 1, 4, 9, 16। ये वर्ग संख्याएँ हैं।"),
		hint2: L("The next side is 5. 5×5 is the count.", "अगली भुजा 5 है। 5×5 ही गिनती है।"),
		wrong: talk.wrong,
		right: L("A 5 by 5 square holds 25 dots.", "5 गुणा 5 वाले वर्ग में 25 बिंदु हैं।"),
		reveal: L("5×5=25. The next pile has 25 dots.", "5×5=25। अगले ढेर में 25 बिंदु हैं।"),
		explain: L("1, 4, 9, 16, 25 are 1², 2², 3², 4², 5².", "1, 4, 9, 16, 25 यानी 1², 2², 3², 4², 5²।")
	},
	{
		id: 6,
		chapter: 2,
		title: L("The odd side", "अजीब भुजा"),
		mode: "choice",
		choiceKind: "poly",
		choiceData: [
			"4",
			"6",
			"8",
			"5"
		],
		visual: { type: "none" },
		prompt: L("Which shape does not belong?", "कौन सी आकृति अलग है?"),
		choices: [
			L("A", "A"),
			L("B", "B"),
			L("C", "C"),
			L("D", "D")
		],
		answer: "3",
		intro1: L("Don't pick the shape you like. Count.", "जो आकृति पसंद हो उसे मत चुनो। गिनो।"),
		intro2: L("The rule is hiding in the number of sides.", "नियम भुजाओं की गिनती में छिपा है।"),
		how: L("Count every side. Three of those counts are even. One is odd.", "हर भुजा गिनो। तीन गिनतियाँ सम हैं। एक विषम है।"),
		hint1: L("Trace the outline with your eye, corner to corner.", "कोने से कोने तक किनारा आँख से ट्रेस करो।"),
		hint2: L("4, 6, and 8 are even. One shape has 5 sides.", "4, 6 और 8 सम हैं। एक आकृति की 5 भुजाएँ हैं।"),
		wrong: talk.wrong,
		right: L("The pentagon is the odd one out.", "पंचभुज ही अलग है।"),
		reveal: L("Shape D has 5 sides. Five is the only odd count.", "आकृति D की 5 भुजाएँ हैं। पाँच ही अकेली विषम गिनती है।"),
		explain: L("Square 4, hexagon 6, octagon 8, pentagon 5. Only 5 is odd, so D does not belong.", "वर्ग 4, षट्भुज 6, अष्टभुज 8, पंचभुज 5। सिर्फ़ 5 विषम है, इसलिए D अलग है।")
	},
	{
		id: 7,
		chapter: 2,
		title: L("Quarter turns", "चौथाई मोड़"),
		mode: "choice",
		choiceKind: "arrow",
		choiceData: [
			"e",
			"n",
			"w",
			"s"
		],
		visual: {
			type: "arrows",
			dirs: [
				"n",
				"e",
				"s",
				"w"
			]
		},
		prompt: L("Which way does the next arrow point?", "अगला तीर किस तरफ़ है?"),
		choices: [
			L("Right", "दाएँ"),
			L("Up", "ऊपर"),
			L("Left", "बाएँ"),
			L("Down", "नीचे")
		],
		answer: "1",
		intro1: L("The arrow is turning, not jumping around.", "तीर घूम रहा है, बेतरतीब नहीं कूद रहा।"),
		intro2: L("Each step is the same turn.", "हर कदम पर मोड़ एक जैसा है।"),
		how: L("A quarter turn clockwise: up, right, down, left, then back to up.", "घड़ी की दिशा में चौथाई मोड़: ऊपर, दाएँ, नीचे, बाएँ, फिर ऊपर।"),
		hint1: L("From up it went right. That is a right turn.", "ऊपर से दाएँ गया। यह दाएँ तरफ का मोड़ है।"),
		hint2: L("After left, the next quarter turn points up.", "बाएँ के बाद अगला चौथाई मोड़ ऊपर की तरफ़ है।"),
		wrong: talk.wrong,
		right: L("It comes back to up.", "वह फिर ऊपर आ जाता है।"),
		reveal: L("The cycle is up, right, down, left, up.", "चक्र है: ऊपर, दाएँ, नीचे, बाएँ, ऊपर।"),
		explain: L("Each arrow turns 90° clockwise. After left, the next one points up.", "हर तीर 90° घड़ी की दिशा में मुड़ता है। बाएँ के बाद अगला ऊपर है।")
	},
	{
		id: 8,
		chapter: 2,
		title: L("Dot piles", "बिंदुओं के ढेर"),
		mode: "choice",
		visual: {
			type: "tri",
			upTo: 4
		},
		prompt: L("How many dots are in the next pile?", "अगले ढेर में कितने बिंदु हैं?"),
		choices: [
			L("12", "12"),
			L("15", "15"),
			L("18", "18"),
			L("21", "21")
		],
		answer: "1",
		intro1: L("Each pile adds a longer row at the bottom.", "हर ढेर के नीचे एक लंबी पंक्ति जुड़ती है।"),
		intro2: L("The new row is one dot longer than the row above it.", "नई पंक्ति ऊपर वाली से एक बिंदु लंबी है।"),
		how: L("The counts are 1, 3, 6, 10. The gaps are +2, +3, +4. Keep going.", "गिनती 1, 3, 6, 10 है। फासले +2, +3, +4। आगे बढ़ाओ।"),
		hint1: L("A new row of 5 dots joins the pile of 10.", "10 वाले ढेर में 5 बिंदुओं की नई पंक्ति जुड़ती है।"),
		hint2: L("10 + 5 = 15.", "10 + 5 = 15।"),
		wrong: talk.wrong,
		right: L("The next triangle holds 15 dots.", "अगले त्रिभुज में 15 बिंदु हैं।"),
		reveal: L("10 + 5 = 15. That is the next pile.", "10 + 5 = 15। यही अगला ढेर है।"),
		explain: L("These are triangle numbers: 1, 3, 6, 10, 15. Each new row adds one more dot.", "ये त्रिकोण संख्याएँ हैं: 1, 3, 6, 10, 15। हर नई पंक्ति में एक बिंदु और होता है।")
	},
	{
		id: 9,
		chapter: 2,
		title: L("The sweeping hand", "घूमता काँटा"),
		mode: "choice",
		choiceKind: "hand",
		choiceData: [
			"225",
			"90",
			"180",
			"0"
		],
		visual: {
			type: "hands",
			degrees: [
				0,
				45,
				90,
				135
			]
		},
		prompt: L("Where is the hand next?", "काँटा अगली बार कहाँ होगा?"),
		choices: [
			L("225°", "225°"),
			L("90°", "90°"),
			L("180°", "180°"),
			L("0°", "0°")
		],
		answer: "2",
		intro1: L("The hand sweeps the same amount each frame.", "काँटा हर चित्र में उतना ही घूमता है।"),
		intro2: L("Measure the turn, not the picture you like.", "पसंद का चित्र नहीं, मोड़ नापो।"),
		how: L("From one frame to the next is 45° clockwise. Add 45° to the last frame.", "एक चित्र से अगले तक 45° घड़ी की दिशा में। आखिरी में 45° जोड़ो।"),
		hint1: L("The frames are 0°, 45°, 90°, 135°.", "चित्र हैं 0°, 45°, 90°, 135°।"),
		hint2: L("135 + 45 = 180. That points straight down.", "135 + 45 = 180। वह सीधा नीचे है।"),
		wrong: talk.wrong,
		right: L("180° points down. That is the next frame.", "180° नीचे की तरफ़ है। यही अगला चित्र है।"),
		reveal: L("135° + 45° = 180°. Pick the hand pointing down.", "135° + 45° = 180°। नीचे वाला काँटा चुनो।"),
		explain: L("The hand turns 45° clockwise each time. After 135° comes 180°.", "काँटा हर बार 45° घड़ी की दिशा में मुड़ता है। 135° के बाद 180° आता है।")
	},
	{
		id: 10,
		chapter: 2,
		title: L("Mirror test", "दर्पण परीक्षा"),
		mode: "choice",
		choiceKind: "mirror",
		choiceData: [
			"0",
			"1",
			"2",
			"3"
		],
		visual: { type: "mirror" },
		prompt: L("Which picture is the vertical mirror?", "खड़ा दर्पण कौन सा चित्र है?"),
		choices: [
			L("1", "1"),
			L("2", "2"),
			L("3", "3"),
			L("4", "4")
		],
		answer: "1",
		intro1: L("A mirror swaps sides. It does not spin the shape.", "दर्पण बाएँ-दाएँ बदलता है। वह आकृति को घुमाता नहीं।"),
		intro2: L("Keep the tall column, and send it to the other side.", "लंबा खाना वही रहे, बस दूसरी तरफ़ चला जाए।"),
		how: L("A vertical mirror flips left and right. The foot of the L stays on the bottom.", "खड़ा दर्पण बाएँ-दाएँ पलटता है। L का पैर नीचे ही रहता है।"),
		hint1: L("If it is upside down, that is a turn, not a mirror.", "अगर उल्टा है, तो वह घुमाव है, दर्पण नहीं।"),
		hint2: L("The filled column moves from the left edge to the right edge.", "भरा खाना बाएँ किनारे से दाएँ किनारे चला जाता है।"),
		wrong: talk.wrong,
		right: L("Left and right swapped. The bottom stayed put.", "बाएँ-दाएँ बदले। निचला हिस्सा वहीं रहा।"),
		reveal: L("Picture 2 is the left-right flip. That is the mirror.", "चित्र 2 बाएँ-दाएँ पलटा है। वही दर्पण है।"),
		explain: L("Picture 1 is the same shape. Picture 2 flips left and right. Picture 3 flips up and down. Picture 4 is a half turn.", "चित्र 1 वही है। चित्र 2 बाएँ-दाएँ पलटता है। चित्र 3 ऊपर-नीचे। चित्र 4 आधा चक्कर है।")
	},
	{
		id: 11,
		chapter: 3,
		title: L("Tool of the trade", "काम का औज़ार"),
		mode: "choice",
		visual: {
			type: "pair",
			left: [L("Painter", "पेंटर"), L("Brush", "ब्रश")],
			right: [L("Writer", "लेखक"), L("?", "?")]
		},
		prompt: L("A painter's tool is a brush. A writer's tool is…", "पेंटर का औज़ार ब्रश है। लेखक का औज़ार है…"),
		choices: [
			L("Book", "किताब"),
			L("Paper", "कागज़"),
			L("Pen", "कलम"),
			L("Desk", "मेज़")
		],
		answer: "2",
		intro1: L("Read it as tool, not as the thing they make.", "इसे औज़ार की तरह पढ़ो, बनाई चीज़ की तरह नहीं।"),
		intro2: L("Brush is what the painter uses. Match that job.", "ब्रश पेंटर इस्तेमाल करता है। वही रिश्ता मिलाओ।"),
		how: L("Say the link out loud: person, then the tool in their hand.", "रिश्ता बोलो: व्यक्ति, फिर उसके हाथ का औज़ार।"),
		hint1: L("A book is the result. A pen is the tool.", "किताब नतीजा है। कलम औज़ार है।"),
		hint2: L("The writer writes with a pen.", "लेखक कलम से लिखता है।"),
		wrong: talk.wrong,
		right: L("Writer is to pen, the way painter is to brush.", "लेखक और कलम, जैसे पेंटर और ब्रश।"),
		reveal: L("The matching tool is the pen.", "मिलता औज़ार कलम है।"),
		explain: L("Painter : brush :: writer : pen. The link is the tool they work with, not the object they produce.", "पेंटर : ब्रश :: लेखक : कलम। रिश्ता उनके औज़ार का है, उनकी बनी चीज़ का नहीं।")
	},
	{
		id: 12,
		chapter: 3,
		title: L("Not a city", "शहर नहीं"),
		mode: "choice",
		visual: { type: "none" },
		prompt: L("Which one does not belong?", "कौन सा इस समूह में नहीं है?"),
		choices: [
			L("Delhi", "दिल्ली"),
			L("Mumbai", "मुंबई"),
			L("Kolkata", "कोलकाता"),
			L("Ganga", "गंगा")
		],
		answer: "3",
		intro1: L("Three of these are the same kind of place.", "इनमें से तीन एक ही तरह की जगह हैं।"),
		intro2: L("Name what each one is, in one word.", "हर एक को एक शब्द में बताओ कि वह क्या है।"),
		how: L("Sort them into cities and everything else. The leftover is the answer.", "उन्हें शहर और बाकी में बाँटो। जो बच जाए, वही जवाब है।"),
		hint1: L("Delhi, Mumbai, and Kolkata are cities.", "दिल्ली, मुंबई और कोलकाता शहर हैं।"),
		hint2: L("Ganga is a river.", "गंगा एक नदी है।"),
		wrong: talk.wrong,
		right: L("Ganga is the river among the cities.", "शहरों के बीच गंगा नदी है।"),
		reveal: L("Ganga does not belong. It is a river.", "गंगा अलग है। वह नदी है।"),
		explain: L("Delhi, Mumbai, and Kolkata are cities. The Ganga is a river.", "दिल्ली, मुंबई और कोलकाता शहर हैं। गंगा एक नदी है।")
	},
	{
		id: 13,
		chapter: 3,
		title: L("Scrambled sign", "उलझे अक्षर"),
		mode: "letters",
		visual: {
			type: "letters",
			tiles: [
				"O",
				"L",
				"C",
				"S",
				"H",
				"O"
			]
		},
		prompt: L("Tap the tiles so they spell the place.", "टाइल छूकर वह जगह लिखो।"),
		answer: "SCHOOL",
		intro1: L("The letters of a familiar place are shuffled.", "एक जानी जगह के अक्षर बिखरे हैं।"),
		intro2: L("You walk there on a school day.", "स्कूल वाले दिन तुम वहीं जाते हो।"),
		how: L("Look for a word you already know. Start it with S, and use both O tiles.", "जो शब्द पहले से जानते हो उसे देखो। S से शुरू करो, और दोनों O लगाओ।"),
		hint1: L("It has six letters and a double O in the middle.", "इसमें छह अक्षर हैं, और बीच में दो O।"),
		hint2: L("It spells SCHOOL.", "शब्द है SCHOOL।"),
		wrong: L("That spelling isn't the place. Try another order.", "यह वर्तनी उस जगह की नहीं। दूसरा क्रम आजमाओ।"),
		right: L("SCHOOL. The sign is straight.", "SCHOOL। साइन सीधा हो गया।"),
		reveal: L("The order is S-C-H-O-O-L.", "क्रम है S-C-H-O-O-L।"),
		explain: L("O, L, C, S, H, O rearrange to SCHOOL.", "O, L, C, S, H, O को सजाने पर SCHOOL बनता है।")
	},
	{
		id: 14,
		chapter: 3,
		title: L("Workplace", "काम की जगह"),
		mode: "choice",
		visual: {
			type: "pair",
			left: [L("Doctor", "डॉक्टर"), L("Hospital", "अस्पताल")],
			right: [L("Teacher", "शिक्षक"), L("?", "?")]
		},
		prompt: L("Where does the teacher work?", "शिक्षक कहाँ काम करता है?"),
		choices: [
			L("Library", "पुस्तकालय"),
			L("School", "स्कूल"),
			L("Office", "दफ़्तर"),
			L("Market", "बाज़ार")
		],
		answer: "1",
		intro1: L("Same kind of link as the tool puzzle.", "रिश्ता औज़ार वाले सवाल जैसा है।"),
		intro2: L("This time the link is the workplace.", "इस बार रिश्ता काम की जगह का है।"),
		how: L("Doctor works in a hospital. Say the matching workplace for a teacher.", "डॉक्टर अस्पताल में काम करता है। शिक्षक की जगह वही तरह से बोलो।"),
		hint1: L("A library is a place you visit. The workplace is more exact.", "पुस्तकालय घूमने की जगह है। काम की जगह इससे सटीक है।"),
		hint2: L("A teacher works in a school.", "शिक्षक स्कूल में काम करता है।"),
		wrong: talk.wrong,
		right: L("Teacher is to school.", "शिक्षक का स्कूल।"),
		reveal: L("The match is school.", "सही जोड़ी स्कूल है।"),
		explain: L("Doctor : hospital :: teacher : school. Both pairs are a worker and their workplace.", "डॉक्टर : अस्पताल :: शिक्षक : स्कूल। दोनों जोड़े में काम करने वाला और उसकी जगह है।")
	},
	{
		id: 15,
		chapter: 3,
		title: L("Wrong measure", "गलत माप"),
		mode: "choice",
		visual: { type: "none" },
		prompt: L("Which unit does not belong?", "कौन सी इकाई अलग है?"),
		choices: [
			L("Inch", "इंच"),
			L("Meter", "मीटर"),
			L("Liter", "लीटर"),
			L("Yard", "यार्ड")
		],
		answer: "2",
		intro1: L("Say what each unit measures.", "बोलो हर इकाई क्या नापती है।"),
		intro2: L("Three measure the same kind of thing.", "तीन एक ही चीज़ नापती हैं।"),
		how: L("Length units sit together. The one that measures volume is the outsider.", "लंबाई की इकाइयाँ साथ रहती हैं। जो आयतन नापे, वह अलग है।"),
		hint1: L("Inch, meter, and yard are lengths.", "इंच, मीटर और यार्ड लंबाई हैं।"),
		hint2: L("A liter measures liquid, not length.", "लीटर तरल नापता है, लंबाई नहीं।"),
		wrong: talk.wrong,
		right: L("Liter is the volume unit.", "लीटर आयतन की इकाई है।"),
		reveal: L("Liter does not belong.", "लीटर अलग है।"),
		explain: L("Inch, meter, and yard measure length. Liter measures volume.", "इंच, मीटर और यार्ड लंबाई नापते हैं। लीटर आयतन नापता है।")
	},
	{
		id: 16,
		chapter: 4,
		title: L("Wing proof", "पंख वाला प्रमाण"),
		mode: "choice",
		visual: {
			type: "statements",
			lines: [L("All sparrows are birds.", "सभी गौरैया पक्षी हैं।"), L("All birds have wings.", "सभी पक्षियों के पंख होते हैं।")]
		},
		prompt: L("Do all sparrows have wings?", "क्या सभी गौरैया के पंख होते हैं?"),
		choices: [
			L("No", "नहीं"),
			L("Not enough", "पक्का नहीं"),
			L("Yes", "हाँ")
		],
		answer: "2",
		intro1: L("Only use what the two lines say. No outside facts.", "सिर्फ़ इन दो पंक्तियों को मानो। बाहर की बात नहीं।"),
		intro2: L("If every A is a B, and every B is a C, then every A is a C.", "अगर हर A, B है, और हर B, C है, तो हर A, C है।"),
		how: L("'All' passes through. Sparrows are birds, birds have wings, so sparrows have wings.", "'सभी' आर-पार जाता है। गौरैया पक्षी हैं, पक्षियों के पंख हैं, तो गौरैया के पंख हैं।"),
		hint1: L("There is no 'some' hiding in these lines.", "इन पंक्तियों में 'कुछ' छिपा नहीं है।"),
		hint2: L("The chain is complete. The answer is yes.", "कड़ी पूरी है। जवाब हाँ है।"),
		wrong: talk.wrong,
		right: L("Yes. The chain holds.", "हाँ। कड़ी सही है।"),
		reveal: L("All sparrows have wings. The answer is yes.", "सभी गौरैया के पंख होते हैं। जवाब हाँ है।"),
		explain: L("All sparrows are birds, and all birds have wings. So all sparrows have wings. 'Some' would have blocked the chain.", "सभी गौरैया पक्षी हैं, और सभी पक्षियों के पंख हैं। इसलिए सभी गौरैया के पंख हैं। 'कुछ' होता तो कड़ी रुक जाती।")
	},
	{
		id: 17,
		chapter: 4,
		title: L("Youngest", "सबसे छोटा"),
		mode: "choice",
		visual: {
			type: "statements",
			lines: [L("Ravi is older than Anya.", "रवि अन्या से बड़ा है।"), L("Anya is older than Kabir.", "अन्या कबीर से बड़ी है।")]
		},
		prompt: L("Who is the youngest?", "सबसे छोटा कौन है?"),
		choices: [
			L("Meera", "मीरा"),
			L("Zara", "ज़ारा"),
			L("Kabir", "कबीर"),
			L("Ravi", "रवि")
		],
		answer: "2",
		intro1: L("Put them in a line from older to younger.", "उन्हें बड़े से छोटे की लाइन में रखो।"),
		intro2: L("Meera and Zara are not even in the story.", "मीरा और ज़ारा कहानी में हैं ही नहीं।"),
		how: L("Older than, then older than again. The last name in that chain is the youngest.", "'से बड़ा', फिर फिर 'से बड़ा'। कड़ी का आखिरी नाम सबसे छोटा है।"),
		hint1: L("Ravi, then Anya, then Kabir.", "रवि, फिर अन्या, फिर कबीर।"),
		hint2: L("Kabir is younger than Anya, so Kabir is the youngest.", "कबीर अन्या से छोटा है, इसलिए कबीर सबसे छोटा है।"),
		wrong: talk.wrong,
		right: L("Kabir is the youngest.", "कबीर सबसे छोटा है।"),
		reveal: L("Kabir is younger than both. He is the youngest.", "कबीर दोनों से छोटा है। वह सबसे छोटा है।"),
		explain: L("Ravi > Anya > Kabir. Kabir is the youngest. Meera and Zara are distractors.", "रवि > अन्या > कबीर। कबीर सबसे छोटा है। मीरा और ज़ारा बहाने हैं।")
	},
	{
		id: 18,
		chapter: 4,
		title: L("Three o'clock", "तीन बजे"),
		mode: "choice",
		visual: { type: "clock" },
		prompt: L("What is the angle between the hands?", "काँटों के बीच का कोण क्या है?"),
		choices: [
			L("45°", "45°"),
			L("180°", "180°"),
			L("0°", "0°"),
			L("90°", "90°")
		],
		answer: "3",
		intro1: L("The clock is exactly 3:00, not 3:30.", "घड़ी ठीक 3:00 है, 3:30 नहीं।"),
		intro2: L("One hand is on the 12. The other is on the 3.", "एक काँटा 12 पर है। दूसरा 3 पर।"),
		how: L("A clock is a circle, 360°. From 12 to 3 is one quarter of the circle.", "घड़ी एक वृत्त है, 360°। 12 से 3 तक वृत्त का चौथाई हिस्सा है।"),
		hint1: L("A quarter of 360° is 90°.", "360° का चौथाई 90° है।"),
		hint2: L("The hands make a right angle.", "काँटे समकोण बनाते हैं।"),
		wrong: talk.wrong,
		right: L("It is a right angle, 90°.", "यह समकोण है, 90°।"),
		reveal: L("At 3:00 the angle is 90°.", "3:00 बजे कोण 90° है।"),
		explain: L("The minute hand sits on 12 and the hour hand sits on 3. That is a quarter turn, 90°.", "मिनट का काँटा 12 पर है और घंटे का 3 पर। यह चौथाई चक्कर है, 90°।")
	},
	{
		id: 19,
		chapter: 4,
		title: L("Middle seat", "बीच की सीट"),
		mode: "choice",
		visual: { type: "chairs" },
		prompt: L("Meera is left of Arun. Zara is right of Arun. Who sits in the middle?", "मीरा अरुण के बाएँ है। ज़ारा अरुण के दाएँ है। बीच में कौन बैठा है?"),
		choices: [
			L("Meera", "मीरा"),
			L("Zara", "ज़ारा"),
			L("Kabir", "कबीर"),
			L("Arun", "अरुण")
		],
		answer: "3",
		intro1: L("They face you, in one row.", "वे तुम्हारी तरफ़ देख रहे हैं, एक पंक्ति में।"),
		intro2: L("Left of someone means that someone is on their right.", "किसी के बाएँ होने का मतलब है कि वह उसके दाएँ है।"),
		how: L("Place Meera, then Arun to her right, then Zara to Arun's right.", "पहले मीरा रखो, उसके दाएँ अरुण, फिर अरुण के दाएँ ज़ारा।"),
		hint1: L("The order from your left is Meera, Arun, Zara.", "तुम्हारे बाएँ से क्रम है: मीरा, अरुण, ज़ारा।"),
		hint2: L("Three seats. The center name is Arun.", "तीन सीटें। बीच का नाम अरुण है।"),
		wrong: talk.wrong,
		right: L("Arun is between them.", "अरुण उनके बीच में है।"),
		reveal: L("Left to right: Meera, Arun, Zara. The middle is Arun.", "बाएँ से दाएँ: मीरा, अरुण, ज़ारा। बीच में अरुण।"),
		explain: L("Meera, Arun, Zara. Arun sits in the middle. Kabir is not in the row.", "मीरा, अरुण, ज़ारा। अरुण बीच में है। कबीर पंक्ति में है ही नहीं।")
	},
	{
		id: 20,
		chapter: 4,
		title: L("Even pans", "बराबर पलड़े"),
		mode: "choice",
		visual: {
			type: "scale",
			note: L("1 square = 2 circles", "1 वर्ग = 2 वृत्त")
		},
		prompt: L("When you weigh them, which side goes down?", "तौलने पर कौन सा पलड़ा नीचे जाएगा?"),
		choices: [
			L("Left side", "बायाँ पलड़ा"),
			L("Right side", "दायाँ पलड़ा"),
			L("Can't tell", "पता नहीं"),
			L("They balance", "दोनों बराबर")
		],
		answer: "3",
		intro1: L("Turn every square into circles before you compare.", "तुलना से पहले हर वर्ग को वृत्तों में बदलो।"),
		intro2: L("The picture is not tilted. You have to do the math.", "चित्र झुका नहीं है। गणित तुम्हें करना है।"),
		how: L("Each square is 2 circles. Count the left pan in circles, then match it to the right.", "हर वर्ग 2 वृत्त है। बाएँ पलड़े को वृत्तों में गिनो, फिर दाएँ से मिलाओ।"),
		hint1: L("Two squares are 4 circles. The extra circle makes 5.", "दो वर्ग 4 वृत्त हैं। एक और वृत्त से 5 हो गए।"),
		hint2: L("The right pan already has 5 circles.", "दाएँ पलड़े में पहले से 5 वृत्त हैं।"),
		wrong: talk.wrong,
		right: L("Both pans are worth 5 circles.", "दोनों पलड़े 5 वृत्तों के बराबर हैं।"),
		reveal: L("Left is 5 circles. Right is 5 circles. They balance.", "बायाँ 5 वृत्त। दायाँ 5 वृत्त। दोनों बराबर।"),
		explain: L("2 squares = 4 circles, plus 1 circle = 5. The other pan has 5 circles. The scale balances.", "2 वर्ग = 4 वृत्त, और 1 वृत्त = 5। दूसरे पलड़े में 5 वृत्त हैं। तराजू बराबर है।")
	},
	{
		id: 21,
		chapter: 5,
		title: L("Color echo", "रंगों की गूँज"),
		mode: "memory",
		visual: { type: "none" },
		prompt: L("Watch the pads, then repeat them.", "पैड देखो, फिर उसी क्रम में दोहराओ।"),
		answer: "teal,sienna,teal,ink",
		intro1: L("I'll flash a path. Don't tap until it finishes.", "मैं एक रास्ता दिखाऊँगा। खत्म होने से पहले मत छूना।"),
		intro2: L("Chunk it in pairs so it sticks.", "इसे जोड़ों में बाँट लो, याद रह जाएगा।"),
		how: L("Watch the whole flash. Then tap the same pads, including the repeat.", "पूरी चमक देखो। फिर वही पैड छुओ, दोहराव समेत।"),
		hint1: L("The first and the third flash are the same pad.", "पहली और तीसरी चमक एक ही पैड है।"),
		hint2: L("Square, circle, square, triangle.", "वर्ग, वृत्त, वर्ग, त्रिभुज।"),
		wrong: L("The path broke. Watch it again, then retry.", "रास्ता टूट गया। फिर देखो, फिर कोशिश करो।"),
		right: L("You echoed the path.", "तुमने रास्ता दोहरा दिया।"),
		reveal: L("The order is square, circle, square, triangle.", "क्रम है: वर्ग, वृत्त, वर्ग, त्रिभुज।"),
		explain: L("The pads flash square, circle, square, triangle. The repeated square is the part to hold onto.", "पैड चमकते हैं: वर्ग, वृत्त, वर्ग, त्रिभुज। दोहरा वर्ग पकड़कर रखना आसान है।")
	},
	{
		id: 22,
		chapter: 5,
		title: L("Five digits", "पाँच अंक"),
		mode: "digits",
		visual: { type: "none" },
		prompt: L("Remember the number, then enter it.", "नंबर याद करो, फिर लिखो।"),
		answer: "74193",
		intro1: L("Five digits, one look.", "पाँच अंक, एक नज़र।"),
		intro2: L("Say them in a rhythm: two, then three.", "उन्हें लय में बोलो: पहले दो, फिर तीन।"),
		how: L("Read it once as 74 and 193, not as five lonely digits.", "इसे 74 और 193 की तरह पढ़ो, पाँच अकेले अंकों की तरह नहीं।"),
		hint1: L("It starts with 74.", "यह 74 से शुरू होता है।"),
		hint2: L("The number is 74193.", "नंबर है 74193।"),
		wrong: L("That isn't the number you saw. Watch once more.", "यह वह नंबर नहीं जो तुमने देखा। एक बार और देखो।"),
		right: L("74193. Held clean.", "74193। साफ याद रहा।"),
		reveal: L("The number is 74193.", "नंबर है 74193।"),
		explain: L("The flash was 74193. Splitting it into 74 and 193 is easier than five separate digits.", "झलक थी 74193। उसे 74 और 193 में बाँटना पाँच अलग अंकों से आसान है।")
	},
	{
		id: 23,
		chapter: 5,
		title: L("The missing mark", "गायब निशान"),
		mode: "choice",
		visual: {
			type: "symbolWatch",
			shown: [
				"circle",
				"square",
				"triangle",
				"diamond",
				"plus"
			]
		},
		prompt: L("Which mark never appeared?", "कौन सा निशान कभी नहीं आया?"),
		choices: [
			L("Circle", "वृत्त"),
			L("Hexagon", "षट्भुज"),
			L("Plus", "जोड़ चिह्न"),
			L("Square", "वर्ग")
		],
		answer: "1",
		intro1: L("Five marks will flash. One option was never in the show.", "पाँच निशान चमकेंगे। एक विकल्प शो में था ही नहीं।"),
		intro2: L("Name each one quietly as it appears.", "हर निशान आते ही धीरे से उसका नाम लो।"),
		how: L("After the show, reject any option you remember seeing. The stranger is the answer.", "शो के बाद जिसे याद हो उसे हटाओ। जो अजनबी बचे, वही जवाब है।"),
		hint1: L("You did see a circle, a square, and a plus.", "तुमने वृत्त, वर्ग और जोड़ चिह्न देखा था।"),
		hint2: L("A hexagon was not in the show.", "षट्भुज शो में नहीं था।"),
		wrong: talk.wrong,
		right: L("The hexagon was the stranger.", "षट्भुज अजनबी था।"),
		reveal: L("The hexagon never appeared.", "षट्भुज कभी नहीं आया।"),
		explain: L("The show was circle, square, triangle, diamond, plus. The hexagon was never shown.", "शो में थे: वृत्त, वर्ग, त्रिभुज, हीरा, जोड़ चिह्न। षट्भुज कभी नहीं दिखा।")
	},
	{
		id: 24,
		chapter: 5,
		title: L("Hidden squares", "छिपे वर्ग"),
		mode: "choice",
		visual: { type: "grid" },
		prompt: L("How many squares are in this figure?", "इस आकृति में कितने वर्ग हैं?"),
		choices: [
			L("10", "10"),
			L("14", "14"),
			L("9", "9"),
			L("13", "13")
		],
		answer: "1",
		intro1: L("The tiny squares are only the start.", "छोटे वर्ग सिर्फ़ शुरुआत हैं।"),
		intro2: L("Bigger squares are made of the small ones.", "बड़े वर्ग छोटे वर्गों से बनते हैं।"),
		how: L("Count 1×1 squares, then 2×2, then the one big 3×3. Add those three counts.", "1×1 गिनो, फिर 2×2, फिर एक बड़ा 3×3। तीनों गिनतियाँ जोड़ो।"),
		hint1: L("There are 9 small squares.", "छोटे वर्ग 9 हैं।"),
		hint2: L("9 small, 4 medium, and 1 large.", "9 छोटे, 4 मझोले, और 1 बड़ा।"),
		wrong: talk.wrong,
		right: L("14 squares, once you count every size.", "14 वर्ग, जब हर नाप गिन लो।"),
		reveal: L("9 + 4 + 1 = 14.", "9 + 4 + 1 = 14।"),
		explain: L("In a 3 by 3 grid there are 9 squares of 1×1, 4 of 2×2, and 1 of 3×3. Total 14.", "3 गुणा 3 ग्रिड में 1×1 के 9, 2×2 के 4, और 3×3 का 1 वर्ग है। कुल 14।")
	},
	{
		id: 25,
		chapter: 5,
		title: L("One cell off", "एक खाना अलग"),
		mode: "spot",
		visual: {
			type: "spot",
			left: [
				1,
				0,
				1,
				0,
				0,
				1,
				1,
				0,
				1,
				1,
				0,
				1,
				0,
				0,
				1,
				1
			],
			right: [
				1,
				0,
				1,
				0,
				0,
				1,
				0,
				0,
				1,
				1,
				0,
				1,
				0,
				0,
				1,
				1
			]
		},
		prompt: L("Tap the cell in Grid B that does not match Grid A.", "ग्रिड B में वह खाना छुओ जो ग्रिड A से अलग है।"),
		answer: "6",
		intro1: L("Compare cell by cell. Don't scan the whole blob.", "खाना-खाना मिलाओ। पूरे धब्बे को एक साथ मत देखो।"),
		intro2: L("Go row by row, left to right.", "पंक्ति-पंक्ति चलो, बाएँ से दाएँ।"),
		how: L("Cover Grid B with your attention one row at a time and find the filled cell that went empty, or the reverse.", "ग्रिड B को एक-एक पंक्ति देखो। भरा खाना खाली हुआ है, या उलटा।"),
		hint1: L("The first row matches. Look at the second row.", "पहली पंक्ति मिलती है। दूसरी पंक्ति देखो।"),
		hint2: L("Second row, third cell. It is filled in A and empty in B.", "दूसरी पंक्ति, तीसरा खाना। A में भरा है, B में खाली।"),
		wrong: L("That cell matches. Keep going along the row.", "यह खाना मिलता है। पंक्ति पर आगे बढ़ो।"),
		right: L("That cell is the only change.", "यही अकेला बदलाव है।"),
		reveal: L("Row 2, column 3 in Grid B is the odd cell.", "ग्रिड B की पंक्ति 2, कॉलम 3 अलग खाना है।"),
		explain: L("Every cell matches except row 2, column 3. It is filled in A and empty in B.", "हर खाना मिलता है, सिवाय पंक्ति 2 कॉलम 3 के। वह A में भरा है और B में खाली।")
	},
	{
		id: 26,
		chapter: 6,
		title: L("Bat and ball", "बल्ला और गेंद"),
		mode: "choice",
		visual: { type: "none" },
		prompt: L("A bat and a ball cost ₹110. The bat costs ₹100 more than the ball. What does the ball cost?", "बल्ला और गेंद मिलकर ₹110 के हैं। बल्ला गेंद से ₹100 महँगा है। गेंद की कीमत क्या है?"),
		choices: [
			L("₹10", "₹10"),
			L("₹50", "₹50"),
			L("₹5", "₹5"),
			L("₹15", "₹15")
		],
		answer: "2",
		intro1: L("₹10 is the trap. Don't sit on it.", "₹10 जाल है। उसी पर मत बैठो।"),
		intro2: L("Let the ball be a small amount, and build the bat from it.", "गेंद को छोटा मान लो, और बल्ला उसी से बनाओ।"),
		how: L("If the ball is x, the bat is x+100. Together: x + (x+100) = 110.", "गेंद x है तो बल्ला x+100। साथ में: x + (x+100) = 110।"),
		hint1: L("Two balls plus ₹100 make ₹110. So two balls cost ₹10.", "दो गेंद और ₹100 मिलकर ₹110। तो दो गेंद ₹10 की हैं।"),
		hint2: L("One ball is half of ₹10.", "एक गेंद ₹10 का आधा है।"),
		wrong: L("That is the famous wrong answer. Write the equation.", "यह मशहूर गलत जवाब है। समीकरण लिखो।"),
		right: L("The ball is ₹5. The bat is ₹105.", "गेंद ₹5 की है। बल्ला ₹105 का।"),
		reveal: L("The ball costs ₹5. The bat costs ₹105, which is ₹100 more.", "गेंद ₹5 की है। बल्ला ₹105 का है, यानी ₹100 ज़्यादा।"),
		explain: L("Let the ball be x. Then x + (x+100) = 110, so 2x = 10 and x = 5. ₹10 feels right and is wrong.", "गेंद को x मानो। x + (x+100) = 110, तो 2x = 10 और x = 5। ₹10 सही लगता है, पर गलत है।")
	},
	{
		id: 27,
		chapter: 6,
		title: L("Twenty-eight", "अट्ठाईस"),
		mode: "choice",
		visual: { type: "none" },
		prompt: L("How many months have 28 days?", "कितने महीनों में 28 दिन होते हैं?"),
		choices: [
			L("1", "1"),
			L("2", "2"),
			L("6", "6"),
			L("12", "12")
		],
		answer: "3",
		intro1: L("February is a decoy.", "फ़रवरी बहाना है।"),
		intro2: L("The question says 'have 28 days', not 'have only 28'.", "सवाल है '28 दिन होते हैं', यह नहीं कि 'सिर्फ़ 28'।"),
		how: L("If a month has 29, 30, or 31 days, it also has a 28th day.", "जिस महीने में 29, 30 या 31 दिन हैं, उसमें 28वाँ दिन भी है।"),
		hint1: L("Every month reaches the 28th.", "हर महीना 28 तारीख तक पहुँचता है।"),
		hint2: L("That is all 12 months.", "यानी पूरे 12 महीने।"),
		wrong: L("You counted short months. Read the question again.", "तुमने छोटे महीने गिने। सवाल फिर पढ़ो।"),
		right: L("All 12 months have a 28th.", "सभी 12 महीनों में 28 तारीख होती है।"),
		reveal: L("All 12 months have at least 28 days.", "सभी 12 महीनों में कम से कम 28 दिन होते हैं।"),
		explain: L("Every month has a 28th day. February is the only month that stops there in a common year, but the question never said 'only'.", "हर महीने में 28 तारीख होती है। आम साल में फ़रवरी वहीं रुकता है, पर सवाल ने 'सिर्फ़' नहीं कहा।")
	},
	{
		id: 28,
		chapter: 6,
		title: L("The pass", "ओवरटेक"),
		mode: "choice",
		visual: { type: "none" },
		prompt: L("You overtake the runner in 2nd place. What place are you in now?", "तुम दूसरे स्थान वाले धावक को ओवरटेक करते हो। अब तुम किस स्थान पर हो?"),
		choices: [
			L("1st", "पहला"),
			L("2nd", "दूसरा"),
			L("3rd", "तीसरा"),
			L("Last", "आखिरी")
		],
		answer: "1",
		intro1: L("Overtaking someone puts you in their place.", "किसी को ओवरटेक करने पर तुम उसकी जगह लेते हो।"),
		intro2: L("The leader is still ahead of both of you.", "लीडर अब भी तुम दोनों से आगे है।"),
		how: L("The person in 2nd was just in front of you. Pass them, and you are 2nd. You did not pass 1st.", "दूसरा तुम्हारे ठीक आगे था। उसे पार करो, तुम दूसरे हो। पहले को पार नहीं किया।"),
		hint1: L("You passed the 2nd runner, not the 1st.", "तुमने दूसरे को पार किया, पहले को नहीं।"),
		hint2: L("Their place becomes yours: 2nd.", "उनकी जगह अब तुम्हारी है: दूसरा।"),
		wrong: L("Passing 2nd does not make you 1st.", "दूसरे को पार करना तुम्हें पहला नहीं बनाता।"),
		right: L("You are in 2nd. The leader is still ahead.", "तुम दूसरे हो। लीडर अब भी आगे है।"),
		reveal: L("You take 2nd place. You are not first.", "तुम दूसरा स्थान लेते हो। तुम पहले नहीं हो।"),
		explain: L("If you overtake the runner who is 2nd, you take their place. The runner in 1st is still in front, so you are 2nd.", "जो धावक दूसरे स्थान पर है, उसे ओवरटेक करने पर तुम उसकी जगह लेते हो। पहला अब भी आगे है, इसलिए तुम दूसरे हो।")
	},
	{
		id: 29,
		chapter: 6,
		title: L("A kilogram", "एक किलो"),
		mode: "choice",
		visual: { type: "none" },
		prompt: L("Which is heavier: 1 kg of cotton or 1 kg of iron?", "कौन भारी है: 1 किलो रूई या 1 किलो लोहा?"),
		choices: [
			L("Cotton", "रूई"),
			L("Iron", "लोहा"),
			L("Same weight", "वज़न बराबर"),
			L("Need a scale", "तराजू चाहिए")
		],
		answer: "2",
		intro1: L("Iron feels heavier because it is denser.", "लोहा भारी लगता है क्योंकि वह घना है।"),
		intro2: L("The question already gave you the weight.", "सवाल वज़न पहले ही बता चुका है।"),
		how: L("A kilogram is a kilogram. Density changes the size, not this weight.", "एक किलो एक किलो है। घनत्व आकार बदलता है, यह वज़न नहीं।"),
		hint1: L("Both amounts are 1 kg.", "दोनों मात्राएँ 1 किलो हैं।"),
		hint2: L("Same number, same weight.", "नंबर वही, वज़न वही।"),
		wrong: L("Denser is not heavier when the kilograms match.", "जब किलो बराबर हों, तो ज़्यादा घना का मतलब ज़्यादा भारी नहीं।"),
		right: L("Same weight. Cotton just takes more room.", "वज़न बराबर। रूई सिर्फ़ ज़्यादा जगह लेती है।"),
		reveal: L("They weigh the same. Both are 1 kg.", "वज़न बराबर है। दोनों 1 किलो हैं।"),
		explain: L("1 kg of cotton and 1 kg of iron weigh the same. Cotton takes more space because it is less dense.", "1 किलो रूई और 1 किलो लोहे का वज़न बराबर है। रूई ज़्यादा जगह लेती है क्योंकि वह कम घनी है।")
	},
	{
		id: 30,
		chapter: 6,
		title: L("The toy factory", "खिलौना फ़ैक्टरी"),
		mode: "choice",
		visual: { type: "none" },
		prompt: L("5 machines make 5 toys in 5 minutes. How long do 100 machines take to make 100 toys?", "5 मशीनें 5 खिलौने 5 मिनट में बनाती हैं। 100 मशीनें 100 खिलौने कितनी देर में बनाएँगी?"),
		choices: [
			L("100 minutes", "100 मिनट"),
			L("20 minutes", "20 मिनट"),
			L("5 minutes", "5 मिनट"),
			L("1 minute", "1 मिनट")
		],
		answer: "2",
		intro1: L("Final desk. Rate, not a giant multiplication.", "आखिरी डेस्क। रफ़्तार देखो, बड़ा गुणा नहीं।"),
		intro2: L("Find how long one machine needs for one toy.", "देखो एक मशीन को एक खिलौने में कितना समय लगता है।"),
		how: L("5 machines make 5 toys in 5 minutes, so each machine makes 1 toy in 5 minutes. More machines, same minutes.", "5 मशीनें 5 खिलौने 5 मिनट में बनाती हैं, यानी हर मशीन 1 खिलौना 5 मिनट में। मशीनें बढ़ें, मिनट वही।"),
		hint1: L("One machine, one toy, five minutes.", "एक मशीन, एक खिलौना, पाँच मिनट।"),
		hint2: L("100 machines each make one toy. Still 5 minutes.", "100 मशीनें, हर एक एक खिलौना। फिर भी 5 मिनट।"),
		wrong: L("100 minutes is the trap. Think about one machine's rate.", "100 मिनट जाल है। एक मशीन की रफ़्तार सोचो।"),
		right: L("Five minutes. The lab is clear.", "पाँच मिनट। लैब पूरी।"),
		reveal: L("100 machines make 100 toys in 5 minutes.", "100 मशीनें 100 खिलौने 5 मिनट में बनाती हैं।"),
		explain: L("Each machine makes one toy in 5 minutes. One hundred machines working at once still need 5 minutes for one hundred toys.", "हर मशीन एक खिलौना 5 मिनट में बनाती है। सौ मशीनें साथ काम करें, तब भी सौ खिलौनों के लिए 5 मिनट लगते हैं।")
	}
];
function check(levels) {
	const issues = [];
	if (levels.length !== 30) issues.push(`count ${levels.length}`);
	const ids = /* @__PURE__ */ new Set();
	const fields = [
		"intro1",
		"intro2",
		"how",
		"hint1",
		"hint2",
		"wrong",
		"right",
		"reveal",
		"explain",
		"prompt",
		"title"
	];
	for (const level of levels) {
		if (ids.has(level.id)) issues.push(`dup ${level.id}`);
		ids.add(level.id);
		if (level.chapter !== Math.ceil(level.id / 5)) issues.push(`chapter ${level.id}`);
		for (const field of fields) {
			const value = level[field];
			if (!value.en || !value.hi) issues.push(`${level.id} ${field}`);
		}
		if (level.mode === "choice") {
			const n = Number(level.answer);
			if (!level.choices || !Number.isInteger(n) || n < 0 || n >= level.choices.length) issues.push(`answer ${level.id}`);
		}
		if (level.mode === "memory") {
			if (level.answer.split(",").length < 4) issues.push(`mem ${level.id}`);
		}
		if (level.mode === "digits" && !/^\d{4,6}$/.test(level.answer)) issues.push(`dig ${level.id}`);
		if (level.mode === "letters") {
			if (level.visual.type !== "letters") issues.push(`let vis ${level.id}`);
			else if ([...level.visual.tiles].sort().join("") !== [...level.answer].sort().join("")) issues.push(`let bag ${level.id}`);
		}
		if (level.mode === "spot") {
			if (level.visual.type !== "spot") issues.push(`spot vis ${level.id}`);
			else {
				const { left, right } = level.visual;
				const diffs = left.map((cell, index) => cell !== right[index] ? index : -1).filter((index) => index >= 0);
				if (left.length !== 16 || right.length !== 16 || diffs.length !== 1 || String(diffs[0]) !== level.answer) issues.push(`spot diff ${level.id}`);
			}
		}
	}
	for (let id = 1; id <= 30; id++) if (!ids.has(id)) issues.push(`missing ${id}`);
	if (issues.length) throw new Error(`Level data: ${issues.join(" | ")}`);
}
check(LEVELS);
function getLevel(id) {
	const level = LEVELS.find((item) => item.id === id);
	if (!level) throw new Error(`Missing level ${id}`);
	return level;
}
var ctx = null;
function ac() {
	if (typeof window === "undefined") return null;
	const Ctor = window.AudioContext;
	if (!Ctor) return null;
	if (!ctx) ctx = new Ctor();
	return ctx;
}
function blip(kind, on) {
	if (!on) return;
	const context = ac();
	if (!context) return;
	if (context.state === "suspended") context.resume();
	const now = context.currentTime;
	(kind === "ok" ? [
		523,
		659,
		784
	] : kind === "bad" ? [220, 174] : [680]).forEach((freq, i) => {
		const osc = context.createOscillator();
		const gain = context.createGain();
		osc.type = "sine";
		osc.frequency.value = freq;
		const start = now + i * .07;
		gain.gain.setValueAtTime(1e-4, start);
		gain.gain.exponentialRampToValueAtTime(kind === "tap" ? .035 : .06, start + .02);
		gain.gain.exponentialRampToValueAtTime(1e-4, start + .2);
		osc.connect(gain);
		gain.connect(context.destination);
		osc.start(start);
		osc.stop(start + .22);
	});
}
var defaultSave = {
	version: 1,
	cleared: {},
	name: "",
	lang: "en",
	sound: true,
	previewAll: false
};
var KEY = "sticky-lab-v1";
function loadSave() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return {
			...defaultSave,
			cleared: {}
		};
		const parsed = JSON.parse(raw);
		if (parsed.version !== 1) return {
			...defaultSave,
			cleared: {}
		};
		const lang = parsed.lang === "hi" ? "hi" : "en";
		return {
			version: 1,
			cleared: parsed.cleared && typeof parsed.cleared === "object" ? parsed.cleared : {},
			name: typeof parsed.name === "string" ? parsed.name.slice(0, 40) : "",
			lang,
			sound: parsed.sound !== false,
			previewAll: parsed.previewAll === true
		};
	} catch {
		return {
			...defaultSave,
			cleared: {}
		};
	}
}
function writeSave(save) {
	localStorage.setItem(KEY, JSON.stringify(save));
}
function isOpen(id, save) {
	return save.previewAll || id === 1 || Boolean(save.cleared[String(id - 1)]);
}
function nextUncleared(save) {
	for (let i = 1; i <= 30; i++) if (!save.cleared[String(i)]) return i;
	return "done";
}
function starTotal(save) {
	return Object.values(save.cleared).reduce((sum, n) => sum + n, 0);
}
function starScore(misses, hints, revealed) {
	if (revealed) return 1;
	const cost = misses + hints;
	if (cost <= 0) return 3;
	if (cost === 1) return 2;
	return 1;
}
function StickyMan({ mood }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: `sticky-svg mood-${mood}`,
		viewBox: "0 0 160 210",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "80",
				cy: "198",
				rx: "34",
				ry: "6",
				className: "shadow"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "legs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "80",
						y1: "128",
						x2: "52",
						y2: "176"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "80",
						y1: "128",
						x2: "108",
						y2: "176"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "178",
						r: "5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "110",
						cy: "178",
						r: "5"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "80",
				y1: "78",
				x2: "80",
				y2: "128"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "arms-normal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "80",
						y1: "92",
						x2: "44",
						y2: "124"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "42",
						cy: "126",
						r: "4.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: "arm-r",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "80",
							y1: "92",
							x2: "118",
							y2: "108"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "120",
							cy: "109",
							r: "4.5"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "arms-think",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "80",
						y1: "92",
						x2: "46",
						y2: "122"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "44",
						cy: "124",
						r: "4.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "80",
						y1: "92",
						x2: "102",
						y2: "70"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "104",
						cy: "66",
						r: "4.5"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "arms-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "80",
						y1: "92",
						x2: "48",
						y2: "60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "80",
						y1: "92",
						x2: "112",
						y2: "60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "46",
						cy: "57",
						r: "4.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "114",
						cy: "57",
						r: "4.5"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "scarf",
				d: "M66 74h28l8 16H58z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "80",
						cy: "46",
						r: "28"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: "eyes",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "70",
							cy: "44",
							r: "3.1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "90",
							cy: "44",
							r: "3.1"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						className: "mouth m-smile",
						d: "M70 56c4 6 16 6 20 0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						className: "mouth m-oh",
						cx: "80",
						cy: "58",
						rx: "5",
						ry: "6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						className: "mouth m-happy",
						d: "M66 54c6 12 22 12 28 0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						className: "mouth m-flat",
						d: "M70 58h20"
					})
				]
			})
		]
	});
}
var PADS = [
	"sienna",
	"teal",
	"ink",
	"sand"
];
function useParade(tokens, playId, active, onDone) {
	const [lit, setLit] = (0, import_react.useState)(null);
	const doneRef = (0, import_react.useRef)(onDone);
	doneRef.current = onDone;
	const key = tokens.join("|");
	(0, import_react.useEffect)(() => {
		if (!active || tokens.length === 0) {
			setLit(null);
			return;
		}
		let dead = false;
		const timers = [];
		const long = tokens.length === 1 && tokens[0].length > 1;
		const step = long ? 2200 : 780;
		const hold = long ? 1800 : 520;
		tokens.forEach((token, index) => {
			timers.push(window.setTimeout(() => {
				if (!dead) setLit(token);
			}, index * step));
			timers.push(window.setTimeout(() => {
				if (!dead) setLit(null);
			}, index * step + hold));
		});
		timers.push(window.setTimeout(() => {
			if (!dead) doneRef.current();
		}, tokens.length * step + 80));
		return () => {
			dead = true;
			timers.forEach((timer) => window.clearTimeout(timer));
		};
	}, [
		active,
		playId,
		key
	]);
	return lit;
}
function Glyph({ name }) {
	if (name === "circle") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "32",
			cy: "32",
			r: "18",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "5"
		})
	});
	if (name === "square") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "14",
			y: "14",
			width: "36",
			height: "36",
			rx: "4",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "5"
		})
	});
	if (name === "triangle") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M32 12 L54 52 H10 Z",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "5",
			strokeLinejoin: "round"
		})
	});
	if (name === "diamond") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M32 8 L54 32 L32 56 L10 32 Z",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "5",
			strokeLinejoin: "round"
		})
	});
	if (name === "plus") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M32 12 V52 M12 32 H52",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "5",
			strokeLinecap: "round"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "32,8 50,18 50,40 32,52 14,40 14,18",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "5",
			strokeLinejoin: "round"
		})
	});
}
function Poly({ sides }) {
	const points = Array.from({ length: sides }, (_, index) => {
		const angle = -Math.PI / 2 + index * 2 * Math.PI / sides;
		return `${32 + 22 * Math.cos(angle)},${32 + 22 * Math.sin(angle)}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "poly",
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "4",
			strokeLinejoin: "round"
		})
	});
}
function ArrowIcon({ dir }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "arrow-ico",
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			transform: `rotate(${dir === "e" ? 90 : dir === "s" ? 180 : dir === "w" ? 270 : 0} 32 32)`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 50 V16 M32 16 L20 30 M32 16 L44 30",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})
	});
}
function Hand({ deg, large }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: large ? "dial" : "hand",
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "22",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "32",
				y1: "32",
				x2: "32",
				y2: "16",
				stroke: "currentColor",
				strokeWidth: "4",
				strokeLinecap: "round",
				transform: `rotate(${deg} 32 32)`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "2.5",
				fill: "currentColor"
			})
		]
	});
}
function cellsFor(variant) {
	const base = [
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 2]
	];
	if (variant === 1) return base.map(([x, y]) => [2 - x, y]);
	if (variant === 2) return base.map(([x, y]) => [x, 2 - y]);
	if (variant === 3) return base.map(([x, y]) => [2 - x, 2 - y]);
	return base;
}
function LShape({ variant, big }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: big ? "l-shape l-big" : "l-shape",
		viewBox: "0 0 3 3",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "3",
			height: "3",
			fill: "var(--color-paper-2)"
		}), cellsFor(variant).map(([x, y]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: x + .12,
			y: y + .12,
			width: "0.76",
			height: "0.76",
			rx: "0.08",
			fill: "currentColor"
		}, `${x}-${y}`))]
	});
}
function DotPile({ rows, square }) {
	const dots = [];
	if (square) for (let y = 0; y < rows; y++) for (let x = 0; x < rows; x++) dots.push([x, y]);
	else for (let y = 0; y < rows; y++) for (let x = 0; x <= y; x++) dots.push([x, y]);
	const unit = 10;
	const width = (square ? rows : rows) * unit;
	const height = rows * unit;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "pile",
		viewBox: `-2 -2 ${width + 4} ${height + 4}`,
		"aria-hidden": "true",
		children: dots.map(([x, y], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: x * unit + 4,
			cy: y * unit + 4,
			r: "2.4",
			fill: "currentColor"
		}, index))
	});
}
function VisualView({ level, lang }) {
	const visual = level.visual;
	if (visual.type === "sequence") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "tiles",
		children: [visual.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tile",
			children: item
		}, `${item}-${index}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tile-q pulse",
			children: "?"
		})]
	});
	if (visual.type === "squares" || visual.type === "tri") {
		const square = visual.type === "squares";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "piles",
			children: [Array.from({ length: visual.upTo }, (_, index) => {
				const rows = index + 1;
				const count = square ? rows * rows : rows * (rows + 1) / 2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pile-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotPile, {
						rows,
						square
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: count })]
				}, rows);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pile-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tile-q pulse",
					children: "?"
				})
			})]
		});
	}
	if (visual.type === "arrows") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "frames",
		children: [visual.dirs.map((dir, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "frame-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowIcon, { dir }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: index + 1 })]
		}, `${dir}-${index}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "frame-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tile-q pulse",
				children: "?"
			})
		})]
	});
	if (visual.type === "hands") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "frames",
		children: [visual.degrees.map((deg, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "frame-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hand, {
				deg,
				large: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [deg, "°"] })]
		}, `${deg}-${index}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "frame-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tile-q pulse",
				children: "?"
			})
		})]
	});
	if (visual.type === "mirror") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "stage-label",
		children: tx(ui.original, lang)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LShape, {
		variant: 0,
		big: true
	})] });
	if (visual.type === "pair") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pair",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: visual.left[0][lang] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: visual.left[1][lang] })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: visual.right[0][lang] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: visual.right[1][lang] })
		] })]
	});
	if (visual.type === "statements") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "statements",
		children: visual.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line[lang] }, line.en))
	});
	if (visual.type === "chairs") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "chairs",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "chair" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "chair" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "chair" })
		]
	});
	if (visual.type === "clock") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "clock",
		viewBox: "0 0 120 120",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "60",
				r: "52",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "60",
				r: "3",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "60",
				y1: "60",
				x2: "60",
				y2: "22",
				stroke: "currentColor",
				strokeWidth: "4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "60",
				y1: "60",
				x2: "92",
				y2: "60",
				stroke: "currentColor",
				strokeWidth: "5",
				strokeLinecap: "round"
			}),
			[
				0,
				90,
				180,
				270
			].map((deg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "60",
				y1: "14",
				x2: "60",
				y2: "22",
				stroke: "currentColor",
				strokeWidth: "3",
				transform: `rotate(${deg} 60 60)`
			}, deg))
		]
	});
	if (visual.type === "scale") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "scale",
		viewBox: "0 0 320 150",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "160",
				y: "18",
				textAnchor: "middle",
				fill: "var(--color-sienna)",
				fontSize: "18",
				children: "?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "160",
				y1: "28",
				x2: "160",
				y2: "132",
				stroke: "currentColor",
				strokeWidth: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "28",
				y1: "42",
				x2: "292",
				y2: "42",
				stroke: "currentColor",
				strokeWidth: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "78",
				y1: "42",
				x2: "52",
				y2: "72",
				stroke: "currentColor",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "78",
				y1: "42",
				x2: "104",
				y2: "72",
				stroke: "currentColor",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "46",
				y: "72",
				width: "72",
				height: "40",
				rx: "8",
				fill: "var(--color-paper-2)",
				stroke: "currentColor",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "56",
				y: "84",
				width: "14",
				height: "14",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "74",
				y: "84",
				width: "14",
				height: "14",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "104",
				cy: "91",
				r: "7",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "242",
				y1: "42",
				x2: "214",
				y2: "72",
				stroke: "currentColor",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "242",
				y1: "42",
				x2: "270",
				y2: "72",
				stroke: "currentColor",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "200",
				y: "72",
				width: "92",
				height: "40",
				rx: "8",
				fill: "var(--color-paper-2)",
				stroke: "currentColor",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "220",
				cy: "86",
				r: "6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "238",
				cy: "86",
				r: "6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "256",
				cy: "86",
				r: "6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "274",
				cy: "86",
				r: "6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "247",
				cy: "102",
				r: "6",
				fill: "currentColor"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "stage-label",
		children: visual.note[lang]
	})] });
	if (visual.type === "grid") {
		const n = 3;
		const pad = 10;
		const size = 220;
		const cell = 200 / n;
		const lines = [];
		for (let i = 0; i <= n; i++) {
			const p = pad + i * cell;
			lines.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: pad,
				y1: p,
				x2: 210,
				y2: p,
				stroke: "currentColor",
				strokeWidth: "4"
			}, `h${i}`));
			lines.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: p,
				y1: pad,
				x2: p,
				y2: 210,
				stroke: "currentColor",
				strokeWidth: "4"
			}, `v${i}`));
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: "square-grid",
			viewBox: `0 0 ${size} ${size}`,
			"aria-hidden": "true",
			children: lines
		});
	}
	return null;
}
function ChoiceFace({ level, index, lang }) {
	const kind = level.choiceKind ?? "text";
	const label = level.choices?.[index]?.[lang] ?? "";
	if (kind === "poly") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poly, { sides: Number(level.choiceData?.[index] ?? 4) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })] });
	if (kind === "arrow") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowIcon, { dir: level.choiceData?.[index] ?? "n" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })] });
	if (kind === "hand") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hand, { deg: Number(level.choiceData?.[index] ?? 0) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })] });
	if (kind === "mirror") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LShape, { variant: Number(level.choiceData?.[index] ?? 0) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: label });
}
function Puzzle({ level, lang, solved, revealed, earned, best, onAttempt, onNext, onMap }) {
	const needsWatch = level.mode === "memory" || level.mode === "digits" || level.visual.type === "symbolWatch";
	const [ready, setReady] = (0, import_react.useState)(!needsWatch);
	const [playId, setPlayId] = (0, import_react.useState)(0);
	const [buffer, setBuffer] = (0, import_react.useState)([]);
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [wrong, setWrong] = (0, import_react.useState)([]);
	const [shake, setShake] = (0, import_react.useState)(false);
	const busy = (0, import_react.useRef)(false);
	const lit = useParade(level.mode === "memory" ? level.answer.split(",") : level.mode === "digits" ? [level.answer] : level.visual.type === "symbolWatch" ? level.visual.shown : [], playId, needsWatch && !ready, () => setReady(true));
	const picture = level.choiceKind && level.choiceKind !== "text";
	function miss() {
		setShake(true);
		window.setTimeout(() => setShake(false), 420);
	}
	function choose(index) {
		if (solved || !ready || wrong.includes(index) || busy.current) return;
		const ok = String(index) === level.answer;
		if (!ok) {
			setWrong((list) => [...list, index]);
			miss();
		}
		onAttempt(ok);
	}
	function pushColor(color) {
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
	function pushDigit(digit) {
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
	function pushTile(index) {
		if (solved || picked.includes(index) || busy.current) return;
		if (level.visual.type !== "letters") return;
		const next = [...picked, index];
		setPicked(next);
		if (next.length < level.answer.length) return;
		const ok = next.map((tile) => level.visual.type === "letters" ? level.visual.tiles[tile] : "").join("") === level.answer;
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
	function tapSpot(index) {
		if (solved || busy.current || wrong.includes(index)) return;
		const ok = String(index) === level.answer;
		if (!ok) {
			setWrong((list) => [...list, index]);
			miss();
		}
		onAttempt(ok);
	}
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			if (level.mode !== "choice" || !ready || solved) return;
			if (event.target instanceof HTMLInputElement) return;
			const n = Number(event.key);
			if (n >= 1 && level.choices && n <= level.choices.length) choose(n - 1);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `plate ${shake ? "shake" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tick tick-tl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tick tick-tr" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tick tick-bl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tick tick-br" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "plate-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: levelLabel(level.id, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display",
					children: level.title[lang]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualView, {
				level,
				lang
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: level.visual.type === "none" && level.mode === "choice" ? "hero-q" : "prompt",
				children: level.prompt[lang]
			}),
			needsWatch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "status-line",
				children: ready ? tx(ui.yourTurn, lang) : tx(ui.watching, lang)
			}),
			level.visual.type === "symbolWatch" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glyph-stage",
				"aria-hidden": "true",
				children: lit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, { name: lit }) : null
			}),
			level.mode === "choice" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "choice-grid",
				children: level.choices?.map((choice, index) => {
					const right = solved && String(index) === level.answer;
					const show = revealed && String(index) === level.answer;
					const bad = wrong.includes(index);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `choice ${picture ? "is-picture" : ""} ${bad ? "is-wrong" : ""} ${right ? "is-right" : ""} ${show && !right ? "is-reveal" : ""}`,
						onClick: () => choose(index),
						disabled: solved || !ready || bad,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceFace, {
							level,
							index,
							lang
						})
					}, choice.en);
				})
			}),
			level.mode === "memory" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pads",
				children: PADS.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `pad pad-${color} ${lit === color ? "is-lit" : ""}`,
					onClick: () => pushColor(color),
					disabled: !ready || solved,
					"aria-label": color,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, { name: color === "sienna" ? "circle" : color === "teal" ? "square" : color === "ink" ? "triangle" : "diamond" })
				}, color))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "slots",
				"aria-hidden": "true",
				children: buffer.map((color, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `slot pad-${color}` }, `${color}-${index}`))
			})] }),
			level.mode === "digits" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				!ready && lit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "digit-hero",
					children: lit
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "slots",
					"aria-label": buffer.join(""),
					children: Array.from({ length: level.answer.length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `slot ${shake ? "is-bad" : ""}`,
						children: buffer[index] ?? ""
					}, index))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "numpad",
					children: [
						"1",
						"2",
						"3",
						"4",
						"5",
						"6",
						"7",
						"8",
						"9",
						"undo",
						"0"
					].map((key) => key === "undo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-soft",
						onClick: () => setBuffer((items) => items.slice(0, -1)),
						disabled: !ready || solved,
						children: tx(ui.undo, lang)
					}, key) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-ink",
						onClick: () => pushDigit(key),
						disabled: !ready || solved,
						children: key
					}, key))
				})
			] }),
			level.mode === "letters" && level.visual.type === "letters" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "slots",
				children: Array.from({ length: level.answer.length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `slot ${shake ? "is-bad" : ""}`,
					onClick: () => setPicked((items) => items.slice(0, index)),
					children: level.visual.type === "letters" ? level.visual.tiles[picked[index]] ?? "" : ""
				}, index))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "letter-row",
				children: level.visual.tiles.map((tile, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "letter",
					disabled: picked.includes(index) || solved,
					onClick: () => pushTile(index),
					children: tile
				}, `${tile}-${index}`))
			})] }),
			level.mode === "spot" && level.visual.type === "spot" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "spot-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stage-label",
					children: tx(ui.gridA, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mini-grid",
					children: level.visual.left.map((cell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `cell ${cell ? "is-on" : ""}` }, index))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stage-label",
					children: tx(ui.gridB, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mini-grid",
					children: level.visual.right.map((cell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `cell ${cell ? "is-on" : ""} ${wrong.includes(index) ? "is-bad" : ""} ${solved && String(index) === level.answer ? "is-found" : ""}`,
						"aria-label": `${tx(ui.gridB, lang)} ${index + 1}`,
						onClick: () => tapSpot(index),
						disabled: solved
					}, index))
				})] })]
			}),
			needsWatch && !solved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row-actions",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-soft",
					onClick: () => {
						setReady(false);
						setPlayId((value) => value + 1);
						setBuffer([]);
					},
					children: tx(ui.watch, lang)
				})
			}),
			solved && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: tx(ui.labNote, lang) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: level.explain[lang] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "fine",
						children: [
							tx(ui.cleared, lang),
							" · ",
							earned,
							" · ",
							tx(ui.best, lang),
							" ",
							best
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-primary",
							onClick: onNext,
							children: level.id === 30 ? tx(ui.finish, lang) : tx(ui.next, lang)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-soft",
							onClick: onMap,
							children: tx(ui.toMap, lang)
						})]
					})
				]
			})
		]
	});
}
function Stars({ n, dim }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "stars",
		"aria-label": String(n),
		children: [
			0,
			1,
			2
		].map((index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
			size: 16,
			className: index < n ? void 0 : "star-off",
			fill: index < n && !dim ? "currentColor" : "none"
		}, index))
	});
}
function LangSwitch({ lang, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lang",
		role: "group",
		"aria-label": "Language",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": lang === "en",
			onClick: () => onChange("en"),
			children: "EN"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": lang === "hi",
			onClick: () => onChange("hi"),
			children: "हिं"
		})]
	});
}
function GameApp() {
	const [save, setSave] = (0, import_react.useState)(defaultSave);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [screen, setScreen] = (0, import_react.useState)("home");
	const [levelId, setLevelId] = (0, import_react.useState)(1);
	const [notice, setNotice] = (0, import_react.useState)("");
	const [resetArmed, setResetArmed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSave(loadSave());
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) writeSave(save);
	}, [save, hydrated]);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = save.lang === "hi" ? "hi" : "en";
	}, [save.lang]);
	function patch(partial) {
		setSave((current) => ({
			...current,
			...partial
		}));
	}
	function openLevel(id) {
		if (!isOpen(id, save)) {
			setNotice(tx(ui.locked, save.lang));
			return;
		}
		setNotice("");
		setLevelId(id);
		setScreen("play");
	}
	function clearLevel(id, stars) {
		setSave((current) => {
			const prev = current.cleared[String(id)] ?? 0;
			return {
				...current,
				cleared: {
					...current.cleared,
					[String(id)]: Math.max(prev, stars)
				}
			};
		});
	}
	save.lang;
	const clearedCount = Object.keys(save.cleared).length;
	const upcoming = nextUncleared(save);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "shell",
		children: [
			screen === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, {
				save,
				clearedCount,
				upcoming,
				onLang: (next) => patch({ lang: next }),
				onSound: () => patch({ sound: !save.sound }),
				onName: (name) => patch({ name }),
				onStart: () => {
					if (upcoming === "done") setScreen("cert");
					else openLevel(upcoming);
				},
				onMap: () => setScreen("map")
			}),
			screen === "map" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapScreen, {
				save,
				notice,
				resetArmed,
				onLang: (next) => patch({ lang: next }),
				onSound: () => patch({ sound: !save.sound }),
				onHome: () => setScreen("home"),
				onOpen: openLevel,
				onPreview: () => patch({ previewAll: !save.previewAll }),
				onReset: () => {
					if (!resetArmed) {
						setResetArmed(true);
						return;
					}
					setSave({
						...defaultSave,
						lang: save.lang,
						sound: save.sound,
						name: save.name
					});
					setResetArmed(false);
					setNotice("");
				},
				onCert: () => setScreen("cert")
			}),
			screen === "play" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayScreen, {
				save,
				levelId,
				onLang: (next) => patch({ lang: next }),
				onSound: () => patch({ sound: !save.sound }),
				onMap: () => setScreen("map"),
				onClear: (stars) => clearLevel(levelId, stars),
				onNext: () => {
					if (levelId >= 30) setScreen("cert");
					else openLevel(levelId + 1);
				}
			}),
			screen === "cert" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certificate, {
				save,
				onName: (name) => patch({ name }),
				onMap: () => setScreen("map"),
				onHome: () => setScreen("home")
			})
		]
	});
}
function Home({ save, clearedCount, upcoming, onLang, onSound, onName, onStart, onMap }) {
	const lang = save.lang;
	const startLabel = upcoming === "done" ? tx(ui.finish, lang) : clearedCount > 0 ? `${tx(ui.resume, lang)} · ${upcoming}` : tx(ui.enter, lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "topbar",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brand",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: tx(ui.kicker, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: tx(ui.labs, lang) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "spread",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, {
					lang,
					onChange: onLang
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoundButton, {
					on: save.sound,
					lang,
					onClick: onSound
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display",
						children: tx(ui.title, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede",
						children: tx(ui.hero, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hello",
						children: tx(ui.hello, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "steps",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "1" }), tx(ui.step1, lang)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2" }), tx(ui.step2, lang)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "3" }), tx(ui.step3, lang)] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "stack",
						onSubmit: (event) => {
							event.preventDefault();
							onStart();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tx(ui.name, lang) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: save.name,
								placeholder: tx(ui.namePh, lang),
								maxLength: 40,
								onChange: (event) => onName(event.target.value)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn btn-primary btn-block",
							children: startLabel
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-ink btn-block",
						onClick: onMap,
						children: tx(ui.browse, lang)
					}),
					clearedCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "paper-muted",
						children: [
							clearedCount,
							"/30 ",
							tx(ui.clearedOf, lang),
							" · ",
							starsLabel(starTotal(save), lang)
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-figure",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyMan, { mood: "talk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: tx(ui.stickyName, lang) })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "chapter-list",
			"aria-label": tx(ui.labs, lang),
			children: CHAPTERS.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "chapter-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "idx",
					children: ["0", chapter.id]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: chapter.title[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ink-note",
					children: chapter.blurb[lang]
				})] })]
			}, chapter.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "ink-note",
			children: tx(ui.device, lang)
		})
	] });
}
function MapScreen({ save, notice, resetArmed, onLang, onSound, onHome, onOpen, onPreview, onReset, onCert }) {
	const lang = save.lang;
	const clearedCount = Object.keys(save.cleared).length;
	const upcoming = nextUncleared(save);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "topbar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "btn btn-ghost",
					onClick: onHome,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }), tx(ui.backHome, lang)]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, {
					lang,
					onChange: onLang
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoundButton, {
					on: save.sound,
					lang,
					onClick: onSound
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "spread",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display page-title",
				children: tx(ui.browse, lang)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bar",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${clearedCount / 30 * 100}%` } })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "ink-note",
			children: [
				clearedCount,
				"/30 · ",
				starsLabel(starTotal(save), lang)
			]
		}),
		notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "ink-note",
			children: notice
		}),
		CHAPTERS.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "map-block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "kicker",
					children: ["0", chapter.id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display",
					children: chapter.title[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ink-note",
					children: chapter.blurb[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "nodes",
					children: Array.from({ length: 5 }, (_, index) => {
						const id = (chapter.id - 1) * 5 + index + 1;
						const open = isOpen(id, save);
						const stars = save.cleared[String(id)] ?? 0;
						const now = upcoming === id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: `node ${stars ? "is-done" : ""} ${now ? "is-now" : ""} ${open && !stars && !now ? "is-open" : ""}`,
							disabled: !open,
							onClick: () => onOpen(id),
							"aria-label": levelLabel(id, lang),
							children: [id, stars > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "badge",
								children: stars
							})]
						}, id);
					})
				})
			]
		}, chapter.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stack",
			style: { marginTop: "1.2rem" },
			children: [
				clearedCount === 30 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-primary btn-block",
					onClick: onCert,
					children: tx(ui.finish, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-ghost btn-block",
					onClick: onPreview,
					children: save.previewAll ? tx(ui.previewOn, lang) : tx(ui.preview, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "linkish",
					onClick: onReset,
					children: resetArmed ? tx(ui.resetSure, lang) : tx(ui.reset, lang)
				})
			]
		})
	] });
}
function PlayScreen({ save, levelId, onLang, onSound, onMap, onClear, onNext }) {
	const level = getLevel(levelId);
	const lang = save.lang;
	const [chat, setChat] = (0, import_react.useState)([{
		from: "sticky",
		key: "intro1"
	}, {
		from: "sticky",
		key: "intro2"
	}]);
	const [mood, setMood] = (0, import_react.useState)("talk");
	const [hints, setHints] = (0, import_react.useState)(0);
	const [misses, setMisses] = (0, import_react.useState)(0);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [solved, setSolved] = (0, import_react.useState)(false);
	const [earned, setEarned] = (0, import_react.useState)(0);
	const reported = (0, import_react.useRef)(false);
	const logRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setChat([{
			from: "sticky",
			key: "intro1"
		}, {
			from: "sticky",
			key: "intro2"
		}]);
		setMood("talk");
		setHints(0);
		setMisses(0);
		setRevealed(false);
		setSolved(false);
		setEarned(0);
		reported.current = false;
		window.scrollTo(0, 0);
	}, [levelId]);
	(0, import_react.useEffect)(() => {
		if (mood === "happy") return;
		const timer = window.setTimeout(() => setMood("idle"), 1700);
		return () => window.clearTimeout(timer);
	}, [mood, chat.length]);
	(0, import_react.useEffect)(() => {
		const el = logRef.current;
		if (el) el.scrollTop = el.scrollHeight;
	}, [chat.length, lang]);
	function push(extra, nextMood) {
		setChat((current) => [...current, ...extra].slice(-8));
		setMood(nextMood);
	}
	function askHow() {
		const last = chat[chat.length - 1];
		if (last?.from === "sticky" && last.key === "how") return;
		blip("tap", save.sound);
		push([{
			from: "you",
			key: "askHow"
		}, {
			from: "sticky",
			key: "how"
		}], "talk");
	}
	function askHint() {
		if (solved || revealed) return;
		blip("tap", save.sound);
		if (hints === 0) {
			setHints(1);
			push([{
				from: "you",
				key: "askHint"
			}, {
				from: "sticky",
				key: "hint1"
			}], "think");
			return;
		}
		if (hints === 1) {
			setHints(2);
			push([{
				from: "you",
				key: "askHint"
			}, {
				from: "sticky",
				key: "hint2"
			}], "think");
			return;
		}
		setRevealed(true);
		push([{
			from: "you",
			key: "askReveal"
		}, {
			from: "sticky",
			key: "reveal"
		}], "think");
	}
	function onAttempt(correct) {
		if (solved) return;
		if (correct) {
			const stars = starScore(misses, hints, revealed);
			setEarned(stars);
			setSolved(true);
			setMood("happy");
			blip("ok", save.sound);
			push([{
				from: "sticky",
				key: "right"
			}], "happy");
			if (!reported.current) {
				reported.current = true;
				onClear(stars);
			}
			return;
		}
		setMisses((count) => count + 1);
		setMood("oops");
		blip("bad", save.sound);
		setChat((current) => {
			const last = current[current.length - 1];
			if (last?.from === "sticky" && last.key === "wrong") return current;
			const next = {
				from: "sticky",
				key: "wrong"
			};
			return [...current, next].slice(-8);
		});
	}
	const forecast = solved ? earned : starScore(misses, hints, revealed);
	const best = Math.max(save.cleared[String(levelId)] ?? 0, solved ? earned : 0);
	const chapter = CHAPTERS[level.chapter - 1];
	function textOf(msg) {
		if (msg.from === "you") return tx(ui[msg.key], lang);
		return level[msg.key][lang];
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "topbar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "btn btn-ghost",
				onClick: onMap,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }), tx(ui.backMap, lang)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: chapter?.title[lang]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { n: forecast })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "spread",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, {
					lang,
					onChange: onLang
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoundButton, {
					on: save.sound,
					lang,
					onClick: onSound
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "play-grid",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Puzzle, {
			level,
			lang,
			solved,
			revealed,
			earned,
			best,
			onAttempt,
			onNext,
			onMap
		}, level.id), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "chat-dock",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "chat-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "chat-id",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "sticky-hit",
							onClick: askHow,
							"aria-label": tx(ui.how, lang),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyMan, { mood })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: tx(ui.stickyName, lang) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "fine",
								children: tx(ui.solveNow, lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { n: forecast })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "log",
						ref: logRef,
						"aria-live": "polite",
						children: chat.map((msg, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: msg.from === "you" ? "bubble-you" : "bubble",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "who",
								children: msg.from === "you" ? tx(ui.you, lang) : tx(ui.stickyName, lang)
							}), textOf(msg)]
						}, `${msg.from}-${msg.key}-${index}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "fine",
						children: [
							tx(ui.howFree, lang),
							" ",
							tx(ui.hintCost, lang)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-ink btn-block",
						onClick: askHow,
						children: tx(ui.how, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-soft btn-block",
						onClick: askHint,
						disabled: solved || revealed,
						children: hints >= 2 ? tx(ui.reveal, lang) : tx(ui.hint, lang)
					})
				]
			})
		})]
	})] });
}
function Certificate({ save, onName, onMap, onHome }) {
	const lang = save.lang;
	const [date, setDate] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setDate((/* @__PURE__ */ new Date()).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", {
			day: "numeric",
			month: "long",
			year: "numeric"
		}));
	}, [lang]);
	const done = Object.keys(save.cleared).length === 30;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "topbar",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "btn btn-ghost",
			onClick: onHome,
			children: tx(ui.backHome, lang)
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "cert",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: tx(ui.certKicker, lang)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cert-man",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyMan, { mood: done ? "happy" : "talk" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display",
				children: tx(ui.certTitle, lang)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "field",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tx(ui.name, lang) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: save.name,
					placeholder: tx(ui.guest, lang),
					maxLength: 40,
					onChange: (event) => onName(event.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lede",
				children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: save.name.trim() || tx(ui.guest, lang) }),
					" ",
					tx(ui.certBody, lang)
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					Object.keys(save.cleared).length,
					"/30 ",
					tx(ui.clearedOf, lang)
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [starsLabel(starTotal(save), lang), " / 90"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "paper-muted",
				children: date
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: tx(ui.certSticky, lang) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "paper-muted",
				children: done ? tx(ui.showTeacher, lang) : tx(ui.locked, lang)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary",
				onClick: onMap,
				children: tx(ui.toMap, lang)
			})
		]
	})] });
}
function SoundButton({ on, lang, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "btn btn-ghost",
		onClick,
		"aria-pressed": on,
		"aria-label": tx(ui.sound, lang),
		children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { size: 18 })
	});
}
var SplitComponent = GameApp;
//#endregion
export { SplitComponent as component };
