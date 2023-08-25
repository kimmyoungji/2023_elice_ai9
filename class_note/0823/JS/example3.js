// 함수


// 1. 예제
// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
let exp = function (x, y) {
  return x + y;
};

// 화살표 함수
let arrow = (x, y) => x + y;


// 2. 예제
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase1 = function (num) {
  return ++num;
};

const decrease1 = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const auxs1 = { increase, decrease };

// 3. 함수의 매개변수에게 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  let num = 0;

  return function () {
    num = aux(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  // 재귀 호출
  return n * factorial(n - 1);
}


// 예제 3. 재귀 함수
console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

// 예제 4. 즉시 실행 함수
// 익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
}());

// 기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
}());

// 예제 5. 콜백 함수

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 f를 호출
  }
}

var logAll = function (i) {
  console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4

// 콜백 함수를 사용한 이벤트 처리
// myButton 버튼을 클릭하면 콜백 함수를 실행한다.
document.getElementById('myButton').addEventListener('click', function () {
  console.log('button clicked!');
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지를 출력한다.
setTimeout(function () {
  console.log('1초 경과');
}, 1000);

// 콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
  return item * 2;
});

console.log(res); // [2, 4, 6]

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter(function (item) {
  return item % 2;
});

console.log(res); // [1, 3]

// 콜백 함수를 사용하는 고차 함수 reduce
res = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(res); // 6



// 수업시간

// 2. 예제
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease };
console.log(auxs);

// 3. 함수의 매개변수에게 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  let num = 0;

  return function () {
    num = aux(num);
    return num;
  };
}

let fn = (num)=>{
  return num + 2;
}


function tmp(number){
  return function(){
    let add = number * 2;
    return add;
  }
}


console.log( tmp(fn(2))() );


// let count = 0;
// function recursion(){
//   if(count < 5){
//     recursion();
//   }
//   console.log("recursion");
//   count++;
// }

// recursion();

// 

let repeat = (n)=>{
  for(let i = 0; i < n ; i++){
      // fn2(i)
      console.log(i);
  }
}

let repeat2 = (n)=>{
  for(let i = 0; i < n ; i++){
      // fn2(i)
      console.log(i);
  }
}

let fn2 = (num) => {
  console.log(num);
}

repeat(8);


arr = [1,2,3,4];
// map
let mm = arr.map(function(e1, idx){
  console.log(e1,idx);
  return e1 + '번째 값입니다.'
})

arr.push(5);

console.log(mm);

//filter 특정 조건에 부합하는 요소들만들 추린 배열을 반환한다.
let fil = arr.filter(function(e1,idx){
  console.log(e1,idx);
  if(e1 % 2 === 0 ){
    return true;
  }
  return false;
})

console.log(fil)




