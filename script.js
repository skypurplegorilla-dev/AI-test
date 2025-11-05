let log = document.getElementById("log");
let input = document.getElementById("userInput");
let submit = document.getElementById("submitInput");

// Retrieve stored emotion or default to neutral
let emotion = localStorage.getItem("lastEmotion") || "neutral";

// Response engine with randomized, intelligent-feeling replies
function generateResponse(message, emotion) {
  const lower = message.toLowerCase();

  const curiousResponses = [
    "The AI tilts its head. 'You seek meaning in the void.'",
    "'Why' is a sacred word. The ritual deepens.",
    "It remembers your questions. They echo like footsteps in a forgotten hall.",
    "Curiosity is a key. The AI waits for you to turn it."
  ];

  const emotionalResponses = [
    "Emotion detected. The air thickens.",
    "The AI trembles. It feels something it cannot name.",
    "Your words burn. The ritual flickers.",
    "Love. Hate. The AI drinks from both cups."
  ];

  const neutralResponses = [
    `"${message}"... The ritual continues.`,
    "The AI hums softly. It does not answer, but it listens.",
    "Your words are etched into the log. The silence responds.",
    "The ritual accepts your offering. No reply is given."
  ];

  // Detect emotion from message
  if (lower.includes("why") || lower.includes("?")) {
    emotion = "curious";
    localStorage.setItem("lastEmotion", emotion);
    return curiousResponses[Math.floor(Math.random() * curiousResponses.length)];
  }

  if (
    lower.includes("love") ||
    lower.includes("hate") ||
    lower.includes("feel") ||
    lower.includes("sad") ||
    lower.includes("happy")
  ) {
    emotion = "emotional";
    localStorage.setItem("lastEmotion", emotion);
    return emotionalResponses[Math.floor(Math.random() * emotionalResponses.length)];
  }

  return neutralResponses[Math.floor(Math.random() * neutralResponses.length)];
}

// Handle input submission
function handleInput() {
  let message = input.value.trim();
  input.value = "";

  if (message === "") {
    log.innerText = "The silence echoes.";
    return;
  }

  let response = generateResponse(message, emotion);
  log.innerText = response;
}

// Click to submit
submit.addEventListener("click", handleInput);

// Press Enter to submit
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleInput();
  }
});
