// function getUser(userId, callback) {
//   setTimeout(() => {
//     const user = { id: userId, name: "Park" };
//     callback(user);
//   })
// }

// function getPost(userId, callback) {
//   setTimeout(() => {
//     const posts = [
//       {id: 1, title: "Post 1"},
//       {id: 2, title: "Post 2"}
//     ];
//     callback(posts);
//   })
// }

// function getComments(postId, callback) {
//   setTimeout(() => {
//     const comments = [
//       {id: 1, text: "Comment 1"},
//       {id: 2, text: "Comment 2"},
//       {id: 3, text: "Comment 3"}
//     ];
//     callback(comments);
//   })
// }

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
// function getUser(callback) {
//   console.log("1");
//   callback();
// }
function getUser(userId){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const user = {id: userId, name: "Kim"};
      resolve(user);
    },1000);
  })
}


// function getPost(callback) {
//   setTimeout(() => {
//     console.log("2");
//     callback();
//   }, 1000);
// }
function getPost(userId){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const posts = [
        {id:1, title: "Post 1"},
        {id:2, title: "Post 2"}
      ];
      resolve(posts);
    },1000);
  })
}

// function getComment() {
//   console.log("3");
// }
function getComments(postId, callback){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const comments = [
        {id:1, text: "Comment 1"},
        {id:2, text: "Comment 2"},
        {id:3, text: "Comment 3"},
      ];
      resolve(comments);
    },1000);
  })
}

getUser(1).then(e1 =>{
  console.log('user',e1);
  return getPost();
})
.then(e1 =>{
  console.log('post',e1);
})
.then(e1 => {
  console.log('post',e1);
})

// // getUser(getPost(getComment));  --> 에러 getPost를 호출해버림

// getUser(() => {
//   getPost(getComment);
// });
