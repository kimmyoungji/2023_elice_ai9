/* 데이터 타입 */

/* 1. 예제 */
// c 변수에는 1바이트 정수 타입의 값(-128 ~ 127)만을 할당할 수 있다.
// char c;

// num 변수에는 4바이트 정수 타입의 값(-2,124,483,648 ~ 2,124,483,647)만을 할당할 수 있다.
// int num;


/* 2. 예제 */ 
var foo;
console.log(typeof foo);  // undefined

foo = 3;
console.log(typeof foo);  // number

foo = 'Hello';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean

foo = null;
console.log(typeof foo);  // object

foo = Symbol(); // 심벌
console.log(typeof foo);  // symbol

foo = {}; // 객체
console.log(typeof foo);  // object

foo = []; // 배열
console.log(typeof foo);  // object

foo = function () {}; // 함수
console.log(typeof foo);  // function

/* 3. 예제 */
var integer = 10;    // 정수
var double = 10.12;  // 실수
var negative = -20;  // 음의 정수

/* 4. 예제 */
// 문자열 타입
var string;
string = '문자열'; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱 (ES6)

// 에러 발생함, 주석 해제 해보기
//var str = "Hello
// world";

// 정상
var str = "Hello\n World";

// 표현식 삽입
var str1 = "Hello";
var str2 = "World"
var rs = `${str1} ${str2}`