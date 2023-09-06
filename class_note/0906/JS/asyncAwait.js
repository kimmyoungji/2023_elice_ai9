// async, await

/******************************************
// 예제 0. promise

console.log
(
new Promise((resolve, reject) => {
  resolve();
}).then()
);

// 예제 1. async 함수 선언

// async 함수 선언문
async function foo(n) { 
  return n;
}

foo(1).then(v => console.log(v)); // 1

// async 함수 표현식
const bar = async function (n) { return n; };
bar(2).then(v => console.log(v)); // 2

// async 화살표 함수
const baz = async n => n;
baz(3).then(v => console.log(v)); // 3

// 예제 2. await 사용
function sleep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('1초 걸림');
    }, 1000)
  });
}

async function process() {
  console.log('비동기 시작');
  let result = await sleep();
  console.log('비동기 끝');
  console.log(result);
}

process();

// 번외. 프로미스와 차이점?
// 일반 promise 방식
const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

const res = [];
requestData1()
  .then(data => {
    res.push(data);
    return requestData2();
  })
  .then(data => {
    res.push(data);
    return requestData3();
  })
  .then(data => {
    res.push(data);
    console.log(res); // [1, 2, 3] ⇒ 약 6초 소요
  })
  .catch(console.error);

async function foo() {
  const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
  const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
  const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));

  console.log([a, b, c]); // [1, 2, 3]
}

foo(); // 약 6초 소요된다.

// 예제 3. await 연달아 쓰기
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};

async function process() {
  const dog = await getDog();
  console.log(dog);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
}

process();

// 예제 4. catch 문 쓰기
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process () {
  try {
    await sleep(1000);
    const error = new Error();
    throw error;
  } catch (e) {
    console.error(e);
  }
}

process();

// 예제 4-1. catch 문 쓰기
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process () {
  await sleep(1000);
  const error = new Error();
  throw error;
}

process()
.then(console.log)
.catch(console.error);

// 예제 5. Promise all 쓰기
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};

async function process() {
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(results);
}

process();

// 예제 6. Promise race 쓰기
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};

async function process() {
  const first = await Promise.race([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(first);
}

process();

***********************************************************/

//1.
// async 함수는 프로미스 반환한다.
// async function tmp() {
//   const result = await sleep(1000);
//   return result;
// }

// tmp().then(console.log);

// // await는 반드시 async 함수 안, 프로미스를 반환하는 함수앞에서 사용되어야 한다.
// function sleep(ms) {
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Finish");
//     }, ms);
//   });
// }

//2.
// function promiseFn(callback) {
//   setTimeout(() => {
//     const param = "Take this";
//     console.log("1");
//     callback(param);
//   }, 1000);
// }

// function secondFn(p, callback) {
//   console.log("2");
//   setTimeout(() => {
//     const param = "I took";
//     console.log(p);
//     callback(param);
//   }, 700);
// }

// function thirdFn(p, callback) {
//   setTimeout(() => {
//     const param = "callback Finich";
//     console.log(p);
//     callback(param);
//   }, 500);
// }

// promiseFn((param) => {
//   secondFn(param, (param) => {
//     thirdFn(param, (param) => {
//       console.log(param);
//     });
//   });
// });

//3.
function promiseFn() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const param = "Take this";
      console.log("1");
      res(param);
    }, 1000);
  });
}

function secondFn() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const param = "I took";
      console.log("2");
      // console.log(p);
      res(param);
    }, 700);
  });
}

function thirdFn(p, callback) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const param = "callback Finich";
      console.log("3");
      // console.log(p);
      res(param);
    }, 500);
  });
}

promiseFn()
  .then((el) => {
    console.log(el);
    return secondFn();
  })
  .then((el) => {
    console.log(el);
    return thirdFn();
  })
  .then((el) => {
    console.log(el);
  });
