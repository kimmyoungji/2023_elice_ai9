const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("입력해주세요.");

rl.on("line", function (data) {
    console.log("입력값 : ", data);
    rl.close(); // 입력 종료
}).on("close", function () {
    // 입력 종료 후 동작할 코드
    console.log("입력 끝~");
});
