console.log("입력해주세요.");
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

console.log("입력값 :", input);
console.log("입력 끝~");
