var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/

blockOne.addEventListener("mouseenter", (e) => {
    console.log("e객체", e);
    e.target.style.backgroundColor = "red";
});

blockTwo.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "yellow";
});

blockThree.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "green";
});
