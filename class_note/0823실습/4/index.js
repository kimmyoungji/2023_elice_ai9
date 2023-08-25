const fruits = ["apple", "banana", "orange", "blueberry", "strawberry"];
var sum = 0; // b로 시작하는 과일의 개수를 저장하는 변수

/*지시사항을 따라 작성해주세요*/

// 1번
for (let i = 0; i < fruits.length; i++) {
    console.log("과일들 : ", fruits[i]);
    if (fruits[i][0] === "b") sum++;
}
console.log(sum);

// 2번
sum = 0;
fruits.map((item) => {
    console.log("과일 이름은 ? :", item);
    if (item[0] === "b") sum++;
});
console.log(sum);

// 3번
sum = 0;
// console.log(fruits.filter((item) => item[0] === "b"));

sum = fruits.filter((item) => item[0] === "b").length;
console.log(`b로 시작하는 과일은 ${sum}개`);

// 4번
sum = 0;
for (const v of fruits) {
    if (v[0] === "b") sum++;
}

console.log(`b로 시작하는 과일은 : ${sum}개`);
