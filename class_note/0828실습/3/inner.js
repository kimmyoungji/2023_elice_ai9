const target = document.querySelector("button"); //올바른 값을 작성해주세요.
const inputName = document.querySelector("input");
const attendee = document.querySelector(" #attendee"); //올바른 값을 작성해주세요.

/*2. 입력받은 이름을 출석부에 나타내기*/

function attend() {
    /*여기에 작성해주세요.*/
    attendee.innerText = "<div>test3</div>\n띄어쓰기";
    // attendee.innerHTML = "<div>test2</div><br><div>띄어쓰기</div>";
    // attendee.textContent = "<div>test3</div>\n띄어쓰기";
    // attendee.textContent = inputName.value;
}

target.addEventListener("click", attend);

// querySelector 응용 (복잡한 selector)
const none = document.querySelector("div.none");
console.log("innerHTML", none.innerHTML);
console.log("innerText", none.innerText);
console.log("textcontext", none.textContent);
