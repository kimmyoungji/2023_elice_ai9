// function getUser(userId, callback) {
//   setTimeout(() => {
//     const user = { id: userId, name: "GYMCODING" };
//     callback(user);
//   }, 1000);
// }

// function getPosts(userId, callback) {
//   setTimeout(() => {
//     const posts = [
//       { id: 1, title: "Post 1" },
//       { id: 2, title: "Post 2" },
//     ];
//     callback(posts);
//   }, 1000);
// }

// function getComments(postId, callback) {
//   setTimeout(() => {
//     const comments = [
//       { id: 1, text: "Comment 1" },
//       { id: 2, text: "Comment 2" },
//       { id: 3, text: "Comment 3" },
//     ];
//     callback(comments);
//   }, 1000);
// }

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = { id: userId, name: "Park" };
//       resolve(user);
//     }, 1000);
//   });
// }

// function getPost(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const posts = [
//         { id: 1, title: "Post 1" },
//         { id: 2, title: "Post 2" },
//       ];
//       resolve(posts);
//     }, 1000);
//   });
// }

// function getComments(postId, callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const comments = [
//         { id: 1, text: "Comment 1" },
//         { id: 2, text: "Comment 2" },
//         { id: 3, text: "Comment 3" },
//       ];
//       reject(comments);
//     }, 1000);
//   });
// }

// function runPromise() {
//   getUser(1)
//     .then((el) => {
//       console.log("user", el);
//       return getPost();
//     })
//     .then((el) => {
//       console.log("post", el);
//       return getComments();
//     })
//     .then((el) => {
//       console.log("comments", el);
//     })
//     .catch(console.error);
// }

// async function runAsyncAwait() {
//   try {
//     const user = await getUser(1);
//     const posts = await getPosts(user.id);
//     const comments = await getComments(posts[0].id);
//     console.log('user: ', user)
//     console.log('posts: ', posts)
//     console.log('comments: ', comments)
//     return user;
//   } catch (error) {
//     console.log('error: ', error)
//   }
// }

// console.log('start')
// runPromise();
// runAsyncAwait().then(user => console.log('user: ', user))
// console.log('end')

// getUser(1, (user) => {
//   console.log('user', user);
//   getPost(user.id, (posts) => {
//     console.log("posts", posts);
//     getComments(posts[0].id, (comment) => {
//       console.log("comment", comment);
//     })
//   })
// })

// 수업
// async await
// async function runAsyncAwait() {
//   try {
//     let user = await getUser(1);
//     console.log(user);
//     let posts = await getPost(user.id);
//     console.log(posts);
//     let comments = await getComments(post[0].id);
//     console.log(comments);
//     return { user, posts, comments };
//   } catch (err) {
//     console.log(err);
//   }
// }

// runAsyncAwait()
//   .then(({ posts }) => {
//     console.log(posts);
//   })
//   .catch(console.error)
//   .finally(() => {
//     console.log("Finished!");
//   });

function sleep(ms) {
  new Promise((res, rej) => {
    setTimeout(res, ms);
  });
}

async function turtle(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("거북이");
    }, time);
  });
}

// turtle().then(() => console.log);
// turtle().then(console.log);
// //이 두개가 어떻게 다른걸까요?

async function dog(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("강아지");
    }, time);
  });
  // await sleep(300);
  // return "강아지";
}
async function cat(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("고양이");
    }, time);
  });
  // await sleep(350);
  // return "고양이";
}
async function rabbit(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("토끼");
    }, time);
  });
  // await sleep(500);
  // return "토끼";
}

// 이 코드를
// Promise.race([turtle(), rabbit(), dog(), cat()]).then(console.log);

async function foo() {
  const a = turtle(1000);
  const b = dog(200);
  const c = cat(300);
  const d = rabbit(400);

  const result = Promise.race([a, b, c, d]);
  return result;
}
// foo().then(console.log);
foo().then((result) => console.log(result));

//뭔가 프로미스의 결과를 then을 통해서 받아오지 않고 바로 변수에 넣어줄 수 있는 점이 편한 것 같습니다.
