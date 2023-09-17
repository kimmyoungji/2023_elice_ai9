// /* 연산자와 제어문 */

// /* 1. 예제 */
// // 산술 연산자
// 3 * 5 // 15

// // 문자열 연결 연산자
// 'My name is ' + 'Park' // -> 'My name is Park'

// // 할당 연산자
// color = 'blue' // -> 'blue'

// // 비교 연산자
// 3 > 5 // false

// // 논리 연산자
// true && false // -> false

// // 타입 연산자
// typeof 'Hi' // -> string

// /* 2. 예제 */
// var x = 1;

// // ++ 연산자는 값을 증가 시킨다
// x++; // x = x + 1;
// console.log(x); // 2

// // ++ 연산자는 값을 감소 시킨다
// x--; // x = x - 1;
// console.log(x); // 1

// /* 3. 예제 */
// var x = 5, result;

// // 선할당 후증가
// result = x++;
// console.log(result, x); // 5 6

// // 선증가 후할당
// result = ++x;
// console.log(result, x); // 7 7

// // 선할당 후감소
// result = x--;
// console.log(result, x); // 7 6

// // 선감소 후할당
// result = --x;
// console.log(result, x); // 5 5

// /* 4. 예제 */
// // 문자열 연결 연산자
// '1' + 2; // '12'
// 1 + '2' // '12'

// // true는 1로 타입 변환된다.
// 1 + true; // 2

// // false는 0으로 타입 변환된다.
// 1 + false; // 1

// // null은 0으로 타입 변환된다.
// 1 + null; // 1

// // undefined는 숫자로 타입 변환되지 않는다.
// +undefined // NaN
// 1 + undefined // NaN

// score >= 60 ? 'pass' : 'fail';

// var x, y, z;
// x = 1, y = 2, z = 3; // 3

// 10 * 2 + 3; // 23
// // 그룹 연산자를 사용하여 우선순위를 조절
// 10 * (2 + 3) // 50

// /* 5. 예제 */
// // 블록문
// {
//   var foo = 10;
// }

// // 제어문
// var x = 1;
// if (x < 10) {
//   x++;
// }

// // 함수 선언문
// function sum(a, b) {
//   return a + b;
// }

// // 월을 영어로 변환한다. (11 → 'November')
// var month = 11;
// var monthName;

// /* 6. 예제 */
// switch (month) {
//   case 1: monthName = 'January';
//   case 2: monthName = 'February';
//   case 3: monthName = 'March';
//   case 4: monthName = 'April';
//   case 5: monthName = 'May';
//   case 6: monthName = 'June';
//   case 7: monthName = 'July';
//   case 8: monthName = 'August';
//   case 9: monthName = 'September';
//   case 10: monthName = 'October';
//   case 11: monthName = 'November';
//   case 12: monthName = 'December';
//   default: monthName = 'Invalid month';
// }

// console.log(monthName); // Invalid month

// // 월을 영어로 변환한다. (11 → 'November')
// var month = 11;
// var monthName;

// switch (month) {
//   case 1: monthName = 'January';
//     break;
//   case 2: monthName = 'February';
//     break;
//   case 3: monthName = 'March';
//     break;
//   case 4: monthName = 'April';
//     break;
//   case 5: monthName = 'May';
//     break;
//   case 6: monthName = 'June';
//     break;
//   case 7: monthName = 'July';
//     break;
//   case 8: monthName = 'August';
//     break;
//   case 9: monthName = 'September';
//     break;
//   case 10: monthName = 'October';
//     break;
//   case 11: monthName = 'November';
//     break;
//   case 12: monthName = 'December';
//     break;
//   default: monthName = 'Invalid month';
// }

// console.log(monthName); // November

// for (var i = 0; i < 2; i++) {
//   console.log(i);
// }

// // count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
// while (count < 3) {
//   console.log(count); // 0 1 2
//   count++;
// }

// do {
//   console.log(count); // 0 1 2
//   count++;
// } while  (count < 3)

// var string = 'Hello World.';
// var search = 'l';
// var count = 0;

// // 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
// for (var i = 0; i < string.length; i++) {
//   // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
//   if (string[i] !== search) continue;
//   count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
// }

// // 옵셔널 체이닝 연산자
// var elem = null;

// // elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
// var value = elem?.value;
// console.log(value); // undefined

// // null 병합 연산자
// // 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
// var foo = null ?? 'default string';
// console.log(foo); // "default string"

// let temp = 3;
// if(temp > 5){
//   console.log("Here!");
//   document.querySelector("#answer").textContent = "Here!";
// }else if( temp < 0){
//   console.log("Smaller than 0");
//   document.querySelector("#answer").textContent = "1보다 작다!";
// }else if( temp > 1){
//   console.log("Bigger than 0");
//   document.querySelector("#answer").textContent = "1보다 크다!";
// }else{
//   console.log("아무것도 해당되지 않음");
//   document.querySelector("#answer").textContent = "아무것도 해당되지 않음!";
// }

let count = 3;
let number = 10;

for (let i = 0; i < 11; i++) {
  if (i == count) continue;
  console.log(i);
}

document.querySelector("#answer").textContent = `이 값은 ${count}입니다.`;

let score = 100;
let result = score > 90 ? "" : "훌륭해";

let elem = {};

console.log("옵셔널 체이닝");
let result2 = elem?.content;
let result3 = elem.content;
console.log(result2);
console.log(result3);

class Rectangle {
  constructor(width, hegiht) {
    this.width = width;
    this.height = height;
    this.size = 100;
  }

  calcArea() {
    console.log(this.width, this.height);
  }

  printSize() {
    console.log(this.size);
  }
}

const rect = new Rectangle(100, 200);

rect.calcArea;
rect.printSize();

// 클래스는 컨스트럭터에 프로퍼티
// 객체 리터럴 처럼 기본값 설정할 수 있다.
// 사용할 때는 new

class Square extends Rectangle {
  constructor(width, height) {
    super(width, height); // 부모요소에 값 전달하기
  }
}

const square = new Square(200, 300);
square.calcArea();
square.printSize();
