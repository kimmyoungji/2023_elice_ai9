/*****

예제 1. 이벤트 핸들러 어트리뷰트 방식
function sayHi(name) {
  console.log(`Hi! ${name}.`);
}

예제 2. 이벤트 핸들러 프로퍼티 방식
// // 요소 노드 생성
// const button = document.querySelector('button');

// // 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩
// button.onclick = function () {
//     console.log('button click');
// };

예제 2-1. 이벤트 핸들러 프로퍼티 방식 문제점
const button = document.querySelector('button');

// 이벤트 핸들러 프로퍼티 방식은 하나의 이벤트에 하나의 이벤트 핸들러만을 바인딩할 수 있다.
// 첫 번째로 바인딩된 이벤트 핸들러는 두 번째 바인딩된 이벤트 핸들러에 의해 재할당되어
// 실행되지 않는다.
button.onclick = function () {
  console.log('Button clicked 1');
};

// 두 번째로 바인딩된 이벤트 핸들러
button.onclick = function () {
  console.log('Button clicked 2');
};

예제 3. addEventListener 방식
const button = document.querySelector('button');

// addEventListener 메서드는 동일한 요소에서 발생한 동일한 이벤트에 대해
// 하나 이상의 이벤트 핸들러를 등록할 수 있다.
button.addEventListener('click', function () {
  console.log('[1]button click');
});

button.addEventListener('click', function () {
  console.log('[2]button click');
});

*****/







// 이벤트는 전파가된다. 3가지 단계
// 캡쳐링 단계
// 타깃 단계
// 버블링 단계
// 서틀런 이벤트 말단 까지 이벤트 신호가 내려왔다가 다시 초단으로 돌아간다.
