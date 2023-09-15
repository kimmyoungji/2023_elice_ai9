// 전개 문법

// ...[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]); // 1 2 3

// 문자열은 이터러블이다.
console.log(...'Hello'); // H e l l o

// Rest 파라미터는 인수들의 목록을 배열로 전달받는다.
function foo(...rest) {
  console.log(rest); // 1, 2, 3 -> [ 1, 2, 3 ]
}

// 스프레드 문법은 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만든다.
// [1, 2, 3] -> 1, 2, 3
foo(...[1, 2, 3]);
// ES6
const arr = [...[1, 2], ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]

// ES6
const arr1 = [1, 4];
const arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1); // [1, 2, 3, 4]

// ES6
const origin = [1, 2];
const copy = [...origin];

console.log(copy); // [1, 2]
console.log(copy === origin); // false

// 스프레드 프로퍼티
// 객체 복사(얕은 복사)
const obj = { x: 1, y: 2 };
const copyObj = { ...obj };
console.log(copyObj); // { x: 1, y: 2 }
console.log(obj === copyObj); // false

// 객체 병합
const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }

function foo(...rest) {
  // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest);  // [ 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest);   // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);

// function foo(...rest, param1, param2) { }

// foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter

// function foo(...rest1, ...rest2) { }

// foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter


// 전개 문법: 하나로 뭉쳐있는 배열이나 객체를 풀어준다. 
// 전개 문법은 연산자가 아니다. 
// 돔에도 전개문법 적용가능, array, string,
// 함수에서 사용, 배열에서 사용, 객체에서 사용 가능
// 함수
// 배열
// 객체: 객체는 마지막 전개연산자만 적용된다.
// rest 파라미터, 반드시 마지막 파라미터야 한다.
// rest 파라미터와 전개연산자는 다른다. rest 파라미터는 여러개의 인자를 전달하는 것이고 
// 전개 연산자는 한 덩어리의 데이터를 자가게 나누는 것이다.