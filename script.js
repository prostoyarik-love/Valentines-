const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const response = document.getElementById("response");

let noScale = 1;
let yesScale = 1;

noBtn.addEventListener("click", () => {
    response.innerText = "Ты серьёзно? 😐";

    noScale -= 0.2;
    if (noScale <= 0.2) {
        noScale = 0.2;
        noBtn.style.pointerEvents = "none";
        response.innerText = "Ладно, выбора нет 😏";
    }
    noBtn.style.transform = `scale(${noScale})`;

    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
    response.innerHTML = "💖 УРААА! Ты моя валентинка! 💖";
    document.body.style.background = "#ffb3c6";
    yesBtn.disabled = true;
    noBtn.disabled = true;
});
