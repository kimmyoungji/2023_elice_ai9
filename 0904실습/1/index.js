//1. 지시사항 1에 따라 아래에 코드를 작성하세요.
console.log('아메리카노 나왔습니다.');
// 아래 함수를 이용해 코드를 작성하세요.
setTimeout(
  ()=>order(() => {
    console.log('카라멜 프라푸치노 나왔습니다.');
  }),
  6000,
);

//2. 지시사항 2에 따라 아래에 코드를 작성하세요.
function order(callback) {
  // 이 곳에 코드를 작성하세요.
  callback();
}

order(function () {
  setTimeout(() => {
    console.log('아메리카노 나왔습니다.');
    console.log('카라멜 프라푸치노 나왔습니다.');
  },3000);
});

// 강사님 풀이
//1. 지시사항 1에 따라 아래에 코드를 작성하세요.
console.log('아메리카노 나왔습니다.');
// 아래 함수를 이용해 코드를 작성하세요.
setTimeout(()=>{
    console.log('카라멜 프라푸치노 나왔습니다.');
},6000);

//2. 지시사항 2에 따라 아래에 코드를 작성하세요.
function order(callback) {
  // 이 곳에 코드를 작성하세요.
  setTimeout(()=>{
    console.log('아메리아노가 나왔습니다.')
  })
}

order(function () {
  setTimeout(() => {
    console.log('아메리카노 나왔습니다.');
    console.log('카라멜 프라푸치노 나왔습니다.');
  },3000);
});