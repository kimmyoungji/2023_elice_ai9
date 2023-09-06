async function getApple(callback) {
  const banana = await callback();

  setTimeout(() => {
    return `apple + ${banana}`;
  }, 1000);
}

function getBanana() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("banana");
    }, 1000);
  });
}

// // 직렬처리
// async function pickFruitsl() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   console.log(`직렬: ${apple}+${banana}`);
// }

// pickFruitsl();

// // 병렬처리
// async function pickFruitsl2() {
//   const [a, b] = await Promise.all([getApple(), getBanana()]);
//   console.log(`병렬: ${a}+${b}`);
// }

// pickFruitsl2();

// 프로미스x 병렬처리
// async function pickFruitsl3() {
//   const result = await getApple(getBanana);
//   console.log(`프로미스x 병렬: ${result}`);
// }

// pickFruitsl3();

// 답
function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}
async function getApple() {
  await delay(1000);
  return "apple";
}
async function getBanana() {
  await delay(1000);
  return "banana";
}

async function pickFruitsl4() {
  const apple1 = getApple(); //큐에 들어간다.
  const banana1 = getBanana();
  const result1 = await apple1; //이렇게 해주면 처리결과가 반환된다.
  const result2 = await banana1;
  console.log(`1: ${result1} + 2:${result2}`);

  const apple2 = getApple();
  const banana2 = getBanana();
  console.log(`1: ${apple1} + 2:${banana}`);
}

// 교훈: 비동기 함수의 처리과정을 생각할때 꼭 태스크큐, 잡큐, 이벤트 루프의 존재를 기억하자!
