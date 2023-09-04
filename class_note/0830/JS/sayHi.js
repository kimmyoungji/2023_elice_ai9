export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 배열 내보내기
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// 상수 내보내기
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// 클래스 내보내기
export class User {
  constructor(name) {
    this.name = name;
  }
}

// function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

// export { sayHi, sayBye };
// export { sayHi as hi, sayBye as bye };

// default를 붙이면, import시 중괄호를 생략할 수 있다.
// 파일 하나에만 사용될 수 있다.
export default class User {
  constructor(name) {
    this.name = name;
  }
}
