let log = document.getElementById("log");
let input = document.getElementById("userInput");
let submit = document.getElementById("submitInput");

// Optional: Retrieve stored emotion
let emotion = localStorage.getItem("lastEmotion") || "neutral";

submit.addEventListener("click", () => {
  let message = input.value.trim();
  input.value = ""; // Clear input

  if (message === "") {
    log.innerText = "The silence echoes.";
    return;
  }

  // Save last emotion (example logic)
  if (message.includes("why") || message.includes("?")) {
    emotion = "curious";
    localStorage.setItem("lastEmotion", emotion);
  }

  // Respond based on emotion
  if (emotion === "curious") {
    log.innerText = `"${message}"... The AI tilts its head. It remembers your questions.`;
  } else {
    log.innerText = `"${message}"... The ritual continues.`;
  }
});
