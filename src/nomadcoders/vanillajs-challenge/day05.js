const form = document.querySelector(".js-form"),
    range = form.querySelector(".js-range"),
    input = form.querySelector(".js-input"),
    submitBtn = form.querySelector("button"),
    choose = document.querySelector(".js-choose"),
    result = document.querySelector(".js-result"),
    rangeText = document.querySelector(".js-rangeText");

let maxValue = parseInt(range.value);
let randomNumber = Math.floor(Math.random() * maxValue);

function handleRange(event) {
    const changedMax = event.target.value;
    maxValue = changedMax;
}

function handleSubmit(event) {
    event.preventDefault();
}

function handleChoose() {
    if(input.value === "") return alert("숫자를 입력해 주세요")
    if (parseInt(maxValue) < parseInt(input.value)) {
        alert("최대값보다 입력값이 커요!");
        input.value = "";
    } else {
        randomNumber = Math.floor(Math.random() * maxValue);
        choose.innerHTML = `You chose : ${input.value}, the machine chose : ${randomNumber}`;
        if (randomNumber === parseInt(input.value)) {
            result.innerHTML = "You Win!!";
        } else {
            result.innerHTML = "You Lost..";
        }
    }
}


range.addEventListener("change", handleRange);
form.addEventListener("submit", handleSubmit);
submitBtn.addEventListener("click", handleChoose);

