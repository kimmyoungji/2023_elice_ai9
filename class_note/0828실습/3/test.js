const target = document.getElementsByClassName("attend"); //올바른 값을 작성해주세요.
const inputName = document.getElementsByTagName("input"); //올바른 값을 작성해주세요.
const attendee = document.getElementById("attendee"); //올바른 값을 작성해주세요.

console.log("target", target);
console.log("inputName", inputName);
console.log("attendee", attendee);
/*2. 입력받은 이름을 출석부에 나타내기*/

function attend() {
    /*여기에 작성해주세요.*/
    attendee.textContent = inputName.value;
}

target.addEventListener("click", attend);
