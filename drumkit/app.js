let allButtons = document.querySelectorAll(".pad");
let audio;

allButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        switch (index) {
            case 0:
                // Kick
                audio = new Audio(
                    "https://drumkit-sound-samples.s3.eu-west-3.amazonaws.com/kick.wav"
                );
                audio.preload = "auto";
                audio.play();
                break;
            case 1:
                // Snare
                audio = new Audio(
                    "https://drumkit-sound-samples.s3.eu-west-3.amazonaws.com/new_snare.wav"
                );
                audio.preload = "auto";
                audio.play();
                break;
            case 2:
                // Closed-HHat
                audio = new Audio(
                    "https://drumkit-sound-samples.s3.eu-west-3.amazonaws.com/closed-hihat.mp3"
                );
                audio.preload = "auto";
                audio.play();
                break;
            case 3:
                // Clap
                audio = new Audio(
                    "https://drumkit-sound-samples.s3.eu-west-3.amazonaws.com/descructured_clap.wav"
                );
                audio.preload = "auto";
                audio.play();
                break;
            case 4:
                // Open-HHat
                audio = new Audio(
                    "https://drumkit-sound-samples.s3.eu-west-3.amazonaws.com/open-hihat.mp3"
                );
                audio.preload = "auto";
                audio.play();
                break;
            case 5:
                // Tom
                audio = new Audio(
                    "https://drumkit-sound-samples.s3.eu-west-3.amazonaws.com/tom_808.wav"
                );
                audio.preload = "auto";
                audio.play();
                break;
            default:
                console.log("err");
        }
    });
});