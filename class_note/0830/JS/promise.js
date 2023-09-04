/**
 * Promise: 비동기 작업을 처리하는 객체
 * resolve: 정상적인 결과 값을 반환 (이행)
 * reject: 정상적이지 않은 값을 반환 (거부)
 */

// const myPromise = new Promise(() => {
//     setTimeout(() => {
//         const text = prompt("'Hello' 를 입력해줘! 그러면 선물을 줄게");
//         if(text == 'Hello') {
//             return "선물";
//         } else {
//             return "error message";
//         }
//     }, 1000);
// });

/**
 * 상태
 * - 대기 (pending): 비동기 작업을 처리하는 중...
 * - 이행 (fulfilled): 비동기 작업이 정상적으로 처리가 된 경우
 * - 거부 (rejceted): 비동기 작업이 정상적으로 처리되지 않은 경우
 *
 *
 * 메소드
 * - then(): 이행되었을 때
 * - catch(): 거부되었을 때
 * - finally(): 이행되거나 거부되더라도 항상 수행
 */

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("finally");
//     });

// 수업
// const myPromise = new Promise((resolve, reject) => {
//   // 펜딩상태
//   setTimeout(() => {
//     const user = prompt("Hi를 입력해주면 선물을 줄께");
//     if (user == "Hi") {
//       resolve("선물"); // 비동기작업이 정상적으로 처리되었을 때 사용하는 콜백함수
//     } else {
//       reject("꽝.."); // 비동기작업이 실패했을 때 사용하는 콜백함수
//     }
//   }, 1000);
// });

// myPromise
//   .then((result) => {
//     //비동기 작업의 후속 작업을 실행하는 메서드, 이행상태
//     console.log(result);
//   })
//   .catch(() => {
//     console.log("error"); // 비동기 작업의 에러를 잡는 메서드, 거부상태
//   })
//   .finally(() => {
//     console.log("done");
//   });

//연습문제
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1");
  }, 1000);
});

myPromise.then(() => {
  console.log(el);
});
