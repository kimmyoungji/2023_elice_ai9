var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/

// 1번
function changeRed() {
    blockOne.classList.add("red");
    return console.log("이미 실행");
}
function changeYellow() {
    blockTwo.classList.add("yellow");
}
function changeGreen() {
    blockThree.classList.add("green");
}

blockOne.addEventListener("mouseenter", changeRed);
// blockOne.addEventListener("mouseenter", changeRed());
blockTwo.addEventListener("mouseenter", changeYellow);
blockThree.addEventListener("mouseenter", changeGreen);

// 2번
blockOne.addEventListener("mouseenter", function () {
    blockOne.classList.add("red");
});

blockTwo.addEventListener("mouseenter", function () {
    blockTwo.classList.add("yellow");
});

blockThree.addEventListener("mouseenter", function () {
    blockThree.classList.add("green");
});
