/**
 * 1] Promise.resolve()
 */

// const myPromise = Promise.resolve(100);

// console.log(myPromise)
// myPromise
//   .then(value => value / 2)
//   .then(value => value / 10)
//   .then(console.log)

/**
 * 2] Promise.reject()
 */

// function fetchData() {
//   return fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
//     .then((el) => el.json())
//     .then((data) => {
//       if (data.length === 5) {
//         return Promise.reject("에러 반환");
//       }
//       return data;
//     });
// }

// fetchData().then(console.log).catch(console.error);
// //   .catch(console.error)

// function fetchData() {
//   return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//     .then(response => response.json())
//     .then(data => {
//       if (data.length === 5) {
//         return Promise.reject('데이터가 없습니다.')
//       }
//       return data;
//     })
// }
// fetchData()
//   .then(console.log)
//   .catch(error => console.log('### error: ', error))

/**
 * 3] Promise.all()
 */
// const promise1 = Promise.resolve(1000);
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(3000)
//   }, 3000)
// })
// const promise3 = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5&_delay=2000')
// .then(response => response.json())
// const promise4 = Promise.reject('Fail!')

// Promise.all([promise1, promise2, promise3, promise4])
//   .then(console.log)
//   .catch(console.error)

/**
 * 4] Promise.allSettled()
 */
// Promise.allSettled([promise1, promise2, promise3, promise4])
//   .then(console.log)

/**
 * 5] Promise.any()
 *
 */
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(3000)
//   }, 3000)
// })
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(500)
//   }, 500)
// })
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(1000)
//   }, 1000)
// })
// Promise.any([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.error)

/**
 * 6] Promise.race()
 */

// Promise.race([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.error)

// const result = Promise.resolve(100);
// result
//   .then(el => el / 2)
//   .then(Promise.reject('Erorr 발생!!!'))
//   .then(console.log)
//   .catch(console.error)

// const result2 = Promise.reject('error');
// result2
//   .catch(console.error);
/*
function one(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("one");
    }, 1000);
  });
}

function two(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ];
      resolve("two");
    }, 2000);
  });
}

function three(postId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = [
        { id: 1, text: "Comment 1" },
        { id: 2, text: "Comment 2" },
        { id: 3, text: "Comment 3" },
      ];
      resolve("three");
    }, 500);
  });
}

const promise4 = Promise.reject("fail");
const promise5 = Promise.resolve("success"); */
// one()
//   .then(el => {
//     console.log(el);
//     return two();
//   })
//   .then(el => {
//     console.log(el);
//     return three();
//   })
//   .then(el => {
//     console.log(el);
//   })

/* Promise.race([one(), two(), three(), promise5, promise4])
  .then(console.log)
  .catch(console.error); */

// 수업
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3000);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(500);
  }, 500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1000);
  }, 1000);
});

const promise4 = new Promise((res, rej) => {
  rej("on purpose");
});

// any
// Promise.any([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.error);
// Promise.any([promise1, promise2, promise3, promise4])
//   .then(console.log)
//   .catch(console.error);

// all
// Promise.all([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.error);
// Promise.all([promise1, promise2, promise3, promise4])
//   .then(console.log)
//   .catch(console.error);

// allSetteled
// Promise.allSettled([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.error);
// Promise.allSettled([promise1, promise2, promise3, promise4])
//   .then(console.log)
//   .catch(console.error);

// race
Promise.race([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.error);
Promise.race([promise1, promise2, promise3, promise4])
  .then(console.log)
  .catch(console.error);
