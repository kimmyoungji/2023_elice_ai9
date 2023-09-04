// 클로저

/******************************************
// 예제 1. 클로저
const x = 1;

function outSide() {
  const x = 10;
  const inner = function () {
    console.log(x);
  }
  return inner;
}
const foo = outSide();
foo();
***********************************************************/

const x = 1;

function outSide() {
  const x = 10;
  const inner = function () {
    console.log(x);
  }
  return inner;
}

const bar = outSide();
bar();