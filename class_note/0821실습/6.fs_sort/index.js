// // 첫 번째 줄에 입력된 여러 숫자 중, "두 번째 줄에 입력된 숫자"번째로 큰 숫자를 출력하세요.
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];
// let cnt = 0;
// rl.on("line", function (line) {
//     cnt++;
//     input.push(line);
//     if (cnt === 2) rl.close();
// }).on("close", function () {
//     console.log("input", input);
//     const list = input[0].split(" ");
//     const n = input[1];
//     list.sort((a, b) => b - a);
//     console.log(list[n - 1]);
// });

// fs모듈 사용
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

console.log("input", input);
const arr = input[0].split(" ").map(Number);
const n = input[1] * 1;
arr.sort((a, b) => b - a);
console.log(arr[n - 1]);
