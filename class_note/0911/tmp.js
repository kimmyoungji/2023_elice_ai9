let result0 = 1 && 3;
console.log(result); //-> 3
// 3이 나오는 이유는, 엔드 연산자를 값 사이에 사용하면, falsey 한 값을 먼저 찾는다.
// falsy한 값이란 0, null, undefined, flase, NaN''
let result1 = 1 && 3 && 5; //->5
// 만약 falsy한 값이 없다면, 마지막 값을 반환한다.

let result2 = 5 || 2; //-> 5
// 모두 trusy일 때 첫번째 값을 반환한다.
let result3 = null || 0 || undefined;
// 모두 falsy한 값이면 마지막 값을 반환한다.
