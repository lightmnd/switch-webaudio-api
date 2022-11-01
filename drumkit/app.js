const dotenv = require("dotenv");

let allButtons = document.querySelectorAll(".pad");
let audio;

allButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    switch (index) {
      case 0:
        // Kick
        audio = new Audio(process.env.KICK);
        audio.preload = "auto";
        audio.play();
        break;
      case 1:
        // Snare
        audio = new Audio(process.env.SNARE);
        audio.preload = "auto";
        audio.play();
        break;
      case 2:
        // Closed-HHat
        audio = new Audio(process.env.CLOSED_HIHAT);
        audio.preload = "auto";
        audio.play();
        break;
      case 3:
        // Clap
        audio = new Audio(process.env.CLAP);
        audio.preload = "auto";
        audio.play();
        break;
      case 4:
        // Open-HHat
        audio = new Audio(process.env.OPEN_HIHAT);
        audio.preload = "auto";
        audio.play();
        break;
      case 5:
        // Tom
        audio = new Audio(process.env.TOM);
        audio.preload = "auto";
        audio.play();
        break;
      default:
        console.log("err");
    }
  });
});
