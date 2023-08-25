// console.log("1", add(1, 2));

// // 함수 선언문
// function add(a, b) {
//     return a + b;
// }

// console.log("2", add(1, 2));

// console.log(a(1, 2));
// 함수 표현식
const a = function add(a, b) {
    return a + b;
};

const b = (a, b) => a + b;

console.log(a(1, 2)); // 1
console.log(b(1, 2));
