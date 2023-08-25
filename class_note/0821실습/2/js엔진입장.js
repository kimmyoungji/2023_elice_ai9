function add(a, b) {
    return a + b;
}
var tmp = undefined;

console.log("1", add(1, 2));

console.log(tmp);
// 함수 선언문

console.log("2", add(1, 2));

tmp = 2;
console.log(tmp);

// console.log(a(1, 2));
// // 함수 표현식
// const a = function (a, b) {
//     return a + b;
// };

// console.log(a(1, 2));
