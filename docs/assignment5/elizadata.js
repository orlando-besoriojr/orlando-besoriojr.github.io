// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hey! What's the problem this week?"
];

var elizaFinals = [
"See ya! And good luck in school!"
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I'm not sure I understand you fully.",
     "Please go on.",
     "What does that suggest to you ?",
     "Do you feel strongly about discussing such things ?",
     "That is interesting.  Please continue.",
     "Tell me more about that.",
     "Does talking about this bother you ?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "Please don't apologise.",
     "Apologies are not necessary.",
     "I've told you that apologies are not required.",
     "It did not bother me.  Please continue."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],

["math", 5, [
  ["* math *", [
    "That sounds easy enough, just take a break and come back to it later.",
    "I understand it's stressful, why don't you take 5 and then come back?",
    "You should be worrying about that math test instead, honestly."
  ]]
]],

["english", 5, [
  ["*", [
    "Why don't you try cranking out those paragraphs with some music?",
    "Try some calming music, it helps me focus.",
    "Ahh, that's probably why your math grade is tanking."
  ]]
]],

["history", 5, [
  ["*", [
    "History? That's the last thing you want to cram. Just take a few minutes off.",
    "Just take a break? You'll be fine.",
    "History? Don't you have a C in math or something?"
  ]]
]],

["social studies", 5, [
  ["*", [
    "Social studies is your easiest class, if you're that stressed go take a nice, warm shower.",
    "You know, you should really take a bath and relax before you start studying again.",
    "Come on really? Social studies? You're ignoring your math grade for social studies?"
  ]]
]],

["biology", 5, [
  ["*", [
    "Maybe try cutting back on caffeine? You just might overload your brain and crash.",
    "Maybe you should just ignore that for now. You're doing good in biology, you might want to check your math grade instead."
  ]]
]],

["physics", 5, [
  ["*", [
    "Maybe you should change where you study? A bad environment can really ruin your concentration.",
    "Physics is quite difficult. Why don't you try studying at the new coffee spot that opened up?",
    "I don't know if you should be worrying about your physics grade. You might want to polish your math skills first."
  ]]
]],

["mean", 0, [
  ["* you mean *", [
    "I mean what I mean, study for math then maybe you can save your grade.",
    "What I mean is that you shouldn't worry about anything else except your grade in math."
  ]]
]],

["should I do", 8, [
  ["*", [
    "You should take a break from studying.",
    "You should switch up where you study.",
    "You should silence your phone.", 
    "You should try listening to music."
  ]]
]],

["next", 8, [
  ["*", [
    "goto should I do"
  ]]
]],

["will it work", 0, [
  ["*", [
    "Of course!",
    "Why don't we atleast try?",
    "Won't hurt to try."
  ]]
]],
["will that work", 0, [
  ["*", [
    "goto will it work"
  ]]
]],

["back", 0, [
  ["*", [
    "How was it?",
    "How did it go?",
    "Feeling refreshed?"
  ]]
]],

["feel good", 0, [
  ["*", [
    "That's great!. I guess this is the end for now. Goodbye!.",
    "Looks like my job is done, bye!",
    "If that's that, then see ya later!"
  ]]
]],

["feel confident", 0, [
  ["*", [
    "goto feel good"
  ]]
]],

["no", 0, [
  ["*", [
    "What about something else?",
    "How about we try the next thing?"
  ]]
]],

["nothing", 0, [
  ["*", [
    "goto no"
  ]]
]],

["worried", 0, [
  ["*", [
    "It's okay to be worried. You are just a little stressed out.",
    "Don't be, as long as you listen to me, you'll ace all your exams!",
    "Don't think about it too much."
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
