const str = "엘리스 AItrack 9기 과정 레이서분들 안녕하세요";

console.log("\n" + "===========substr===========");
console.log(str.substr(0, 3)); // 엘리스

console.log("\n" + "===========substring===========");
console.log(str.substring(0, 3)); // 엘리스
console.log(str.substring(3)); //  AItrack 9기 과정 레이서분들 안녕하세요
console.log(str.substring(4, 10)); // AItrac

console.log("\n" + "===========slice===========");
console.log(str.slice(0, 3)); // 엘리스
console.log(str.slice(3)); //  AItrack 9기 과정 레이서분들 안녕하세요
console.log(str.slice(4, 10)); // AItrac

console.log("\n" + "===========replace===========");
console.log(str.replace("안녕하세요", "화이팅~!")); // 엘리스 AItrack 9기 과정 레이서분들 화이팅~!
console.log(str); // 엘리스 AItrack 9기 과정 레이서분들 안녕하세요
