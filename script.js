// Arcade coin sound effect
const coinSound = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");

document.querySelectorAll(".game-link").forEach(link => {
  link.addEventListener("click", () => {
    coinSound.play();
  });
});
