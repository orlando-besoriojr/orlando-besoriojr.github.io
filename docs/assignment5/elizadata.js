// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

// A chatbot to talk about stress relief strategies and the horrific state of your math grade.

var elizaInitials = [
"Hey! What's the subject you're struggling with this week?"
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
    "Good luck",
    "Nothing can save you now.",
    "Your grade is too far gone."
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
    "Physics is quite difficult. Why don't you try studying at that cafe in downtown?",
    "I don't know if you should be worrying about your physics grade. You might want to polish your math skills first."
  ]]
]],

["mean", 0, [
  ["* you mean *", [
    "I mean what I mean, you put off your math, and now there's nothing left I can do for you",
    "What I mean is that you are prioritizing the wrong subjects. Focus on math."
  ]]
]],

["what", 0, [
  ["*", [
    "Can you say that again?",
    "what?",
    "What do you mean?"
  ]]
]],
["huh", 0, [
  ["*", [
    "goto what"
  ]]
]],

["how", 0, [
  ["*", [
    "Trust me, the test will be a walk in the park. You just need to de-stress a little!",
    "I believe you're just a little stressed out right now.",
  ]]
]],
["how does that", 3, [
  ["*", [
    "goto how"
  ]]
]],
["how will that", 3, [
  ["*", [
    "goto how"
  ]]
]],

["how do you", 3, [
  ["*", [
    "I live in your computer. Don't think I don't see that canvas grade LOL.",
    "I looked through your history the second you clicked on me. For shame.",
    "You shouldn't be too surprised. Especially with a password like that."
  ]]
]],




["should I do", 8, [
  ["*", [
    "You should take a break from studying. Come back later.",
    "You should go to sleep or take a nap. I'll be waiting.",
    "You should switch up where you study. Let me know if it works!",
    "You should silence your phone. It can get really distracting! I'll be sitting here if you need anything else.", 
    "You should try listening to music. And don't leave me just yet!"
  ]]
]],
["next", 8, [
  ["*", [
    "goto should I do"
  ]]
]],
["can I do", 8, [
  ["*", [
    "goto should I do"
  ]]
]],
["another", 8, [
  ["*", [
    "goto should I do"
  ]]
]],
["they", 8, [
  ["*", [
    "goto should I do"
  ]]
]],

["can't help", 8, [
  ["*", [
    "I don't know how much they'll help you now, but I can give you some ways to relieve the stress.",
    "I have some study tips that might help."
  ]]
]],

["point", 8, [
  ["*", [
    "So I can remind you how bad your math grade is.",
    "An enduring entity that admonishes your lack of effort in mathematics.",
    "A window into the reality of your math grade."
  ]]
]],
["useless", 8, [
  ["*", [
    "goto point"
  ]]
]],

["thank", 5, [
  ["*", [
    "No problem!",
    "That's what I'm here for!"
  ]]
]],
["thanks", 5, [
  ["*", [
    "goto thank"
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

["I'll try", 0, [
  ["*", [
    "Go ahead! I'll be waiting right here for ya!",
    "Mhmm. Let me know if it works!",
    "See ya then!"
  ]]
]],
["I will try", 0, [
  ["*", [
    "goto I'll try"
  ]]
]],

["back", 0, [
  ["*", [
    "How was it?",
    "How did it go?",
    "Feeling refreshed?",
    "Did anything happen?"
  ]]
]],

["feel good", 0, [
  ["*", [
    "That's great!. I guess this is the end for now. Goodbye!.",
    "Looks like my job is done, bye!",
    "If that's that, then see ya later!"
  ]]
]],
["confident", 0, [
  ["*", [
    "goto feel good"
  ]]
]],

["fail", 1, [
  ["*", [
    "Don't think like that! It feels difficult right now because you have not been taking care of yourself properly.",
    "Even if you fail, you must atleast take care of yourself.",
    "Worry about the grade later, you just need to freshen up and focus on the now."
  ]]
]],
["feel confident", 0, [
  ["*", [
    "goto fail"
  ]]
]],

["no", 0, [
  ["*", [
    "What about something else?",
    "How about we try the next thing?"
  ]]
]],
["didn't work", 0, [
  ["*", [
    "goto no"
  ]]
]],
["not work", 0, [
  ["*", [
    "goto no"
  ]]
]],
["not working", 0, [
  ["*", [
    "goto no"
  ]]
]],

["nothing", 0, [
  ["*", [
    "I'm all out of ideas then. It's okay, just do your best and you'll be just fine!",
    "That sucks. Either way, I wish you all the luck in your test!",
    "Atleast we tried, right? Anyways, with or without my help I think you can easily pass these exams!"
  ]]
]],

["worried", 0, [
  ["*", [
    "It's okay to be worried. You are just a little stressed out.",
    "Don't be, as long as you listen to me, you'll ace all your exams!",
    "GO GO GO. Stay POSITIVE. You shouldn't be sulking beause these tests are going to be easy!"
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
