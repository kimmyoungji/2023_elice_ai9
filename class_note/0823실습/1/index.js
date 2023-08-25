/*
콘솔로 확인하고 싶으시면 
document.write() => console.log()
로 바꿔주세요~@@
*/

var scores = {
    kor: 55,
    mat: 65,
    eng: 70,
};

// // 1번
// if (scores.kor < 40 || scores.mat < 40 || scores.eng < 40) {
//     console.log("fail");
// } else if ((scores.kor + scores.mat + scores.eng) / 3 < 60) {
//     console.log("fail");
// } else {
//     console.log("pass");
// }

// // 2번
// function result() {
//     if (scores.kor < 40 || scores.mat < 40 || scores.eng < 40) {
//         return "fail";
//     } else if ((scores.kor + scores.mat + scores.eng) / 3 < 60) {
//         return "fail";
//     } else {
//         return "pass";
//     }
// }

// document.write(result());

// // 3번
// // Object.values 사용
// const scoreArr = Object.values(scores);
// console.log(scoreArr); // [ 55, 75, 50 ]

// // reduce 사용
// const avg = scoreArr.reduce((total, num) => total + num) / scoreArr.length;
// console.log(avg); // 60

// // find 사용
// console.log(scoreArr.find((item) => item < 40)); // undefined

// function result() {
//     if (scoreArr.find((item) => item < 40) || avg < 60) {
//         return "fail";
//     } else {
//         return "pass";
//     }
// }

// console.log(result());

// // 4번 : break문 사용해보기
// const scoreArr = Object.values(scores); // [ 55, 75, 50 ]
// let sum = 0;
// for (let i = 0; i < scoreArr.length; i++) {
//     // 각각의 점수가 40점보다 큰가?
//     if (scoreArr[i] < 40) {
//         console.log("fail"); // 25일때
//         break;
//     }
//     sum += scoreArr[i]; // 55 + 75 + 50
//     console.log(i);

//     //  반목문 마지막일 때만 실행
//     if (i === scoreArr.length - 1) {
//         if (sum / scoreArr.length < 60) {
//             console.log("fail");
//         } else {
//             console.log("pass");
//         }
//     }
// }

// 5번 : for ... in문, filter사용해보기

const list = [];
for (const key in scores) list.push(scores[key]);
// console.log(list);
// console.log(list.filter((v) => v < 100).length);

if (list.filter((v) => v < 40).length) document.write("fail");
// 일단 모든 요소가 40보다는 크다!
else if (list.reduce((a, b) => a + b) < 60 * list.length) document.write("fail");
// 일단 모든 요소가 40보다는 크다! && 평균이 60보다 크다!
else document.write("pass");
