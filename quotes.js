quotes = [
  "Close the damn tab!",
  "Nobody forced you to end up here",
  "This is getting embarrassing",
  "Why are you even here?",
  "You spent more energy dodging it",
  "This would've been funny once",
  "Take a deep breath",
  "You know exactly what you're doing",
  "Be serious for ten minutes",
  "The blocker worked. That's why you're reading this",
  "You installed the blocker bro",
  "Elite level procrastination",
  "Add this skill in your résumé: doom scroll LinkedIn and feel behind",
  "Imagine putting this much effort into the actual task",
  "You keep opening this site as if it's your full time job",
  "You are once again asking Reddit to drain your time",
  "You are consuming productivity content instead of being productive",
  "You're procrastinating on something that would take less time than this",
  "The blocker is doing its job. Are you?",
  "This is a side quest pretending to be important",
  "You are fully capable of wasting an entire evening",
  "The funniest outcome would be closing this and actually working",
  "Lock in",
  "Come on mannnnnnnn",
  "I'm tired boss, just do your job so I don't have to.",
  "Enough"
]

// did -1 cuz idx at 26 would give undefined
function randomQuote() {
  idx = Math.round(Math.random() * quotes.length) % quotes.length;
  console.log(idx);
  return quotes[idx];
}
