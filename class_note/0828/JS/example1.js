// // DOM

// // 1. 예제: id를 이용한 요소 노드 구하기

// // id 값이 'banana'인 요소 노드를 탐색하여 반환한다.
// // 두 번째 li 요소가 파싱되어 생성된 요소 노드가 반환된다.
// const elem = document.getElementById("banana");

// // 출력
// console.log(elem);

// // 취득한 요소 노드의 style.color 프로퍼티 값을 변경한다.
// elem.style.color = "blue";

// // 2. 예제: 태그 이름을 이용한 요소 노드 구하기

// // 태그 이름이 li인 요소 노드를 모두 탐색하여 반환한다.
// // 탐색된 요소 노드들은 HTMLCollection 객체에 담겨 반환된다.
// // HTMLCollection 객체는 유사 배열 객체이면서 이터러블이다.

// const elems = document.getElementsByTagName('li');

// // 출력
// console.log(elems);

// // 취득한 모든 요소 노드의 style.color 프로퍼티 값을 변경한다.
// // HTMLCollection 객체를 배열로 변환하여 순회하며 color 프로퍼티 값을 변경한다.
// for(let i = 0; i < elems.length; i++) {
//     elems[i].style.color = 'red';
// }

// // 아래와 같이 표현할 수도 있다.
// [...elems].forEach(elem => { elem.style.color = 'red'; });

// // 3. 예제: class를 이용한 요소 노드 구하기
// // class 값이 'fruit'인 요소 노드를 모두 탐색하여 HTMLCollection 객체에 담아 반환한다.
// const elems = document.getElementsByClassName('fruit');

// // 출력
// console.log(elems);

// // 취득한 모든 요소의 CSS color 프로퍼티 값을 변경한다.
// [...elems].forEach(elem => { elem.style.color = 'red'; });

// // 4. 예제: css 선택자를 이용한 요소 노드 구하기

// // querySelector
// // class 어트리뷰트 값이 'banana'인 첫 번째 요소 노드를 탐색하여 반환한다.
// const elem = document.querySelector('.banana');

// console.log(elem);

// // 취득한 요소 노드의 style.color 프로퍼티 값을 변경한다.
// elem.style.color = 'red';

// // querySelectorAll
// // ul 요소의 자식 요소인 li 요소를 모두 탐색하여 반환한다.
// const elems = document.querySelectorAll('ul > li');
// // 취득한 요소 노드들은 NodeList 객체에 담겨 반환된다.
// console.log(elems); // NodeList(3) [li.apple, li.banana, li.orange]

// // 취득한 모든 요소 노드의 style.color 프로퍼티 값을 변경한다.
// // NodeList는 forEach 메서드를 제공한다.
// elems.forEach(elem => { elem.style.color = 'red'; });

// // 5. 예제: 자식노드와 부모노드 확인하기
// const elems = document.querySelectorAll('ul');

// console.log(elems[0].children);
// console.log(elems[0].parentNode);

// // 6. 예제: HTMLCollection
// // class 값이 'red'인 요소 노드를 모두 탐색하여 HTMLCollection 객체에 담아 반환한다.

// const elems = document.getElementsByClassName("red");
// // 이 시점에 HTMLCollection 객체에는 3개의 요소 노드가 담겨 있다.
// console.log(elems); // HTMLCollection(3) [li.red, li.red, li.red]
// // HTMLCollection 객체의 모든 요소의 class 값을 'blue'로 변경한다.
// for (let i = 0; i < elems.length; i++) {
//   debugger;
//   elems[i].className = "blue";
// }
// // HTMLCollection 객체의 요소가 3개에서 1개로 변경되었다.
// console.log(elems); // HTMLCollection(1) [li.red]

// // 해결방법, 역으로 순회한다
// for (let i = elems.length - 1; i >= 0; i--) {
//   debugger;
//   elems[i].className = "blue";
// }

// // 7. 예제: NodeList
// // querySelectorAll은 DOM 컬렉션 객체인 NodeList를 반환한다.
// const elems = document.querySelectorAll(".red");

// // 출력
// console.log(elems);

// // NodeList 객체는 NodeList.prototype.forEach 메서드를 상속받아 사용할 수 있다.
// elems.forEach((elem) => (elem.className = "blue"));

// 7-1. 예제: NodeList의 childNodes
const ul = document.querySelector("ul");

// childNodes 프로퍼티는 NodeList 객체(live)를 반환한다.
const { childNodes } = ul;
console.log(childNodes instanceof NodeList); // true

// ul 요소의 자식 노드는 공백 텍스트 노드를 포함해 모두 7개다.
console.log(childNodes); // NodeList(5) [text, li, text, li, text, li, text]

for (let i = 0; i < childNodes.length; i++) {
  // removeChild 메서드는 ul 요소의 자식 노드를 DOM에서 삭제한다.
  // removeChild 메서드가 호출될 때마다 NodeList 객체인 childNodes가 실시간으로 변경된다.
  // 따라서 첫 번째, 세 번째, 다섯 번째 요소만 삭제된다.
  ul.removeChild(childNodes[i]);
}

// // 예상과 다르게 ul 요소의 모든 자식 노드가 삭제되지 않는다.
// console.log(childNodes); // NodeList(3) [li, li, li]

// const ul = document.querySelector("ul");
// const { childNodes } = ul;
// console.log("childNodes", childNodes);
// for (c of childNodes) {
//   ul.removeChild(c);
// }
// console.log(childNodes);
