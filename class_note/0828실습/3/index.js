/*지시사항을 따라 작성해주세요*/

/*1. index.html 파일을 참고해 주어진 변수들 완성시키기*/

// const target = document.querySelector(".attend"); //올바른 값을 작성해주세요.
const target = document.querySelector(".container > .inputWindow :last-child"); //올바른 값을 작성해주세요.
const inputName = document.querySelector("input"); //올바른 값을 작성해주세요.
const attendee = document.querySelector("#attendee"); //올바른 값을 작성해주세요.

/*2. 입력받은 이름을 출석부에 나타내기*/

function attend() {
    /*여기에 작성해주세요.*/
    console.dir(inputName.value);

    attendee.textContent = inputName.value;
}

target.addEventListener("click", attend);

// querySelector 응용 (복잡한 selector)
