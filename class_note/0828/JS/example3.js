// // 이벤트

// // 예제 4. 이벤트 전파 과정 (useCapture = true)
// const fruits = document.getElementById("fruits");
// const banana = document.getElementById("banana");

// // #fruits 요소의 하위 요소인 li 요소를 클릭한 경우
// // 캡처링 단계의 이벤트를 캐치한다.
// fruits.addEventListener(
//   "click",
//   (e) => {
//     console.log("this is for chapturing");
//     console.log(`이벤트 단계: ${e.eventPhase}`); // 1: 캡처링 단계
//     console.log(`이벤트 타깃: ${e.target}`); // [object HTMLLIElement]
//     console.log(`커런트 타깃: ${e.currentTarget}`); // [object HTMLUListElement]
//   },
//   true
// );

// // 타깃 단계의 이벤트를 캐치한다.
// banana.addEventListener("click", (e) => {
//   console.log("this is for targeting");
//   console.log(`이벤트 단계: ${e.eventPhase}`); // 2: 타깃 단계
//   console.log(`이벤트 타깃: ${e.target}`); // [object HTMLLIElement]
//   console.log(`커런트 타깃: ${e.currentTarget}`); // [object HTMLLIElement]
// });

// // 버블링 단계의 이벤트를 캐치한다.
// fruits.addEventListener("click", (e) => {
//   console.log("this is for bubling");
//   console.log(`이벤트 단계: ${e.eventPhase}`); // 3: 버블링 단계
//   console.log(`이벤트 타깃: ${e.target}`); // [object HTMLLIElement]
//   console.log(`커런트 타깃: ${e.currentTarget}`); // [object HTMLUListElement]
// });

// // 예제 5. 이벤트 위임
// const fruits = document.getElementById("fruits");
// const msg = " message added";

// function msgAdd(e, msg) {
//   e.target.textContent = msg;
// }

// fruits.addEventListener("click", (e) => {
//   e.target.textContent += msg;
// });

// 모든 내비게이션 아이템(li 요소)에 이벤트 핸들러를 등록한다.
// document.getElementById("apple").addEventListener("click", msgAdd);
// document.getElementById("banana").addEventListener("click", msgAdd);
// document.getElementById("orange").addEventListener("click", msgAdd);

// 예제 5-1. 이벤트 위임
// const msg = ' message added';

// function msgAdd(el) {
//   el.target.textContent += msg;
// }

// // 모든 내비게이션 아이템(li 요소)에 이벤트 핸들러를 등록한다.
// fruits.addEventListener('click', msgAdd);

//예제 6. preventDefault
document.querySelector("input[type=text]").addEventListener("keypress", (e) => {
  // input 요소의 기본 동작을 중단한다.
  e.preventDefault();
});

// // 예제 6-1. stopPropagation
// document.querySelector(".last-el").addEventListener("click", function (e) {
//   alert("last-el");
// });
// document.querySelector(".third-cover").addEventListener("click", function () {
//   alert("third-cover");
// });
// document.querySelector(".second-cover").addEventListener("click", function () {
//   alert("second-cover");
// });
// document.querySelector(".first-cover").addEventListener("click", function () {
//   alert("first-cover");
// });

// document.querySelector(".last-el").addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("last-el");
// });
// document.querySelector(".third-cover").addEventListener("click", function () {
//   alert("third-cover");
// });
// document.querySelector(".second-cover").addEventListener("click", function () {
//   alert("second-cover");
// });
// document.querySelector(".first-cover").addEventListener("click", function () {
//   alert("first-cover");
// });

// 예제 6-2. stopPropagation
document.querySelector(".container").addEventListener("click", ({ target }) => {
  if (!target.matches(".container > button")) return;
  debugger;
  target.style.color = "red";
});

document.querySelector(".btn2").addEventListener("click", (e) => {
  e.stopPropagation(); // 이벤트 전파 중단
  debugger;
  e.target.style.color = "blue";
});

// ***********************************************************/

// 수업
// document.querySelector(".last-el").addEventListener('click', function(e){
// 	alert("last-el");
// });
// document.querySelector(".third-cover").addEventListener('click', function(){
// 	alert("third-cover");
// });
// document.querySelector(".second-cover").addEventListener('click', function(){
// 	alert("second-cover");
// });
// document.querySelector(".first-cover").addEventListener('click', function(){
// 	alert("first-cover");
// });

// document.querySelector(".last-el").addEventListener('click', function(e){
//     e.stopPropagation();
// 	alert("last-el");
// });
// document.querySelector(".third-cover").addEventListener('click', function(){
// 	alert("third-cover");
// });
// document.querySelector(".second-cover").addEventListener('click', function(){
// 	alert("second-cover");
// });
// document.querySelector(".first-cover").addEventListener('click', function(){
// 	alert("first-cover");
// });

