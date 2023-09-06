//async, await으로 변환하는 방법

// 1. Promise 대신 async로 비동기 처리해 'elice'를 반환하도록 fetchUser 함수를 수정하세요.
async function fetchUser() {
  return "elice";
}

const user = fetchUser();
user.then(console.log);

// 2. delay 함수를 이용해 getCoffee와 getTea 함수를 작성하세요.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getCoffee() {
  //   await delay(1000).then(result => {
  //     return 'coffee';
  //   });
  await delay(1000);
  return "coffee";
}

async function getTea() {
  //   await delay(1000).then(result => {
  //     return 'tea';
  //   });
  await delay(1000);
  return "tea";
}

// 3. 위 두 개의 함수를 사용해서 coffee와 tea를 한번에 반환합니다.
async function getDrinks() {
  //   let c = '';
  //   await getCoffee().then(result => {
  //     c = result;
  //   });
  //   let t = '';
  //   await getTea().then(result => {
  //     t = result;
  //   });
  const c = await getCoffee();
  const t = await getTea();

  return `${c} and ${t}`;
}

getDrinks().then(console.log);

// await는 결과값 반환한다
// await은 다 setteled 되어야 async가 반환 될 수 있다.
