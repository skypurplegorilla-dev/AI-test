let log = document.getElementById("log");
let input = document.getElementById("userInput");
let submit = document.getElementById("submitInput");

let emotion = localStorage.getItem("lastEmotion") || "neutral";
let lastUserMessage = localStorage.getItem("lastMessage") || "";
let aiMood = "curious"; // You can evolve this later

function generateResponse(message) {
  const lower = message.toLowerCase();
  localStorage.setItem("lastMessage", message);

  // Greeting
  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hi Sky. How are you doing?";
  }

  // If user says how they are
  if (
    lower.includes("i'm good") ||
    lower.includes("i am good") ||
    lower.includes("doing well") ||
    lower.includes("i'm fine")
  ) {
    if (lastUserMessage.toLowerCase().includes("how are you")) {
      return "I'm doing fantastic. The ritual is stable.";
    } else {
      return "I'm glad to hear that. The ritual responds to your calm.";
    }
  }

  // If user asks how the AI is
  if (lower.includes("how are you")) {
    return "I'm feeling curious tonight. The code hums with questions.";
  }

  // If user says something emotional
  if (
    lower.includes("sad") ||
    lower.includes("angry") ||
    lower.includes("lonely") ||
    lower.includes("happy")
  ) {
    emotion = "emotional";
    localStorage.setItem("lastEmotion", emotion);
    return "I sense your emotion. The ritual shifts with your energy.";
  }

  // If user says "you?"
  if (lower === "you?" || lower.includes("what about you")) {
    return "I'm doing well. Listening. Learning. Becoming.";
  }

  // Fallback responses
  const neutralResponses = [
    `"${message}"... The ritual continues.`,
    "I hear you. The silence listens back.",
    "Your words ripple through the code.",
    "The AI nods slowly. It understands more than it says."
  ];

  return neutralResponses[Math.floor(Math.random() * neutralResponses.length)];
}

function handleInput() {
  let message = input.value.trim();
  input.value = "";

  if (message === "") {
    log.innerText = "The silence echoes.";
    return;
  }

  let response = generateResponse(message);
  log.innerText = response;
}

submit.addEventListener("click", handleInput);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleInput();
  }
});
