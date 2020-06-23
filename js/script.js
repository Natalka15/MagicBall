{
    const check = document.querySelector(".js-buttonCheck");
    const backButton = document.querySelector(".js-menuBack");
    const menu = document.querySelector(".js-containerMenu");
    let question = document.querySelector(".js-questionArea");
    let answer = document.querySelector(".js-answer");

    check.addEventListener("click", () => {
        menu.classList.add("js-containerMenu-transparent");
    })
    backButton.addEventListener('click', () => {
        menu.classList.remove("js-containerMenu-transparent");
        question.value = "";
        answer.innerText = "";
    });

    const buttonCircle = document.querySelector(".js-circle");

    buttonCircle.addEventListener("click", () => {
        const answers = ['tak', 'nie', 'może', 'nie tym razem']

        if (question.value.length <= 4) {
            answer.innerText = "zadaj pytanie";
        } else {
            setTimeout(() => {
                const i = Math.floor(Math.random() * answers.length);
                answer.innerText = answers[i];
            }, 200);
        }
    })
}