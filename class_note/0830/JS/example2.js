// 실행 컨텍스트

/******************************************
예제 1. 실행 컨텍스트 - 변수 호이스팅 (var)
console.log(foo);

var foo = 'Hello';

console.log(foo);

예제 1-1. 실행 컨텍스트 - 변수 호이스팅 (let, const)
console.log(foo);

const foo = 'Hello';

console.log(foo);

예제 1-2. 실행 컨텍스트 - 함수 호이스팅 (var)

foo();

var foo = function() {
  // Hello
}

예제 1-3. 실행 컨텍스트 - 함수 호이스팅 (let, const)

foo();

let foo = function() {
  // Hello
}

예제 1-4. 실행 컨텍스트 - 함수 호이스팅

foo();

function foo() {
  // do something..
}

// 예제 2. Outer
let foo = false;

console.log(foo);

// 예제 2-1. Outer
let foo = false;

function myFunction() {
  let foo = true;

  console.log(foo);
}

myFunction();

// 예제 2-2. Outer
let foo = false;

function goTo2F() {
  let foo = true;

  function goTo3F() {
    let bar = false;

    console.log(bar);
  }

  goTo3F();
}

goTo2F();

// 예제 2-3. Outer
let foo = false;

function goTo2F() {
  let foo = true;

  function goTo3F() {
    let bar = false;

    console.log(bar);
    console.log(fooBar);
  }

  goTo3F();
}

goTo2F();

// 예제 2-4. Outer
let foo = false;

function goTo2F() {
  let foo = true;

  function goTo3F() {
    let bar = false;

    console.log(bar);
    console.log(foo);
  }

  goTo3F();
}

goTo2F();
***********************************************************/