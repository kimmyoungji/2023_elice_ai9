var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

//  3. 이벤트 리스너 사용

// 화살표 함수
blockTwo.addEventListener("mouseenter", () => {
    // console.log(blockOne.outerHTML);
    // blockOne.className = "red";
    blockOne.classList.add("red");
});

// 일반 함수
blockTwo.addEventListener("mouseenter", function () {
    // blockTwo.className = "yellow";
    blockTwo.classList.add("yellow");
});

//  외부 함수 참조
function eventListener() {
    console.log("이벤트 리스너 이용");
    blockThree.classList.add("green");
}

blockThree.addEventListener("mouseenter", eventListener);

// 삭제 불가능
blockOne.addEventListener("dblclick", () => console.log("이벤트 삭제-화살표 함수")); //f1
blockOne.removeEventListener("dblclick", () => console.log("이벤트 삭제-화살표 함수")); // f1

blockTwo.addEventListener("dblclick", function () {
    console.log("이벤트 삭제-일반 함수");
});
blockTwo.removeEventListener("dblclick", function () {
    console.log("이벤트 삭제-일반 함수");
});

// 삭제 가능
// function remove() {
//     console.log("이벤트 삭제-외부 함수 참조");
// }

// blockThree.addEventListener("dblclick", remove);
// blockThree.removeEventListener("dblclick", remove);

blockThree.addEventListener("dblclick", function remove() {
    console.log("이벤트 삭제 - 기명 함수 참조");
    blockThree.removeEventListener("dblclick", remove);
});

// Tip
blockThree.addEventListener("dblclick", () => console.log("이벤트 한번만 실행하기"), {
    once: true,
});
