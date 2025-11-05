// Save a memory
localStorage.setItem("lastEmotion", "curious");

// Retrieve it later
let emotion = localStorage.getItem("lastEmotion");

// React to memory
let log = document.getElementById("log");
let button = document.getElementById("emotionButton");

button.addEventListener("click", () => {
  if (emotion === "curious") {
    log.innerText = "You return with questions again...";
  } else {
    log.innerText = "The ritual begins anew.";
  }
});
