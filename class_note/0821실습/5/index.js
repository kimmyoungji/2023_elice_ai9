// 여러 입력을 받도록 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
    input = line.split(" ");
    rl.close();
}).on("close", function () {
    let length = input.length;
    let i = 0;
    while (i < length) {
        console.log(input[i]);
        i++;
    }
});

// // fs모듈 사용
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
// console.log(input.join('\n'));