// document.querySelector('.container').addEventListener('click', (e) => {
//     if (!e.target.matches('.container > button')) return;
//     e.target.style.color = 'red';
// });

// document.querySelector('.btn2').addEventListener('click', e => {
//     e.stopPropagation(); // 이벤트 전파 중단
//     e.target.style.color = 'blue';
// });

// const fruits = document.getElementById("fruits");
// const banana = document.getElementById("banana");

// // #fruits 요소의 하위 요소인 li 요소를 클릭한 경우
// // 캡처링 단계의 이벤트를 캐치한다.
// fruits.addEventListener(
//   "click",
//   (e) => {
//     console.log(`이벤트 단계: ${e.eventPhase}`); // 1: 캡처링 단계
//     console.log(`이벤트 타깃: ${e.target}`); // [object HTMLLIElement]
//     console.log(`커런트 타깃: ${e.currentTarget}`); // [object HTMLUListElement]
//   },
//   true  //원래는 false가 기본값
// );

// // 타깃 단계의 이벤트를 캐치한다.
// banana.addEventListener("click", (e) => {
//   console.log(`이벤트 단계: ${e.eventPhase}`); // 2: 타깃 단계
//   console.log(`이벤트 타깃: ${e.target}`); // [object HTMLLIElement]
//   console.log(`커런트 타깃: ${e.currentTarget}`); // [object HTMLLIElement]
// });

// // 버블링 단계의 이벤트를 캐치한다.
// fruits.addEventListener("click", (e) => {
//   console.log(`이벤트 단계: ${e.eventPhase}`); // 3: 버블링 단계
//   console.log(`이벤트 타깃: ${e.target}`); // [object HTMLLIElement]
//   console.log(`커런트 타깃: ${e.currentTarget}`); // [object HTMLUListElement]
// });

// 몇 몇 이벤트들은 버블링이 되지 않는다.

// 구조 분해 할당을 배웠다.
// const body = document.getElementsByTagName("body");
// body[0].addEventListener("click", fn);
// fruits.addEventListener("click", (e) => {
//   console.log(e.target.textContent);
// });
// fruits.addEventListener("click", ({ target }) => {
//   console.log(target.textContent);
// });

// form tag
// preventDefault: 기본적인 동작을 중지 시킨다. 이벤트 전파를 중지(stop propagation)
// stop propagation

// 스코프:  변수가 유효한 범위
// 다음 시간의 실행 컨텍스트와 연관이 있다. 이게 어려운데, 스코프를 잘 알고 있어야 한다.

// 지역 스코프
// 전역 스코프

// 스코프 체인: 스코프가 계측적으로 연결된것. 찾는 변수가 해당 스코프 내에 있는지 찾고
// 없으면 바깥으로 또 없으면 바깥 스코프로 이동하는 현상

// 실행 컨텍스트에서 자바스크립트가 변수를 찾는 고정을 자세히 배울 것이다.

// 렉시컬 스코프의 개념
// 프로그램은 두가지 방식으로 상위 스코프를 결정한다
// 동적 스코프
// 렉시컬 스코프: 함수를 어디에서 정의했는지에 따라 함수의 상위 스코프를 결정하는 것

// // 자바스크립트는 렉시컬 스코프라는 것을 보여주는 예시
// let x = 1;
// function foo() {
//   let x = 10;
//   bar();
// }
// function bar() {
//   console.log(x);
// }
// foo(); // --> 1
// bar(); // --> 1

// //예제 6. preventDefault
// document.querySelector('input[type=text]').addEventListener('keypress', () = e => {
//     // input 요소의 기본 동작을 중단한다.
//     e.preventDefault();
// };

// //예제 6-1. stopPropagation
// document.querySelector(".last-el").addEventListener('click', function(e){
// 	alert("last-el");
// });
// document.querySelector(".third-cover").addEventListener('click', function(){
// 	alert("third-cover");
// });
// document.querySelector(".second-cover").addEventListener('click', function(){
// 	alert("second-cover");
// });
// document.querySelector(".first-cover").addEventListener('click', function(){
// 	alert("first-cover");
// });

// document.querySelector(".last-el").addEventListener('click', function(e){
//     e.stopPropagation();
// 	alert("last-el");
// });
// document.querySelector(".third-cover").addEventListener('click', function(){
// 	alert("third-cover");
// });
// document.querySelector(".second-cover").addEventListener('click', function(){
// 	alert("second-cover");
// });
// document.querySelector(".first-cover").addEventListener('click', function(){
// 	alert("first-cover");
// });

// //예제 6-2. stopPropagation
// document.querySelector('.container').addEventListener('click', ({ target }) => {
//     if (!target.matches('.container > button')) return;
//     target.style.color = 'red';
// });

// document.querySelector('.btn2').addEventListener('click', e => {
//     e.stopPropagation(); // 이벤트 전파 중단
//     e.target.style.color = 'blue';
// });
